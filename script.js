// document.getElementById('changeStyleButton').addEventListener('click', function() {
//  x
// });

document.getElementById('button1').addEventListener('click', function() {
    console.log('Button 1 clicked!');
    window.location.href = 'index.html';
});


document.addEventListener('DOMContentLoaded', function() {
  var targetElement2 = document.getElementById('targetElement2');
  if (window.location.href.includes('eng.html')) {
      targetElement2.classList.add('greenStyle');
  }
});
// document.addEventListener('DOMContentLoaded', function() {
//   var targetButton = document.getElementById('button1');
//   if (window.location.href.includes('eng.html')) {
//       targetButton.classList.add('greenStyle');
//   }
// });
// document.addEventListener('DOMContentLoaded', function() {
//   var targetElement2 = document.getElementById('targetElement2');
//   if (window.location.href.includes('eng.html')) {
//       targetElement2.classList.add('greenStyle');
//   }
// });

document.getElementById('button2').addEventListener('click', function() {
    console.log('Button 2 clicked!');
    console.log('ciao')
    window.location.replace('eng.html');
});

//bottoni ig e fb
document.getElementById('button5').addEventListener('click', function() {
    console.log('Button 5 clicked!');
    window.location.href = 'https://www.instagram.com/edera.collective/';
});

document.getElementById('button6').addEventListener('click', function() {
    console.log('Button 6 clicked!');
    window.location.href = 'https://linktr.ee/edera.collective?utm_source=linktree_profile_share&ltsid=6bbde1fe-0080-4103-8a03-839a0d53d440';
});



  // parte di comunicazione con p5

  // document.addEventListener('DOMContentLoaded', function() {
  //   let spanHover = document.getElementById('spanhover');
  
  //   spanHover.addEventListener('mouseover', function() {
  //     // Trigger a custom event named "spanHovered"
  //     const spanHoverEvent = new Event('spanHovered');
  //     document.dispatchEvent(spanHoverEvent);
  //   });
  // });
  
  


