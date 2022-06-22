let script=document.createElement('script');
let url ="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js";
script.src = url;
let verison = script.src.split('/')[6];
console.log(verison);
console.log(script);


