import './slider';
import { bindModal, showModal, showModalAfterTime } from './modules/modalWindow';

window.addEventListener('DOMContentLoaded', () => {
    bindModal('.header_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    showModalAfterTime('.popup', '.popup .popup_close', 60000);
});