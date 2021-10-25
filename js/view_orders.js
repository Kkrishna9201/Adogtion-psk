axios({
    method: 'get',
    url: 'https://jkyq6u0lf8.execute-api.us-east-1.amazonaws.com/dev/psk-orgzn-resource',
    headers: {
        "content-type": "application/json",
    },
    data: {
        "token": localStorage.getItem('IdToken'),
        
    }
}).then(res => {
    order_data = res.data.order_data
    var i = 0;
    let div = document.getElementById('dynamic-div');
    while (i < order_data.length) {
      
        div.innerHTML +=



            `
    <div class="lg:w-1/4 md:w-1/2 p-4 w-full" style="border: 0.5px solid grey; margin: 20px; border-radius: 30px; display:flex" onMouseOver="this.style.backgroundColor='#B2BABB'"
        onMouseOut="this.style.backgroundColor='white'">

<div style="display:flex;flex-direction:column;flex:1">


  <div class="mt-2 block relative h-48 rounded overflow-hidden" style="flex:1">     



       <img src = "${order_data[i][5]}" width="200" height="200"> 
</div>
<div style="padding:1rem 2.8rem">

  <a href="adopter.html"> <button style=" background-color: #8E44AD;
  color: black;
  border: 2px solid #6C3483;border-radius: 8px;box-shadow: 3px 3px 8px 0 #000"> BOOK NOW! </button></a>

</div>



</div>




    <div  style="flex:2">
     
<div>

        <h3 class="text-gray-900 title-font text-lg font-medium" style="font-family:cursive">Dog ID: ${order_data[i][6]}</h3>
        <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1" style="font-family:cursive">Organization: ${order_data[i][0]}</h3>
        <h3 class="text-gray-900 title-font text-lg font-medium" style="font-family:cursive">Location: ${order_data[i][1]}</h3>
        <h3 class="text-gray-900 title-font text-lg font-medium" style="font-family:cursive">Email: ${order_data[i][2]}</h3>
        <h3 class="text-gray-900 title-font text-lg font-medium" style="font-family:cursive">Contact: ${order_data[i][3]}</h3>
        <h3 class="text-gray-900 title-font text-lg font-medium" style="font-family:cursive">Breed: ${order_data[i][4]}</h3>
        
</div>
      
</div>
          
    </div>
  `

        i++
    }
    div.innerHTML += `</div>`
    
}).catch(err => {
    
})
