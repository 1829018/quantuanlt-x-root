/******************************
⚠️如果放远程，请把ya.js替换成运程链接⚠️
  🧚🏻‍♂️作者：🍡魔法师、木木🍡
   交流群：1077223830
*******************************

[rewrite_local]
https:\/\/cat-match-static\.easygame2021\.com\/datas\/gd_skin_list\.json script-response-body https://raw.githubusercontent.com/1829018/quantuanlt-x-root/main/ya.js


[mitm]
hostname = cat-match-static.easygame2021.com

*******************************/
var body=$response.body;
body = body.replace(/clothesId":\d+/g,'clothesId": 1');
$done(body);
