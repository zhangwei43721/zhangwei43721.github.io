var posts=["2025/03/05/数据库复习/","2025/03/05/华为ICT网络赛道初级知识点汇总笔记/","2025/03/05/IOS小火箭教程/","2025/03/04/Java复习/","2025/03/04/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };