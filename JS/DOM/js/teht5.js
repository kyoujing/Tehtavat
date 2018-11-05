let clock = setInterval(myTimer, 1000);

function myTimer() {
    let d = new Date();
    document.getElementById('kello').innerHTML = d.toLocaleTimeString('en-GB');
}