
/* instructions for function increment*/
// initialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the html to reflect the new count


// grab the count-el element, store it in a countEl variable
let countEl = document.getElementById("count-el")
console.log(countEl)
let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
    // set countEl's innerText to the count
}

let saveBtn = document.getElementById("save-btn")
function save() {
    console.log(count)
}
