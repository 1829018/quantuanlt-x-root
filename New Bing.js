hostname = *.bing.com

var url = $request.url;
if (url === "https://www.bing.com/sydchat?iOS=1&cc=CN&setlang=zh-hans&retry=3&auth=1") {
    var redirectUrl = "https://www.bing.com/rewardsapp/reportActivity?cc=US&auth=1&iOS=1&setlang=zh-hans";
    $done({ response: { status: 302, headers: { Location: redirectUrl } } });
} else {
    $done({});
}

