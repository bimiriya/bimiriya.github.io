$(document).ready(() => {
  fixNavHeight();
  fixProfileHeight();
  showItemTitle();
  getSkills();
  init();
  $('#navwide a').on('click', smoothScroll);
});

function fixNavHeight() {
  let heightNav = $(document).height();
  $('.navitem').height(heightNav / 5.1 + 'px');

  $(window).resize(function() {
    $('.navitem').height($(document).height() / 5.1 + 'px');
  });
}

function fixProfileHeight() {
  let widthtLal = $('.lala').width();
  $('.lala').height(widthtLal + 'px');

  $('.lala').resize(function() {
    $('.lala').height($('.lala').width());
  });
}

function showItemTitle() {
  $('.navitem').mouseover(event => {
    let data = $(event.target).find('.item').data('item');
    $(event.target).find('.item').html(`<p>${data}</p>`);
  });
  $('.navitem').mouseleave(event => {
    $('.navitem .item').find('p').remove();
  });
}

function getSkills() {
  $.each(skills, (name, obj) => {
    $('#skill-set .row').append(`<div class="col-3" data-tag="${obj.tag}">
                              ${obj.html}
                              <span>${name}</span>
                              </div>`);
  });
  let skillWidth = $('#skill-set .col-md-3').width();
  $('#skill-set i').css('font-size', skillWidth + 'px');
}

function smoothScroll(event) {
  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== '') {
    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, #contents').animate(
      {
        scrollTop: $(hash).offset().top
      },
      800,
      function() {
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      }
    );
  } // End if
}

function init() {
  var speed = 330,
    easing = mina.backout;

  [].slice.call(document.querySelectorAll('#projects .row .col > a')).forEach(function(el) {
    var s = Snap(el.querySelector('svg')), path = s.select('path'),
      pathConfig = {
        from: path.attr('d'),
        to: el.getAttribute('data-path-hover')
      };

    el.addEventListener('mouseenter', function() {
      path.animate({ 'path': pathConfig.to }, speed, easing);
    });

    el.addEventListener('mouseleave', function() {
      path.animate({ 'path': pathConfig.from }, speed, easing);
    });
  });
}