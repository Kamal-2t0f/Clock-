

function timef()
{
    const date= new Date();
    const today=`${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;
    document.getElementById("time").innerText=today;
    
}
let interval=setInterval(timef, 1000);
const button = document.getElementById("stop-btn");
button.addEventListener("click", () => {    
    clearInterval(interval);
});
