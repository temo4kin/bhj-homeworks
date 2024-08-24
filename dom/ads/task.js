const spans = [...document.querySelectorAll('.rotator__case')];

function rotateSpans(spans) {
    for (let i = 0; i < spans.length; i++) {
        
        if (spans[i].classList.contains('rotator__case_active')) {
            spans[i].classList.remove('rotator__case_active');
            nextSpan = spans[i].nextElementSibling;
            if (!nextSpan) {
                spans[0].classList.add('rotator__case_active');
            } else {
                nextSpan.classList.add('rotator__case_active');
                break;
            }
            
            
            
        }
    }
}

let interval = setInterval(() => {
    rotateSpans(spans);
}, 1000);

setTimeout(() => { clearInterval(interval) }, 10000);