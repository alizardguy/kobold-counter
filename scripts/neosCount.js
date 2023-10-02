/* setup dates */
var neosRegDate = new Date('2020-10-19T02:58:30.559468Z');
var resoRegDate = new Date('2023-09-23T09:22:24');
var currentDate = new Date(); //current date

/* get difference */
var neosDifferenceInTime = currentDate.getTime() - neosRegDate.getTime();
var neosDifferenceInDays = neosDifferenceInTime / (1000 * 3600 * 24);

var resoDifferenceInTime = currentDate.getTime() - resoRegDate.getTime();
var resoDifferenceInDays = resoDifferenceInTime / (1000 * 3600 * 24);

/* convert to kobold sets */
var resoKoboldSets = resoDifferenceInDays / 11;
var neosKoboldSets = neosDifferenceInDays / 11;

/* floor values */
neosDifferenceInDays = Math.floor(neosDifferenceInDays);
neosKoboldSets = Math.floor(neosKoboldSets) + 1;

resoDifferenceInDays = Math.floor(resoDifferenceInDays);
resoKoboldSets = Math.floor(resoKoboldSets) + 1;

/* debug output values */
console.log(resoDifferenceInDays + " days");
console.log(resoKoboldSets + " legacy kobolds");

/* get elements */
var neosKoboldCount = document.getElementById("neosKoboldCount");
var neosDayTotal = document.getElementById("neosDayTotal");

var resoKoboldCount = document.getElementById("koboldCount");
var resoDayTotal = document.getElementById("dayTotal");

/* write elements */
neosDayTotal.textContent = neosDifferenceInDays + " days since I've started Neos";

resoKoboldCount.textContent = resoKoboldSets + " kobolds";
resoDayTotal.textContent = resoDifferenceInDays + " days since I've started Resonite";
