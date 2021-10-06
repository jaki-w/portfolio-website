console.log('Hi there, thanks for checking out my portfolio site.')

function menuToggle () {
  var x = document.getElementById('myNavtoggle')
  if (x.className === 'navtoggle') {
    x.className += ' responsive'
    $('.topBarSocialIcon').hide()
  } else {
    x.className = 'navtoggle'
    $('.topBarSocialIcon').hide()
  }
};

function bottomMenuToggle () {
  var x = document.getElementById('myBottomNavToggle')
  if (x.className === 'navtoggle') {
    x.className += ' responsive'
    $('#itemName').html('Table of Contents')
  } else {
    x.className = 'navtoggle'
    $('#itemName').html('Table of Contents')
  }
};

function displayItemName (itemName) {
  $('#itemName').html(itemName)
  $('#itemName').show()
};
