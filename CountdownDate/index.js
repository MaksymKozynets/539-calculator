    // The data/time we want to countdown to
    const countDownDate = new Date("April 15, 2021 00:00:00").getTime();

    // Run myfunc every second
    const myfunc = setInterval(function() {

    const now = new Date().getTime();
    let timeleft = countDownDate - now;
        
    // Calculating the days, hours, minutes and seconds left
    const days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
        
    // Result is output to the specific element
    document.getElementById("days").innerHTML = days + "днів "
    document.getElementById("hours").innerHTML = hours + "годин " 
    document.getElementById("mins").innerHTML = minutes + "хвилин " 
    document.getElementById("secs").innerHTML = seconds + "секунд " 
        
    // Display the message when countdown is over
    if (timeleft < 0) {
        clearInterval(myfunc);
        document.getElementById("days").innerHTML = ""
        document.getElementById("hours").innerHTML = "" 
        document.getElementById("mins").innerHTML = ""
        document.getElementById("secs").innerHTML = ""
        document.getElementById("end").innerHTML = "Вже літо!!";
    }
    }, 1000);
