
$(function (){
  $('.toast').toast('show');
  $('.carousel').carousel({
  interval: 3000
});
  $("a").click(function(event){
    if(this.hash !== "") {
      event.preventDefault();

      var gato = this.hash;

      $("html, body").animate({
        scrollTop: $(gato).offset().top
      }, 800, function() {
        window.location.hash = gato;
      });
    }

  });
  $('[data-toggle="popover"]').popover();
  $('[data-toggle="tooltip"]').tooltip()
});
