const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

const format = (time) => {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  return hours.toString().padStart(2, '0') + ":" + minutes.toString().padStart(2, '0') + ":" + seconds.toString().padStart(2, '0')
}

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {
    let currentTime = seconds;

    buttonEl.disabled = true;

    // Используем функцию setInterval, которая повторяет вызов через определённый интервал времени в миллисекундах
    let intervalId = setInterval(() => {
      //Выводим данные в форму таймера
      timerEl.innerHTML = format(currentTime);
      //Уменьшаем текущее время
      -- currentTime;
      //Если таймер закончился
      if (currentTime < 0) {
        //Очищаем функцию из памяти
        clearInterval(intervalId);
        timerEl.innerHTML = "FINISH"
        buttonEl.disabled = false;
      }
    }, 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  // Очистите input так, чтобы в значении
  // оставались только числа
});

buttonEl.addEventListener('click', () => {

  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});
