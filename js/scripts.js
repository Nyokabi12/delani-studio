$(document).ready(function() {
    $("#des").click(function() {
     $('.img1').slideToggle(2800);
      $(".p1").slideToggle(2800);
    });
    $("#dev").click(function() {
      $(".p2, .img2").slideToggle(2800);
    });
    $("#products").click(function() {
      $(".p3, .img3").slideToggle(2800);
    });
  
    $('#hoVer').hover(function() {
      $(this).children(".overlay").fadeToggle(1000, "linear");
      $(this).toggle(css('.'))
      $(".write").toggle();
      $('.line').showToggle();
  
     
  });
  $('.line').hover(function() {
    $(this).animate({
      opacity: '1'
    });
  },
  function() {
    $(this).animate({
      opacity: '0'
    });
  });
  
    $('.line').hover(function(){
        $(this).animate({
            opacity: '0'
        })
    })
  
  
  
    $("#submit").click(function(event){
      var userName=$("#name").val();
      var userEmail=$("#email").val();
      var userMessage=$("#comments").val();
  /** user logic interface */
      if((userName!=="") && (userEmail !== "") && (userMessage !="")){
          alert(userName + " ,We have received your message.Thank you for reaching out to us");
      }
      else 
      {
          alert("Fill the form please");
      }
      event.preventDefault();
  });
  
  });
  
  
  