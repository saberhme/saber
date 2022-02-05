const {readFile , writeFile} = require('fs');


readFile('./content/files/text1.txt','utf8',(err, result)=>{

    if(err){
        console.log(err.message);
        return;

    }
    const text1 = result;

    readFile('./content/files/text2.txt','utf8',(err,result)=>{
        if(err){
            console.log(err.message);
            return;
        }
        const text2 = result

        writeFile('./content/files/hello.txt',(err, result)=>{
            if(err){
                console.log(err.message);
                return;
            }
            const hi = result
            console.log(hi);

        })

    })

})