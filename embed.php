<?php
//----- 定義要擷取的網頁地址
$url = "https://blog.mrleftbrain.com/2018/03/misunderstanding-of-nothing-can-do.html";  

//----- 讀取網頁源始碼
$fp = file_get_contents($url);  

//----- 擷取 title 資訊
preg_match("/<title>(.*)<\/title>/s", $fp, $match);
$title = $match[1];

//----- 擷取 Description 及 Keywords
$metatag = get_meta_tags($url);
$description = $metatag["description"];
$keywords = $metatag["keywords"];

//----- 印出結果
echo "URL: $url<BR>";
echo "Title: $title<BR>";
echo "Description: $description<BR>";
echo "Keywords: $keywords<BR>";
?>