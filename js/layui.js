layui.use(function () {
    var layer = layui.layer;
    var util = layui.util;
    // 批量事件
    util.on('lay-on', {
        alert: function () {
            layer.alert('对话框内容');
        },
        confirm: function () {
            layer.confirm('一个询问框的示例？', {
                btn: ['确定', '关闭'] //按钮
            }, function () {
                layer.msg('第一个回调', { icon: 1 });
            }, function () {
                layer.msg('第二个回调', {
                    time: 20000, // 20s 后自动关闭
                    btn: ['明白了', '知道了']
                });
            });
        },
        msg: function () {
            layer.msg('一段提示信息');
        },
        page: function () {
            // 页面层
            layer.open({
                type: 1,
                area: ['420px', '240px'], // 宽高
                content: './index3.html'
            });
        },
        iframe: function () {
            // iframe 层
            layer.open({
                type: 2,
                title: 'iframe test',
                shadeClose: true,
                shade: 0.8,
                area: ['380px', '80%'],
                content: './index3.html' // iframe 的 url
            });
        },
        load: function () {
            var index = layer.load(0, { shade: false });
            setTimeout(function () {
                layer.close(index); // 关闭 loading
            }, 5000);
        },
        tips: function () {
            layer.tips('一个 tips 层', this, {
                tips: 1
            });
        },
        prompt: function () {
            layer.prompt({ title: '密令输入框', formType: 1 }, function (pass, index) {
                layer.close(index);
                layer.prompt({ title: '文本输入框', formType: 2 }, function (text, index) {
                    layer.close(index);
                    alert('您输入的密令：' + pass + '；文本：' + text);
                });
            });
        },
        photots: function () {
            layer.photos({
                photos: {
                    "title": "Photos Demo",
                    "start": 0,
                    "data": [
                        {
                            "alt": "layer",
                            "pid": 1,
                            "src": "https://unpkg.com/outeres/demo/layer.png",
                        },
                        {
                            "alt": "壁纸",
                            "pid": 3,
                            "src": "https://unpkg.com/outeres/demo/000.jpg",
                        },
                        {
                            "alt": "浩瀚宇宙",
                            "pid": 5,
                            "src": "https://unpkg.com/outeres/demo/outer-space.jpg",
                        }
                    ]
                }
            });
        }
    });
});