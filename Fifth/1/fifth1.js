function calpac()
{
    var number=parseInt(document.getElementById("userEnteredNumber").value)
    console.log(number)
    let num=1,i
    for(i=number;i>0;--i){
        num*=i
    }
    factNumber.textContent =num;
    console.log(num)
}