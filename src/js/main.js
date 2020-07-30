import './slider';
import modal from './modules/modalWindow';
import tabs from './modules/tabs';
import form from './modules/form';
import changeCalcState from './modules/changeCalcState';
import timer from './modules/timer';

window.addEventListener('DOMContentLoaded', () => {
    const calcState = {};

    modal();
    tabs();
    form();
    timer('2020-08-09', '.container1');
    changeCalcState(calcState);
});