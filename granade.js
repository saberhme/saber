const num1 = 3
const num2 = 15


function totalValue(){
    console.log(`the tolal value is ${num1 + num2} .`);
}


totalValue()


function saber(){
    setInterval(() => {
     console.log('remind every 1 second');   
    }, 1000);
}

saber()