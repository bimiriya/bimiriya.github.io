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