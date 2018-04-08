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
  for ( var i = 0; i < arr.length; i++) {
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
  if (name === 'Вы') {
    ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  } else {
    ctx.fillStyle = 'rgba(0, 0, 255, 1)';
  }
  ctx.fillRect(x, y, BAR_WIDTH, resultHeight);
}

var renderNames = function (ctx, x, y, name) {
  ctx.fillStyle = '#000000';
  ctx.fillText(name, x, y);
}

var renderTimes = function (ctx, x, y, time) {
  var timeBeatiful = Math.round(time);
  ctx.fillStyle = '#000000';
  ctx.fillText(timeBeatiful, x, y);
}

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + 10, CLOUD_Y + 10, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#ffffff');

  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000000';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP, 40);
  ctx.fillText('Список результатов:', CLOUD_X + GAP, 60);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    renderBars(ctx, CLOUD_X + GAP + barFullWidth * i, CLOUD_Y + GAP + (PREVIEW_HEIGHT + GAP) + SCORE_HEIGHT + BAR_HEIGHT - times[i] * BAR_HEIGHT / maxTime + GAP, names[i], times[i] * BAR_HEIGHT / maxTime);
    renderNames(ctx, CLOUD_X + GAP + barFullWidth * i, CLOUD_Y + GAP + (PREVIEW_HEIGHT + GAP) + SCORE_HEIGHT + BAR_HEIGHT - times[i] *  BAR_HEIGHT / maxTime, names[i]);
    renderTimes(ctx, CLOUD_X + GAP + barFullWidth * i, CLOUD_HEIGHT - CLOUD_Y, times[i]);
  }
  // не стал добавлять в тело цикла на нахождение максимального элемента, т.к. в демке было сказано, что мы будем его использовать в будущем, поэтому было бы неплохо не захламлять его сторонними значениями
  // for (var k = 0; k < times.length; k++) {
  //   times[k] = Math.round(times[k]);
  // }
  //
  // for (var i = 0; i < names.length; i++) {
  //   if (names[i] === 'Вы') {
  //     ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  //   } else {
  //     ctx.fillStyle = 'rgba(0, 0, 255, 1)';
  //   }
  //   ctx.fillRect(CLOUD_X + GAP + barFullWidth * i, CLOUD_Y + GAP + (PREVIEW_HEIGHT + GAP) + SCORE_HEIGHT + BAR_HEIGHT - times[i] * prop, BAR_WIDTH, times[i] * prop);
  //
  //   ctx.fillStyle = '#000000';
  //   ctx.fillText(names[i], CLOUD_X + GAP + barFullWidth * i, CLOUD_HEIGHT - GAP);
  //   ctx.fillText(times[i], CLOUD_X + GAP + barFullWidth * i, CLOUD_Y + GAP + (PREVIEW_HEIGHT + GAP) + BAR_HEIGHT - times[i] * prop);
  // }
};
