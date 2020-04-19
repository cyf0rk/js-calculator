// jQuery DOM selector for easier read and use in the code
const buttons = $('.numbers div')
  .add('.operators div')
  .add('#clear')
  .add('.equal');

// jQuery on mousedown function will make buttons appear as clicked, switch statement for easier read
$(buttons).on('mousedown', (el) => {
  // Checks which DOM element is clicked (true) and changes css properties for that element
  switch (true) {
    case $(el.target).is('.numbers div'):
      $(el.target).css('border-color', '#b0b0b0');
      $(el.target).css('box-shadow', '0 1px 1px 0 #000');
      break;
    case $(el.target).is('.operators div'):
      $(el.target).css('border-color', '#4d4d4d');
      $(el.target).css('box-shadow', '0 1px 1px 0 #000');
      break;
    case $(el.target).is('#clear'):
      $(el.target).css('border-color', '#9c0000');
      $(el.target).css('box-shadow', '0 1px 1px 0 #000');
      break;
    case $(el.target).is('.equal'):
      $(el.target).css('border-color', '#dedede');
      $(el.target).css('box-shadow', '0 1px 1px 0 #000');
      break;
  }
});

// jQuery on mouseup function will make button appear as released after click
$(buttons).on('mouseup', (el) => {
  // Checks which DOM element is clicked (true) and changes css properties for that element
  switch (true) {
    case $(el.target).is('.numbers div, .operators div'):
      $(el.target).css('border-color', '#000');
      $(el.target).css('box-shadow', '');
      break;
    case $(el.target).is('#clear'):
      $(el.target).css('border-color', '#000');
      $(el.target).css('box-shadow', '');
      break;
    case $(el.target).is('.equal'):
      $(el.target).css('border-color', '#808080');
      $(el.target).css('box-shadow', '');
      break;
  }
});
