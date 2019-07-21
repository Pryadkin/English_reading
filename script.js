textArea = document.querySelector('textarea');
but = document.querySelector('button a');
output = document.querySelector('.output');
butChangeFonts = document.querySelector('.butChangeFonts');
hidden = document.querySelector('.hidden');

but.onclick = () => {
   textArea.value = textArea.value.replace(/\n/g, '<br>');
   textArea.value = textArea.value.replace(/�/g, '');
   output.innerHTML = textArea.value;  

   butChangeFonts.classList.remove('hidden');   
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

