setInterval(function() {
  var ifr = document.getElementById('ifr');
  if (ifr != null) {
    ifr.height = window.innerHeight - 6;
  }
}, 100);