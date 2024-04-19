function qisqa(str){
    let arr=[]
    let arr1=str.split(" ")
    for (let i in arr1){
        arr.push(arr1[i].length)
    }
    let min=Math.min(...arr)
    for (let j in arr1){
        if(min==arr1[j].length){
            return arr1[j]
        }
    }
}
console.log(qisqa("vazifa alo darajada bajarilgan"))