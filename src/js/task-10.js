function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  inputEl: document.querySelector('[type="number"]'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  boxEl: document.querySelector('#boxes'),
};

refs.createBtn.addEventListener('click', onCreateBtnClick);
refs.destroyBtn.addEventListener('click', onDestroyBtnClick);

function onCreateBtnClick() {
  refs.boxEl.append(...createNewBoxItem());
}

function createNewBoxItem() {
  refs.boxEl.textContent = '';
  const elements = [];
  const numberOfBoxes = refs.inputEl.value;

  for (let i = 1; i <= numberOfBoxes; i += 1) {
    const newColor = getRandomHexColor();
    const options = {
      bgColor: newColor,
      size: `${i * 10 + 20}px`,
      itemNumber: i,
      numberOfBoxes,
    };

    const boxItem = document.createElement('div');

    boxItem.classList.add(`item${options.itemNumber}`);
    boxItem.style.backgroundColor = `${options.bgColor}`;
    boxItem.style.width = `${options.size}`;
    boxItem.style.height = `${options.size}`;
    elements.push(boxItem);
  }

  return elements;
}

function onDestroyBtnClick() {
  refs.boxEl.textContent = '';
  refs.inputEl.value = '';
}
