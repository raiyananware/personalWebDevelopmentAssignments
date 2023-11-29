function check(){
    let number= document.getElementById("number").value
    let num=parseInt(number),num2=0,i,j
    if(number.length==4){
        for(i=0;i<number.length;++i){
            let prod=1
            for(j=0;j<number.length;++j){
                prod*=num%10
            }
            console.log(prod)
            // num2=num2+((num%10)*(num%10)*(num%10)*(num%10))
            num2+=prod
            num=Math.floor(num/10)
        }
        if(num2==parseInt(number)) ans.textContent=(number+" is a Armstrong number")
        else ans.textContent=(number+" is not a Armstrong number")
    }
    else{
        ans.textContent=("Enter only 4 digit number")
    }
}