class MovieSelector {
    constructor() {
        this.initMovieCards();
    }

    initMovieCards() {
        const movieCards = document.querySelectorAll('.movie-card');
        movieCards.forEach(card => {
            card.addEventListener('click', () => this.selectMovie(card));
        });
    }

    selectMovie(card) {
        const selectedMovie = card.dataset.movie;
        const selectedMovieImage = card.querySelector('img').src;

        localStorage.setItem('selectedMovie', selectedMovie);
        localStorage.setItem('selectedMovieImage', selectedMovieImage);

        window.location.href = 'bilet_bilgileri.html';
    }
}

// Ana sayfa için otomatik başlatma
document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.movie-container')) {
        new MovieSelector();
    }
});