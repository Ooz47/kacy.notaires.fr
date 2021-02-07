$(document).ready(function(){




  $('body').delegate('.tarteaucitronAllow, .tarteaucitronDeny', 'click touchstart', function () {
    console.log('clieck');
    setTimeout(function() { 
        tarteaucitron.userInterface.closePanel();
    }, 1000);
  
});
});