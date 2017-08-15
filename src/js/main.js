import styles from './../css/main.css';


// NOTE: TO use Jquery, just call the modules you want
// var $ = require('jquery/src/core');
// require('jquery/src/core/init');
// require('jquery/src/manipulation');

// OR, use all of them
// var $ = require('jquery/src/jquery');

// And write your code
// $('body').append('<p>Jquery is working</p>');
//
// You can also "require" any script from its location in the node modules folder. Webpack often knows what to look for, but you can add a script directly like this:
// var javascriptthingy = require('path/to/folder/file.js');

import { lazyLoad, registerListener } from './lazyLoad.js';
const img = document.querySelectorAll('img[data-src]');
registerListener('scroll', lazyLoad);

registerListener('load', lazyLoad);
// registerListener('scroll', lazyLoad);
//
// var lazy = [];
//
// function setLazy(){
//     lazy = document.getElementsByClassName('lazy');
//     console.log('Found ' + lazy.length + ' lazy images');
// }
//
// function lazyLoad(){
//     for(var i=0; i<lazy.length; i++){
//         if(isInViewport(lazy[i])){
//             if (lazy[i].getAttribute('data-src')){
//                 lazy[i].src = lazy[i].getAttribute('data-src');
//                 lazy[i].removeAttribute('data-src');
//             }
//         }
//     }
//
//     cleanLazy();
// }
//
// function cleanLazy(){
//     lazy = Array.prototype.filter.call(lazy, function(l){ return l.getAttribute('data-src');});
// }
//
// function isInViewport(el){
//     var rect = el.getBoundingClientRect();
//
//     return (
//         rect.bottom >= 0 &&
//         rect.right >= 0 &&
//         rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
//         rect.left <= (window.innerWidth || document.documentElement.clientWidth)
//      );
// }
//
// function registerListener(event, func) {
//     if (window.addEventListener) {
//         window.addEventListener(event, func)
//     } else {
//         window.attachEvent('on' + event, func)
//     }
// }