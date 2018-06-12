/*
 * @Author: kerim selmi 
 * @Date: 2018-06-12 12:05:03 
 * @Last Modified by: kerim selmi
 * @Last Modified time: 2018-06-12 12:07:23
 */

/**
 * A JavaScript program that implements Z algorithm for pattern searching
 */


//Fills Z array for given string str[]
let getZarr = (str, Z) => {

    let n = str.length;

    // [L,R] make a window which matches with 
    // prefix of s
    let L = 0, R = 0;

    for (let i = 1; i < n; ++i) {

        // if i>R nothing matches so we will calculate.
        // Z[i] using naive way.
        if (i > R) {

            L = R = i;

            // R-L = 0 in starting, so it will start
            // checking from 0'th index

            while (R < n && str.charAt(R - L) == str.charAt(R))
                R++;

            Z[i] = R - L;
            R--;

        }
        else {

            // k = i-L so k corresponds to number which
            // matches in [L,R] interval.
            let k = i - L;

            // if Z[k] is less than remaining interval
            // then Z[i] will be equal to Z[k].
            if (Z[k] < R - i + 1)
                Z[i] = Z[k];

            else {


                // else start from R and check manually
                L = i;
                while (R < n && str.charAt(R - L) == str.charAt(R))
                    R++;

                Z[i] = R - L;
                R--;
            }
        }
    }
}

//  prints all occurrences of pattern in text using Z algo
const search = (text, pattern) => {

    // Create concatenated string "P$T"
    let concat = pattern + "$" + text;

    let l = concat.length;

    let Z = []
    let result = []

    // Construct Z array
    getZarr(concat, Z);

    // now looping through Z array for matching condition
    for (let i = 0; i < l; ++i) {

        // if Z[i] (matched region) is equal to pattern
        // length we got the pattern
        //console.log(Z[i]+" "+pattern.length)
        if (Z[i] == pattern.length) {
            result.push((i - pattern.length - 1))
            console.log("Pattern found at index "
                + (i - pattern.length - 1));
        }
    }
    return result
}
console.log(search('aaafqf', 'a'))