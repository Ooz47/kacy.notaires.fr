$(document).ready(function(){




  $('body').delegate('.tarteaucitronAllow, .tarteaucitronDeny, #tarteaucitronPrivacyUrl', 'click touchstart', function () {
   // console.log('clieck');
    setTimeout(function() { 
        tarteaucitron.userInterface.closePanel();
    }, 1000);
  
});
});