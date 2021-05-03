
$(function(){
    // 定义分享的方案


    var shareobj = {
        title:document.title.substring(0,document.title.length-5),
        desc:'知识分享，日常记录',
        link:location.href,
        imgUrl:location.origin + '/images/photo.jpg'
    };

    var timeObj = {
        title:document.title.substring(0,document.title.length-5),
        link:location.href,
        imgUrl:location.origin + '/images/photo.jpg' // 此路径是在\themes\next\source\images\xx.jpg
    }

    //获取微信接口相关信息
    var url = encodeURIComponent(location.href); // 分享的地址，我这里是java的代码， 手动修改成自己的地址
    console.log(url);
     $.getJSON(url, function(json) {
        if (json.success) {
            var cg = json.msg;
            cg.debug = false;
            wx.config(cg);
            wx.ready(function() {
                wx.showOptionMenu();
                wx.hideMenuItems({
                    menuList: ['menuItem:share:qq','menuItem:share:weiboApp','menuItem:share:facebook','menuItem:share:QZone']
                });
                wx.onMenuShareTimeline(timeObj);
                wx.onMenuShareAppMessage(shareobj);
            });
        } else {
            alert(json.msg);
        }
    });
});
