import './slider';
import modal from './modules/modalWindow';
import tabs from './modules/tabs';
import form from './modules/form';
import changeCalcState from './modules/changeCalcState';

window.addEventListener('DOMContentLoaded', () => {
    const calcState = {};

    modal();
    tabs();
    form();

    changeCalcState(calcState);
});