window.onload = function() {
    
    alert('Ready');
    
    setInterval(function() {
      var ifr = document.getElementById('ifr');
      if (ifr != null) {
        ifr.height = window.innerHeight - 6;
      }
    }, 100);
    
    $('body').append('<style>.navbar-fixed-top { display: none; } .sidebar, .hide-menu {top:0;} body {padding-top:0;}</style>');
    
};
