/*

Enter the Value of N: 5
*
**
***
****
*****

*/
const prompt = require('prompt-sync')();
const n = prompt('Enter the Value of N:');

for(let i=0;i<n;i++){
    let str = "";
    for(let j=0;j<=i;j++){
        str += "*"; 
    }
    console.log(str);
}