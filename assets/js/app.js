$(document).ready(() => {
  fixNavHeight();
  showItemTitle();
  fixSkillSize();
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

function fixSkillSize() {
  let skillWidth = $('.icons-main .col').width();
  $('.icons-main i').css('font-size', skillWidth + 'px');
  $('.icons-design i').css('font-size', skillWidth / 1.5 + 'px');
  $('.icons-other i').css('font-size', skillWidth / 2 + 'px');
  $('.icons-other .half').css('font-size', skillWidth / 2.5 + 'px');
}

$('#skill-set i').mouseover((event) => {
  $(event.target).addClass('colored');
  $(this).mouseleave((event) => {
    $(event.target).removeClass('colored');
  })
});