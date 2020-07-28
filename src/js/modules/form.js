const form = () => {
    const forms = document.querySelectorAll('form');
    const inputs = document.querySelectorAll('input');
    const phoneInputs = document.querySelectorAll('input[name=user_phone]');

    console.log(phoneInputs);

    phoneInputs.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/, '');
        })
    })

    const message = {
        lodiang: 'Загрузка...',
        success: 'Спасибо! Мы с Вами скоро свяжемся!',
        error: 'Упс! Что-то пошло не так...'
    };

    const postFormData = async (url, data) => {
        const res = await fetch(url, {
            method: 'POST',
            body: data
        }) 
        return await res.text();
    };

    const clearInputs = (inputs) => {
        inputs.forEach(item => {
            item.value = '';
        })
    }

    forms.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            statusMessage.textContent = message.lodiang;

            const data = new FormData(item);
            item.appendChild(statusMessage);
            postFormData('assets/server.php', data)
                .then(res => {
                    statusMessage.textContent = message.success;
                })
                .catch(error => {
                    statusMessage.textContent = message.error;
                })
                .finally(() => {
                    clearInputs(inputs);
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 6000)
                })

        });
    });
};

export default form;