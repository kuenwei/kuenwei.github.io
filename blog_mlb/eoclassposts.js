
//var service = location.hash.replace("#","");

//document.write(service);

//document.writeln('<ul>');
//document.write('<li><a href="https://grz.fyi/UuwhSP" target="_blank">最新課程訊息</a></i>');
//document.writeln('<ul>');

//<!-- Recent Posts by Label Start -->
//<!-- code by BloggerSentral.com -->

function recentpostslist(json) {
 document.write('<ul>');
 for (var i = 0; i < json.feed.entry.length; i++)
 {
    for (var j = 0; j < json.feed.entry[i].link.length; j++) {
      if (json.feed.entry[i].link[j].rel == 'alternate') {
        break;
      }
    }
var entryUrl = "'" + json.feed.entry[i].link[j].href + "'";//bs
var entryTitle = json.feed.entry[i].title.$t;
var item = "<li>" + "<a href="+ entryUrl + '" target="_blank">' + entryTitle + "</a> </li>";
 document.write(item);
 }
 document.write('</ul>');
 }

document.writeln('<script src="'+location.protocol+"//"+location.hostname+'/feeds/posts/summary/-/精油抓周?max-results=100&alt=json-in-script&callback=recentpostslist"></script>');
//document.writeln('<span style="font-size: 80%; float:right;">Get this <a href="http://www.bloggersentral.com/2010/04/list-recent-posts-by-label.html">widget</a></span>');
