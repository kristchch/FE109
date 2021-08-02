let position = 0;
const slidesToShow = 5; //сколько элементов показываем
const slidesToScroll = 2; //сколько элементов скроллим
let container = document.querySelector('.slider-container');
let track = document.querySelector('.slider-track');
let btnPrev = document.querySelector('.btn-prev');
let btnNext = document.querySelector('.btn-next');

const items = document.querySelectorAll('.slider-item');
const itemCount = items.length; //кол-во элементов всего

const itemWidth = container.clientWidth / slidesToShow; //считаем ширину одного элем.
const movePosition = slidesToScroll * itemWidth; //насколько нужно скроллить

//присваиваем каждому элементу ширину
items.forEach((item) => {
    item.style.minWidth = `${itemWidth}.px`;
});

btnNext.addEventListener('click', () => {
    // position -= movePosition;

    //сколько осталось элементов всего
    const remItem = itemCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

    position -= remItem >= slidesToScroll ? movePosition : remItem * itemWidth; 

    setPosition();
    checkBtns();
});

btnPrev.addEventListener('click', () => {
    // position += movePosition;

    //сколько осталось элем.
    const remItem = Math.abs(position) / itemWidth;

    position += remItem >= slidesToScroll ? movePosition : remItem * itemWidth;

    setPosition();
    checkBtns();
});

let setPosition = function() {
    track.style.transform = `translateX(${position}px)`; //скролл
};

let checkBtns = function() {
    btnPrev.disabled = position === 0;

    btnNext.disabled = position <= -(itemCount - slidesToShow) * itemWidth;

    //проверка для отображения курсора кнопки вперед
    if (btnPrev.disabled) {
        btnPrev.style.cursor = 'default';
        btnPrev.classList.add('default');
    } else {
        btnPrev.style.cursor = 'pointer';
        btnPrev.classList.remove('default');
        btnPrev.classList.add('btn');
    };
    
    //проверка для отображения курсора кнопки назад
    if (btnNext.disabled) {
        btnNext.style.cursor = 'default';
        btnNext.classList.add('default');
    } else {
        btnNext.style.cursor = 'pointer';
        btnNext.classList.remove('default');
        btnNext.classList.add('btn');
    };
};

checkBtns();





