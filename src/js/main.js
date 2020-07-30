import './slider';
import modal from './modules/modalWindow';
import tabs from './modules/tabs';
import form from './modules/form';
import changeCalcState from './modules/changeCalcState';
import timer from './modules/timer';
import bigImagePopup from './modules/bigImagePopup';

window.addEventListener('DOMContentLoaded', () => {
    const calcState = {};

    modal();
    tabs();
    form();
    timer('2020-08-09', '.container1');
    changeCalcState(calcState);
    bigImagePopup();
});