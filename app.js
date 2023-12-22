window.onload = function () {
    const daysElement = document.querySelector(".days .number")
    const hoursElement = document.querySelector(".hours .number")
    const minutesElement = document.querySelector(".minutes .number")
    const secondsElement = document.querySelector(".seconds .number")

    const countDownContainer = document.querySelector(".countdown-container")
    const website = document.querySelector(".website")
    const updateCountdown = () => {
        const newYears = "1 Jan 2024"
        const newYearsDate = new Date(newYears)
        const currentDate = new Date()
        const totalSecondsLeft = (newYearsDate - currentDate) / 1000
        
        const days = Math.floor(totalSecondsLeft / 3600 / 24)
        const hours = Math.floor(totalSecondsLeft / 3600) % 24
        const minutes = Math.floor(totalSecondsLeft / 60) % 60
        const seconds = Math.floor(totalSecondsLeft) % 60
        
        animateNumberChange(daysElement, formatTime(days))
        animateNumberChange(hoursElement, formatTime(hours))
        animateNumberChange(minutesElement, formatTime(minutes))
        animateNumberChange(secondsElement, formatTime(seconds))
        
        if (totalSecondsLeft <= 0) {
            clearInterval(countdownInterval)
        }
    }
    
    const formatTime = (time) => {
        return time < 10 ? `0${time}` : time;
    }
    
    const animateNumberChange = (element, newValue) => {
        const currentValue = parseInt(element.innerText)
        const difference = Math.abs(newValue - currentValue)
        const direction = newValue > currentValue ? 1 : -1
    
        let count = 0;
        const interval = 20
    
        const updateValue = () => {
            element.innerText = formatTime(currentValue + count * direction)
            count++
    
            if (count > difference) {
                clearInterval(animationInterval)
                element.style.opacity = 1
            }
        }

        const animationInterval = setInterval(() => {
            updateValue()
        }, interval)
    
    }

    const countdownInterval = setInterval(updateCountdown, 1000)

    updateCountdown()
    
    const slideshow = document.querySelector(".slideshow")
    const images = document.querySelectorAll(".slideshow img")
    let currentSlide = 0

    const changeSlide = () => {
        images[currentSlide].classList.remove("show")
        currentSlide = (currentSlide + 1) % images.length
        images[currentSlide].classList.add("show")
    }

    setInterval(changeSlide, 3000)

    setTimeout(() => {
        website.classList.add("show")
    }, 500)

    setTimeout(() => {
        countDownContainer.style.opacity = 1
    }, 1000)
}
