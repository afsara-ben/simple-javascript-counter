const value = document.querySelector('#value');
const buttons = document.querySelectorAll('.btn');
let count = 0;

buttons.forEach( function(btn) {
    
    // evenhandler - callback function
    
    btn.addEventListener('click', function(item){
      
        const type_of_btn = item.currentTarget.classList;

        if(type_of_btn.contains('decrease'))
        {
            count--;
        }
        else if(type_of_btn.contains('increase'))
        {
            count++;
        }
        else
        {
            count = 0;
        }

        //change color upon increase,decrease,reset
        if(count>0) {
            value.style.color = "blue";
        } 
        else if(count<0)
        {
            value.style.color = "red";
        }
        else{
            
        }
        

      value.textContent = count;

      
       
   
})
 

});