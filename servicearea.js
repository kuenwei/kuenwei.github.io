
//var service = location.hash.replace("#","");

//document.write(service);

document.writeln('<div align="cetner">');
document.writeln(loadservice(service));
document.writeln('</div>');

function loadservice( chks ) {
  if ( chks == "tarot" ) {
    return '<div class="tumblr-post" data-href="https://embed.tumblr.com/embed/post/BVez7Cl_SeW9VrD92h36Og/138827117418" data-did="6d25b0a194833fe41169006793a6964d5eafdfc2" data-language="zh_TW"><a href="http://store.anashokunin.com/post/138827117418">點此觀看塔羅諮詢服務說明</a></div>  <script async src="https://assets.tumblr.com/post.js"></script>';
  }
 
  if ( chks == "srt" ) {
    return '<div class="tumblr-post" data-href="https://embed.tumblr.com/embed/post/BVez7Cl_SeW9VrD92h36Og/166244120028" data-did="034e3d691d73e022b6d388889f656caf968173ac" data-language="zh_TW"><a href="http://store.anashokunin.com/post/166244120028">SRT 諮詢服務說明請點此</a></div>  <script async src="https://assets.tumblr.com/post.js"></script>';
  }

  if ( chks == "eo" ) {
    return ' <div class="tumblr-post" data-href="https://embed.tumblr.com/embed/post/BVez7Cl_SeW9VrD92h36Og/166247108383" data-did="9a888bd92c15f2c50548301f4e995535ac9b6670" data-language="zh_TW"><a href="http://store.anashokunin.com/post/166247108383">點此訂製個人能量香氛</a></div>  <script async src="https://assets.tumblr.com/post.js"></script>';
  }
 
  if ( chks == "eoclass" ) {
    return '';
  }

   if ( chks == "srtclass" ) {
    return '<div class=\"tumblr-post\" data-href=\"https://embed.tumblr.com/embed/post/BVez7Cl_SeW9VrD92h36Og/167138732113\" data-did=\"8b15c681a1ed4bbfe5d851793ad500b7db337e46\" data-language=\"zh_TW\"><a href=\"http://store.anashokunin.com/post/167138732113\">點此查詢 SRT 最新課程</a></div>  <script async src=\"https://assets.tumblr.com/post.js\"></script>';
  } 

  return '';
}
