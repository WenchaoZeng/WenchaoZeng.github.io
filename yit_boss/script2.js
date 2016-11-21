function zwcReady() {
    if (typeof jQuery == 'undefined') {
        setTimeout(zwcReady, 100);
        return;
    }

    $(function() {
        
        /* 去掉页头 */
        setInterval(function() {
          var ifr = document.getElementById('ifr');
          if (ifr != null) {
            ifr.height = window.innerHeight - 6;
          }
        }, 100);
        
        
    });
}

setTimeout(zwcReady, 100);
