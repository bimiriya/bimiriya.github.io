$(document).ready(() => {
  fixNavHeight();
  showItemTitle();
  getSkills();

  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, #contents').animate({
        scrollTop: $(hash).offset().top
      },800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

function fixNavHeight() {
  let heightNav = $(document).height();
  $('.nav-item').height(heightNav / 5.1 + 'px');
}

function showItemTitle() {
  $('.nav-item').mouseover((event) => {
    let data = $(event.target).find('.item').data('item');
    $(event.target).find('.item').html(`<p>${data}</p>`)
  })
  $('.nav-item').mouseleave((event) => {
    $('.nav-item .item').find('p').remove()
  })
}

function getSkills() {
  $.each(skills, (name, obj) => {
    $('#skill-set .row').append(`<div class="col-md-3" data-tag="${obj.tag}">
                              ${obj.html}
                              <span>${name}</span>
                              </div>`)
    });
    let skillWidth = $('#skill-set .col-md-3').width();
    $('#skill-set i').css('font-size', skillWidth + 'px');
}
