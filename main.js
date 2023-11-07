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


