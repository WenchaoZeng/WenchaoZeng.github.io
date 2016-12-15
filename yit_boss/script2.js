var oldWindowOnload = window.onload;
var isScript2Run = false;
window.onload = function() {
    
    if (isScript2Run) {
        return;
    }
    isScript2Run = true;
    
    if (oldWindowOnload) {
        oldWindowOnload();
    }
   
    if (!window.jQuery) {
        return;
    }
    
    if (!document.location.href.match(/boss.*yit.com/g) && !document.location.href.match(/boss.*local.com/g)) {
        return;
    }
    
    // 调整内容高度
    setInterval(function() {
      var ifr = document.getElementById('ifr');
      if (ifr != null) {
        ifr.height = window.innerHeight - 6;
      }
    }, 100);
    
    // 隐藏页头
    $('body').append('<style>.navbar-fixed-top { display: none; } .sidebar, .hide-menu {top:0;} body {padding-top:0;}</style>');
    
    // 开启全部权限
    $('#sidebar>div').attr('style', '');
};
/*
function zwcMax() {
    var height = window.innerHeight - 6;
    $(".modal .modal-dialog").attr('style', 'margin:0;width:100%;height:' + height + "px;");
    $(".modal .modal-dialog .modal-body").attr('style', 'max-height:' + height + "px;");
}
*/
