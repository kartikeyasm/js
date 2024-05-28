const form= document.querySelector('form')
form.addEventListener("submit",(event)=>{
  event.preventDefault()   //It will prevent form from get/post values into url/db so that we can extract them here
  let height=parseInt(document.querySelector("#height").value)
  height/=100
  const weight=parseInt(document.querySelector("#weight").value)
  const result=document.querySelector("#results")

  const bmi=(weight/height/height).toFixed(2)
  if (height==='' || height<0 || isNaN(height)){
    result.innerHTML="Please enter valid height"
  }
  if (weight==='' || weight<0 || isNaN(weight)){
    result.innerHTML="Please enter valid weight"
  }
  result.innerHTML=bmi;
  if (bmi<18.5){
    document.querySelector("#uw").style.backgroundColor="red";
    document.querySelector("#uw").style.color="white";
    //result.innerHTML="Underweight"
  }
  else if (bmi>24.9){
    document.querySelector("#ow").style.backgroundColor="red";
    document.querySelector("#ow").style.color="white";
    //result.innerHTML="Overweight"
  }
  else{
    document.querySelector("#nw").style.backgroundColor="green";
    //result.innerHTML="Normal"
  }
})