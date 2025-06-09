
document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('start-video-link');
    var iframe = document.querySelector('iframe[src*="youtube.com/embed"]');
    link.addEventListener('click', function(e) {
        e.preventDefault();
        if (iframe) {
            var src = iframe.src;
            if (!src.includes('autoplay=1')) {
                if (src.includes('?')) {
                    src += '&autoplay=1';
                } else {
                    src += '?autoplay=1';
                }
                iframe.src = src;
            } else {
                // Si autoplay està activat, reinicia el vídeo
                iframe.src = src;
            }
        }
    });
});
							