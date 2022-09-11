const hhDiv = document.querySelector(".hh");
const mmDiv = document.querySelector(".mm");
const clockInfo = document.querySelector(".clock-info");
const hhSpan = hhDiv.querySelector("span");
const mmSpan = mmDiv.querySelector("span");
const infoSpan = clockInfo.querySelector("span");

function clockFun(){
    const date = new Date();
    const hh = String(date.getHours()).padStart(2, "0");
    const mm = String(date.getMinutes()).padStart(2, "0");
    hhSpan.innerText = hh;
    mmSpan.innerText =  mm;
    hh >= 12 ? infoSpan.innerText = 'PM' : infoSpan.innerText ='AM'
    // console.log(date.getTime())
}



setInterval(clockFun,1000)