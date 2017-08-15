export const registerListener = (event, func) => {
  if (window.addEventListener) {
    window.addEventListener(event, func)
  } else {
    window.attachEvent('on' + event, func)
  }
}

let images = document.querySelectorAll('img[data-src]');

export const lazyLoad = () => {
  for(var i=0; i<images.length; i++){
    if (isInViewport(images[i])) {
      if (images[i].getAttribute('data-src')) {
        images[i].src = images[i].getAttribute('data-src');
        images[i].removeAttribute('data-src');
      }
    }
  }
  cleanLazy();
}


const isInViewport = (el) => {
  const rect = el.getBoundingClientRect();
  return (
    rect.bottom >= 0 &&
    rect.right >= 0 &&
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.left <= (window.innerWidth || document.documentElement.clientWidth)
   );

}

const cleanLazy = () => {
  images = Array.prototype.filter.call(images, (l) => {
    return l.getAttribute('data-src');
  })
}