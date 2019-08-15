const
   textArea = document.querySelector('textarea'),
   butViewMode = document.querySelector('.butViewMode a'),
   butwordCount = document.querySelector('.butwordCount'),
   output = document.querySelector('.output'),
   butChangeFonts = document.querySelector('.butChangeFonts'),
   butStartReading = document.querySelector('.butStartReading'),
   hidden = document.querySelector('.hidden'),
   overlay = document.querySelector('.hidden'),
   butExit = document.querySelector('.butExit'),
   butSort = document.querySelector('.butSort');


let
   arrayAllWords = [],
   sortProp = 'amount';

textArea.oninput = function() {
   butwordCount.removeAttribute("disabled");
}


butViewMode.onclick = () => {
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

   getColorMarkWord();
};


butwordCount.onclick = () => {
   getAmountWords();
   if(textArea.value)
   butwordCount.setAttribute("disabled", "disabled");
}


let i = 1;
butChangeFonts.onclick = () => {
   let fonts = [
      'Mali',
      'Cherry Swash',
      'Alike Angular',
      'HPSimplified_Rg',
   ];
   if (i < fonts.length - 1) {
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


butSort.onclick = function() {
   sortProp === 'amount' ? "name" : 'amount';
   sortWords(sortProp);
}



// function display defferent words
function getAmountWords() {
   let countAllWords = []; //кол-во слов в тексте
   let wordObj = {};
   let set = new Set();
   let str = textArea.value.trim();
   let regexp = /[a-z]+\b/ig;  // Выражение - /\w+/ig; - ищет все слова, в том числе и из цифр. Чтобы цифры отсеить нажно искать так - /[a-z]+/ig;

   // Присваиваем regexp.exec(str) переменной, т.к. любой лишний вызов (даже в console.log) повлияет на полученный результат
   let result;
   while (result = regexp.exec(str)) {
      set.add(result[0].toLowerCase()); // result[0] - первый элемент этого массива - слово (оно нам и нужно)
      countAllWords.push(result[0]); // счет количества слов в тексте
   }

   for (let wordSet of set) {
      var reg = new RegExp("\\b" + wordSet +"\\b", "gi");
      let arrayWord = str.match(reg); // при каждой итерации достаем уникальное слово из Set, находим его количество в тексте и записываем в массив arrayWord

      function Word(name, amount) {
         this.name = name;
         this.amount = amount;
      }

      wordObj = new Word(arrayWord[0], arrayWord.length);
      arrayAllWords.push(wordObj);
   }

   sortWords(sortProp);

   createTable(50);

   showCountWordInText();
   function showCountWordInText() {
      let amountAllWords = document.querySelector('.amountAllWords');
      amountAllWords.innerHTML = `Amount all words: ${countAllWords.length}.`;
   }
}


// Сортировка
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


function createTable(count) {
   const table = document.querySelector('.table');

   arrayAllWords.forEach((i, index) => {
      let tab;
      if (index % count == 0) {
         tab = document.createElement('div');
         tab.innerHTML = `<table></table>`;
         table.appendChild(tab);
      }
      table.lastChild.lastChild.innerHTML += `
      <tr>
         <th>${i.name.toLowerCase()}</th>
         <th>${i.amount}</th>
      </tr>
      `
   })
}


function getColorMarkWord() {
   const word = 'the';

   let regexp = new RegExp("\\b" + word + "\\b", "g");
   output.innerHTML = output.innerHTML.replace(regexp, `<span class="color">${word}</span>`);

   const wordUpper = word.slice(0, 1).toUpperCase() + word.slice(1);
   regexp = new RegExp("\. " + wordUpper + "\\b", "g");
   output.innerHTML = output.innerHTML.replace(regexp, `. <span class="color">${wordUpper}</span>`);
}


