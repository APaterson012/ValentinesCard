$(document).ready(function() {
    const envelope = $('#envelope');
    const btnOpen = $('#open');
    const btnReset = $('#reset');
  
    // Open the envelope on click
    envelope.on('click', open);
    btnOpen.on('click', open);
    
    // Close the envelope when reset is clicked
    btnReset.on('click', close);
  
    function open() {
      envelope.removeClass('close').addClass('open');
    }
  
    function close() {
      envelope.removeClass('open').addClass('close');
    }
  });
  