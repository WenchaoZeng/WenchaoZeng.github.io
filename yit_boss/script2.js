window.onload = function() {
    
    if (!window.jQuery) {
        return;
    }
    
    if (!document.location.href.match(/boss.*yit.com/g)) {
        return;
    }
    
    /* 调整内容高度 */
    setInterval(function() {
      var ifr = document.getElementById('ifr');
      if (ifr != null) {
        ifr.height = window.innerHeight - 6;
      }
    }, 100);
    
    /* 隐藏页头 */
    $('body').append('<style>.navbar-fixed-top { display: none; } .sidebar, .hide-menu {top:0;} body {padding-top:0;}</style>');
    
    /* 开启全部权限 */
    $('#sidebar>div').attr('style', '');
};
