document.addEventListener("DOMContentLoaded", () => {
    const monthsLeft = document.getElementById('months');
    const daysLeft = document.getElementById('days');
    const hoursLeft = document.getElementById('hours');
    const minutesLeft = document.getElementById('minutes');
    const secondsLeft = document.getElementById('seconds');
    
    const newYears = "1 Jan 2023"
    
    function countDown() {
        const newYearsDate = new Date(newYears);
        const currentDate = new Date();
    
        const totalSeconds = (newYearsDate - currentDate) / 1000;
        const months = 11 - currentDate.getMonth();
        const days = calculateDays() - currentDate.getDay() - 1;
        function calculateDays() {
            let totalDays;
            if (currentDate.getMonth() == 1) {
                return totalDays = 28;
            }
            if (currentDate.getMonth() % 2 == 0) {
                return totalDays = 31;
            }
            if (currentDate.getMonth() % 2 == 1) {
                return totalDays = 30;
            } 
        }
        const hours = Math.floor((totalSeconds / 3600) % 24);
        const minutes = Math.floor((totalSeconds / 60) % 60);
        const seconds = Math.floor(totalSeconds % 60);
    
    
        // putting to HTML
        monthsLeft.innerHTML = formatTime(months)
        daysLeft.innerHTML = formatTime(days)
        hoursLeft.innerHTML = formatTime(hours)
        minutesLeft.innerHTML = formatTime(minutes) 
        secondsLeft.innerHTML = formatTime(seconds)
        

        function formatTime(time) {
            if (time < 10) {
                return `0${time}`
            }
            else {
                return time
            }
        }
    }
    countDown();
    
    
    setInterval(countDown, 1000);
})