class SeatSelection {
    constructor() {
        this.seatContainer = document.querySelector('.seats');
        this.selectedSeats = document.getElementById('selected-seats');
        this.totalPrice = document.getElementById('total-price');
        this.movieTitle = document.getElementById('movie-title');
        this.seatPrice = 100;

        this.selectedSeatNumbers = [];
        this.totalAmount = 0;

        this.initSeatSelection();
    }

    initSeatSelection() {
        const selectedMovie = localStorage.getItem('selectedMovie');
        const selectedDate = localStorage.getItem('selectedDate');
        const selectedTime = localStorage.getItem('selectedTime');

        this.movieTitle.textContent = selectedMovie || 'Film Adı Bulunamadı';
        this.createSeats(6, 10);
    }

    createSeats(rows, cols) {
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                const seat = document.createElement('div');
                seat.classList.add('seat');
                seat.dataset.seat = `${String.fromCharCode(65 + row)}${col + 1}`;
                seat.textContent = `${String.fromCharCode(65 + row)}${col + 1}`;
                seat.addEventListener('click', (event) => this.toggleSeatSelection(event));
                this.seatContainer.appendChild(seat);
            }
        }
    }

    toggleSeatSelection(event) {
        const seat = event.target;
        const seatNumber = seat.dataset.seat;

        if (seat.classList.contains('occupied')) return;

        if (seat.classList.contains('selected')) {
            seat.classList.remove('selected');
            this.selectedSeatNumbers = this.selectedSeatNumbers.filter(num => num !== seatNumber);
            this.totalAmount -= this.seatPrice;
        } else {
            seat.classList.add('selected');
            this.selectedSeatNumbers.push(seatNumber);
            this.totalAmount += this.seatPrice;
        }

        this.updateSummary();
    }

    updateSummary() {
        this.selectedSeats.textContent = 
            this.selectedSeatNumbers.length > 0 ? 
            this.selectedSeatNumbers.join(', ') : 
            '-';
        
        this.totalPrice.textContent = 
            this.totalAmount > 0 ? 
            `${this.totalAmount} TL` : 
            '0 TL';
    }
}

// Koltuk seçimi sayfası için otomatik başlatma
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('movie-title')) {
        new SeatSelection();
    }
});

// Geri gitme fonksiyonu
function goBack() {
    window.history.back();
}