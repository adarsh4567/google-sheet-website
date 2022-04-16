const scriptURL = 'https://script.google.com/macros/s/AKfycbzq4oqaR8W1rFttHmvb_CA2j_KPQDKp0L2u6C6vFFclK_mxNjf5G2UVKG-8P5m523Na/exec'
        const form = document.forms['google-sheet']
        const btn = document.querySelector(".btn")
        const display = document.querySelector("#display");
        
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Data has been stored"))
    .catch(error => console.error('Error!', error.message))
})

btn.addEventListener("click",(e)=>{
   e.preventDefault();
   let val = document.forms['myForm']['fname'].value;
  
    let info;
   fetch('https://sheet.best/api/sheets/b4f5b4de-a672-4260-b0cd-7ef363b12f21')
   .then(response => response.json())
   .then(data => {
    //  console.log(data);
     info = data.find((o)=>o.Firstname === val)
     if(info){
      display.innerHTML = info.Lastname;
     }else{
       alert('User not found in the database');
     }
     
    })
  
   
    
})
