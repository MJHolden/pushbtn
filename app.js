const pushMe = document.querySelector('.pushbtn');

pushMe.addEventListener('click', () => {
    if (!pushMe.classList.contains('push2')) {
        pushMe.classList.add('push2');
        
        
    } else {
        pushMe.classList.remove('push2');
       
    }
});

