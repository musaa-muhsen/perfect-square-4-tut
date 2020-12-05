    
//      const sizeMatters =  document.querySelector('.square').offsetHeight;
// //console.log(sizeMatters)
//      if (sizeMatters === 0) {
//         const width = document.querySelector(".square").offsetWidth;
//         document.querySelector('.square').style.height = width + "px";
//      }
//onresize="myFunction()"




window.addEventListener('resize', () => {
    const width = document.querySelector(".square").offsetWidth;
     console.log(width);
    //document.querySelector('.container').style.gridTemplateRows = repeat;
     //document.querySelector('.container').style.setProperty('grid-template-rows: repeat(3, 300px)');
     document.querySelector('.container').style.setProperty('grid-auto-rows', `${width}px`);
});



//check for Navigation Timing API support
// if (window.performance) {
//   console.info("window.performance works fine on this browser");
// }
// console.info(performance.navigation.type);
// if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
//   console.info( "This page is reloaded" );
// } else {
//   console.info( "This page is not reloaded");
// }

window.addEventListener('load', () => {
const width = document.querySelector(".square").offsetWidth;
const widthS = width - 2;
 //document.querySelector('.square').style.height = width + "px";
 document.querySelector('.container').style.setProperty('grid-auto-rows', `${widthS}px`);
});


// document.querySelector('.square').style.height = width;