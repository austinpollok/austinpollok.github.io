// Custom JavaScript to disable greedy navigation and keep all tabs visible

$(document).ready(function() {
  // Disable greedy navigation by overriding the updateNav function
  if (typeof updateNav === 'function') {
    // Store original function
    var originalUpdateNav = updateNav;
    
    // Override with our version that doesn't hide items
    window.updateNav = function() {
      // Force all items to stay in visible-links
      var $nav = $('#site-nav');
      var $vlinks = $('#site-nav .visible-links');
      var $hlinks = $('#site-nav .hidden-links');
      var $btn = $('#site-nav button');
      
      // Move all items back to visible links
      $hlinks.children().appendTo($vlinks);
      
      // Hide the button
      $btn.addClass('hidden');
      $hlinks.addClass('hidden');
    };
    
    // Call our version
    updateNav();
  }
  
  // Also prevent the resize listener from calling the original function
  $(window).off('resize.updateNav');
  $(window).on('resize', function() {
    updateNav();
  });
}); 