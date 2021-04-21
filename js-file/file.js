// / if(re < 5){
    //     result.innerHTML(`<span>&#129398;</span> Result = ${re}°celsius <span>&#129398;</span>`)
    // }else if(re > 40){
    //     result.innerHTML(`<span>&#129397;</span> Result = ${re}°celsius <span>&#129397;</span>`)
    // }else{
    //     result.innerHTML(`<span>&#128519;</span> Result = ${re}°celsius <span>&#128519;</span>`)
    // }

let main=()=>{
    let val = document.getElementById('val').value
    let op = document.getElementById('op').value
    let result = document.getElementById('result')

    let re

    let FtoC=(chr)=>{
        let c = Math.round((chr-32)*5/9)
        if(chr <= 10){
            result.innerHTML=(`<span>&#129398;</span> Result = ${c}°celsius <span>&#129398;</span>`) 
        }else if(chr >= 40){
            result.innerHTML =(`<span>&#129397;</span> Result = ${c}°celsius <span>&#129397;</span>`) 
        }else{
            result.innerHTML=(`<span>&#128519;</span> Result = ${c}°celsius <span>&#128519;</span>`)
        }
    }

    let CtoF=(fhr)=>{
        let f = fhr+2
        return f
    }

    if(op=="celsius"){
        re = FtoC(val)
        return re
    }else{
        return CtoF(val)
    }
}