import './slider';
import bindModal from './modules/modalWindow';

window.addEventListener('DOMContentLoaded', () => {
    bindModal('.header_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close')
});