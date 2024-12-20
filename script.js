document.querySelectorAll('.book').forEach(book => {

    

    book.addEventListener('touchstart', () => {
        book.classList.add('touch');
        
        audio.play();
    });

    book.addEventListener('touchend', () => {
        book.classList.remove('touch');
       
        currentTime = 0; // Reinicia a música
    });
});