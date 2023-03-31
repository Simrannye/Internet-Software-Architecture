let input ="";
let button = document.querySelectorAll('.button');
//  quiery select all this selects all the variable button
Array.from(button).forEach((button)=>{
   
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            input = eval(input);
            document.querySelector('input').value = input
        }
        else if(e.target.innerHTML == 'AC'){
            input = " ";
            document.querySelector('input').value = input
        }
        else{
        console.log(e.target)
        input= input+ e.target.innerHTML;
        document.querySelector('input').value = input ;}
    })
})