  let ekranElement  = document.querySelector(".input")

let ValueElement = document.querySelectorAll('td')

document.querySelectorAll('td').forEach(function(td){
  td.addEventListener('click',function(e){
   
     let qiymat = e.target.innerText;
     
    
     if(qiymat == "AC"){
         ekranElement.value =""
     }else if(qiymat == "="){
         ekranElement.value = eval(ekranElement.value)

     }
     else{
        ekranElement.value  += qiymat
      }
     
      

  
     
  })
})