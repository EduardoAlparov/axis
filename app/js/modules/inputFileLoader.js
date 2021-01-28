const backgroundContainer = document.querySelector('#first-inner');
const downloadInput = document.querySelector('.file-input');
const standartPicBlock = document.querySelector('#file-input3');
const standartPicContainer = document.querySelector('#standart-pic-container');
const sublistPicBlock = document.querySelector('#file-input2');
const sublistPicContainer = document.querySelector('#sublist-pic-container');


downloadInput.addEventListener('change', () => {
  setBackgroundImage('input-file', backgroundContainer )
})

standartPicBlock.addEventListener('change', () => {
  setBackgroundImage('file-input3', standartPicContainer)
})

sublistPicBlock.addEventListener('change', () => {
  setBackgroundImage('file-input2', sublistPicContainer)
})



// функция для обработки инпута и установки этого файла на бэкграунд
function setBackgroundImage(id, container){
  let input = document.getElementById(id);
  if (input.files && input.files[0]) {
    const reader = new FileReader();

    reader.onload = function(e) {
      container.style.backgroundImage = 'url(' + e.target.result + ')';

    };

    reader.readAsDataURL(input.files[0]);
  }
}
