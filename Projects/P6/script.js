let startbtn=document.querySelector("#start")
let stopbtn=document.querySelector("#stop")
let body=document.querySelector("body")
let startMagic

function randomColor(){
  const hex="0123456789ABCDEF"
  let color="#"
  for (let i=0;i<6;i++){
    color+=Math.floor(Math.random()*(15-0+1))+1
  }
  return color
}

function start(){
  startMagic=setInterval(()=>{
    body.style.backgroundColor=randomColor()
    console.log("Hello")
  },500)
    
}

function stop(){
  clearInterval(startMagic)
}

startbtn.addEventListener("click",()=>{
  start()
})
stopbtn.addEventListener("click",()=>{
  stop()
})