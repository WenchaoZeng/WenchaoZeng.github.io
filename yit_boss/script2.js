function zwcReady() {
    if (!$) {
        setTimeout(zwcReady, 100);
        return;
    }

    $(function() {
        alert('Dom Ready');
    });
}

setTimeout(zwcReady, 100);
