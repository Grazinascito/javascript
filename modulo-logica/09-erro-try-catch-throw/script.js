// try{
//     console.log(naoExisto)
// }catch(error){
//     console.log(error.message)
// }

// function soma(x, y){
//     if(typeof x !== 'number' || typeof y !== 'number'){
//         throw("não")
//     }
//     return x + y
// }

// console.log(soma(1,"h"))

//try, catch, finally ========>

// O finally é sempre execudado, caso esteja junto ao try catch

try{
    console.log("try")
}catch(error){
    console.log("catch")
}finally{
    console.log("finally")
}

