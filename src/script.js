//Bilet bilgileri script kodu
if (window.location.pathname === '/bilet-bilgileri.html') {
    const dateBtns = document.querySelectorAll('.date-btn');
        const timeBtns = document.querySelectorAll('.time-btn');
        const continueBtn = document.getElementById('continue-button');
        const selectedDateEl = document.getElementById('selected-date');
        const selectedTimeEl = document.getElementById('selected-time');

        dateBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                dateBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                selectedDateEl.textContent = btn.textContent + ' 2025';
            });
        });

        timeBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                timeBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                selectedTimeEl.textContent = btn.textContent;
            });
        });

        continueBtn.addEventListener('click', () => {
            window.location.href = 'koltuk_ekrani.html';
        });
  }

// Ana sayfadan filme tıklandığında çalışır
document.querySelectorAll('.movie-card').forEach(card => {
    card.addEventListener('click', function() {
        const selectedMovie = this.dataset.movie;
        const selectedMovieImage = this.querySelector('img').src;

        // Seçilen filmi ve görselini localStorage'a kaydet
        localStorage.setItem('selectedMovie', selectedMovie);
        localStorage.setItem('selectedMovieImage', selectedMovieImage);

        // Bilet bilgileri sayfasına yönlendir
        window.location.href = 'bilet_bilgileri.html';
    });
});

// Bilet bilgileri sayfasında kontrol
if (document.querySelector('.movie-info')) {
    const selectedMovie = localStorage.getItem('selectedMovie');
    const selectedMovieImage = localStorage.getItem('selectedMovieImage');
    const movieInfoImage = document.querySelector('.movie-info img');
    const movieInfoTitle = document.querySelector('.movie-details h2');
    const movieDetailsContainer = document.querySelector('.movie-details');

    if (selectedMovie && selectedMovieImage) {
        // Seçilen film bilgilerini sayfaya yükle
        movieInfoImage.src = selectedMovieImage;
        movieInfoTitle.textContent = selectedMovie;

        // Film detaylarını güncelle
        const durationElement = movieDetailsContainer.querySelector('p:first-of-type');
        const genreElement = movieDetailsContainer.querySelector('p:last-of-type');

        switch (selectedMovie) {
            case 'Deadpool & Wolverine':
                durationElement.textContent = 'Süre: 2h 07m';
                genreElement.textContent = 'Tür: Aksiyon';
                break;
            case 'Kung Fu Panda 4':
                durationElement.textContent = 'Süre: 1h 34m';
                genreElement.textContent = 'Tür: Animasyon';
                break;
            case 'Ters Yüz 2':
                durationElement.textContent = 'Süre: 1h 36m';
                genreElement.textContent = 'Tür: Animasyon';
                break;
            case 'Maymunlar Cehennemi Yeni Krallık':
                durationElement.textContent = 'Süre: 2h 25m';
                genreElement.textContent = 'Tür: Bilim Kurgu';
                break;
            case 'Joker İkili Delilik':
                durationElement.textContent = 'Süre: 2h 02m';
                genreElement.textContent = 'Tür: Gerilim';
                break;
            case 'Çılgın Hırsız 4':
                durationElement.textContent = 'Süre: 1h 30m';
                genreElement.textContent = 'Tür: Komedi';
                break;
            default:
                durationElement.textContent = 'Süre: Bilinmiyor';
                genreElement.textContent = 'Tür: Bilinmiyor';
        }
    }
}

function updateMovieDetails(movieTitle) {
    const movieDetailsContainer = document.querySelector('.movie-details');
    
    if (!movieDetailsContainer) {
        console.error("Film detayları konteyner bulunamadı!");
        return;
    }
    
    const durationElement = movieDetailsContainer.querySelector('p:first-of-type');
    const genreElement = movieDetailsContainer.querySelector('p:last-of-type');
    const movieImage = document.querySelector('.movie-info img');
    const movieTitleElement = document.querySelector('.movie-details h2');
    
    console.log("Film Başlığı:", movieTitle);
    
    switch(movieTitle) {
        case 'Deadpool & Wolverine':
            durationElement.textContent = 'Süre: 2h 07m';
            genreElement.textContent = 'Tür: Aksiyon';
            movieImage.src = '/images/Deadpool_Wolverine 1.png';
            movieTitleElement.textContent = 'Deadpool & Wolverine';
            break;
        case 'Kung Fu Panda 4':
            durationElement.textContent = 'Süre: 1h 34m';
            genreElement.textContent = 'Tür: Animasyon';
            movieImage.src = '/images/Kung_Fu_Panda_4 1.png';
            movieTitleElement.textContent = 'Kung Fu Panda 4';
            break;
        case 'Ters Yüz 2':
            durationElement.textContent = 'Süre: 1h 36m';
            genreElement.textContent = 'Tür: Animasyon';
            movieImage.src = '/images/Ters_Yüz_2 1.png';
            movieTitleElement.textContent = 'Ters Yüz 2';
            break;
        case 'Maymunlar Cehennemi Yeni Krallık':
            durationElement.textContent = 'Süre: 2h 25m';
            genreElement.textContent = 'Tür: Bilim Kurgu';
            movieImage.src = '/images/Maymunlar_Cehennemi_Yeni_Krallık 1.png';
            movieTitleElement.textContent = 'Maymunlar Cehennemi Yeni Krallık';
            break;
        case 'Joker İkili Delilik':
            durationElement.textContent = 'Süre: 2h 02m';
            genreElement.textContent = 'Tür: Gerilim';
            movieImage.src = '/images/Joker_İkili_Delilik_film_afişi 1.png';
            movieTitleElement.textContent = 'Joker İkili Delilik';
            break;
        case 'Çılgın Hırsız 4':
            durationElement.textContent = 'Süre: 1h 45m';
            genreElement.textContent = 'Tür: Animasyon';
            movieImage.src = '/images/Çılgın_Hırsız_4_afiş 1.png';
            movieTitleElement.textContent = 'Çılgın Hırsız 4';
            break;
        default:
            console.error("Bilinmeyen film:", movieTitle);
            durationElement.textContent = 'Süre: Bilinmiyor';
            genreElement.textContent = 'Tür: Bilinmiyor';
            movieImage.src = '/images/placeholder.png';
            movieTitleElement.textContent = 'Film Adı Bulunamadı';
    }
}

const dateBtns = document.querySelectorAll('.date-btn');
const timeBtns = document.querySelectorAll('.time-btn');
const continueBtn = document.getElementById('continue-button');
const selectedDateEl = document.getElementById('selected-date');
const selectedTimeEl = document.getElementById('selected-time');

if (dateBtns.length > 0) {
    dateBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            dateBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedDateEl.textContent = btn.textContent + ' 2025';
        });
    });

    timeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            timeBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedTimeEl.textContent = btn.textContent;
        });
    });

    continueBtn.addEventListener('click', () => {

        localStorage.setItem('selectedDate', selectedDateEl.textContent);
        localStorage.setItem('selectedTime', selectedTimeEl.textContent);
        window.location.href = 'koltuk_ekrani.html';
    });
}

if (document.getElementById('movie-title')) {
    const seatContainer = document.querySelector('.seats');
    const selectedSeats = document.getElementById('selected-seats');
    const totalPrice = document.getElementById('total-price');
    const movieTitle = document.getElementById('movie-title');
    const seatPrice = 100;

    let selectedSeatNumbers = [];
    let totalAmount = 0;

    window.addEventListener('load', () => {
        const selectedMovie = localStorage.getItem('selectedMovie');
        const selectedMovieImage = localStorage.getItem('selectedMovieImage');
        const selectedDate = localStorage.getItem('selectedDate');
        const selectedTime = localStorage.getItem('selectedTime');

        movieTitle.textContent = selectedMovie || 'Film Adı Bulunamadı';
    });

    function createSeats(rows, cols) {
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                const seat = document.createElement('div');
                seat.classList.add('seat');
                seat.dataset.seat = `${String.fromCharCode(65 + row)}${col + 1}`;
                seat.textContent = `${String.fromCharCode(65 + row)}${col + 1}`;
                seat.addEventListener('click', toggleSeatSelection);
                seatContainer.appendChild(seat);
            }
        }
    }

    function toggleSeatSelection(event) {
        const seat = event.target;
        const seatNumber = seat.dataset.seat;

        if (seat.classList.contains('occupied')) return;

        if (seat.classList.contains('selected')) {
            seat.classList.remove('selected');
            selectedSeatNumbers = selectedSeatNumbers.filter(num => num !== seatNumber);
            totalAmount -= seatPrice;
        } else {
            seat.classList.add('selected');
            selectedSeatNumbers.push(seatNumber);
            totalAmount += seatPrice;
        }

        updateSummary();
    }

    function updateSummary() {
        selectedSeats.textContent = selectedSeatNumbers.length > 0 ? selectedSeatNumbers.join(', ') : '-';
        totalPrice.textContent = totalAmount > 0 ? `${totalAmount} TL` : '0 TL';
    }

    function goBack() {
        window.location.href = 'bilet_bilgileri.html';
    }

    createSeats(6, 10);
}

function goBack() {
    window.history.back();
}