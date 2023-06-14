const inputfield=document.getElementById("fname");
const addButton=document.getElementById("btn");
const newTask=document.getElementById("newTask");

addButton.addEventListener('click',()=>{
    if(inputfield.value.trim()==0){
        alert("Please Enter your Task!!");
        console.log("sdfghjkl");
    }else{
        let newItem =document.createElement('div');
     newItem.classList.add('item');
    
     newItem.innerHTML=`
     <div class="btmitem">
         <div>
          <li><h2>${inputfield.value}</h2></li>
         </div>
      
       <div>
       <button class="edit">Edit</button>
              <button class="delete">Delete</button>
       </div>
       </div> 
     
     `

     newTask .appendChild(newItem);
  
     inputfield.value='';
    }
    //console.log(inputfield);
     //delete item part
     //const delet=document.getElementById("delete");
     newTask.addEventListener('click',(e)=>{
      if (e.target.classList.contains('delete')) {
        e.target.parentElement.parentElement.remove();
       }
     })
      // if (e.target.classList.contains('edit')) {
      // const taskTitle = e.target.parentElement.previousElementSibling.querySelector('h2');
      // taskTitle.classList.toggle('completed');
  
  
})