const
   textArea = document.querySelector('textarea'),
   but = document.querySelector('button a'),
   output = document.querySelector('.output'),
   butChangeFonts = document.querySelector('.butChangeFonts'), 
   butStartReading = document.querySelector('.butStartReading'), 
   hidden = document.querySelector('.hidden'),
   overlay = document.querySelector('.hidden'),
   butExit = document.querySelector('.butExit');



but.onclick = () => {
   textArea.value = textArea.value.replace(/\n/g, '<br>');
   textArea.value = textArea.value.replace(/�/g, '');
   output.innerHTML = textArea.value;  

   overlay.classList.remove('hidden');
   butChangeFonts.classList.remove('hidden');   
   butStartReading.classList.remove('hidden');   

   // console.log( output.getBoundingClientRect().height)
   // console.log(window)
   // element.scrollTop = '1000px';
   // console.log(element.scrollTop)
   getAmountWords();
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

butExit.onclick = function() {
   overlay.classList.add('hidden');
}

function getAmountWords() {
   const amountWord = document.querySelector('.amountWord');
   let set = new Set();
   let str = textArea.value.trim();
   let regexp = /\w+/ig;



   let result;
   // console.log(regexp.exec(str))
   // console.log(regexp.lastIndex)
   // let i = 0;
   while (result = regexp.exec(str)) {
   // while (i < 200) {
      
      // console.log(result.index)
      // result = regexp.exec(str);
      // if (result !== null) {
         
         set.add(result[0].toLowerCase());
      // }
      
      // result = regexp.exec(str);
      // i++;
   }
   // }

   console.log(set)




   // console.log(result[0]);
   // console.log(result.index);
   // console.log(regexp.lastIndex);

   // result = regexp.exec(str);
  
   // console.log(result);
   // console.log(result.index);
   // console.log(regexp.lastIndex);
   // let result = textArea.value.match(/\w+/);

   // console.log(result.index)
   // console.log(textArea.value.match(/\w+/))

   

   
}