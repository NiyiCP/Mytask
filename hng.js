
const day=document.getElementById('currentDay');
const timeUTC=document.getElementById('currentTime')
const today=new Date();
const timeMilliseconds=today.getTime()

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