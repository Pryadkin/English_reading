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
   let arrayAllWords = [];
   let wordObj = {};
   let set = new Set();
   let str = textArea.value.trim();
   let regexp = /\w+/ig;



   // Присваиваем regexp.exec(str) переменной, т.к. любой лишний вызов (даже в console.log) повлияет на полученный результат
   let result;
   while (result = regexp.exec(str)) {
      set.add(result[0].toLowerCase());
   }

   for (let wordSet of set) {
      var reg = new RegExp("" + wordSet +"", "gi");
      let arrayWord = str.match(reg);

      function Word(name, amount) {
         this.name = name;
         this.amount = amount;
      }

      let wordObj = new Word(arrayWord[0], arrayWord.length)

      arrayAllWords.push(wordObj);
   }

   function sortWords(prop) {
      arrayAllWords.sort((a, b) => {
         if (isNaN(a[prop])) {
            if (a[prop].toLowerCase() > b[prop].toLowerCase()) {
               return 1;
            } else return -1;
         } else {
            if (a[prop] < b[prop]) {
               return 1;
            } else return -1;
         }
      })
   }
   sortWords('amount');



   console.log(arrayAllWords)


   arrayAllWords.forEach((i) => {
      amountWord.innerHTML += `<li>${i.name.toLowerCase()}(${i.amount})</li>`
   })
}