/* ----- FUNCTION GET ELEMENTS ----- */
const getElement = element => document.querySelector(element);

/* ----- REGEX OF FORM ----- */
const REGEX_NAME = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ']+$/u;
const REGEX_CPF = /^[0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2}$/;
const REGEX_EMAIL = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
const REGEX_AGE = /^[0-9]{2}$/;

let field_name = getElement('#name');

field_name.addEventListener('input', event => REGEX_NAME.test(field_name.value) == false ?
  field_name.value = field_name.value.replace(`${event.data}`, '') : null);

let field_age = getElement('#age');

field_age.addEventListener('input', event =>
  REGEX_NAME.test(field_age.value) ?
    field_age.value = field_age.value.replace(`${event.data}`, '') :
    (!(field_age.value.length > 2)) ? null :
      field_age.value = field_age.value.replace(`${event.data}`, '')
);

let field_cpf = getElement('#cpf');

field_cpf.addEventListener('input', event =>
  REGEX_NAME.test(field_cpf.value) == false ?
    !(field_cpf.value.length < 15) ?
      field_cpf.value = field_cpf.value.replace(`${event.data}`, '') : null :
    field_cpf.value = field_cpf.value.replace(`${event.data}`, '')
);

