let temp = false;

let inputElemnt = document.querySelector(".input")
function tugma(obj){
  let sum = obj.innerText;
  
  if(sum =="="){
    inputElemnt.innerHTML =eval(inputElemnt.innerHTML);
    temp = false;
  }else if(sum =="AC"){
    inputElemnt.innerHTML =""
    temp = false;
  }else{
    if(inputElemnt.innerHTML == "0"){
      inputElemnt.innerHTML=sum;
    }
    else{
      if(inputElemnt.innerHTML.substring(
        inputElemnt.innerHTML.length - 1, inputElemnt.innerHTML.length
      ) == "+" && sum == "+"){
            temp = true;
      } 
      else if(inputElemnt.innerHTML.substring(
        inputElemnt.innerHTML.length - 1, inputElemnt.innerHTML.length
      ) == "*" && sum == "*"){
         temp =true;
      }
      else if(inputElemnt.innerHTML.substring(
        inputElemnt.innerHTML.length - 1, inputElemnt.innerHTML.length
      ) == "%" && sum == "%"){
         temp =true;
      }
      else if(inputElemnt.innerHTML.substring(
        inputElemnt.innerHTML.length - 1, inputElemnt.innerHTML.length
      ) == "/" && sum == "/"){
         temp =true;
      }
      else if(inputElemnt.innerHTML.substring(
        inputElemnt.innerHTML.length - 1, inputElemnt.innerHTML.length
      ) == "-" && sum == "-"){
         temp =true;
      }
      else if(inputElemnt.innerHTML.substring(
        inputElemnt.innerHTML.length - 1, inputElemnt.innerHTML.length
      ) == "." && sum == "."){
         temp =true;
      }
      
      else{
        temp = false;
      } 

      if(!temp) inputElemnt.innerHTML +=sum;

      
    }
  }
  
}