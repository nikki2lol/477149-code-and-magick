'use strict';

// ДАНО
var firstNames = 'Иван, Хуан Себастьян, Мария, Кристоф, Виктор, Юлия, Люпита, Вашингтон';
var secondNames = 'да Марья, Верон, Мирабелла, Вальц, Онопко, Топольницкая, Нионго, Ирвинг';
// var coatColor = 'rgb(101, 137, 164), rgb(241, 43, 107), rgb(146, 100, 161), rgb(56, 159, 117), rgb(215, 210, 55), rgb(0, 0, 0)';
var eyesColor = 'black, red, blue, yellow, green';

// Показываю блок и копирую шаблон
document.querySelector('.setup').classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

// Функция для создания массива из строки
var generateArray = function (customStroke) {
  var customArray = customStroke.split(', ');

  // if (customStroke = coatColor) {
  //   var customArray = customStroke.split('), ');
  // } else {
  //   var customArray = customStroke.split(', ');
  // }

  return customArray;
};

//  Само превращение строк в массивы
var firstNameArray = generateArray(firstNames);
var secondNameArray = generateArray(secondNames);
// var coatColorArray = generateArray(coatColor);
var eyesColorArray = generateArray(eyesColor);


//  Создаю массив с рандомными именами (допустим мне их надо 4)
var wizardNames = [];
var generateRandomNames = function () {
  for (var i = 0; i < 4; i++) {
    var fullName = firstNameArray[Math.floor(Math.random() * firstNameArray.length)] + ' ' + secondNameArray[Math.floor(Math.random() * secondNameArray.length)];
    wizardNames.push(fullName);
  }
};
generateRandomNames();

//  Создам объект с волшебниками
var wizards = [];

for (var i = 0; i < 4; i++) {
  wizards.push(wizards[i].name = wizardNames[i]);
  wizards.push(eyesColor[i].eyes = eyesColorArray(Math.floor(Math.random() * eyesColorArray.length)));
}

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-eyes').fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var k = 0; k < wizards.length; k++) {
  fragment.appendChild(renderWizard(wizards[k]));
}

similarListElement.appendChild(fragment);
