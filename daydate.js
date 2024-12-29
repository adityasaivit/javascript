let d=new Date();

console.log(d);
console.log(typeof d)
d=d.toString();
console.log(d,typeof d);



let d1=new Date(2024,11,31)
console.log(d1)

// months here is the index start from the zero

let d2=new Date(2024,11,31,17,51,30)
console.log(d2)

let d3=new Date('2003-12-31')
let d4=new Date('2003-12-31T12:30:00')

console.log(d4);
d4=new Date('12/10/2003')
console.log(d4);
console.log(d3);

d4=new Date('2003-12-11')
console.log(d4)

// time stamp in javascript was from 1 jan 1970 which will five the milli second

d=Date.now();
console.log(d)

d=new Date('2022-11-01')
console.log(d.getTime())
console.log(d.valueOf())
d=new Date(1667260800000);
console.log(d);

// to get the time stamp in seconds
d=new Date();
console.log(d)
console.log(d.getTime())
let second=Math.floor(d/1000);
console.log(second);

// to get in minutes

let minutes=Math.floor(second/60);
console.log(minutes);

// hours

let hours=Math.floor(minutes/60);
console.log(hours);

// days

let day=Math.floor(hours/24);
console.log(day);

// months

let mon=Math.floor(day/30);
console.log(mon);

// years

let y=Math.floor(mon/12);
console.log(y);