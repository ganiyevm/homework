function getLevel(n){
    let arr=[]
    for (let i=1;i<=n;i++){
        arr.push(2**i)
    }
    return arr
}
console.log(getLevel(5))