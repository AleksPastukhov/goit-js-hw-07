const refs = {
  form: document.querySelector('.login-form'),
};

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formData = {};
  const inputEmailValue = refs.form.elements.email.value;
  const inputPasswordValue = refs.form.elements.password.value;

  if (inputEmailValue === '' || inputPasswordValue === '') {
    alert('All fields must be filled!!!');
  } else {
    formData.email = inputEmailValue;
    formData.password = inputEmailValue;
    console.log(formData);
    refs.form.reset();
  }
}
