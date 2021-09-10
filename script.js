// grab a reference for necessary HTML elements

// .joke-text
const jokeText = document.querySelector('.joketext');
// .new-joke-btn
const newJokeBtn = document.querySelector('.new-joke-btn');
// .tweet-btn (link)
const tweetBtn = document.querySelector('.tweet-btn');
// add 'click' eventListener to .new-joke-btn

newJokeBtn.addEventListener('click', getJoke);

// immediately call getJoke()
getJoke();

// getJoke() function definition
function getJoke(){
    // make an API request to https://icanhazdadjoke.com/'
    fetch ('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    }).then(function(response) {
        /* convert Stringified JSON response to Javascript Object */
        return response .json();
    }).then(function(data) {
        /* replace innerText of .joke-text with data.joke */
        // extract the joke text
        const joke = data.joke;
        // do the replacement
        jokeText.innerText = joke;

}).catch(function(error) {
    // if some error occured
    jokeText.innerText = 'Oops! Someone goofed up!';
    // removes the old href from .tweet-btn if found any
    tweetBtn.removeAttribute('href');
    // console log the error
    console.log(error);
});

}
