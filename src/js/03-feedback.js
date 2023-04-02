import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailField = form.querySelector('input[type="email"]');
const messageField = form.querySelector('textarea[name="message"]');
const feedbackFormState = localStorage.getItem('feedback-form-state');

if (feedbackFormState) {
  const { email, message } = JSON.parse(feedbackFormState);
  emailField.value = email;
  messageField.value = message;
}

const saveFormState = () => {
  const data = {
    email: emailField.value,
    message: messageField.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
};

const throttledSaveFormState = throttle(saveFormState, 500);

form.addEventListener('input', throttledSaveFormState);

form.addEventListener('submit', event => {
  event.preventDefault();
  localStorage.removeItem('feedback-form-state');
  emailField.value = '';
  messageField.value = '';
  console.log({ email: '', message: '' });
});
