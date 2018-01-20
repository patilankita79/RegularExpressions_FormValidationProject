// form blur event listeners
document.getElementById('name').addEventListener('blur', validateName);

document.getElementById('zip').addEventListener('blur', validateZip);

document.getElementById('email').addEventListener('blur', validateEmail);

document.getElementById('phone').addEventListener('blur', validatePhone);


function validateName() {
  const name = document.getElementById('name');

  // Name should be letters A-Z or a-z and length should be in the range of 2 to 10
  const re = /^[a-zA-Z]{2, 10}$/;

  if(!re.test(name.value)) {
    name.classList.add('is-invalid');
  } else {
    name.classList.remove('is-invalid');
  }


}

function validateZip() {

  const zip = document.getElementById('zip');

  // US Zipcode - 5digit with - and optional 4 diits
  const re = /^[0-9]{5}(-[0-9]{4})?$/;

  if(!re.test(zip.value)) {
    zip.classList.add('is-invalid');
  } else {
    zip.classList.remove('is-invalid');
  }


}

function validateEmail() {
  const email = document.getElementById('email');

  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if(!re.test(email.value)) {
    email.classList.add('is-invalid');
  } else {
    email.classList.remove('is-invalid');
  }
}

function validatePhone() {
  const phone = document.getElementById('phone');

  const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;

  if(!re.test(phone.value)) {
    email.classList.add('is-invalid');
  } else {
    email.classList.remove('is-invalid');
  }
}
