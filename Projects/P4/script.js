const form=document.querySelector('form')
let remaining=parseInt(document.querySelector(".lastResult").innerText)
console.log(remaining)
let guess=0
while(remaining>0){
  form.addEventListener("submit",(event)=>{
    event.preventDefault()
    guess=parseInt(document.querySelector("#guessField").value)
  })
  const random=Math.floor((Math.random()*(100-1+1))+1)
  document.querySelector(".guesses").innerHTML=guess
  if(guess===random){
      document.querySelector(".lowOrHi").innerHTML="<h1>You Won</h1>"
      remaining=10
    }
    else{
      remaining--
    }
  
  document.querySelector(".lowOrHi").innerHTML="<h1>You Lost</h1>"
}