import validateNumberInputs from './validateNumberInputs';

const changeCalcState = (state) => {
    const windowFormType = document.querySelectorAll('.balcon_icons_img');
    const width = document.querySelectorAll('#width');
    const height = document.querySelectorAll('#height');
    const windowType = document.querySelectorAll('#view_type');
    const windowProfile = document.querySelectorAll('.checkbox');

    const addEventListenerToMultipleItems = (elem, eventType, prop, state) => {
        elem.forEach(item => {
            item.addEventListener(eventType, (e) => {
                switch(eventType) {
                    case 'input':
                        state[prop] = e.target.value;
                        break;

                    case 'change':
                        if(e.target.checked) {
                            elem.forEach(item => {
                                item == e.target ? item : item.checked = false;
                            })
                            state[prop] = e.target.dataset.check;
                        } else {
                            state[prop] = e.target.value;
                        }
                        break;

                    case 'click': 
                        state[prop] = e.target.dataset.type;
                        break;
                    default:
                        return;
                    
                }
            });
        })
    }

    validateNumberInputs('#height');
    validateNumberInputs('#width');
    
    addEventListenerToMultipleItems(windowFormType, 'click', 'windowFormType', state);
    addEventListenerToMultipleItems(width, 'input', 'width', state);
    addEventListenerToMultipleItems(height, 'input', 'height', state);
    addEventListenerToMultipleItems(windowType, 'change', 'windowTypeh', state);
    addEventListenerToMultipleItems(windowProfile, 'change', 'windowProfile', state);
}

export default changeCalcState;