class GraduationCountdown {
    constructor(graduationDate) {
        this.graduationDate = new Date(graduationDate);
        this.startDate = new Date('2023-10-15T00:00:00');
        this.image = {
            before: "./assets/elliot.webp",
            after: "./assets/elliot_happy.webp",
        }
    }

    init() {
        this.updateCountdown();
        setInterval(() => this.updateCountdown(), 1000);
    }

    updateCountdown() {
        const currentDate = new Date();
        const timeRemaining = this.graduationDate - currentDate;

        const imageElement = document.getElementById('dynamicImage');

        if (timeRemaining <= 0) {
            imageElement.src = this.image.after;
            document.getElementById('message').textContent = 'A lili cantou! 🎉🎇';
            document.getElementById('countdown').textContent = 
                `No dia ${this.graduationDate.getDate()}/${this.graduationDate.getMonth() + 1}/${this.graduationDate.getFullYear()}`;
            document.getElementById('progressBar').style.width = '100%';
            return;
        }

        const daysRemaining = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hoursRemaining = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutesRemaining = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const secondsRemaining = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        const monthsRemaining = Math.floor(daysRemaining / 30);

        document.getElementById('message').textContent = 
            `Faltam ${monthsRemaining} meses para a lili cantar!`;

        document.getElementById('countdown').textContent =
            `(${daysRemaining} dias, ${hoursRemaining}h ${minutesRemaining}m ${secondsRemaining}s)`;

        const totalDays = (this.graduationDate - this.startDate) / (1000 * 60 * 60 * 24);
        const progressPercentage = ((totalDays - daysRemaining) / totalDays) * 100;
        document.getElementById('progressBar').style.width = `${progressPercentage}%`;
    }
}

const countdown = new GraduationCountdown('2025-05-15T00:00:00');
countdown.init();
