    $("#file").click(function() {
      $("video").attr("poster", "");
    });
    $("#file").change(function() {
      for (var i = 0; i < this.files.length; i++) {
        $("video").attr("src", URL.createObjectURL(this.files[i]));
      }
    });
    $(function() {
      mVideo = document.getElementById("video");
      $('#play').click(function() {
        mVideo.play();
      });
      $('#pause').click(function() {
        mVideo.pause();
      });
      $('#reset').click(function() {
        mVideo.pause();
        mVideo.currentTime = 0;
      });
      $('#skip').click(function() {
        mVideo.currentTime += 1;
      });
      $('#back').click(function() {
        mVideo.currentTime -= 1;
      });
      mVideo.addEventListener("timeupdate", function() {
        var now = mVideo.currentTime.toFixed(3);
        var all = mVideo.duration.toFixed(3);
        $('#now').html('Current Time：' + now + 's');
        $('#all').html('Total Time：' + all + 's');
      });
    });
    
    $("#reload").click(function(){
        var text = $("#content").val();
                      
        var blob = new Blob([ text ], { "type" : "text/plain" });
        var blobURL = window.URL.createObjectURL(blob);
        
        $("#download").attr("href",blobURL);
        
        $("track").removeAttr("src", blobURL);
        $("track").attr("src", blobURL);
    });
