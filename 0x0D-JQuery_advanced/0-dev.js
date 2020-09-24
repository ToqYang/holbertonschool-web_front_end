// Verify if JQuery is loaded
document.addEventListener("DOMContentLoaded", function(event) {
  if (typeof jQuery == 'undefined') {
    // jQuery IS NOT loaded, do stuff here.
    console.log('jQuery has not been loaded correctly');
  } else {
    console.log('jQuery has been loaded correctly');
  }
})