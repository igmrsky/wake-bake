const phoneInput = document.querySelector('.contacts__input-phone');
const btn = document.querySelector('.contacts__btn');

const mask = new IMask(phoneInput, {
    mask: "+{7} (000) 000-00-00",
    lazy: false
});
