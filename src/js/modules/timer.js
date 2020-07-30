const timer = (deadline, containerSelector) => {

    const getTimeRemaining = (deadline) => {
        const total = Date.parse(deadline) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
        const days = Math.floor((total / (1000 * 60 * 60 * 24)));
        
        return {
            total,
            seconds,
            minutes,
            hours,
            days
        }
    }

    const addZeroToNumber = (num) => {
        return num < 10 ? `0${num}` : num;
    }
    setTime
    const setTime = (deadline, containerSelector) => {
        const container = document.querySelector(containerSelector);

        const seconds = container.querySelector('#seconds');
        const minutes = container.querySelector('#minutes');
        const hours = container.querySelector('#hours');
        const days = container.querySelector('#days');

        const updateClock = () => {
            seconds.textContent = addZeroToNumber(getTimeRemaining(deadline).seconds);
            minutes.textContent = addZeroToNumber(getTimeRemaining(deadline).minutes);
            hours.textContent = addZeroToNumber(getTimeRemaining(deadline).hours);
            days.textContent = addZeroToNumber(getTimeRemaining(deadline).days);
        }

        const timerInterval = setInterval(updateClock, 1000);
        updateClock();
        
        if(getTimeRemaining(deadline).total <= 0) {
            clearInterval(timerInterval);

            seconds.textContent = '00';
            minutes.textContent = '00';
            hours.textContent = '00';
            days.textContent = '00';
        }
    }

    setTime(deadline, containerSelector);

}

export default timer;