let inputElemnt = document.querySelector(".input")
function tugma(obj){
  let sum = obj.innerText;
  
  if(sum =="="){
    inputElemnt.innerHTML =eval(inputElemnt.innerHTML);
  }else if(sum =="AC"){
    inputElemnt.innerHTML =""
  }else{
    if(inputElemnt.innerHTML=="0"){
      inputElemnt.innerHTML=sum;
    }else{
      inputElemnt.innerHTML+=sum;
    }
  }
  
}