
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
    count += 1
    countEl.innerText = count
    // set countEl's innerText to the count
}
function save() {
    console.log(count)
}

let saveEl = document.getElementById("save-el")
console.log(saveEl)

// let username = "pear"
// console.log(username)

// let notifyMessage = "You have tree new notifications";
// console.log(username + " " + notifyMessage)

// let messageToUser = notifyMessage + "," + username + "!"
// console.log(messageToUser)

// let myName = "b34u helmi"
// let greeting1 = "Hello and Welcome, "

// let myGreeting = greeting1 + myName + "!"

// console.log(myGreeting)


