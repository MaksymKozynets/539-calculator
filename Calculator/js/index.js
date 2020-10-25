document.querySelectorAll('.calculator' .digits .button)
   .forEach(button => button. addEventListener('click', digitPressed))
   function digitPressed (ev){
       const btn = ev.target;
       const display = document .querySelector('.display')
       display .velue += btn.innerText;
   }