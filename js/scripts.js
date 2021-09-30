console.log("Hi there, thanks for checking out my portfolio site.");

function menuToggle() {
  var x = document.getElementById('myNavtoggle');
  if (x.className === 'navtoggle') {
    x.className += ' responsive';
  } else {
    x.className = 'navtoggle';
  }
};

function bottomMenuToggle() {
  var x = document.getElementById('myBottomNavToggle');
  if (x.className === 'navtoggle') {
    x.className += ' responsive';
    $("#itemName").hide();
  } else {
    x.className = 'navtoggle';
    $("#itemName").hide();
  }
};

function displayItemName(itemName) {
  $("#itemName").html(itemName);
  $("#itemName").show();
};
