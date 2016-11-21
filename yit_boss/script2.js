function zwcReady() {
    if (!window.jQuery) {
        setTimeout(zwcReady, 100);
        return;
    }

    window.jQuery.ready(function() {
        
        alert('ready');
        
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
