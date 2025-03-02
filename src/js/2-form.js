const input = document.querySelector('.form-input');
input.addEventListener('focus', function () {
  input.setAttribute('placeholder', 'Type area');
});
input.addEventListener('blur', function () {
  input.setAttribute('placeholder', ''); 
});

const formData = { email: "", message: "" };
const localStorageKey = "feedback-form-state";
const form = document.querySelector(".feedback-form");

form.addEventListener("input", (evt) => {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

document.addEventListener("DOMContentLoaded", () => {
  const savedData = JSON.parse(localStorage.getItem(localStorageKey));
  if (savedData) {
    formData.email = savedData.email;
    formData.message = savedData.message;

    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
  }
});

form.addEventListener("submit", (evt) => {
  evt.preventDefault();

  if (!formData.email || !formData.message) {
    alert("Fill please all fields");
    return;
  }

  console.log(formData);
  localStorage.removeItem(localStorageKey);
  form.reset();
  Object.keys(formData).forEach((key) => (formData[key] = ""));
});

