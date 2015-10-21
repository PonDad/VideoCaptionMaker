/**
 * Create a new Window for the app
 */
chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('www/index.html',
   {
    bounds: {
      width: 960,
      height: 720,
      top:0,
      left:250
    }
  }
  
  );
});
