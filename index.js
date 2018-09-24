/****************************** DON'T ALTER ******************************/
function fadeOut(el) {
  el.classList.add("fade-up-out")
  setTimeout(() => {
    el.style.opacity = 0
    el.classList.remove("fade-up-out")
    el.style.pointerEvents = "none"
  }, FADEDURATION)
}

function fadeIn(el) {
  el.classList.add("fade-down-in")
  setTimeout(() => {
    el.style.opacity = 1
    el.classList.remove("fade-down-in")
    el.style.pointerEvents = "auto"
  }, FADEDURATION)
}

function transitionPage(el, groupOut, groupIn) {
  fadeAllOut(el, groupOut)
  setTimeout(() => {
    fadeAllIn(groupIn)
  }, LONGESTPOSSIBLE)
}
/*************************************************************************/

function delayedFadeOut(div, range) {
  // Your solution here
  fadeOut(div)
}

function delayedFadeIn(div, range) {
  // Your solution here
  setTimeout( () => {
    fadeIn(div)
  }, range)
}

function fadeAllOut(el, group) {
  // Your solution here
  let fadeOutTimer = 100;
  group.forEach(div => {
    if(div === el){
      setTimeout( () => {
        delayedFadeOut(div);
      }, 500);
    } else {
      setTimeout( () => {
        fadeOutTimer += 100;
        delayedFadeOut(div);
      }, fadeOutTimer);
    }
  });
}

function fadeAllIn(group) {
  // Your solution here
  let fadeInTimer = 500;
  group.forEach(div => {
    setTimeout( () => {
      fadeInTimer += 100;
      delayedFadeIn(div, fadeInTimer)
    }, FADEDURATION);
  })
}
