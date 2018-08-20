$(function() {
    $("[data-toggle='popover']").popover({
        html : true,
        title: title(),
        delay:{show:500, hide:1000},
        content: function() {
          return content();
        }
    });
});

//模拟动态加载标题(真实情况可能会跟后台进行ajax交互)
function title() {
    return '';
}

//模拟动态加载内容(真实情况可能会跟后台进行ajax交互)
function content() {
    // var data = $("<form><ul><li><span aria-hidden='true' class='icon_globe'></span>&nbsp;<font>粉丝数:</font>7389223</li>" +
    //          "<li><span aria-hidden='true' class='icon_piechart'></span>&nbsp;<font>关注:</font>265</li>" +
    //          "<li><span aria-hidden='true' class='icon_search_alt'></span>&nbsp;<font>微博:</font>645</li>" +
    //          "<li><span aria-hidden='true' class='icon_pens_alt'></span>&nbsp;<font>所在地:</font>台湾</li>" +
    //          "<input id='btn' type='button' value='关注' onclick='test()'/></form>");
   //  var data = $("<div style='width: 120px;text-align: center'>求职简历</div>"+
   //      "<div style='width: 120px;text-align: center'>姓名：王东臣</div>"+
   //      "<div style='width: 120px;text-align: center'>年龄：23</div>"+
   //  "<div style='width: 120px;text-align: center'>性别：男</div>"+
   //  "<div style='width: 120px;text-align: center'>籍贯：河南</div>"+
   //  "<div style='width: 120px;text-align: center'>学历：本科</div>"
   // )

    var data = $("<div>" +
        "<div style='width: 120px;text-align: center'>求职简历</div>"+
        "<div style='width: 120px;text-align: center'>姓名：王东臣</div>"+
    "<div style='width: 120px;text-align: center'>年龄：23</div>"+
    "<div style='width: 120px;text-align: center'>性别：男</div>"+
    "<div style='width: 120px;text-align: center'>籍贯：河南</div>"+
    "<div style='width: 120px;text-align: center'>学历：本科</div>"+
    "</div>"
    )
    return data;
}