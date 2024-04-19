function a_ni_sana(str){
    let a=str.split(" ")//agar hamma a larni hisoblamoqchi bosez split ichiga "" shuni bervorsez ishliydi 
    let count_a=0
    for (let i in a){
        if(a[i].includes("a")){
            count_a++
        }
    }return count_a
}
console.log(a_ni_sana("ustoz bu faqat sozlardan tashkil topgan gap ichida qatnashgan sozda a qatnashgan stringalr nechtaligini saniydi "))