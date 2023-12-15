const shareButton = document.querySelector('.share-button');
const shareButton2 = document.querySelector('.share-button2');

shareButton.addEventListener('click', event => {
  if (navigator.share) { 
   navigator.share({
      title: 'La Boom Radio',
      text: 'La Boom Radio online, Con DJ y Locutor en vivo, mezclas y música variada.',
      url: 'https://www.laboomradio.com'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
    .catch(console.error);
    } else {
        shareDialog.classList.add('is-open');
    }
});

shareButton2.addEventListener('click', event => {
  if (navigator.share) { 
   navigator.share({
      title: 'La Boom Radio',
      text: 'La Boom Radio online, Con DJ y Locutor en vivo, mezclas y música variada.',
      url: 'https://www.laboomradio.com'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
    .catch(console.error);
    } else {
        shareDialog.classList.add('is-open');
    }
});

// closeButton.addEventListener('click', event => {
//   shareDialog.classList.remove('is-open');
// });