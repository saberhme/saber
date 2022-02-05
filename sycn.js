const {readFileSync , writeFileSync} = require('fs');


const text1 = readFileSync('./content/files/text1.txt','utf8');

const text2 = readFileSync('./content/files/text2.txt','utf8');


writeFileSync('./content/files/text3.txt',`here is the result ${text1},${text2}`,
{flag:'a+'}


)

