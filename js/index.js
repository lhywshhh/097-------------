
// 柱状图1模块
// (function () {
//     // 实例化对象
//     var myChart = echarts.init(document.querySelector(".bar .chart"));
//     // 指定配置和数据
//     var option = {
//         color: ["#2f89cf"],
//         tooltip: {
//             trigger: "axis",
//             axisPointer: {
//                 // 坐标轴指示器，坐标轴触发有效
//                 type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
//             }
//         },
//         grid: {
//             left: "0%",
//             top: "10px",
//             right: "0%",
//             bottom: "4%",
//             containLabel: true
//         },
//         xAxis: [{
//             type: "category",
//             data: [
//                 "旅游行业",
//                 "教育培训",
//                 "游戏行业",
//                 "医疗行业",
//                 "电商行业",
//                 "社交行业",
//                 "金融行业"
//             ],
//             axisTick: {
//                 alignWithLabel: true
//             },
//             axisLabel: {
//                 textStyle: {
//                     color: "rgba(255,255,255,.6)",
//                     fontSize: "12"
//                 }
//             },
//             axisLine: {
//                 show: false
//             }
//         }],
//         yAxis: [{
//             type: "value",
//             axisLabel: {
//                 textStyle: {
//                     color: "rgba(255,255,255,.6)",
//                     fontSize: "12"
//                 }
//             },
//             axisLine: {
//                 lineStyle: {
//                     color: "rgba(255,255,255,.1)"
//                     // width: 1,
//                     // type: "solid"
//                 }
//             },
//             splitLine: {
//                 lineStyle: {
//                     color: "rgba(255,255,255,.1)"
//                 }
//             }
//         }],
//         series: [{
//             name: "直接访问",
//             type: "bar",
//             barWidth: "35%",
//             data: [200, 300, 300, 900, 1500, 1200, 600],
//             itemStyle: {
//                 barBorderRadius: 5
//             }
//         }]
//     };

//     // 把配置给实例对象
//     myChart.setOption(option);
//     window.addEventListener("resize", function () {
//         myChart.resize();
//     });

//     // 数据变化
//     var dataAll = [{
//         year: "2019",
//         data: [200, 300, 300, 900, 1500, 1200, 600]
//     },
//     {
//         year: "2020",
//         data: [300, 400, 350, 800, 1800, 1400, 700]
//     }
//     ];

//     document.querySelector(".bar h2").addEventListener("click", function (e) {
//         var i = e.target == this.children[0] ? 0 : 1;
//         option.series[0].data = dataAll[i].data;
//         myChart.setOption(option);
//     });
// })();

function createdata(data) {
    localStorage.setItem("iframedata", JSON.stringify(data));
}

//日历饼图交互探测器
(function createpie() {
    data = localStorage.getItem("iframedata");
    if (data != undefined) {
        var myChart = echarts.init(document.querySelector("#tab1 .bar .chart"));

        var option;
        // This example requires sECharts v5.4.0 or later
        var cellSize = [5, 5];  //日历大少
        var pieRadius = 25;  //饼图大小
        var app = {};
        var incomclass =
            [
                [
                    { name: "药费", value: 900 },
                    { name: "检查", "value": 1212 },
                    { name: "检查", "value": 1212 }
                ],
                [
                    { name: "药费", value: 900 },
                    { name: "检查", "value": 1212 },
                    { name: "检查", "value": 1212 }
                ], [
                    { name: "药费", value: 900 },
                    { name: "检查", "value": 1212 },
                    { name: "检查", "value": 1212 }
                ], [
                    { name: "药费", value: 900 },
                    { name: "检查", "value": 1212 },
                    { name: "检查", "value": 1212 }
                ], [
                    { name: "药费", value: 900 },
                    { name: "检查", "value": 1212 },
                    { name: "检查", "value": 1212 }
                ], [
                    { name: "药费", value: 900 },
                    { name: "检查", "value": 1212 },
                    { name: "检查", "value": 1212 }
                ], [
                    { name: "药费", value: 900 },
                    { name: "检查", "value": 1212 },
                    { name: "检查", "value": 1212 }
                ], [
                    { name: "药费", value: 900 },
                    { name: "检查", "value": 1212 },
                    { name: "检查", "value": 1212 }
                ], [
                    { name: "药费", value: 900 },
                    { name: "检查", "value": 1212 },
                    { name: "检查", "value": 1212 }
                ], [
                    { name: "药费", value: 900 },
                    { name: "检查", "value": 1212 },
                    { name: "检查", "value": 1212 }
                ], [
                    { name: "药费", value: 900 },
                    { name: "检查", "value": 1212 },
                    { name: "检查", "value": 1212 }
                ],
                [
                    { name: "药费", value: 900 },
                    { name: "检查", "value": 1212 },
                    { name: "检查", "value": 1212 }
                ], [
                    { name: "药费", value: 900 },
                    { name: "检查", "value": 1212 },
                    { name: "检查", "value": 1212 }
                ], [
                    { name: "药费", value: 900 },
                    { name: "检查", "value": 1212 },
                    { name: "检查", "value": 1212 }
                ], [
                    { name: "药费", value: 900 },
                    { name: "检查", "value": 1212 },
                    { name: "检查", "value": 1212 }
                ], [
                    { name: "药费", value: 900 },
                    { name: "检查", "value": 1212 },
                    { name: "检查", "value": 1212 }
                ], [
                    { name: "药费", value: 900 },
                    { name: "检查", "value": 1212 },
                    { name: "检查", "value": 1212 }
                ], [
                    { name: "药费", value: 900 },
                    { name: "检查", "value": 1212 },
                    { name: "检查", "value": 1212 }
                ], [
                    { name: "药费", value: 900 },
                    { name: "检查", "value": 1212 },
                    { name: "检查", "value": 1212 }
                ], [
                    { name: "药费", value: 900 },
                    { name: "检查", "value": 1212 },
                    { name: "检查", "value": 1212 }
                ], [
                    { name: "药费", value: 900 },
                    { name: "检查", "value": 1212 },
                    { name: "检查", "value": 1212 }
                ], [
                    { name: "药费", value: 900 },
                    { name: "检查", "value": 1212 },
                    { name: "检查", "value": 1212 }
                ], [
                    { name: "药费", value: 900 },
                    { name: "检查", "value": 1212 },
                    { name: "检查", "value": 1212 }
                ], [
                    { name: "药费", value: 900 },
                    { name: "检查", "value": 1212 },
                    { name: "检查", "value": 1212 }
                ],
            ]

        //console.log('Data: ', data);

        const q1Data = {};
        const q2Data = {};
        const q3Data = {};
        //道路和人口
        // incomclass[0][0].name = "q1";
        // incomclass[0][0].value = data[0].roaddensity;
        // incomclass[0][1].name = "q2";
        // incomclass[0][1].value = data[1].popudensity;
        // incomclass[0][2].name = "q1∩q2";
        // incomclass[0][2].value = data[1].roaddensity;

        // //道路和聚集
        // incomclass[1][0].name = "q1";
        // incomclass[1][0].value = data[0].roaddensity;
        // incomclass[1][1].name = "q2";
        // incomclass[1][1].value = data[2].clusterdegree;
        // incomclass[1][2].name = "q1∩q2";
        // incomclass[1][2].value = data[2].roaddensity;

        // //人口和聚集
        // incomclass[2][0].name = "q1";
        // incomclass[2][0].value = data[1].popudensity;
        // incomclass[2][1].name = "q2";
        // incomclass[2][1].value = data[2].clusterdegree;
        // incomclass[2][2].name = "q1∩q2";
        // incomclass[2][2].value = data[2].popudensity;

        // //道路和高程均值
        // incomclass[3][0].name = "q1";
        // incomclass[3][0].value = data[0].roaddensity;
        // incomclass[3][1].name = "q2";
        // incomclass[3][1].value = data[3].elevationmean;
        // incomclass[3][2].name = "q1∩q2";
        // incomclass[3][2].value = data[3].roaddensity;

        // //人口和高程均值
        // incomclass[4][0].name = "q1";
        // incomclass[4][0].value = data[1].popudensity;
        // incomclass[4][1].name = "q2";
        // incomclass[4][1].value = data[3].elevationmean;
        // incomclass[4][2].name = "q1∩q2";
        // incomclass[4][2].value = data[3].popudensity;

        // //聚集和高程均值
        // incomclass[5][0].name = "q1";
        // incomclass[5][0].value = data[2].clusterdegree;
        // incomclass[5][1].name = "q2";
        // incomclass[5][1].value = data[3].elevationmean;
        // incomclass[5][2].name = "q1∩q2";
        // incomclass[5][2].value = data[3].clusterdegree;

        // //人口和高程标准
        // incomclass[6][0].name = "q1";
        // incomclass[6][0].value = data[1].popudensity;
        // incomclass[6][1].name = "q2";
        // incomclass[6][1].value = data[4].elevationstandard;
        // incomclass[6][2].name = "q1∩q2";
        // incomclass[6][2].value = data[4].popudensity;

        // //道路和高程标准
        // incomclass[7][0].name = "q1";
        // incomclass[7][0].value = data[0].roaddensity;
        // incomclass[7][1].name = "q2";
        // incomclass[7][1].value = data[4].elevationstandard;
        // incomclass[7][2].name = "q1∩q2";
        // incomclass[7][2].value = data[4].roaddensity;

        // //聚集和高程标准
        // incomclass[8][0].name = "q1";
        // incomclass[8][0].value = data[2].clusterdegree;
        // incomclass[8][1].name = "q2";
        // incomclass[8][1].value = data[4].elevationstandard;
        // incomclass[8][2].name = "q1∩q2";
        // incomclass[8][2].value = data[4].clusterdegree;

        // //高程均值和高程标准
        // incomclass[9][0].name = "q1";
        // incomclass[9][0].value = data[3].elevationmean;
        // incomclass[9][1].name = "q2";
        // incomclass[9][1].value = data[4].elevationstandard;
        // incomclass[9][2].name = "q1∩q2";
        // incomclass[9][2].value = data[4].elevationmean;

        // //道路密度和土壤混杂度
        // incomclass[10][0].name = "q1";
        // incomclass[10][0].value = data[0].roaddensity;
        // incomclass[10][1].name = "q2";
        // incomclass[10][1].value = data[5].soilmiscibility;
        // incomclass[10][2].name = "q1∩q2";
        // incomclass[10][2].value = data[5].roaddensity;

        // //人口和土壤
        // incomclass[11][0].name = "q1";
        // incomclass[11][0].value = data[1].popudensity;
        // incomclass[11][1].name = "q2";
        // incomclass[11][1].value = data[5].soilmiscibility;
        // incomclass[11][2].name = "q1∩q2";
        // incomclass[11][2].value = data[5].popudensity;

        // //聚集和土壤
        // incomclass[12][0].name = "q1";
        // incomclass[12][0].value = data[2].clusterdegree;
        // incomclass[12][1].name = "q2";
        // incomclass[12][1].value = data[5].soilmiscibility;
        // incomclass[12][2].name = "q1∩q2";
        // incomclass[12][2].value = data[5].clusterdegree;

        // //高程均值和土壤
        // incomclass[13][0].name = "q1";
        // incomclass[13][0].value = data[3].elevationmean;
        // incomclass[13][1].name = "q2";
        // incomclass[13][1].value = data[5].soilmiscibility;
        // incomclass[13][2].name = "q1∩q2";
        // incomclass[13][2].value = data[5].elevationmean;

        // //高程标准和土壤
        // incomclass[14][0].name = "q1";
        // incomclass[14][0].value = data[4].elevationstandard;
        // incomclass[14][1].name = "q2";
        // incomclass[14][1].value = data[5].soilmiscibility;
        // incomclass[14][2].name = "q1∩q2";
        // incomclass[14][2].value = data[5].elevationstandard;

        // //道路和最大
        // incomclass[15][0].name = "q1";
        // incomclass[15][0].value = data[0].roaddensity;
        // incomclass[15][1].name = "q2";
        // incomclass[15][1].value = data[6].maxiareapropo;
        // incomclass[15][2].name = "q1∩q2";
        // incomclass[15][2].value = data[6].roaddensity;

        // //人口和最大
        // incomclass[16][0].name = "q1";
        // incomclass[16][0].value = data[1].popudensity;
        // incomclass[16][1].name = "q2";
        // incomclass[16][1].value = data[6].maxiareapropo;
        // incomclass[16][2].name = "q1∩q2";
        // incomclass[16][2].value = data[6].popudensity;

        // //聚集和最大
        // incomclass[17][0].name = "q1";
        // incomclass[17][0].value = data[2].clusterdegree;
        // incomclass[17][1].name = "q2";
        // incomclass[17][1].value = data[6].maxiareapropo;
        // incomclass[17][2].name = "q1∩q2";
        // incomclass[17][2].value = data[6].clusterdegree;

        // //高程均值和最大
        // incomclass[18][0].name = "q1";
        // incomclass[18][0].value = data[3].elevationmean;
        // incomclass[18][1].name = "q2";
        // incomclass[18][1].value = data[6].maxiareapropo;
        // incomclass[18][2].name = "q1∩q2";
        // incomclass[18][2].value = data[6].elevationmean;

        // //高程标准值和最大
        // incomclass[19][0].name = "q1";
        // incomclass[19][0].value = data[4].elevationstandard;
        // incomclass[19][1].name = "q2";
        // incomclass[19][1].value = data[6].maxiareapropo;
        // incomclass[19][2].name = "q1∩q2";
        // incomclass[19][2].value = data[6].elevationstandard;

        // //土壤和最大
        // incomclass[20][0].name = "q1";
        // incomclass[20][0].value = data[5].soilmiscibility;
        // incomclass[20][1].name = "q2";
        // incomclass[20][1].value = data[6].maxiareapropo;
        // incomclass[20][2].name = "q1∩q2";
        // incomclass[20][2].value = data[6].soilmiscibility;





        // for(i=0;i<10;i++)
        //     for(j=0;j<2;j++)
        //         incomclass[i][j].name="q1";
        //         incomclass[i][j].value=





        // q1Data.push(data[1].popudensity);
        // q1Data.push(data[2].clusterdegree);
        // q1Data.push(data[3].elevationmean);
        // q1Data.push(data[4].elevationstandard);
        // q1Data.push(data[5].soilmiscibility);
        // q1Data.push(data[6].maxiareapropo);

        // q2Data.push(data[0].roaddensity);
        // q2Data.push(data[1].popudensity);
        // q2Data.push(data[2].clusterdegree);
        // q2Data.push(data[3].elevationmean);
        // q2Data.push(data[4].elevationstandard);
        // q2Data.push(data[5].soilmiscibility);
        // q2Data.push(data[6].maxiareapropo);

        // q3Data.push(data[1].popudensity);
        // q3Data.push(data[2].clusterdegree);
        // q3Data.push(data[3].elevationmean);
        // q3Data.push(data[4].elevationstandard);
        // q3Data.push(data[5].soilmiscibility);
        // q3Data.push(data[6].maxiareapropo);



        //获取日历显示的日期范围
        function getVirtulData() {
            var date = +echarts.number.parseDate('2020-05-31');
            var end = +echarts.number.parseDate('2020-07-19');
            var dayTime = 3600 * 24 * 1000;
            var data1 = [];
            for (var time = date; time < end; time += dayTime) {
                data1.push([
                    echarts.format.formatTime('yyyy-MM-dd', time),
                    Math.floor(Math.random() * 10000)
                ]);
            }
            return data1;
        }

        function getPieSeriesUpdate(scatterData, chart) {
            return echarts.util.map(scatterData, function (item, index) {
                var center = chart.convertToPixel('calendar', item);
                return {
                    id: index + 'pie',
                    center: center
                };
            });
        }

        var graphData = [
            ['2020-05-31'],
            ['2020-06-07'],
            ['2020-06-08'],
            ['2020-06-14'],
            ['2020-06-15'],
            ['2020-06-16'],
            ['2020-06-21'],
            ['2020-06-22'],
            ['2020-06-23'],
            ['2020-06-24'],
            ['2020-06-28'],
            ['2020-06-29'],
            ['2020-06-30'],
            ['2020-07-01'],
            ['2020-07-02'],
            ['2020-07-05'],
            ['2020-07-06'],
            ['2020-07-07'],
            ['2020-07-08'],
            ['2020-07-09'],
            ['2020-07-10']
        ];

        var scatterData = getVirtulData();
        var option = {


            tooltip: {
                trigger: 'item',
                formatter: "{b} : {c} ({d}%)"
            },
            legend: {
                data: ['q1', 'q2', 'q1∩q2'],
                top: 0,
                textStyle: {
                    color: "white"
                }

            },




            calendar: {
                top: 30,
                left: 50,
                right: 0,
                bottom: 0,
                height: 400,
                width: 400,


                orient: 'vertical',
                cellSize: cellSize,
                yearLabel: {
                    show: false,
                },
                dayLabel: {
                    show: false
                },
                monthLabel: {
                    show: false
                },
                range: ['2020-05-31', '2020-07-11']
            },
            series: [{
                id: 'label',
                type: 'scatter',
                coordinateSystem: 'calendar',
                symbolSize: 1,
                label: {
                    normal: {
                        show: true,
                        formatter: function (params) {
                            i = 0;
                            if (params[i][0].value > params[i][1].value)
                                return echarts.format.formatTime('dd', params[i][0].value);
                            i++;
                        },
                        offset: [-cellSize[0] / 2 + 10, -cellSize[1] / 2 + 10],
                        textStyle: {
                            color: '#000',
                            fontSize: 15
                        }
                    }
                },
                data: incomclass

            }]
        };



        function getPieSeries(scatterData, chart) {

            var i = 0;
            return echarts.util.map(scatterData, function (item, index) {
                var center = chart.convertToPixel('calendar', item);
                var pieData = incomclass[i]
                i = i + 1;
                return {
                    id: index + 'pie',
                    type: 'pie',
                    center: center,
                    label: {
                        normal: {
                            formatter: '{b}',
                            fontSize: 9,
                            position: 'inside'
                        }
                    },
                    radius: pieRadius,
                    data: pieData
                };
            });
        }
        if (!app.inNode) {
            var pieInitialized;
            setTimeout(function () {
                pieInitialized = true;
                myChart.setOption({
                    series: getPieSeries(graphData, myChart)
                });
            }, 10);

            app.onresize = function () {
                if (pieInitialized) {
                    myChart.setOption({
                        series: getPieSeriesUpdate(graphData, myChart)
                    });
                }
            };
        }
        myChart.setOption(option);

        // 刷新调整
        window.onresize = function () {
            myChart.resize();
        }
    }



})();

//日历饼图的x,y轴
(function () {
    // 基于准备好的dom，初始化echarts实例
    var trendChart = echarts.init(document.querySelector("#tab1 .bar .chart"));
    var trendChartOpt = {

        xAxis: {

            type: "category",
            name: "",
            axisLabel: {
                fontSize: 8,
                interval: 0,
                padding: 5,
                color: "#b0c2f9"
            },
            axisLine: { show: false }
        },
        yAxis: [{
            offset: -15,
            type: "category",
            name: "",
            axisLabel: {
                fontSize: 8,
                interval: 0,
                color: "#b0c2f9"
            },
            axisLine: { show: false }
        },],

    };

    trendChart.setOption(trendChartOpt);
    $.ajax({
        url: "http://127.0.0.1:8000/daping/factor_detec",
        dataType: "json"
    }).done(function () {
        $("#trendChart").addClass("chart-done");
    }).done(function (data) {
        //console.log('Data: ', data);
        const xData = [];
        const qData = [];
        const pData = [];


        trendChart.setOption({
            xAxis: {
                data: ["道路密度", "人口密度", "集聚程度", "高程均值", "高程标准差", "土壤混杂度", "最大面积占比"],


            },
            yAxis: {
                data: ["道路密度", "人口密度", "集聚程度", "高程均值", "高程标准差", "土壤混杂度", "最大面积占比"],
            },

        });

        window.addEventListener("resize", function () {
            trendChart.resize();
        });
    })
})();

//因子探测器
(function () {
    // 基于准备好的dom，初始化echarts实例
    var trendChart = echarts.init(document.querySelector("#tab1 .line .chart"));
    var trendChartOpt = {
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "none"
            }
        },
        legend: {
            left: "center",
            bottom: 0,
            itemWidth: 15,
            itemHeight: 10,
            textStyle: {
                fontSize: 12,
                color: "#b0c2f9"
            },
        },
        grid: {
            top: 40,
            bottom: 50,
            left: 30,
            right: 40
        },
        xAxis: {
            type: "category",
            name: "",

            axisLine: {
                lineStyle: { color: "#b0c2f9" }
            },
            axisTick: { show: false },
            axisLabel: {
                fontSize: 8,
                interval: 0,
                color: "#b0c2f9"
            }
        },
        yAxis: [{
            name: "p",
            type: "value",
            splitNumber: 5,
            interval: 1,
            axisLine: {
                lineStyle: { color: "#b0c2f9" }
            },
            splitLine: { show: false },
            axisTick: { color: "#b0c2f9" },
            axisLabel: {
                fontSize: 12,
                color: "#b0c2f9",
                // formatter: (value, index) => {
                // 	return parseInt(value / 100) + "00";
                // }
            }
        }, {
            name: "q",
            type: "value",
            splitNumber: 0.1,
            maxInterval: 0.3,
            minInterval: 0,
            interval: 0.1,
            axisLine: {
                lineStyle: { color: "#b0c2f9" }
            },
            splitLine: { show: false },
            axisTick: { color: "#b0c2f9" },
            axisLabel: {
                fontSize: 12,
                color: "#b0c2f9"
            }
        }],
        series: [{
            name: "p",
            type: "line",
        }, {
            name: "q",
            //type: "line",
            type: "pictorialBar",
            yAxisIndex: 1,
            symbol: 'path://d="M150 50 L130 130 L170 130  Z"',
            barCategoryGap: "30%",
            itemStyle: {
                color: function (params) {
                    if (params.dataIndex >= 0.1) {
                        return "rgba(230, 182, 0, 0.5)";
                    }
                    return "rgba(230, 182, 0, 1)";
                }
            },
            markPoint: {
                itemStyle: {
                    color: "rgba(230, 182, 0, 1)"
                },
                data: [{
                    name: "最大值",
                    type: "max"
                }]
            }
        },
        ]
    };

    trendChart.setOption(trendChartOpt);
    $.ajax({
        url: "http://127.0.0.1:8000/daping/factor_detec",
        dataType: "json"
    }).done(function () {
        $("#trendChart").addClass("chart-done");
    }).done(function (data) {
        //console.log('Data: ', data);
        const xData = [];
        const qData = [];
        const pData = [];
        qData.push(data[0].roaddensity);
        qData.push(data[0].popudensity);
        qData.push(data[0].clusterdegree);
        qData.push(data[0].elevationmean);
        qData.push(data[0].elevationstandard);
        qData.push(data[0].soilmiscibility);
        qData.push(data[0].maxiareapropo);

        pData.push(data[1].roaddensity);
        pData.push(data[1].popudensity);
        pData.push(data[1].clusterdegree);
        pData.push(data[1].elevationmean);
        pData.push(data[1].elevationstandard);
        pData.push(data[1].soilmiscibility);
        pData.push(data[1].maxiareapropo);


        trendChart.setOption({
            xAxis: {
                data: ["道路密度", "人口密度", "集聚程度", "高程均值", "高程标准差", "土壤混杂度", "最大面积占比"],
            },
            series: [{
                name: "p",
                data: pData,
            }, {
                name: "q",
                data: qData,
            }]
        });

        window.addEventListener("resize", function () {
            trendChart.resize();
        });
    })
})();


//生态探测器
(function () {
    var myChart = echarts.init(document.querySelector("#tab2 .pie .chart"));
    const hours = [
        '12a', '1a', '2a', '3a', '4a', '5a', '6a',
        '7a', '8a', '9a', '10a', '11a',
        '12p', '1p', '2p', '3p', '4p', '5p',
        '6p', '7p', '8p', '9p', '10p', '11p'
    ];
    // prettier-ignore
    const days = [
        'Saturday', 'Friday', 'Thursday',
        'Wednesday', 'Tuesday', 'Monday', 'Sunday'
    ];
    // prettier-ignore
    const data = [[0, 0, 5], [0, 1, 1], [0, 2, 0], [0, 3, 0], [0, 4, 0], [0, 5, 0], [0, 6, 0], [0, 7, 0], [0, 8, 0], [0, 9, 0], [0, 10, 0], [0, 11, 2], [0, 12, 4], [0, 13, 1], [0, 14, 1], [0, 15, 3], [0, 16, 4], [0, 17, 6], [0, 18, 4], [0, 19, 4], [0, 20, 3], [0, 21, 3], [0, 22, 2], [0, 23, 5], [1, 0, 7], [1, 1, 0], [1, 2, 0], [1, 3, 0], [1, 4, 0], [1, 5, 0], [1, 6, 0], [1, 7, 0], [1, 8, 0], [1, 9, 0], [1, 10, 5], [1, 11, 2], [1, 12, 2], [1, 13, 6], [1, 14, 9], [1, 15, 11], [1, 16, 6], [1, 17, 7], [1, 18, 8], [1, 19, 12], [1, 20, 5], [1, 21, 5], [1, 22, 7], [1, 23, 2], [2, 0, 1], [2, 1, 1], [2, 2, 0], [2, 3, 0], [2, 4, 0], [2, 5, 0], [2, 6, 0], [2, 7, 0], [2, 8, 0], [2, 9, 0], [2, 10, 3], [2, 11, 2], [2, 12, 1], [2, 13, 9], [2, 14, 8], [2, 15, 10], [2, 16, 6], [2, 17, 5], [2, 18, 5], [2, 19, 5], [2, 20, 7], [2, 21, 4], [2, 22, 2], [2, 23, 4], [3, 0, 7], [3, 1, 3], [3, 2, 0], [3, 3, 0], [3, 4, 0], [3, 5, 0], [3, 6, 0], [3, 7, 0], [3, 8, 1], [3, 9, 0], [3, 10, 5], [3, 11, 4], [3, 12, 7], [3, 13, 14], [3, 14, 13], [3, 15, 12], [3, 16, 9], [3, 17, 5], [3, 18, 5], [3, 19, 10], [3, 20, 6], [3, 21, 4], [3, 22, 4], [3, 23, 1], [4, 0, 1], [4, 1, 3], [4, 2, 0], [4, 3, 0], [4, 4, 0], [4, 5, 1], [4, 6, 0], [4, 7, 0], [4, 8, 0], [4, 9, 2], [4, 10, 4], [4, 11, 4], [4, 12, 2], [4, 13, 4], [4, 14, 4], [4, 15, 14], [4, 16, 12], [4, 17, 1], [4, 18, 8], [4, 19, 5], [4, 20, 3], [4, 21, 7], [4, 22, 3], [4, 23, 0], [5, 0, 2], [5, 1, 1], [5, 2, 0], [5, 3, 3], [5, 4, 0], [5, 5, 0], [5, 6, 0], [5, 7, 0], [5, 8, 2], [5, 9, 0], [5, 10, 4], [5, 11, 1], [5, 12, 5], [5, 13, 10], [5, 14, 5], [5, 15, 7], [5, 16, 11], [5, 17, 6], [5, 18, 0], [5, 19, 5], [5, 20, 3], [5, 21, 4], [5, 22, 2], [5, 23, 0], [6, 0, 1], [6, 1, 0], [6, 2, 0], [6, 3, 0], [6, 4, 0], [6, 5, 0], [6, 6, 0], [6, 7, 0], [6, 8, 0], [6, 9, 0], [6, 10, 1], [6, 11, 0], [6, 12, 2], [6, 13, 1], [6, 14, 3], [6, 15, 4], [6, 16, 0], [6, 17, 0], [6, 18, 0], [6, 19, 0], [6, 20, 1], [6, 21, 2], [6, 22, 2], [6, 23, 6]]
        .map(function (item) {
            return [item[1], item[0], item[2] || '-'];
        });
    option = {
        tooltip: {
            position: 'top'
        },
        grid: {
            height: '70%',
            top: '30%'
        },
        xAxis: {
            type: 'category',
            data: hours,
            splitArea: {
                show: true
            }
        },
        yAxis: {
            type: 'category',
            data: days,
            splitArea: {
                show: true
            }
        },
        visualMap: {
            min: 0,
            max: 10,
            calculable: true,
            orient: 'horizontal',
            left: 'center',
            bottom: '75%',

        },
        series: [
            {
                name: 'Punch Card',
                type: 'heatmap',
                data: data,
                label: {
                    show: true
                },
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    }
    myChart.setOption(option);

    // 重新把配置好的新数据给实例对象
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();

//交互探测器的影响
(function () {
    var re4Chart = echarts.init(document.querySelector("#tab2 .bar1 .chart"));
    var ROOT_PATH = 'https://echarts.apache.org/examples';
    var option;

    re4Chart.showLoading();
    $.getJSON(ROOT_PATH + '/data/asset/data/les-miserables.json', function (graph) {
        myChart.hideLoading();
        graph.nodes.forEach(function (node) {
            node.label = {
                show: node.symbolSize > 30
            };
        });
        option = {
            title: {
                text: 'Les Miserables',
                subtext: 'Default layout',
                top: 'bottom',
                left: 'right'
            },
            tooltip: {},
            legend: [
                {
                    // selectedMode: 'single',
                    data: graph.categories.map(function (a) {
                        return a.name;
                    })
                }
            ],
            animationDuration: 1500,

            animationEasingUpdate: 'quinticInOut',
            series: [
                {
                    name: 'Les Miserables',
                    type: 'graph',
                    layout: 'none',
                    data: graph.nodes,
                    links: graph.links,
                    categories: graph.categories,
                    roam: true,

                    label: {
                        position: 'right',
                        formatter: '{b}'
                    },
                    lineStyle: {
                        color: 'source',
                        curveness: 0.3
                    },
                    emphasis: {
                        focus: 'adjacency',
                        lineStyle: {
                            width: 10
                        }
                    }
                }
            ]
        };
        re4Chart.setOption(re4option);
    });

    option && re4hart.setOption(re4option);
})();

//导航栏
(function () {
    $(".tab_content").hide();
    $("ul.layui-nav li:first").addClass("active").show();
    $(".tab_content:first").show();
    $("ul.layui-nav li").click(function () {
        $("ul.layui-nav li").removeClass("active");
        $(this).addClass("active");
        $(".tab_content").hide();
        var activeTab = $(this).find("a").attr("href");
        $(activeTab).fadeIn();
        return false;
    });
})();

// 折线图定制
(function () {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector("#tab2 .line .chart"));

    // (1)准备数据
    var data = {
        year: [
            [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
            [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
        ]
    };

    // 2. 指定配置和数据
    var option = {
        color: ["#00f2f1", "#ed3f35"],
        tooltip: {
            // 通过坐标轴来触发
            trigger: "axis"
        },
        legend: {
            // 距离容器10%
            right: "10%",
            // 修饰图例文字的颜色
            textStyle: {
                color: "#4c9bfd"
            }
            // 如果series 里面设置了name，此时图例组件的data可以省略
            // data: ["邮件营销", "联盟广告"]
        },
        grid: {
            top: "20%",
            left: "3%",
            right: "4%",
            bottom: "3%",
            show: true,
            borderColor: "#012f4a",
            containLabel: true
        },

        xAxis: {
            type: "category",
            boundaryGap: false,
            data: [
                "1月",
                "2月",
                "3月",
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月"
            ],
            // 去除刻度
            axisTick: {
                show: false
            },
            // 修饰刻度标签的颜色
            axisLabel: {
                color: "rgba(255,255,255,.7)"
            },
            // 去除x坐标轴的颜色
            axisLine: {
                show: false
            }
        },
        yAxis: {
            type: "value",
            // 去除刻度
            axisTick: {
                show: false
            },
            // 修饰刻度标签的颜色
            axisLabel: {
                color: "rgba(255,255,255,.7)"
            },
            // 修改y轴分割线的颜色
            splitLine: {
                lineStyle: {
                    color: "#012f4a"
                }
            }
        },
        series: [{
            name: "新增项目",
            type: "line",
            stack: "总量",
            // 是否让线条圆滑显示
            smooth: true,
            data: data.year[0]
        },
        {
            name: "新增技能",
            type: "line",
            stack: "总量",
            smooth: true,
            data: data.year[1]
        }
        ]
    };
    // 3. 把配置和数据给实例对象
    myChart.setOption(option);

    // 重新把配置好的新数据给实例对象
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();

// 饼形图定制
// 折线图定制
// (function () {
//     // 基于准备好的dom，初始化echarts实例
//     var myChart = echarts.init(document.querySelector("#tab2 .pie .chart"));

//     option = {
//         tooltip: {
//             trigger: "item",
//             formatter: "{a} <br/>{b}: {c} ({d}%)",
//             position: function (p) {
//                 //其中p为当前鼠标的位置
//                 return [p[0] + 10, p[1] - 10];
//             }
//         },
//         legend: {
//             top: "90%",
//             itemWidth: 10,
//             itemHeight: 10,
//             data: ["0岁以下", "20-29岁", "30-39岁", "40-49岁", "50岁以上"],
//             textStyle: {
//                 color: "rgba(255,255,255,.5)",
//                 fontSize: "12"
//             }
//         },
//         series: [{
//             name: "年龄分布",
//             type: "pie",
//             center: ["50%", "42%"],
//             radius: ["40%", "60%"],
//             color: [
//                 "#065aab",
//                 "#066eab",
//                 "#0682ab",
//                 "#0696ab",
//                 "#06a0ab",
//                 "#06b4ab",
//                 "#06c8ab",
//                 "#06dcab",
//                 "#06f0ab"
//             ],
//             label: {
//                 show: false
//             },
//             labelLine: {
//                 show: false
//             },
//             data: [{
//                 value: 1,
//                 name: "0岁以下"
//             },
//             {
//                 value: 4,
//                 name: "20-29岁"
//             },
//             {
//                 value: 2,
//                 name: "30-39岁"
//             },
//             {
//                 value: 2,
//                 name: "40-49岁"
//             },
//             {
//                 value: 1,
//                 name: "50岁以上"
//             }
//             ]
//         }]
//     };

//     // 使用刚指定的配置项和数据显示图表。
//     myChart.setOption(option);
//     window.addEventListener("resize", function () {
//         myChart.resize();
//     });
// })();


//塌陷事件排行
(function () {
    // 基于准备好的dom，初始化echarts实例
    var rankChart = echarts.init(document.querySelector("#tab1 .bar1 .chart"));
    var rankChartOpt = {
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "shadow"
            },
            formatter: function (params) {
                const param = params[0];
                const marker = '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#e6b600;"></span>';
                const suffix = '<span style="margin-left:5px;font-size:12px;"></span>';
                return param.name + "<br />" +
                    marker + "排名：" + (param.dataIndex + 1) + "<br />" +
                    marker + "塌陷事件数：" + param.data + suffix;
            }
        },
        grid: {
            top: 10,
            bottom: 10,
            left: 70
        },
        xAxis: {
            show: false,
            type: "value"
        },
        yAxis: {
            type: "category",
            inverse: true,
            axisLine: { show: false },
            axisTick: { show: false },
            axisLabel: {
                fontSize: 12,
                color: "#b0c2f9"
            }
        },
        series: [{
            name: "市价总值排行",
            type: "bar",
            barCategoryGap: "60%",
            label: {
                show: true,
                position: "right",
                fontSize: 12,
                color: "#188df0",
                emphasis: {
                    color: "#e6b600"
                }
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 1, 1, 1,
                        [
                            { offset: 0, color: '#b0c2f9' },
                            { offset: 0.5, color: '#188df0' },
                            { offset: 1, color: '#185bff' }
                        ]
                    )
                },
                emphasis: {
                    color: new echarts.graphic.LinearGradient(
                        0, 1, 1, 1,
                        [
                            { offset: 0, color: '#b0c2f9' },
                            { offset: 0.7, color: '#e6b600' },
                            { offset: 1, color: '#ceac09' }
                        ]
                    )
                }
            }
        }]
    };
    rankChart.setOption(rankChartOpt);
    $.ajax({
        url: "http://127.0.0.1:8000/daping/ranking_list",
        dataType: "json"
    }).done(function () {
        $("#rankChart").addClass("chart-done");
    }).done(function (data) {
        //console.log('Data: ', data);
        const xData = [];
        const yData = [];
        for (let i in data) {
            xData.push(data[i].fields.DistrictCounts);
            yData.push(data[i].pk);
        }
        rankChart.setOption({
            yAxis: {
                data: yData
            },
            series: [{
                name: "风险点排行",
                data: xData
            }]
        });
    }).fail(function (jqXHR) {
        console.log("Ajax Fail: ", jqXHR.status, jqXHR.statusText);
    });

    window.addEventListener("resize", function () {
        rankChart.resize();
    });
})();



//历史塌陷事件月份统计
(function () {
    // 基于准备好的dom，初始化echarts实例
    var trendChart = echarts.init(document.querySelector("#tab1 .line1 .chart"));
    var trendChartOpt = {
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "none"
            }
        },
        legend: {
            left: "center",
            bottom: 3,
            itemWidth: 15,
            itemHeight: 10,
            textStyle: {
                fontSize: 12,
                color: "#b0c2f9"
            },
            data: ["历史总量", "去年同期数量", "平均数量"]
        },
        grid: {
            top: 40,
            bottom: 50,
            left: 30,
            right: 40
        },
        xAxis: {
            type: "category",
            name: "",

            axisLine: {
                lineStyle: { color: "#b0c2f9" }
            },
            axisTick: { show: false },
            axisLabel: {
                fontSize: 12,
                color: "#b0c2f9"
            }
        },
        yAxis: [{
            name: "事件总量",
            type: "value",
            splitNumber: 5,
            interval: 1,
            axisLine: {
                lineStyle: { color: "#b0c2f9" }
            },
            splitLine: { show: false },
            axisTick: { color: "#b0c2f9" },
            axisLabel: {
                fontSize: 12,
                color: "#b0c2f9",
                // formatter: (value, index) => {
                // 	return parseInt(value / 100) + "00";
                // }
            }
        }, {
            name: "平均/月度量",
            type: "value",
            splitNumber: 5,
            maxInterval: 5,
            minInterval: 5,
            interval: 5,
            axisLine: {
                lineStyle: { color: "#b0c2f9" }
            },
            splitLine: { show: false },
            axisTick: { color: "#b0c2f9" },
            axisLabel: {
                fontSize: 12,
                color: "#b0c2f9"
            }
        }],
        series: [{
            name: "近三年总量",
            type: "line",
            //type: "pictorialBar",
            //symbol: 'path://d="M150 50 L130 130 L170 130  Z"',
            //barCategoryGap: "40%",
            // itemStyle: {
            // 	color: function(params) {
            // 		if(params.dataIndex >= 11) {
            // 			return "rgba(119, 96, 246, 0.5)";
            // 		}
            // 		return "rgba(119, 96, 246, 1)";
            // 	}
            // }
        }, {
            name: "去年同期数量",
            //type: "line",
            type: "pictorialBar",
            yAxisIndex: 1,
            symbol: 'path://d="M150 50 L130 130 L170 130  Z"',
            barCategoryGap: "30%",
            itemStyle: {
                color: function (params) {
                    if (params.dataIndex >= 11) {
                        return "rgba(230, 182, 0, 0.5)";
                    }
                    return "rgba(230, 182, 0, 1)";
                }
            },
            markPoint: {
                itemStyle: {
                    color: "rgba(230, 182, 0, 1)"
                },
                data: [{
                    name: "最大值",
                    type: "max"
                }]
            },
            markLine: {
                lineStyle: {
                    color: "rgba(230, 182, 0, 1)"
                },
                label: {
                    position: "middle",
                    formatter: "月度平均事件总量：{c}件"
                },
                data: [{
                    name: "平均值",
                    type: "average"
                }]
            }
        }, {
            name: "平均数量",
            type: "line",
            yAxisIndex: 1,
            itemStyle: {
                color: "rgba(119, 96, 246, 1)"
            }
        }]
    };
    trendChart.setOption(trendChartOpt);
    $.ajax({
        url: "http://127.0.0.1:8000/daping/getmonth",
        dataType: "json"
    }).done(function () {
        $("#trendChart").addClass("chart-done");
    }).done(function (data) {
        //console.log('Data: ', data);
        const xData = [];
        const yData1 = [];
        const yData2 = [];
        const yData3 = [];
        for (let i in data) {
            xData.push(data[i].pk);
        }

        j = 0;
        for (let i in data) {
            if (data[j].fields.AvgmCounts >= 0) {
                yData3[data[j].pk - 1] = (data[j].fields.AvgmCounts);
                j++;
            }
            else {
                break;
            }
        }

        for (let i in data) {
            if (data[j].fields.LyCounts >= 0) {
                yData2[data[j].pk - 1] = (data[j].fields.LyCounts);
                j++;
            }
            else {
                break;
            }
        }

        for (let j in data) {
            yData1[data[j].pk - 1] = (data[j].fields.AllCounts);
            j++;
        }


        trendChart.setOption({
            xAxis: {
                data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            },
            series: [{
                name: "历史总量",
                data: yData1
            }, {
                name: "去年同期数量",
                data: yData2
            }, {
                name: "平均数量",
                data: yData3
            }]
        });
    }).fail(function (jqXHR) {
        console.log("Ajax Fail: ", jqXHR.status, jqXHR.statusText);
    });

    // 使用刚指定的配置项和数据显示图表。
    window.addEventListener("resize", function () {
        trendChart.resize();
    });
})();

//饼状图
(function () {
    // 1. 实例化对象
    var reasonChart = echarts.init(document.querySelector(".pie1  .chart"));
    // 2. 指定配置项和数据
    var reasonChartOpt = {
        legend: {
            top: "90%",
            itemWidth: 10,
            itemHeight: 10,
            textStyle: {
                color: "rgba(255,255,255,.5)",
                fontSize: "12"
            }
        },
        tooltip: {
            trigger: "item",
            formatter: "{b0}<br />事件数：{c0}<br />占比：{d0}%"
        },
        // 注意颜色写的位置
        color: [
            "#006cff",
            "#60cda0",
            "#ed8884",
            "#ff9f7f",
            "#0096ff",
            "#9fe6b8",
            "#32c5e9",
            "#1d9dff"
        ],
        series: [{
            name: "塌陷原因分类",
            type: "pie",
            // 如果radius是百分比则必须加引号
            radius: ["10%", "70%"],
            center: ["50%", "42%"],
            roseType: "radius",
            // 修饰饼形图文字相关的样式 label对象
            label: {
                fontSize: 10
            },
            // 修饰引导线样式
            labelLine: {
                // 连接到图形的线长度
                length: 10,
                // 连接到文字的线长度
                length2: 10
            }
        }]
    };

    reasonChart.setOption(reasonChartOpt);
    $.ajax({
        url: "http://127.0.0.1:8000/daping/events_reason",
        dataType: "json"
    }).done(function () {
        $("#reasonChart").addClass("chart-done");
    }).done(function (data) {
        const chartData = [];
        for (let i in data) {
            chartData.push({
                name: data[i].pk,
                value: data[i].fields.reasoncounts
            });
        }
        // 3. 配置项和数据给我们的实例化对象
        reasonChart.setOption({
            series: [{
                name: "塌陷原因分类",
                data: chartData
            }]
        });
        // 4. 当我们浏览器缩放的时候，图表也等比例缩放
        window.addEventListener("resize", function () {
            // 让我们的图表调用 resize这个方法
            reasonChart.resize();
        });
    })
})();
