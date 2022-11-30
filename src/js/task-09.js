function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  dodyEl: document.querySelector('body'),
  colorText: document.querySelector('.color'),
  chengeColorBtn: document.querySelector('.change-color'),
};

refs.chengeColorBtn.addEventListener('click', onChengeColorBtnClick);

function onChengeColorBtnClick() {
  const getCurrentColor = getRandomHexColor();
  refs.dodyEl.style.backgroundColor = getCurrentColor;
  refs.colorText.textContent = getCurrentColor;
}
