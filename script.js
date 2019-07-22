textArea = document.querySelector('textarea');
but = document.querySelector('button a');
output = document.querySelector('.output');
butChangeFonts = document.querySelector('.butChangeFonts'); 
butStartReading = document.querySelector('.butStartReading'); 
hidden = document.querySelector('.hidden');
overlay = document.querySelector('.hidden');


but.onclick = () => {
   textArea.value = textArea.value.replace(/\n/g, '<br>');
   textArea.value = textArea.value.replace(/�/g, '');
   output.innerHTML = textArea.value;  

   overlay.classList.remove('hidden');   
   butChangeFonts.classList.remove('hidden');   
   butStartReading.classList.remove('hidden');   

   console.log( output.getBoundingClientRect().height)
   console.log(window)
   // element.scrollTop = '1000px';
   // console.log(element.scrollTop)
};

let i = 1;
butChangeFonts.onclick = () => {   
   let fonts = [
      'Mali',
      'Cherry Swash',
      'Alike Angular',      
   ];
   if (i < fonts.length) {
      i++;         
   } else i = 0;
   output.style.fontFamily = fonts[i]; 
}


let step = 0;
butStartReading.onclick = function move() { 
   step += 0.3;
   
   window.scrollTo({
      top: step,
      behavior: 'auto'
   });

   if (step < 5000) requestAnimationFrame(move);   
}
