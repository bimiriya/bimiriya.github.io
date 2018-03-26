$(document).ready(() => {
  fixNavHeight();
  showItemTitle();
  // getSkills();
  init();
});

function fixNavHeight() {
  let heightNav = $(document).height();
  $('.navitem').height(heightNav / 5.1 + 'px');

  $(window).resize(function() {
    $('.navitem').height($(document).height() / 5.1 + 'px');
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

$('#projects button').click(showProject);

function showProject(event) {
  let github = $(event.target).data('github');
  let demo = $(event.target).data('demo');
  $('#viewProject').modal();
  $('#github').attr('href', github);
  $('#demo').attr('href', demo);
}