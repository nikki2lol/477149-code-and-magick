'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var BAR_WIDTH = 40;
var BAR_SPACE = 50;
var BAR_HEIGHT = 110;
var PREVIEW_HEIGHT = 40;
var GAP = 20;
var SCORE_HEIGHT = 20;
var barFullWidth = BAR_SPACE + GAP + BAR_WIDTH;

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderBars = function (ctx, x, y, name, resultHeight) {
  ctx.fillStyle = name === 'Вы' ? 'rgba(255, 0, 0, 1)' : 'rgba(0, 0, 255, 1)';
  ctx.fillRect(x, y, BAR_WIDTH, resultHeight);
};

var renderText = function (ctx, x, y, text) {
  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000000';
  ctx.fillText(isNaN(text) ? text : Math.round(text), x, y);
};

var renderContent = function (ctx, names, times) {
  renderText(ctx, CLOUD_X + GAP, 40, 'Ура вы победили!');
  renderText(ctx, CLOUD_X + GAP, 60, 'Список результатов:');

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {

    var positionX = CLOUD_X + GAP + barFullWidth * i;
    var positionY = CLOUD_Y + GAP + (PREVIEW_HEIGHT + GAP) + SCORE_HEIGHT + BAR_HEIGHT - times[i] * BAR_HEIGHT / maxTime;

    renderBars(ctx, positionX, positionY + GAP, names[i], times[i] * BAR_HEIGHT / maxTime);
    renderText(ctx, positionX, positionY, names[i]);
    renderText(ctx, positionX, CLOUD_HEIGHT - CLOUD_Y, times[i]);
  }
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + 10, CLOUD_Y + 10, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#ffffff');

  renderContent(ctx, names, times);
};
