/*
 * @Author: kerim selmi 
 * @Date: 2018-06-12 12:05:03 
 * @Last Modified by: kerim selmi
 * @Last Modified time: 2018-06-12 16:37:39
 */
const z = require('./index');


/** Comparing 2 exact same strings returns 1 */
test('matching two equal strings', () => {
    expect(z.search('hello world', 'hello')).toEqual([0]);
});
