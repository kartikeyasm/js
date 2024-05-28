setInterval(()=>{
    const currentTime=new Date()
    document.querySelector("#clock").innerHTML=currentTime.toLocaleTimeString("en-US")
  },1000)  