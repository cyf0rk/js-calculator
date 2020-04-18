let numbers = $('.numbers div');
let operators = $('.operators div');
let clear = $('#clear');
let equal = $('.equal');

$(numbers)
  .add(operators)
  .add(clear)
  .add(equal)
  .on('mousedown', (el) => {
    if ($(el.target).is('.numbers div')) {
      $(el.target).css('border-color', '#b0b0b0');
      $(el.target).css('box-shadow', '0 1px 1px 0 #000');
    }

    if ($(el.target).is('.operators div')) {
      $(el.target).css('border-color', '#4d4d4d');
      $(el.target).css('box-shadow', '0 1px 1px 0 #000');
    }

    if ($(el.target).is('#clear')) {
      $(el.target).css('border-color', '#9c0000');
      $(el.target).css('box-shadow', '0 1px 1px 0 #000');
    }

    if ($(el.target).is('.equal')) {
      $(el.target).css('border-color', '#dedede');
      $(el.target).css('box-shadow', '0 1px 1px 0 #000');
    }
  });

$(numbers)
  .add(operators)
  .add(clear)
  .add(equal)
  .on('mouseup', (el) => {
    if ($(el.target).is('.numbers div, .operators div')) {
      $(el.target).css('border-color', '#000');
      $(el.target).css('box-shadow', '');
    }

    if ($(el.target).is('#clear')) {
      $(el.target).css('border-color', '#000');
      $(el.target).css('box-shadow', '');
    }

    if ($(el.target).is('.equal')) {
      $(el.target).css('border-color', '#808080');
      $(el.target).css('box-shadow', '');
    }
  });
