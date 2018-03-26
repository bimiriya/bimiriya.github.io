$(document).ready(() => {
  fixNavHeight();
  fixProfileHeight();
  showItemTitle();
  getSkills();
  init();
  $('nav a[href*="#"]').click(smoothScroll);
  $('#navwide a[href*="#"]').click(smoothScroll);
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
  // On-page links
  if (
    location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') 
    && 
    location.hostname === this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 0, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(':focus')) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
};

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