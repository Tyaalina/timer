const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

let intervalId = null;

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

    // Используем функцию setInterval, которая повторяет вызов через определённый интервал времени в миллисекундах
    intervalId = setInterval(() => {
      //Выводим данные в форму таймера
      timerEl.innerHTML = format(currentTime);
      //Уменьшаем текущее время
      --currentTime;
      //Если таймер закончился
      if (currentTime < 0) {
        //Очищаем функцию из памяти
        clearInterval(intervalId);
        //Вывод сообщения о конце
        alert("FINISH")
      }
    }, 1000);
  };
};

//Функция создания нового таймера
const newTimer = () => {
  const seconds = Number(inputEl.value);
  //Очищаем предыдущий таймер
  clearInterval(intervalId);
  animateTimer(seconds);
  inputEl.value = '';
}
const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  // Очистите input так, чтобы в значении
  // оставались только числа
});

inputEl.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    newTimer();
  }

});

buttonEl.addEventListener('click', () => {
  newTimer();
});
