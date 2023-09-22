(function () {
    // 1. 实例化对象
    var myChart = echarts.init(document.querySelector("#tab1 .map .chart"));
    // 2. 指定配置和数据
    // 2. 指定配置和数据
    var myChartOpt = {
        tooltip: {
            formatter: function (params) {
                const data = params.data;
                return data.name + "<br />Level：" + data.value;
            }
        },
        visualMap: {
            type: "piecewise",
            // splitNumber: 4,
            // itemWidth: 10,
            // itemHeight: 10,
            // itemGap: 5,
            // textGap: 5,
            textStyle: {
                fontSize: 10,
                color: "#b0c2f9",
            },
            // min: 1,
            // max: 5,
            precision: 0,
            calculable: true,
            seriesIndex: [0],
            pieces: [
                { value: 1, label: "level1:低", color: 'rgb(0,100,200)' },
                { value: 2, label: "level2:较低", color: 'rgb(0,120,120)' },
                { value: 3, label: "level3:中等", color: 'yellow' },
                { value: 4, label: "level4:较高", color: 'orange' },
                { value: 5, label: "level5:高", color: 'red' }
            ]

        },
        geo: {
            map: "jiangsu",
            roam: true, //开启鼠标缩放和漫游
            zoom: 1, //地图缩放级别
            selectedMode: "single",

            top: 10,
            bottom: 10,
            layoutCenter: ["50%", "50%"],
            layoutSize: "100%", //保持地图宽高比
            label: {
                show: true,
                fontSize: 10,
                color: "#ceac09"
            }
        },
        series: [{
            name: "地域分布",
            type: "map",
            geoIndex: 0
        }]
    };
    myChart.setOption(myChartOpt);
    $.ajax({
        url: "http://127.0.0.1:8000/daping/region_count",
        dataType: "json"
    }).done(function () {
        $("#myChart").addClass("chart-done");
    }).done(function (data) {
        //console.log('Data: ', data);
        const chartData = [];
        for (let i in data) {
            chartData.push({
                name: i,
                value: data[i]
            });
        }
        myChart.setOption({
            series: [{
                name: "地域分布",
                data: chartData
            }]
        });
    }).fail(function (jqXHR) {
        console.log("Ajax Fail: ", jqXHR.status, jqXHR.statusText);
    });
})();
