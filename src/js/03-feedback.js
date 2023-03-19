const form = document.querySelector('.feedback-form');
import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = 'feedback-form-state';

reloadMemory();

form.addEventListener('input', throttle(onInput, 500));

function onInput(e) {
  let localStorageItem = localStorage.getItem(LOCALSTORAGE_KEY);
  localStorageItem = localStorageItem ? JSON.parse(localStorageItem) : {};
  localStorageItem[e.target.name] = e.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(localStorageItem));
}

form.addEventListener('submit', saveForm);

function saveForm(e) {
  e.preventDefault();
  let newObject = localStorage.getItem('feedback-form-state');
  console.log(newObject);
  form.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
}

function reloadMemory() {
  const dataLocalStorage = localStorage.getItem(LOCALSTORAGE_KEY);
  const parsedDataLocalStorage = JSON.parse(dataLocalStorage);
  // console.log('localstorage', parsedDataLocalStorage);
  if (parsedDataLocalStorage) {
    Object.entries(parsedDataLocalStorage).forEach(([name, value]) => {
      //     console.log('value form',
      form.elements[name].value = value;
      //    console.log('entries', name, value);
    });
  }
}
