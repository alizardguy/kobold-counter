/* setup dates */
var date1 = new Date('2020-10-19T02:58:30.559468Z');
var date2 = new Date(); //current date

/* get difference */
var differenceInTime = date2.getTime() - date1.getTime();
var differenceInDays = differenceInTime / (1000 * 3600 * 24);

/* convert to kobold sets */
var koboldSets = differenceInDays / 11;

/* floor values */
differenceInDays = Math.floor(differenceInDays);
koboldSets = Math.floor(koboldSets);

/* debug output values */
console.log(differenceInDays + " days");
console.log(koboldSets + " kobolds");

/* get elements */
var koboldCount = document.getElementById("koboldCount");
var dayTotal = document.getElementById("dayTotal");

/* write elements */
koboldCount.textContent = koboldSets + " kobolds";
dayTotal.textContent = "[" + differenceInDays + " days]";
