// Magnific Popup
$(function(){
  $('#portfolio').magnificPopup({
    delegate: 'a',
    type: 'image',
    image: {
      cursor: null,
      titleSrc: 'title'
    },
    gallery: {
      enabled: true,
      preload: [0,1], // Will preload 0 - before current, and 1 after the current image
      navigateByImgClick: true
        }
  });

  $('.open-popup-link-one').magnificPopup({
      items: {
          src: '#video-one',
          type: 'inline'
      }
    });
  $('.open-popup-link-two').magnificPopup({
      items: {
          src: '#video-two',
          type: 'inline'
      }
    });
  $('.open-popup-link-three').magnificPopup({
      items: {
          src: '#video-three',
          type: 'inline'
      }
    });
  $('.open-popup-link-four').magnificPopup({
      items: {
          src: '#video-four',
          type: 'inline'
      }
    });
  $('.open-popup-link-five').magnificPopup({
      items: {
          src: '#video-five',
          type: 'inline'
      }
    });
  $('.open-popup-link-six').magnificPopup({
      items: {
          src: '#video-six',
          type: 'inline'
      }
    });
});
