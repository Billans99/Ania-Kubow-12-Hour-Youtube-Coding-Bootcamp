// Fizz Buzz Challenge (using an if statement)

// Rules
// Start with the number one, and count upwards.
// If any number is divisible by three, it is replaced by
// the word fizz and any number divisible by five by the
// word buzz.
// Numbers divisible by 15 become fizz buzz.

/* Here's how I would originally write the psueodocode in 
my head, with my first initial thoughts on the problem. 
However, I realise that there are cases when the number
is divisible by 15 and 3 (or 5) together, but the code 
will stop executing after the first line of the if 
statement. 
*/
if (number divisible by 3) {
    write 'fizz'
} else if (number divisible by 5) {
    write 'buzz'
} else if (number divisible by 15) {
    write 'fizz buzz'
} else if (number is divisible by 15 && 3) {
    write 'fizz buzz'
} else if (number is divisible by 15 && 5) {
    write 'fizz buzz'
}

/* I changed the order of the if statement so that
divisible by 15 and 3, and 15 and 5 are checked first */


if (num % 15 === 0 && num % 3 === 0) {
    return 'fizz buzz'
} else if (num % 15 === 0 & num % 5 === 0) {
    return 'fizz buzz'
} else if (num % 15 === 0) {
    return 'fizz buzz'
} else if (num % 3 === 0) {
    return 'fizz'
} else if (num % 5 === 0) {
    return 'buzz'
}

/* refresher, .concat() is used to merge two or more arrays
or strings together.
    From memory though, you can also merge two arrays using
    the spread method.

.map()
    Creates a NEW array, similar to forEach() however, it
    only console.log() them out, it DOESN'T store in new 
    array.

    const ages2023 = [21, 45, 18, 45, 2]

    const ages2026 = ages2023.map(age => age + 3)

    console.log(ages2026)

    
addEventListener()
    Sets up a function that will be called whenever the
    specified element is delivered to the target. This 
    example, calls the function alertMe which console.logs
    'clicked' when the hexagon is clicked

    In laymans terms, make it do something when something
    happens, like on click, mouseover, etc.

    target.addEventListener(event, function)
    */

    const hexagon = document.getElementById('hexagon')

    function alertMe () {
        console.log('clicked')
    }

    hexagon.addEventListener('click', alertMe)

// remove EventListener

    const circle = document.querySelector('.circle')

    function toggleColor() {
        circle.classList.toggle('red-circle')
    }

    circle.addEventListener('click', toggleColor)

// .querySelector()
/*  Returns the first element within the document that 
    matches the specified selector.

    For example you could write:
        const firstDiv = document.querySelector('div')
    to select the first div in the document. You can also
    select classes AND Id's such as .circle and #main in 
    the examples below.
    */
    const circle = document.querySelector('.circle')

    const main = document.querySelector('#main')

/* .querySelectorAll()
   To pick out all classes with .circle
    */
   const circle = document.querySelectorAll('.circle')

    // Date
    // Here's how to get today's date

    const today = new Date()
    console.log(today)

    const date = today.getDate() // get the date

    const day = today.getDay() // the day of the week

    const fullYear = today.getFullYear() // current year

    const hours = today.getHours() // get hours in 24 hr time

    const isoString = today.toISOString() // alpha numeric (good for API's for a timestamp)

/* setTimeout() 
    calls a function or evaluates an expression after a 
    number of milliseconds has passed.

    setTimeout(function, milliseconds)

    3000 is used for 3 seconds as we are counting in 
    milliseconds. We are going to create a timing to display
    text in the speech bubble after 3 seconds */

    const speechBubble = document.querySelector('.bubble')

    const time = 3000

    function showText() {
        speechBubble.innerHTML = 'Hey dude!'
    }

    setTimeout(showText, time)

    // After 3 second, make the whole thing disappear

    function deleteText() {
        speechBubble.innerHTML = ""
    }

    setTimeout(deleteText, 10000)

    /* exercise to do myself, do a setTimeout() to get
    rid of the whole speech bubble after 5 seconds */

    const speechBubble = document.querySelector('.bubble')

    // time 5000 milliseconds for 5 seconds
    const time = 5000

    function removeBubble() {
        removeBubble.style.display = 'none'
    }

    setTimeout(removeBubble, time)

/* setInterval()
    Calls a function at specifed intervals until the 
    window is closed. Below is how to add 'Alert!' every
    2 seconds onto the screen */

    // setInterval(function, milliseconds)
    const bubble = querySelector('.bubble')
    const text = 'Alert!'
    const time = 2000
    
    function showAlert() {
        const textDisplay = document.createElement('div')
        textDisplay.innerHTML = text
        bubble.appendChild(textDisplay)
    }

    setInterval(showAlert, time)

    /* exercise to do myself. Using setInterval(), print 
    in console.log your name. */

    function displayName() {
        console.log('Billy')
    }

    setInterval(displayName, 2000)

// clearInterval()
    // give the function call a variable, then call 
    // clearInterval() with that variable name
     function displayName() {
        console.log('Billy')
    }

    const timerId = setInterval(displayName, 2000)

    console.log(timerId)

    clearInterval(timerId)

    // Here's a real life example, move the speech bubble 
    // down

    document.querySelector('.speech-bubble')
    let height = 100;

    function moveBubble() {
        height += 50
        speechBubble.style.top = height + 'px'
        if (height === 300) {
            clearInterval(timerId)
        }
    }

    let timerId = setInterval(moveBubble, 1000)

/* Classes in JS
    Notes: Classes are the templates for creating functions.
    Functions inside these classes are called methods. */

    // Class declaration

    class Rectangle {
        // creating an instance of rectangle will require 2 
        // arguments
        constructor(height, width) {
            this.height = height;
            this.width = width;
        }
    }

    // making a new rectangle, with 300 height, 100 width
    const myRectangle = new Rectangle(300, 100)
    console.log(myRectangle.height)

    // Another example
    class Ghost{
        constructor(className, speed, color, startingPoint) {
            this.className = className;
            this.speed = speed;
            this.color = color;
            this.startingPoint = startingPoint;
        }
    }

    const blinky = new Ghost('Blinky', 300, 'blue', 4)
    const bonky = new Ghost('Bonky', 200, 'red', 10)