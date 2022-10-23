function time(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

function showTime(){
    setInterval(() => {
        time();
    }, 1000);
}

showTime();