$('.navitem').mouseover(event => {
  let img = event.target;

  var cssSelector = anime({
    targets: img.querySelector('img'),
    translateY: -5
  });
  var cssSelector = anime({
    targets: img.querySelector('.item'),
    translateX: 45,
  });
});

$('.navitem').mouseleave(event => {
  let img = event.target;

  var cssSelector = anime({
    targets: img.querySelector('img'),
    translateY: 5
  });
  var cssSelector = anime({
    targets: img.querySelector('.item'),
    translateX: -45,
  });
});

var lineDrawing = anime({
  targets: '#lineDrawing .lines path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 1500,
  delay: function(el, i) {
    return i * 250;
  },
  direction: 'alternate',
  loop: true
});

var lineDrawing = anime({
  targets: '#lineDrawing .lines path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 1500,
  delay: function(el, i) { return i * 250 },
  direction: 'alternate',
  loop: true
});