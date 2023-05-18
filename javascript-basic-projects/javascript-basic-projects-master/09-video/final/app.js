const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");

btn.addEventListener("click", function () {
  if (!btn.classList.contains("slide")) {
    btn.classList.add("slide");
    video.pause();
  } else {
    btn.classList.remove("slide");
    video.play();
  }
});

// preloader
const preloader = document.querySelector(".preloader");

window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader");
});

// DOM api


/*

The first block of code sets up a click event listener 
on a button with a class of "switch-btn" and a video 
element with a class of "video-container". When the 
button is clicked, the code checks if the button has 
a class of "slide" using the classList property. If 
it does not have the class, the class "slide" is added 
to the button element and the video is paused using 
the pause() method. If the button has the class "slide", 
the class is removed and the video is played using 
the play() method.

The second block of code sets up a preloader animation. 
It selects an element with a class of "preloader" and 
sets up a load event listener on the window object. 
When the window is fully loaded, the 
class "hide-preloader" is added to the preloader 
element, which presumably has some CSS rules to hide 
it from view. This allows the preloader animation to 
be displayed until the page is fully loaded, at which 
point it disappears.


*/
