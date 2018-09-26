function countdown(endDate){
    let days, hours, minutes, seconds;

    endDate = new Date(endDate).getTime();

    if (isNaN(endDate)){
        return;
    }

    setInterval(calculate, 1000);

    function calculate(){
        let startDate = new Date();
        startDate = startDate.getTime();

        let timeRemaining = parseInt((endDate - startDate) / 1000);

        if (timeRemaining >= 0){

            days = parseInt(timeRemaining / 86400);
            timeRemaining = (timeRemaining % 86400);
            console.log(days)
            
            hours = parseInt(timeRemaining / 3600 );
            timeRemaining = (timeRemaining % 3600);
            console.log(hours)

            minutes = parseInt(timeRemaining / 60);
            timeRemaining = (timeRemaining % 60);
            console.log(minutes)

            seconds = parseInt(timeRemaining);
            console.log(seconds)

            document.getElementById('days').innerHTML = parseInt(days,10)
            document.getElementById('hours').innerHTML = ('0' + hours).slice(-2)
            document.getElementById('minutes').innerHTML = ('0' + minutes).slice(-2)
            document.getElementById('seconds').innerHTML = ('0' + seconds).slice(-2)
            
        } else {
            return;
        }
    }
}

(function(){
    countdown('11/07/2018 06:00:00 PM')
}());