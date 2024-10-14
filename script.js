class GraduationCountdown {
  constructor(startGraduationDate, finalGraduationDate) {
    this.startGraduationDate = new Date(startGraduationDate);
    this.finalGraduationDate = new Date(finalGraduationDate);
    this.image = {
      before: "./assets/elliot.webp",
      after: "./assets/elliot_happy.webp",
    };
  }

  init() {
    this.updateCountdown();
    setInterval(() => this.updateCountdown(), 1000);
  }

  updateCountdown() {
    const currentDate = new Date();
    const timeRemaining = this.finalGraduationDate - currentDate;

    const imageElement = document.getElementById("dynamicImage");

    if (timeRemaining <= 0) {
      imageElement.src = this.image.after;
      document.getElementById("message").textContent = "A lili cantou! 🎉🎇";
      document.getElementById("countdown").textContent =
        `No dia ${this.finalGraduationDate.getDate()}/${
          this.finalGraduationDate.getMonth() + 1
        }/${this.finalGraduationDate.getFullYear()}`;
      document.getElementById("progressBar").style.width = "100%";
      return;
    }

    const daysRemaining = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hoursRemaining = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const minutesRemaining = Math.floor(
      (timeRemaining % (1000 * 60 * 60)) / (1000 * 60),
    );
    const secondsRemaining = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    const monthsRemaining = Math.floor(daysRemaining / 30);

    document.getElementById("message").textContent =
      `Faltam ${monthsRemaining} meses para a lili cantar!`;

    document.getElementById("countdown").textContent =
      `(${daysRemaining} dias, ${hoursRemaining}h ${minutesRemaining}m ${secondsRemaining}s)`;

    const totalDays = (this.finalGraduationDate - this.startGraduationDate) /
      (1000 * 60 * 60 * 24);
    const progressPercentage = ((totalDays - daysRemaining) / totalDays) * 100;
    document.getElementById("progressBar").style.width =
      `${progressPercentage}%`;
  }
}

const countdown = new GraduationCountdown(
  "2023-10-15T00:00:00",
  "2025-03-31T00:00:00",
);
countdown.init();
