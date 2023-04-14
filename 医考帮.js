/******************************
️如果放远程，请把Asd.js替换成运程链接️
  🧚🏻‍♂️作者：魔法师、木木
  wx交流群：1077223830
🫧脚本名称:医考帮会员解锁 A+
🫧建议配合working copy一起食用
️working copy下载地址https://apps.apple.com/app/id896694807️
*******************************
%¥
[rewrite_local]
^https?:\/\/api\.yikaobang\.com\.cn\/user\/main\/vip|https?:\/\/api\.yikaobang\.com\.cn\/index\.php\/activity\/main\/chapterLock.*? url script-response-body https://raw.githubusercontent.com/1829018/quantuanlt-x-root/main/%E5%8C%BB%E8%80%83%E5%B8%AE.js


[mitm]
hostname = api.yikaobang.com.cn,api.yikaobang.com.cn
%¥
*******************************/
var body=$response.body;
body = body.replace(/"is_vip\":"\d"/g,'"is_vip":"1"');
body = body.replace(/"vip_deadline\":""/g,'"vip_deadline":"解锁成功"');
body = body.replace(/pass\":\d/g,'pass":1');
$done(body);
