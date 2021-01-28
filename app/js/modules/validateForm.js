const mainForm = document.querySelector('#form-contact');
const sendBtn = document.querySelector("#send-btn");
const statusWindow = document.querySelector('.status');

const messages = {
  loading: 'Loading...',
  success: 'Thanks! We will contact you.',
  failure: 'Something gone wrong?'
};

mainForm.addEventListener('submit', (e) => {
  e.preventDefault();

  console.log(validateForm(mainForm));

  if(validateForm(mainForm) === true) {
    const formData = new FormData(mainForm);
    console.log(formData);
    postData('../server/server.php', formData)
  }

});

function validateForm(form) {
  let valid = true;

  if(!validateField(form.elements.name)) {
      valid = false;
  }

  if(!validateField(form.elements.email)) {
      valid = false;
  }

  if(!validateField(form.elements.subject)) {
      valid = false;
  }

  if(!validateField(form.elements.message)) {
      valid = false;
  }

  return valid;
}

function validateField(field) {
  field.nextElementSibling.textContent = field.validationMessage;
  return field.checkValidity();
}

const postData = async (url, data) => {
  const div = document.createElement('div');
  div.textContent = messages.loading;
  statusWindow.appendChild(div);
  let res = await fetch(url, {
    method: "POST",
    body: data
  });

  return await res.text();
};