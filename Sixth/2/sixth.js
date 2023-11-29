async function getRates(base) {
 let response= new Promise((resolve)=>fetch(`https://api.exchangerate-api.com/v4/latest/${base}`).then((res) => {
    resolve(res.json());
  })
  )
  return response
}
 async function fet(){
    let from=document.getElementById("from").value
    let to=document.getElementById("to").value
    let fromNumber= document.getElementById("fromNumber").value
    let rates = await getRates(from)
    document.getElementById("ans").textContent= rates.rates[to]*fromNumber
}