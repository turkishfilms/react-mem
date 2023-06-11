
let unroundedNum = 50, //at least this many will be shown
itemRoundNum = 1, //the multiple of number of items
itemCount = Math.round(unroundedNum / itemRoundNum) * itemRoundNum,
itemChoices = [1, 2, 3, 4, 5, 6, 7, 8, 9], //symbol selection
mode = 0,
/*
       item schedule = 0,
       grid = 1,
       */
numItemsShown = 3,
itemsShownSchedule = [], //this schedule will be repeated
specialRules = [],
/*
       trigger value
       if trigger is true, value(s) will be omit from selection
       */
items = [],
currentIndex = 0,
correct = '',
raw = '',
shown = 0

if (raw) raw.split('')
else items = []

document.getElementById("mem").innerHTML = `Memory (${itemCount})`

function prevItem() {
if (currentIndex > 1) {
    currentIndex -= numItemsShown
    displayItem()
}
}

function nextItem() {
if (!items.length) return
if (currentIndex < items.length) currentIndex += numItemsShown
displayItem()
}

function displayItem() {
let shownNums = []
for (let i = 0; i < numItemsShown; i++) {
    shownNums.push(items[currentIndex + i])
}
document.getElementById('output').innerHTML = shownNums.join('')
document.getElementById('output').style.textDecoration = `${currentIndex % 2 == 0 ? 'none': 'underline'}`
if (currentIndex > itemCount - 1) document.getElementById('output').innerHTML = `Guess`
else if (currentIndex < 0) document.getElementById('output').innerHTML = `poop`
}

function guess(guess) {
let numberCorrect = 0
for (let i = 0; i < itemCount; i++) {
    if (guess.toString()[i] == items[i]) numberCorrect++
}
let percentRight = (numberCorrect / itemCount).toPrecision(2) * 100
document.getElementById('output').innerHTML = `You Got ${percentRight}% (${numberCorrect}/${itemCount}) Right! \n 
</br> Actual: ${items.join('')}</br>
Guess: ${guess}`
document.getElementById('list').innerHTML += percentRight + '%,'
}

function updateCount() {
itemCount = Math.round(unroundedNum / itemRoundNum) * itemRoundNum
document.getElementById('mem').innerHTML = "Memory " + itemCount
}

function updateChoices(vals) {
itemChoices = vals.replaceAll(/,+| +/g, '').split('')
}

function genSeq() {
let seq = []
for (let i = 0; i < itemCount; i++) seq.push(itemChoices[Math.ceil(Math.random() * itemChoices.length - 1)])
return seq
}

function genButton() {
items = genSeq()
document.getElementById('inputGuess').value = ''
document.getElementById('genseq').value =
    document.getElementById('genseq').value == "GENERATE NEW SET" ?
    "GENERATE SEQUENCE" : "GENERATE NEW SET"
displayItem()
}
/* ---TODO---
generate sequence according to user defined rules
ruler definer ui

allow for different number of symbols to be displayed at once.
schedule number of numbers
fix event loop code
show errors more clearly
better UI ?
save progress outs code on screen you copy to clipboard and paste in to resume

button for number dictionary to appear or even search
-batch of ideas 2

---TODONE---
*/

// dep
function displayItem2() {
document.getElementById('output').innerHTML = `${items[currentIndex]}${currentIndex % 2 == 0 ? '': ':'}`
if (currentIndex > itemCount - 1) document.getElementById('output').innerHTML = `Guess${currentIndex%2==0?':':''}`
else if (currentIndex < 0) document.getElementById('output').innerHTML = `poop${currentIndex%2==0?':':''}`
}