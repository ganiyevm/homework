function check(arr){
    let arr1=[]
    let sum=0
    for (let i in arr){
        sum+=arr[i]
    }
    let sumstr=String(sum)
    return sumstr.split("")
}
console.log(check([1,22,3]))