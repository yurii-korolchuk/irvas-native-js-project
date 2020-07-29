const validateNumberInputs = (inputsSelector) => {
    document.querySelectorAll(inputsSelector).forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/, '');
        })
    })
}

export default validateNumberInputs;