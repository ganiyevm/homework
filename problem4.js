function number(str){
    let count=0
    for (let i in str){
        if (str.charCodeAt(i)>47&&str.charCodeAt(i)<58){
            count++
        }
    }return count
}
console.log(number("o0123qwe1239"))