$(document).ready(function() {
  const MARGIN_RIGHT = 10;
  const slider = $('.slides');
  const slideWidth = $('.slides li:first-child').outerWidth();

  const findIndexOfSelectedSlide = function(slides, selectedSlide) {
    let index, next, prev;
    $(slides).each(function(i) {
      if ($(this).data('slide') === selectedSlide) {
        index = i;
        next = $(this).next();
        prev = $(this).prev();
      }
    })

    return [prev, index, next];
  }

  $('#next-btn').on('click', function() {
    const selectedSlide = $('.slides').data('selected');
    const [_, index, next] = findIndexOfSelectedSlide($('.slides li'), selectedSlide);
    if (next.length) {
      const translation = (slideWidth + MARGIN_RIGHT) * (index + 1);
      $('.slides').data('selected', $(next).data('slide'));

      $(slider).css({
        'transform': `translateX(-${translation}px)`,
      });
    }
  })

  $('#prev-btn').on('click', function() {
    const selectedSlide = $('.slides').data('selected');
    const [prev, index, _] = findIndexOfSelectedSlide($('.slides li'), selectedSlide);
    if (prev.length) {
      const translation = (slideWidth + MARGIN_RIGHT) * (index - 1);
      $('.slides').data('selected', $(prev).data('slide'));

      $(slider).css({
        'transform': `translateX(-${translation}px)`,
      });
    }
  })

  $('.slides li').on('mouseenter', function() {
    $(this) .css({
      'background-color': 'goldenrod'
    })
   });
  $('.slides li').on('mouseleave', function() { console.log('BuhBye!') });
});