
const day=document.querySelector('[data-testid="currentDayOfTheWeek"]')
const timeUTC=document.querySelector('[data-testid="currentUTCTime"]')
const today=new Date();
const getTimes=function(today) {
    const timeMilliseconds=today.getTime()
    timeUTC.textContent=timeMilliseconds
}
setInterval(() => {
    getTimes(today)
}, 0.1);
const weekDay=today.toLocaleString('en',{weekday:'long'})
const option={
    weekday:'long',
    date:'numeric',
    year:'numeric',
    month:'long',

}

day.textContent=weekDay
timeUTC.textContent=timeMilliseconds

console.log(timeMilliseconds)

//const months=today.toLocaleString('en',{month:'long'})
//const timeHr=today.getHours();
//const timeMin=today.getMinutes();
//const seconds=today.getSeconds()