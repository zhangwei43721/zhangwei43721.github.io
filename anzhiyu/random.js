var posts=["posts/15440.html","posts/29817.html","posts/49927.html","posts/48635.html","posts/3228.html","posts/3106.html","posts/28982.html","posts/58559.html","posts/58575.html","posts/50562.html","posts/45596.html","posts/61711.html","posts/51347.html","posts/55986.html","posts/16107.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };