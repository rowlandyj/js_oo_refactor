$(document).ready(function() {
  var newDie = new Die;
  $('#roller button.add').on('click', newDie.addDice);

  $('#roller button.roll').on('click', function() {
    $('.die').each(function(k, die) {
      newDie.roll(); //no clue why () is needed...go bug jeffrey or zee later on during the week.  
      newDie.showValues($(die),newDie.value);
    });
  });
});

function Die() {
  this.value = 0; //sets all new dices to show value of 0...maybe ill take this out later since this isn't necessary
}

// Dice.prototype.value = 0;
Die.prototype.addDice = function() {
  $('.dice').append('<div class="die">0</div>');
};

Die.prototype.roll = function() {
  this.value = Math.floor((Math.random()*6)+1);
};


Die.prototype.showValues = function(element,value) {
  element.text(value);
};





// function blah(name, age) {
//   var dice = {
//     addDice: function() {
//      $('.dice').append('<div class="die">0</div>');
//     }
//   }
//   return dice;
// }

//do this with literals and using a factory function...kinda started it above
