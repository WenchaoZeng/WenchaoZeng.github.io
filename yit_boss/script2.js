function zwcReady() {
    if (!$) {
        setTimeout(zwcReady, 100);
        return;
    }

    alert('Ready');
}

setTimeout(zwcReady, 100);
