const button=document.querySelectorAll(".button")

button.forEach((item)=>{
  //console.log(item)
  item.addEventListener("click", (event)=>{
    switch(event.target.id){
      case "blue":
        document.body.style.backgroundColor='blue';
        break;
      case "grey":
        document.body.style.backgroundColor='grey';
        break;
      case "white":
        document.body.style.backgroundColor='white';
        break;
      case "yellow":
        document.body.style.backgroundColor='yellow';
        break;
      default:
        document.body.style.backgroundColor='purple';
      
    }
  })
})