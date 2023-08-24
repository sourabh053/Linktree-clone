# Linktree clone site

This is a site inspired by the [Linktree Site](https://linktr.ee/ShashwatB). 

## Table of contents

  - [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [Author](#author)



## Overview

this site i have made using HTML/CSS and a little bit of JavaScript. I recently started cloning existing sites to improve my Frondend skills and this site is my first try in cloning a site. i had also done similar challenges on Frontend Mentor site in which you have to copy a design from a photo.  

### Screenshot

![Desktop Screenshot1](/Screenshots/Destop%20ScreenShot1.png)
![Desktop Screenshot2](/Screenshots/Destop%20ScreenShot2.png)
![Desktop Screenshot3](/Screenshots/Destop%20ScreenShot3.png)
![Desktop Screenshot4](/Screenshots/Destop%20ScreenShot4.png)
![Mobile Screenshot 1](/Screenshots/Mobile%20ScreenShot1.jpg)
![Mobile Screenshot 2](/Screenshots/Mobile%20ScreenShot2.jpg)
![Mobile Screenshot 3](/Screenshots/Mobile%20ScreenShot3.jpg)

### Links

- Live Site URL: [Live site](https://venerable-medovik-c380bd.netlify.app/)

## My process

Firstly i made a rough blueprint of the site then i figured out where to use what element and which element should be nested into other and which elements should have classes and ids. After taking care of html and css i started using some JavaScript to make my site interactive like making topbar disappear when on top of the site and making it appear agian when we scroll a little down. I also used JS to make the ellipsis interactive.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Grid
- JavaScript

### What I learned

i have lerned some new JS functions like window.pageYOffset and how to add or remove a class from an element using JS. It is done as mentioned below:-

```js
const nav = document.querySelector(".TopBar");
nav.classList.add("navHide");
nav.classList.remove("navHide");
```

i also learned how to remove a parent's event Listener from the children:-
```js
document.getElementById("overlay").addEventListener("click", function(e) {
        e = window.event || e; 
        if(this === e.target) {
            document.getElementById("overlay").style.display = "none";
        }
    });
```

I also learned about normalisation of CSS and why it is necessary for compatibility of your site with different browsers. Thats why i also added normalize.css in this site source files.

### Continued development

Cloning sites is a fun and learning experience and i will countinue this and clone more complex sites in future.

### Useful resources

- [mdn web docs](https://developer.mozilla.org/en-US/) - This helped me in understanding different html and css properties.
- [w3sschools](https://www.w3schools.com/) - Always a good site for basics of HTML/CSS and JS.

## Author

- LinkdIn - [Sourabh Thakur](https://www.linkedin.com/in/sourabh-thakur-b71a68250/)