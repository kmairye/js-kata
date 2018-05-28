`use strict`;

// load the dom
window.addEventListener("DOMContentLoaded", fetchTweets);

let jsonObj;
let myTweets;

let template;
let clone;

async function fetchTweets(){

    jsonObj = await fetch("http://kea-alt-del.dk/twitter/api/?count=30");
    myJson = await jsonObj.json();
    // console.log(myJson);


    let tweets = Array.from(myJson.statuses);
    //console.log(tweets);


    // for each tweet element...
    tweets.forEach(elm => {
        // define template and let clone be the copy/clone of the template
        template = document.querySelector(`#template`);
        clone = template.content.cloneNode(true);

        // set the desired elements to be equal to the content of the arrays elements/proporties/whatever they're called
        clone.querySelector(`#tweet-headline`).textContent = elm.text;

        clone.querySelector(`#tweet-date`).textContent = elm.created_at;

        clone.querySelector(`#user-name`).textContent = elm.user.name;
        clone.querySelector(`#screen-name`).textContent = `@` + elm.user.screen_name;
        
        clone.querySelector(`#user img`).src = elm.user.profile_image_url;
        clone.querySelector(`#user-followers`).textContent = `Followers: ` + elm.user.followers_count;






        let hashtags = Array.from(elm.entities.hashtags);
        //console.log(hashtags);
        hashtags.forEach(e=> {
            console.log(e.text);
            let newA = document.createElement(`a`);
            let newAContent = `#`+e.text;

            newA.textContent = newAContent;

            clone.querySelector("#tweet-hashtags-con").appendChild(newA);
        })


        // append the clones to the html element 
        document.querySelector(`#main-con`).appendChild(clone);
    })
}