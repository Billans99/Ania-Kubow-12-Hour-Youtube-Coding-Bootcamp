// Fizz Buzz Challenge (using an if statement)

// Rules
// Start with the number one, and count upwards.
// If any number is divisible by three, it is replaced by
// the word fizz and any number divisible by five by the
// word buzz.
// Numbers divisible by 15 become fizz buzz.

    /* Here's how I would originally write the psueodocode in 
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
    Functions inside these classes are called methods */

        The constructor method will typically have parameters
        like: 
        constructor(height, weight, speed, size, name)

        Make sure to write all the properties for your instances
        like, 
        this.height = height; 
        this.weight = weight;
    

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

        console.log(blinky.speed)

/* HTTP 
    Notes: HTTP is Hyper Text Transfer Protocol

    Most web pages are made up of HTML, CSS and Javascript, sent 
    to you via the internet
    The internet is made up from a bunch of resources hosted on
    different servers. Resources are any entities on the web 
    including HTML files, style sheets, images and so on.

    To access the content on the internet your browser must
    ask these servers for the resources it needs, and display
    these resources to you. This protocol of requests and 
    responses enables you to view the page as it is.

    HTTP is used to structure
    - requests &&
    - responses
        over the internet

    HTTP requires data to be transfered from one point to another
    over the network. This transfer of resources happens by using
    transmission transmission control protocol (TCP)

        TCP - Manage different types of internet connections in 
        which one device wants to send something to another.

        HTTP - Command language that the devices must follow in
        order to communicate.

When you type a URL address e.g. www.google.com you are commanding
it to open a TCP channel to the sites 
Uniform Resource Locator (URL).
In this situation your computer, the CLIENT is making the request, 
to a URL belonging to a SERVER.
Once the TCP connection is established, the client sends an HTTP 
GET request to the server to retrieve the web page it should 
display. The server then sends a response, the client says, we got
it thank you :) After the server sends the response, it closes the
TCP connection.

If you open the website in the browser again or if your browser
requests something from the server, a new connection is open which
follows the same process.

HTTP methods:
- GET requests (called by the client)
- POST requests
- PUT requests
- DELETE requests

GET REQUEST:
        After you type the URL in the browser, behind the scenes,
        your browser will extract the HTTP part and recognise that
        is the name of the protocol to use and take the domain
        name e.g. www.google.com and ask the internet domain name
        server to return an IP address. It then opens a connection
        to the server at the address using the HTTP protocol as 
        precified. It will inititiate a GET request to the server
        which contains the IP address of the host and optionally
        a data payload.
            GET / HTTP/1.1
            HOST: www.google.com
