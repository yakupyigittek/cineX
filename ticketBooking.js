class TicketBooking {
    constructor() {
        this.selectedMovie = localStorage.getItem('selectedMovie');
        this.selectedMovieImage = localStorage.getItem('selectedMovieImage');
        
        this.initDateTimeSelection();
        this.loadMovieDetails();
    }

    initDateTimeSelection() {
        const dateBtns = document.querySelectorAll('.date-btn');
        const timeBtns = document.querySelectorAll('.time-btn');
        const continueBtn = document.getElementById('continue-button');
        const selectedDateEl = document.getElementById('selected-date');
        const selectedTimeEl = document.getElementById('selected-time');

        if (dateBtns.length > 0) {
            this.setupDateButtons(dateBtns, selectedDateEl);
            this.setupTimeButtons(timeBtns, selectedTimeEl);
            this.setupContinueButton(continueBtn, selectedDateEl, selectedTimeEl);
        }
    }

    setupDateButtons(dateBtns, selectedDateEl) {
        dateBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                dateBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                selectedDateEl.textContent = btn.textContent + ' 2025';
            });
        });
    }

    setupTimeButtons(timeBtns, selectedTimeEl) {
        timeBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                timeBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                selectedTimeEl.textContent = btn.textContent;
            });
        });
    }

    setupContinueButton(continueBtn, selectedDateEl, selectedTimeEl) {
        continueBtn.addEventListener('click', () => {
            localStorage.setItem('selectedDate', selectedDateEl.textContent);
            localStorage.setItem('selectedTime', selectedTimeEl.textContent);
            window.location.href = 'koltuk_ekrani.html';
        });
    }

    loadMovieDetails() {
        if (this.selectedMovie) {
            const movieInfoImage = document.querySelector('.movie-info img');
            const movieInfoTitle = document.querySelector('.movie-details h2');
            const movieDetailsContainer = document.querySelector('.movie-details');

            movieInfoImage.src = this.selectedMovieImage;
            movieInfoTitle.textContent = this.selectedMovie;

            this.updateMovieDetails(this.selectedMovie, movieDetailsContainer);
        }
    }

    updateMovieDetails(movieTitle, movieDetailsContainer) {
        const durationElement = movieDetailsContainer.querySelector('p:first-of-type');
        const genreElement = movieDetailsContainer.querySelector('p:last-of-type');

        const movieDetails = {
            'Deadpool & Wolverine': { duration: '2h 07m', genre: 'Aksiyon' },
            'Kung Fu Panda 4': { duration: '1h 34m', genre: 'Animasyon' },
            'Ters Yüz 2': { duration: '1h 36m', genre: 'Animasyon' },
            'Maymunlar Cehennemi Yeni Krallık': { duration: '2h 25m', genre: 'Bilim Kurgu' },
            'Joker İkili Delilik': { duration: '2h 02m', genre: 'Gerilim' },
            'Çılgın Hırsız 4': { duration: '1h 30m', genre: 'Komedi' }
        };

        const details = movieDetails[movieTitle] || { duration: 'Bilinmiyor', genre: 'Bilinmiyor' };
        
        durationElement.textContent = `Süre: ${details.duration}`;
        genreElement.textContent = `Tür: ${details.genre}`;
    }
}

// Bilet bilgileri sayfası için otomatik başlatma
document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.movie-info')) {
        new TicketBooking();
    }
});