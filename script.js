console.log('It is working!');

function doStuff() {
    //go get that cta button
    const cta = document.querySelector('.cta-button');
    // set the display property in style to "NONE' (hides it)" 
    cta.style.display = 'none';
    
    // create a new paragraph element
    let message = document.createElement('h2');
    // add this text inside our new paragraph element
message.innerHTML = 'Your order has been placed!';
// find the <section> tag  and add to the end our new paragraph
document.querySelector('section').appendChild(message);
}