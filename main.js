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
    matches the specified selector

    document.querySelector('div')