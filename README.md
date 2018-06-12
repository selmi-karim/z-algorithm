# Z algorithm (Linear time pattern searching Algorithm)

This algorithm finds all occurrences of a pattern in a text in linear time. Let length of text be n and of pattern be m, then total time taken is O(m + n) with linear space complexity. 

Now we can see that both time and space complexity is same as KMP algorithm but this algorithm is Simpler to understand.
<img src="screenshots/test.gif"  />


## Install

```bash

npm install z-algorithm --save

or 

yarn install z-algorithm

```

# Running the tests

you need to install <a href="https://facebook.github.io/jest/docs/en/22.1/getting-started.html">jest</a> 

```bash

npm test

or 

yarn test

```


# Usage

```js

import z from 'z-algorithm';

let result = z.search('Hello World', 'Hello'); 

```

## Examples

```js

import z from 'z-algorithm';
        

```


# Author

kerim selmi <a href="http://www.karimation.com">karimation</a>
# License

This project is licensed under the  <a href="LICENSE">MIT License</a>
