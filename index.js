const rateContainer = document.querySelector('.rate-container');
const feedbackContainer = document.querySelector('.feedback-container');
const submitButton = document.getElementById('submit');
const rating = document.getElementById('rating');
const rates = document.querySelectorAll('.btn');

submitButton.addEventListener("click", () => {
    feedbackContainer.classList.remove('hidden');
    rateContainer.style.display = 'none';
});

rates.forEach((rate) => {
    rate.addEventListener('click', () => {
        rating.innerHTML = rate.innerHTML;
    })
});

