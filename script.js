


setInterval(()=>{
    let today = new Date;
    let container = document.getElementsByClassName("container")[0];
    container.innerHTML = `
    <div>
    <h1>Date: ${today.getDate()} / ${today.getMonth()} / ${today.getFullYear()} </h1>
    <h1>Time: ${today.getHours()} : ${today.getMinutes()} : ${today.getSeconds()} </h1>
    <h1>Day:  ${today.toDateString().slice(0,4)}</h1>
    </div>
`
}, 1000)
