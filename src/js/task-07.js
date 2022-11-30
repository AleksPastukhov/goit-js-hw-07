const refs = {
  inputEl: document.querySelector('#font-size-control'),
  textEl: document.querySelector('#text'),
};

refs.inputEl.value = '16';
// refs.textEl.style.fontSize = `${refs.inputEl.value}px`;

refs.inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
  event.currentTarget.value;
  refs.textEl.style.fontSize = `${event.currentTarget.value}px`;
}
