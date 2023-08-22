function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

$(function () {
    $(document).scroll(function () {
        var $nav = $("#mainNavbar");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
});




  const modals = document.querySelectorAll('.modal');

  modals.forEach(modal => {
    let touchStartX = 0;
    let touchEndX = 0;

    modal.addEventListener('touchstart', (e) => {
      touchStartX = e.touches[0].clientX;
    });

    modal.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].clientX;

      // Determine the swipe direction and distance
      const swipeDistance = touchEndX - touchStartX;

      // You can adjust the threshold value based on your needs
      const swipeThreshold = 100;

      if (swipeDistance > swipeThreshold) {
        $(modal).modal('hide'); // Hide the Bootstrap modal
      }
    });

    // Bootstrap modal events
    $(modal).on('hidden.bs.modal', () => {
      // Reset modal content on modal hide event
      modal.querySelector('.modal-dialog').style.left = '50%';
      modal.querySelector('.modal-dialog').style.top = '50%';
    });

    $(modal).on('show.bs.modal', () => {
      // Reset modal position on modal show event
      modal.querySelector('.modal-dialog').style.left = '50%';
      modal.querySelector('.modal-dialog').style.top = '50%';
    });
  });
