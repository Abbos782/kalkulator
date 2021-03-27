  let ekranElement  = document.querySelector(".input")

let ValueElement = document.querySelectorAll('td')
let array = []
document.querySelectorAll('td').forEach(function(td){
  td.addEventListener('click',function(e){
   
     let qiymat = e.target.innerText;
     array.push(qiymat)
     console.log(array)
     if(qiymat == "AC"){
         ekranElement.value =""
     }else if(qiymat == "="){
         ekranElement.value = eval(ekranElement.value)

     }else if(qiymat =="+"){
      for(let i = 0; i<array.length; i++){
        console.log(array[i-1])
        if(array[i] !== array[i-1]){
          ekranElement.value  +=qiymat
          break
        }
      }
     
     }
     else{
        ekranElement.value  += qiymat
       

     }
     
      

  
     
  })
})