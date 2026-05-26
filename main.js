const lottoContainer = document.getElementById('lotto-numbers');
const drawBtn = document.getElementById('draw-btn');
const themeBtn = document.getElementById('theme-btn');

// Theme Toggle Logic
let isDark = false;
themeBtn.addEventListener('click', () => {
    isDark = !isDark;
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    themeBtn.textContent = isDark ? '☀️ 화이트 모드' : '🌙 다크 모드';
});

function generateLottoNumbers() {
    const numbers = [];
    while (numbers.length < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        if (!numbers.includes(randomNumber)) {
            numbers.push(randomNumber);
        }
    }
    return numbers.sort((a, b) => a - b);
}

function getRangeClass(number) {
    if (number <= 10) return 'range-1';
    if (number <= 20) return 'range-10';
    if (number <= 30) return 'range-20';
    if (number <= 40) return 'range-30';
    return 'range-40';
}

function displayNumbers(numbers) {
    lottoContainer.innerHTML = '';
    numbers.forEach(num => {
        const ball = document.createElement('div');
        ball.classList.add('ball');
        ball.classList.add(getRangeClass(num));
        ball.textContent = num;
        lottoContainer.appendChild(ball);
    });
}

drawBtn.addEventListener('click', () => {
    const lottoNumbers = generateLottoNumbers();
    displayNumbers(lottoNumbers);
});
