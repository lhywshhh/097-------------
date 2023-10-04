
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
//             data: [200, 300, 300, 0, 1500, 1200, 600],
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
//         data: [200, 300, 300, 0, 1500, 1200, 600]
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

//返回q独立值
function findq(name, data) {
    i
    if (name == "roaddensity")
        return data[i].roaddensity;
    else if (name == "popudensity")
        return data[i].popudensity;
    else if (name == "clusterdegree")
        return data[i].clusterdegree;
    else if (name == "elevationmean")
        return data[i].elevationmean;
    else if (name == "elevationstandard")
        return data[i].elevationstandard;
    else if (name == "soilmiscibility")
        return data[i].soilmiscibility;
    else if (name == "maxiareapropo")
        return data[i].maxiareapropo;
};

//返回p值
function findp(name, data, p) {
    if (name == "roaddensity")
        return data[p].roaddensity;
    else if (name == "popudensity")
        return data[p].popudensity;
    else if (name == "clusterdegree")
        return data[p].clusterdegree;
    else if (name == "elevationmean")
        return data[p].elevationmean;
    else if (name == "elevationstandard")
        return data[p].elevationstandard;
    else if (name == "soilmiscibility")
        return data[p].soilmiscibility;
    else if (name == "maxiareapropo")
        return data[p].maxiareapropo;
};



//返回q1（y轴）
function findq1(j, q1Data) {
    if (j == 0)
        return q1Data[1];
    else if (j == 1 || j == 2)
        return q1Data[2];
    else if (j == 3 || j == 4 || j == 5)
        return q1Data[3];
    else if (j == 6 || j == 7 || j == 8 || j == 9)
        return q1Data[4];
    else if (j == 10 || j == 11 || j == 12 || j == 13 || j == 14)
        return q1Data[5];
    else if (j == 15 || j == 16 || j == 17 || j == 18 || j == 19 || j == 20)
        return q1Data[6];
};

//返回q2（x轴）
function findq2(j, q1Data) {
    if (j == 20)
        return q1Data[5];
    else if (j == 14 || j == 19)
        return q1Data[4];
    else if (j == 9 || j == 13 || j == 18)
        return q1Data[3];
    else if (j == 5 || j == 8 || j == 12 || j == 17)
        return q1Data[2];
    else if (j == 2 || j == 4 || j == 7 || j == 11 || j == 16)
        return q1Data[1];
    else if (j == 0 || j == 1 || j == 3 || j == 6 || j == 10 || j == 15)
        return q1Data[0];
};

//返回q1∩q2的x
function findqqx(j, name) {
    if (j == 20)
        return name[5];
    else if (j == 14 || j == 19)
        return name[4];
    else if (j == 9 || j == 13 || j == 18)
        return name[3];
    else if (j == 5 || j == 8 || j == 12 || j == 17)
        return name[2];
    else if (j == 2 || j == 4 || j == 7 || j == 11 || j == 16)
        return name[1];
    else if (j == 0 || j == 1 || j == 3 || j == 6 || j == 10 || j == 15)
        return name[0];
};

//返回q1∩q2的y
function findqqy(j) {
    if (j == 0)
        return 1;
    else if (j == 1 || j == 2)
        return 2;
    else if (j == 3 || j == 4 || j == 5)
        return 3;
    else if (j == 6 || j == 7 || j == 8 || j == 9)
        return 4;
    else if (j == 10 || j == 11 || j == 12 || j == 13 || j == 14)
        return 5;
    else if (j == 15 || j == 16 || j == 17 || j == 18 || j == 19 || j == 20)
        return 6;
};

//返回生态探测器q1∩q2的y
function findqqy2(j, interdata) {
    if (j == 0)
        return 1 + interdata + interdata + 2;
    else if (j == 1 || j == 2)
        return 2 + interdata + interdata + 2;
    else if (j == 3 || j == 4 || j == 5)
        return 3 + interdata + interdata + 2;
    else if (j == 6 || j == 7 || j == 8 || j == 9)
        return 4 + interdata + interdata + 2;
    else if (j == 10 || j == 11 || j == 12 || j == 13 || j == 14)
        return 5 + interdata + interdata + 2;
    else if (j == 15 || j == 16 || j == 17 || j == 18 || j == 19 || j == 20)
        return 6 + interdata + interdata + 2;
};

//返回q1∩q2
function findqq(name, data, x) {
    if (name == "roaddensity")
        return data[x].roaddensity;
    else if (name == "popudensity")
        return data[x].popudensity;
    else if (name == "clusterdegree")
        return data[x].clusterdegree;
    else if (name == "elevationmean")
        return data[x].elevationmean;
    else if (name == "elevationstandard")
        return data[x].elevationstandard;
    else if (name == "soilmiscibility")
        return data[x].soilmiscibility;
    else if (name == "maxiareapropo")
        return data[x].maxiareapropo;
};

//返回生态探测器Y对应1，N对应0
function returnnum(name) {
    if (name == "Y")
        return 1;
    else if (name == "N")
        return 0;

};

//返回生态探测器的q1∩q2
function findqq2(name, data, x) {
    if (name == "roaddensity")
        return returnnum(data[x].roaddensity);
    else if (name == "popudensity")
        return returnnum(data[x].popudensity);
    else if (name == "clusterdegree")
        return returnnum(data[x].clusterdegree);
    else if (name == "elevationmean")
        return returnnum(data[x].elevationmean);
    else if (name == "elevationstandard")
        return returnnum(data[x].elevationstandard);
    else if (name == "soilmiscibility")
        return returnnum(data[x].soilmiscibility);
    else if (name == "maxiareapropo")
        return returnnum(data[x].maxiareapropo);
};

//返回中文名
function returnCh(name) {
    if (name == "roaddensity")
        return "道路密度";
    else if (name == "popudensity")
        return "人口密度";
    else if (name == "clusterdegree")
        return "聚集程度";
    else if (name == "elevationmean")
        return "高程均值";
    else if (name == "elevationstandard")
        return "起伏程度";
    else if (name == "soilmiscibility")
        return "土壤混杂度";
    else if (name == "maxiareapropo")
        return "最大占比";
}


//日历饼图交互探测器
(function createpie() {
    data = localStorage.getItem("iframedata");
    if (data != undefined) {
        data = JSON.parse(localStorage.getItem("iframedata"))
        var myChart = echarts.init(document.querySelector("#tab2 .bar2 .chart"));

        var option;
        // This example requires sECharts v5.4.0 or later
        const cellSize = [0.1, 0.1];  //日历大少
        var pieRadius = 22;  //饼图大小
        var app = {};
        var incomclass =
            [
                [
                    { name: "", value: 0 },
                    { name: "", "value": 0 },
                    { name: "", "value": 0 }
                ],
                [
                    { name: "", value: 0 },
                    { name: "", "value": 0 },
                    { name: "", "value": 0 }
                ], [
                    { name: "", value: 0 },
                    { name: "", "value": 0 },
                    { name: "", "value": 0 }
                ], [
                    { name: "", value: 0 },
                    { name: "", "value": 0 },
                    { name: "", "value": 0 }
                ], [
                    { name: "", value: 0 },
                    { name: "", "value": 0 },
                    { name: "", "value": 0 }
                ], [
                    { name: "", value: 0 },
                    { name: "", "value": 0 },
                    { name: "", "value": 0 }
                ], [
                    { name: "", value: 0 },
                    { name: "", "value": 0 },
                    { name: "", "value": 0 }
                ], [
                    { name: "", value: 0 },
                    { name: "", "value": 0 },
                    { name: "", "value": 0 }
                ], [
                    { name: "", value: 0 },
                    { name: "", "value": 0 },
                    { name: "", "value": 0 }
                ], [
                    { name: "", value: 0 },
                    { name: "", "value": 0 },
                    { name: "", "value": 0 }
                ], [
                    { name: "", value: 0 },
                    { name: "", "value": 0 },
                    { name: "", "value": 0 }
                ],
                [
                    { name: "", value: 0 },
                    { name: "", "value": 0 },
                    { name: "", "value": 0 }
                ], [
                    { name: "", value: 0 },
                    { name: "", "value": 0 },
                    { name: "", "value": 0 }
                ], [
                    { name: "", value: 0 },
                    { name: "", "value": 0 },
                    { name: "", "value": 0 }
                ], [
                    { name: "", value: 0 },
                    { name: "", "value": 0 },
                    { name: "", "value": 0 }
                ], [
                    { name: "", value: 0 },
                    { name: "", "value": 0 },
                    { name: "", "value": 0 }
                ], [
                    { name: "", value: 0 },
                    { name: "", "value": 0 },
                    { name: "", "value": 0 }
                ], [
                    { name: "", value: 0 },
                    { name: "", "value": 0 },
                    { name: "", "value": 0 }
                ], [
                    { name: "", value: 0 },
                    { name: "", "value": 0 },
                    { name: "", "value": 0 }
                ], [
                    { name: "", value: 0 },
                    { name: "", "value": 0 },
                    { name: "", "value": 0 }
                ], [
                    { name: "", value: 0 },
                    { name: "", "value": 0 },
                    { name: "", "value": 0 }
                ], [
                    { name: "", value: 0 },
                    { name: "", "value": 0 },
                    { name: "", "value": 0 }
                ], [
                    { name: "", value: 0 },
                    { name: "", "value": 0 },
                    { name: "", "value": 0 }
                ], [
                    { name: "", value: 0 },
                    { name: "", "value": 0 },
                    { name: "", "value": 0 }
                ],
            ]



        //console.log('Data: ', data);

        //交互探测器的取数逻辑

        //取得因子个数
        var interdata = Object.keys(data[0]).length;


        var qData = [];
        //取得有哪些因子
        var name = new Array();
        for (i = 0; i < interdata; i++) { name[i] = (Object.keys(data[0])[i]) };

        //取得各类因子独立的q值
        var q1Data = [];
        for (i = 0; i < interdata; i++) {
            q1Data[i] = findq(name[i], data);
        };

        //取得有多少个饼图
        var pienum = 0;
        for (i = 0; i < interdata; i++) {
            pienum += i;
        }


        //开始传值
        for (j = 0; j < pienum; j++) {
            incomclass[j][0].name = "q1";
            incomclass[j][1].name = "q2";
            incomclass[j][2].name = "q1∩q2";
            incomclass[j][0].value = findq1(j, q1Data);
            incomclass[j][1].value = findq2(j, q1Data);
            incomclass[j][2].value = findqq(findqqx(j, name), data, findqqy(j));

        }



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
            '2020-05-31',
            '2020-06-07',
            '2020-06-08',
            '2020-06-14',
            '2020-06-15',
            '2020-06-16',
            '2020-06-21',
            '2020-06-22',
            '2020-06-23',
            '2020-06-24',
            '2020-06-28',
            '2020-06-29',
            '2020-06-30',
            '2020-07-01',
            '2020-07-02',
            '2020-07-05',
            '2020-07-06',
            '2020-07-07',
            '2020-07-08',
            '2020-07-09',
            '2020-07-10']

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
                top: 5,
                left: 50,
                right: 0,
                bottom: 0,
                height: 400,
                width: 400,


                orient: 'vertical',
                cellSize: [1.1],
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



        //日历图的xy轴
        // 基于准备好的dom，初始化echarts实例
        var trendChart = echarts.init(document.querySelector("#tab2 .bar2 .chart"));
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
            url: "http://127.0.0.1:8000/daping/getmonth",
            dataType: "json",
            async: false
        }).done(function () {
            $("#trendChart").addClass("chart-done");
        }).done(function (data) {
            //console.log('Data: ', data);
            const xData = [];
            const qData = [];
            const pData = [];


            trendChart.setOption({
                xAxis: {
                    data: name,


                },
                yAxis: {
                    data: name,
                },

            });

            window.addEventListener("resize", function () {
                trendChart.resize();
            });
        })

        // 刷新调整
        window.onresize = function () {
            myChart.resize();
        }
    }



}
)();

//日历热力图交互探测器
(function createpie() {
    data = localStorage.getItem("iframedata");
    if (data != undefined) {
        data = JSON.parse(localStorage.getItem("iframedata"))
        var myChart = echarts.init(document.querySelector("#tab2 .bar2 .chart2"));

        var option;
        // This example requires sECharts v5.4.0 or later
        var incomclass = [];

        var graphData = [

            '2020-05-31',
            '2020-06-07',
            '2020-06-08',
            '2020-06-14',
            '2020-06-15',
            '2020-06-16',
            '2020-06-21',
            '2020-06-22',
            '2020-06-23',
            '2020-06-24',
            '2020-06-28',
            '2020-06-29',
            '2020-06-30',
            '2020-07-01',
            '2020-07-02',
            '2020-07-05',
            '2020-07-06',
            '2020-07-07',
            '2020-07-08',
            '2020-07-09',
            '2020-07-10'

        ];


        //console.log('Data: ', data);

        //交互探测器的取数逻辑

        //取得因子个数
        var interdata = Object.keys(data[0]).length;


        var qData = [];
        //取得有哪些因子
        var name = new Array();
        for (i = 0; i < interdata; i++) { name[i] = (Object.keys(data[0])[i]) };

        //取得各类因子独立的q值
        var q1Data = [];
        for (i = 0; i < interdata; i++) {
            q1Data[i] = findq(name[i], data);
        };

        //取得有多少个饼图
        var pienum = 0;
        for (i = 0; i < interdata; i++) {
            pienum += i;
        }


        //开始传值
        for (j = 0; j < pienum; j++) {

            incomclass.push([
                graphData[j],
                findqq(findqqx(j, name), data, findqqy(j))
            ]);

        }



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



        var scatterData = getVirtulData();
        var option = {


            tooltip: {
                trigger: 'item',
                formatter: "{b} : {c} ({d}%)"
            },
            visualMap: {
                min: 0,
                max: 1,
                type: 'piecewise',
                orient: 'vertical',
                right: 10,
                top: 65
            },




            calendar: {
                top: 5,
                left: 50,
                right: 0,
                bottom: 0,
                height: 400,
                width: 400,
                cellSize: [10, 10],


                orient: 'vertical',
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
            series: {
                type: 'heatmap',
                coordinateSystem: 'calendar',
                data: incomclass
            }
        };




        myChart.setOption(option);



        //日历图的xy轴
        // 基于准备好的dom，初始化echarts实例
        var trendChart = echarts.init(document.querySelector("#tab2 .bar2 .chart2"));
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
            url: "http://127.0.0.1:8000/daping/getmonth",
            dataType: "json",
            async: false
        }).done(function () {
            $("#trendChart").addClass("chart-done");
        }).done(function (data) {
            //console.log('Data: ', data);
            const xData = [];
            const qData = [];
            const pData = [];


            trendChart.setOption({
                xAxis: {
                    data: name,


                },
                yAxis: {
                    data: name,
                },

            });

            window.addEventListener("resize", function () {
                trendChart.resize();
            });
        })

        // 刷新调整
        window.onresize = function () {
            myChart.resize();
        }
    }



}
)();




//因子探测器
(function createline() {
    data = localStorage.getItem("iframedata");
    if (data != undefined) {
        data = JSON.parse(localStorage.getItem("iframedata"))
        // 基于准备好的dom，初始化echarts实例
        var trendChart = echarts.init(document.querySelector("#tab2 .bar .chart"));
        var trendChartOpt;

        trendChartOpt = {
            color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],

            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                }
            },
            legend: {
                data: ['q', 'p'],
                textStyle: { color: '#FFFFFF' }
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            grid: {
                left: '0%',
                right: '4%',
                bottom: '10%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: 'p',
                    type: 'line',
                    stack: 'Total',
                    smooth: true,
                    lineStyle: {
                        width: 0
                    },
                    showSymbol: false,
                    areaStyle: {
                        opacity: 0.8,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: 'rgb(128, 255, 165)'
                            },
                            {
                                offset: 1,
                                color: 'rgb(1, 191, 236)'
                            }
                        ])
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: [140, 232, 101, 264, 90, 340, 250]
                },
                {
                    name: 'q',
                    type: 'line',
                    stack: 'Total',
                    smooth: true,
                    lineStyle: {
                        width: 0
                    },
                    showSymbol: false,
                    areaStyle: {
                        opacity: 0.8,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: 'rgb(0, 221, 255)'
                            },
                            {
                                offset: 1,
                                color: 'rgb(77, 119, 255)'
                            }
                        ])
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: [120, 282, 111, 234, 220, 340, 310]
                },

            ]
        };


        trendChart.setOption(trendChartOpt);
        $.ajax({
            url: "http://127.0.0.1:8000/daping/factor_detec",
            dataType: "json",
            async: false
        }).done(function () {
            //console.log('Data: ', data);
            //因子探测器的取数逻辑

            //取得因子个数
            var interdata = Object.keys(data[0]).length;
            var q = 2 * interdata;
            var p = 2 * interdata + 1;


            //取得有哪些因子
            var name = new Array();
            for (i = 0; i < interdata; i++) { name[i] = (Object.keys(data[0])[i]) };

            //取得各类因子独立的q值
            var q1Data = [];
            for (i = 0; i < interdata; i++) {
                q1Data[i] = findq(name[i], data);
            };

            //取得各类因子的p值
            var p1Data = [];
            for (i = 0; i < interdata; i++) {
                p1Data[i] = findp(name[i], data, p);
            };


            var qData = [];
            var pData = [];
            var Tname = [];
            for (i = 0; i < interdata; i++) { qData.push(q1Data[i]); };
            for (i = 0; i < interdata; i++) { pData.push(p1Data[i]); };
            for (i = 0; i < interdata; i++) { Tname.push(returnCh(name[i])) };
            trendChart.setOption({
                xAxis: {

                    data: Tname,
                    axisLabel: {
                        interval: 0,

                    }

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





    }
})();


//生态探测器(热力图)
(function createrec() {
    data = localStorage.getItem("iframedata");
    if (data != undefined) {
        data = JSON.parse(localStorage.getItem("iframedata"))
        var myChart = echarts.init(document.querySelector("#tab2 .bar1 .chart"));

        // prettier-ignore


        //生态探测器的取数逻辑
        const data1 = [[5, 0, 1], [4, 0, 1], [4, 1, 1], [3, 0, 1], [3, 1, 1], [3, 2, 1], [2, 0, 1], [2, 1, 1], [2, 2, 1], [2, 3, 1], [1, 0, 1], [1, 1, 1], [1, 2, 1], [1, 3, 1], [1, 4, 1], [0, 0, 1], [0, 1, 1], [0, 2, 1], [0, 3, 1], [0, 4, 1], [0, 5, 1]]
            .map(function (item) {
                return [item[1], item[0], item[2] || '-'];
            });

        //取得因子个数
        var interdata = Object.keys(data[0]).length;


        //取得有哪些因子
        var name = new Array();
        for (i = 0; i < interdata; i++) { name[i] = (Object.keys(data[0])[i]) };


        //取得有多少个块图
        var recnum = 0;
        for (i = 0; i < interdata; i++) {
            recnum += i;
        }


        //开始穿数
        for (j = 0; j < recnum; j++) {

            data1[j][2] = findqq2(findqqx(j, name), data, findqqy2(j, interdata));

        }

        const hours = [];
        // prettier-ignore
        const days = [];
        const Tname = [];
        for (i = 0; i < interdata; i++) { Tname.push(returnCh(name[i])) };
        for (i = 0; i < interdata - 1; i++) { hours.push(Tname[i]) };
        Tname.reverse();
        for (i = 0; i < interdata - 1; i++) { days.push(Tname[i]) };



        option = {
            tooltip: {
                position: 'bottom'
            },
            grid: {
                height: '70%',
                top: '25%'
            },
            xAxis: {
                type: 'category',
                data: hours,
                show: true,
                textStyle: {
                    color: "rgba(255,255,255)",
                },
                splitArea: {
                    show: true
                }
            },
            yAxis: {
                type: 'category',
                data: days,
                show: true,
                textStyle: {
                    color: "red"
                },
                splitArea: {
                    show: true
                }
            },
            visualMap: {
                min: 0,
                max: 1,
                calculable: true,
                orient: 'horizontal',
                left: 'center',
                top: 60,
                textStyle: {
                    color: "rgba(255,255,255)",
                },
                text: ['分异性差异显著', '分异性差异不显著'],


            },
            series: [
                {
                    name: 'Punch Card',
                    type: 'heatmap',
                    data: data1,
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
            // localStorage.removeItem("iframedata");
        });
    }
})();

//因子探测器(雷达图)
(function createradar() {
    data = localStorage.getItem("iframedata");
    if (data != undefined) {
        data = JSON.parse(localStorage.getItem("iframedata"))
        var myChart = echarts.init(document.querySelector("#tab2 .bar .chart2"));

        // prettier-ignore


        //生态探测器的取数逻辑
        const data1 = [[5, 0, 1], [4, 0, 1], [4, 1, 1], [3, 0, 1], [3, 1, 1], [3, 2, 1], [2, 0, 1], [2, 1, 1], [2, 2, 1], [2, 3, 1], [1, 0, 1], [1, 1, 1], [1, 2, 1], [1, 3, 1], [1, 4, 1], [0, 0, 1], [0, 1, 1], [0, 2, 1], [0, 3, 1], [0, 4, 1], [0, 5, 1]]
            .map(function (item) {
                return [item[1], item[0], item[2] || '-'];
            });

        //取得因子个数
        var interdata = Object.keys(data[0]).length;

        var p = 2 * interdata + 1;


        //取得有哪些因子
        var name = new Array();
        for (i = 0; i < interdata; i++) { name[i] = (Object.keys(data[0])[i]) };


        //取得各类因子独立的q值
        var q1Data = [];
        for (i = 0; i < interdata; i++) {
            q1Data[i] = findq(name[i], data);
        };

        //取得各类因子的p值
        var p1Data = [];
        for (i = 0; i < interdata; i++) {
            p1Data[i] = findp(name[i], data, p);
        };

        var q1Data = [];
        for (i = 0; i < interdata; i++) {
            q1Data[i] = findq(name[i], data);
        };

        //传入因子名称
        var indicator = [];
        var Tname = [];
        for (i = 0; i < interdata; i++) { Tname.push(returnCh(name[i])) };

        for (j = 0; j < interdata; j++) {
            indicator.push({ "name": Tname[j], "max": 1, });

        }





        option = {

            legend: {
                data: ['q', 'p']
            },
            radar: {
                // shape: 'circle',
                indicator
            },
            series: [
                {
                    name: 'q vs p',
                    type: 'radar',
                    data: [
                        {
                            value: q1Data,
                            name: 'q'
                        },
                        {
                            value: p1Data,
                            name: 'p'
                        }
                    ]
                }
            ]
        };
        myChart.setOption(option);

        // 重新把配置好的新数据给实例对象
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
            // localStorage.removeItem("iframedata");
        });
    }
})();


//地图变形排名图(江苏)
(function createmap() {

    var myChart = echarts.init(document.querySelector("#tab1 .bar1 .chart"));

    // prettier-ignore

    console.log(echarts.version);
    //生态探测器的取数逻辑

    var ROOT_PATH = 'https://echarts.apache.org/examples';


    var option;

    myChart.showLoading();

    myChart.hideLoading();
    echarts.registerMap('jiangsu', jiangsujson);
    var data1 = [];

    //ajax取得排名数据
    $.ajax({
        url: "http://127.0.0.1:8000/daping/ranking_list2",
        dataType: "json",
        async: false
    }).done(function (data) {
        //console.log('Data: ', data);
        const xData = [];
        const yData = [];
        for (let i in data) {
            xData.push(data[i].fields.CityCounts);
            yData.push(data[i].pk);
        }

        for (let i in data) {
            data1.push({ "name": yData[i], "value": xData[i], });
        }
    })

    data1.sort(function (a, b) {
        return a.value - b.value;
    });
    const mapOption = {
        visualMap: {
            left: 'right',
            min: 0,
            max: 50,
            inRange: {
                // prettier-ignore
                color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
            },
            text: ['High', 'Low'],
            calculable: true
        },
        series: [
            {
                id: 'population',
                type: 'map',
                roam: true,
                map: 'jiangsu',
                animationDurationUpdate: 1000,
                universalTransition: true,
                data: data1
            }
        ]
    };
    const barOption = {
        xAxis: {
            type: 'value'
        },
        yAxis: {
            type: 'category',
            axisLabel: {
                rotate: 30
            },
            data: data1.map(function (item) {
                return item.name;
            })
        },
        animationDurationUpdate: 1000,
        series: {
            type: 'bar',
            id: 'population',
            data: data1.map(function (item) {
                return item.value;
            }),
            universalTransition: true
        }
    };
    let currentOption = mapOption;
    myChart.setOption(mapOption);
    setInterval(function () {
        currentOption = currentOption === mapOption ? barOption : mapOption;
        myChart.setOption(currentOption, true);
    }, 2000);


    option && myChart.setOption(option);


}
)();


//地图变形排名图(中国)


//塌陷事件年份散点图
// (function createmap() {

//     var myChart = echarts.init(document.querySelector("#tab1 .line .chart"));

//     // prettier-ignore

//     console.log(echarts.version);
//     //生态探测器的取数逻辑

//     var ROOT_PATH = 'https://echarts.apache.org/examples';


//     var option;

//     myChart.showLoading();

//     myChart.hideLoading();
//     echarts.registerMap('jiangsu', jiangsujson);
//     var data1 = [];

//     //ajax取得排名数据
//     $.ajax({
//         url: "http://127.0.0.1:8000/daping/ranking_list2",
//         dataType: "json",
//         async: false
//     }).done(function (data) {
//         //console.log('Data: ', data);
//         const xData = [];
//         const yData = [];
//         for (let i in data) {
//             xData.push(data[i].fields.CityCounts);
//             yData.push(data[i].pk);
//         }

//         for (let i in data) {
//             data1.push({ "name": yData[i] + "市", "value": xData[i], });
//         }
//     })

//     data1.sort(function (a, b) {
//         return a.value - b.value;
//     });
//     echarts.registerTransform(ecStat.transform.regression);
// const data = [
//   [0.067732, 3.176513],
//   [0.42781, 3.816464],
//   [0.995731, 4.550095],
//   [0.738336, 4.256571],
//   [0.981083, 4.560815],
//   [0.526171, 3.929515],
//   [0.378887, 3.52617],
//   [0.033859, 3.156393],
//   [0.132791, 3.110301],
//   [0.138306, 3.149813],
//   [0.247809, 3.476346],
//   [0.64827, 4.119688],
//   [0.731209, 4.282233],
//   [0.236833, 3.486582],
//   [0.969788, 4.655492],
//   [0.607492, 3.965162],
//   [0.358622, 3.5149],
//   [0.147846, 3.125947],
//   [0.63782, 4.094115],
//   [0.230372, 3.476039],
//   [0.070237, 3.21061],
//   [0.067154, 3.190612],
//   [0.925577, 4.631504],
//   [0.717733, 4.29589],
//   [0.015371, 3.085028],
//   [0.33507, 3.44808],
//   [0.040486, 3.16744],
//   [0.212575, 3.364266],
//   [0.617218, 3.993482],
//   [0.541196, 3.891471],
//   [0.045353, 3.143259],
//   [0.126762, 3.114204],
//   [0.556486, 3.851484],
//   [0.901144, 4.621899],
//   [0.958476, 4.580768],
//   [0.274561, 3.620992],
//   [0.394396, 3.580501],
//   [0.87248, 4.618706],
//   [0.409932, 3.676867],
//   [0.908969, 4.641845],
//   [0.166819, 3.175939],
//   [0.665016, 4.26498],
//   [0.263727, 3.558448],
//   [0.231214, 3.436632],
//   [0.552928, 3.831052],
//   [0.047744, 3.182853],
//   [0.365746, 3.498906],
//   [0.495002, 3.946833],
//   [0.493466, 3.900583],
//   [0.792101, 4.238522],
//   [0.76966, 4.23308],
//   [0.251821, 3.521557],
//   [0.181951, 3.203344],
//   [0.808177, 4.278105],
//   [0.334116, 3.555705],
//   [0.33863, 3.502661],
//   [0.452584, 3.859776],
//   [0.69477, 4.275956],
//   [0.590902, 3.916191],
//   [0.307928, 3.587961],
//   [0.148364, 3.183004],
//   [0.70218, 4.225236],
//   [0.721544, 4.231083],
//   [0.666886, 4.240544],
//   [0.124931, 3.222372],
//   [0.618286, 4.021445],
//   [0.381086, 3.567479],
//   [0.385643, 3.56258],
//   [0.777175, 4.262059],
//   [0.116089, 3.208813],
//   [0.115487, 3.169825],
//   [0.66351, 4.193949],
//   [0.254884, 3.491678],
//   [0.993888, 4.533306],
//   [0.295434, 3.550108],
//   [0.952523, 4.636427],
//   [0.307047, 3.557078],
//   [0.277261, 3.552874],
//   [0.279101, 3.494159],
//   [0.175724, 3.206828],
//   [0.156383, 3.195266],
//   [0.733165, 4.221292],
//   [0.848142, 4.413372],
//   [0.771184, 4.184347],
//   [0.429492, 3.742878],
//   [0.162176, 3.201878],
//   [0.917064, 4.648964],
//   [0.315044, 3.510117],
//   [0.201473, 3.274434],
//   [0.297038, 3.579622],
//   [0.336647, 3.489244],
//   [0.666109, 4.237386],
//   [0.583888, 3.913749],
//   [0.085031, 3.22899],
//   [0.687006, 4.286286],
//   [0.949655, 4.628614],
//   [0.189912, 3.239536],
//   [0.844027, 4.457997],
//   [0.333288, 3.513384],
//   [0.427035, 3.729674],
//   [0.466369, 3.834274],
//   [0.550659, 3.811155],
//   [0.278213, 3.598316],
//   [0.918769, 4.692514],
//   [0.886555, 4.604859],
//   [0.569488, 3.864912],
//   [0.066379, 3.184236],
//   [0.335751, 3.500796],
//   [0.426863, 3.743365],
//   [0.395746, 3.622905],
//   [0.694221, 4.310796],
//   [0.27276, 3.583357],
//   [0.503495, 3.901852],
//   [0.067119, 3.233521],
//   [0.038326, 3.105266],
//   [0.599122, 3.865544],
//   [0.947054, 4.628625],
//   [0.671279, 4.231213],
//   [0.434811, 3.791149],
//   [0.509381, 3.968271],
//   [0.749442, 4.25391],
//   [0.058014, 3.19471],
//   [0.482978, 3.996503],
//   [0.466776, 3.904358],
//   [0.357767, 3.503976],
//   [0.949123, 4.557545],
//   [0.41732, 3.699876],
//   [0.920461, 4.613614],
//   [0.156433, 3.140401],
//   [0.656662, 4.206717],
//   [0.616418, 3.969524],
//   [0.853428, 4.476096],
//   [0.133295, 3.136528],
//   [0.693007, 4.279071],
//   [0.178449, 3.200603],
//   [0.199526, 3.299012],
//   [0.073224, 3.209873],
//   [0.286515, 3.632942],
//   [0.182026, 3.248361],
//   [0.621523, 3.995783],
//   [0.344584, 3.563262],
//   [0.398556, 3.649712],
//   [0.480369, 3.951845],
//   [0.15335, 3.145031],
//   [0.171846, 3.181577],
//   [0.867082, 4.637087],
//   [0.223855, 3.404964],
//   [0.528301, 3.873188],
//   [0.890192, 4.633648],
//   [0.106352, 3.154768],
//   [0.917886, 4.623637],
//   [0.014855, 3.078132],
//   [0.567682, 3.913596],
//   [0.068854, 3.221817],
//   [0.603535, 3.938071],
//   [0.53205, 3.880822],
//   [0.651362, 4.176436],
//   [0.901225, 4.648161],
//   [0.204337, 3.332312],
//   [0.696081, 4.240614],
//   [0.963924, 4.532224],
//   [0.98139, 4.557105],
//   [0.987911, 4.610072],
//   [0.990947, 4.636569],
//   [0.736021, 4.229813],
//   [0.253574, 3.50086],
//   [0.674722, 4.245514],
//   [0.939368, 4.605182],
//   [0.235419, 3.45434],
//   [0.110521, 3.180775],
//   [0.218023, 3.38082],
//   [0.869778, 4.56502],
//   [0.19683, 3.279973],
//   [0.958178, 4.554241],
//   [0.972673, 4.63352],
//   [0.745797, 4.281037],
//   [0.445674, 3.844426],
//   [0.470557, 3.891601],
//   [0.549236, 3.849728],
//   [0.335691, 3.492215],
//   [0.884739, 4.592374],
//   [0.918916, 4.632025],
//   [0.441815, 3.75675],
//   [0.116598, 3.133555],
//   [0.359274, 3.567919],
//   [0.814811, 4.363382],
//   [0.387125, 3.560165],
//   [0.982243, 4.564305],
//   [0.78088, 4.215055],
//   [0.652565, 4.174999],
//   [0.87003, 4.58664],
//   [0.604755, 3.960008],
//   [0.255212, 3.529963],
//   [0.730546, 4.213412],
//   [0.493829, 3.908685],
//   [0.257017, 3.585821],
//   [0.833735, 4.374394],
//   [0.070095, 3.213817],
//   [0.52707, 3.952681],
//   [0.116163, 3.129283]
// ];
// option = {
//   dataset: [
//     {
//       source: data
//     },
//     {
//       transform: {
//         type: 'ecStat:regression'
//         // 'linear' by default.
//         // config: { method: 'linear', formulaOn: 'end'}
//       }
//     }
//   ],
//   title: {
//     text: 'Linear Regression',
//     subtext: 'By ecStat.regression',
//     sublink: 'https://github.com/ecomfe/echarts-stat',
//     left: 'center'
//   },
//   legend: {
//     bottom: 5
//   },
//   tooltip: {
//     trigger: 'axis',
//     axisPointer: {
//       type: 'cross'
//     }
//   },
//   xAxis: {
//     splitLine: {
//       lineStyle: {
//         type: 'dashed'
//       }
//     }
//   },
//   yAxis: {
//     splitLine: {
//       lineStyle: {
//         type: 'dashed'
//       }
//     }
//   },
//   series: [
//     {
//       name: 'scatter',
//       type: 'scatter'
//     },
//     {
//       name: 'line',
//       type: 'line',
//       datasetIndex: 1,
//       symbolSize: 0.1,
//       symbol: 'circle',
//       label: { show: true, fontSize: 16 },
//       labelLayout: { dx: -20 },
//       encode: { label: 2, tooltip: 1 }
//     }
//   ]
// };

// option && myChart.setOption(option);

// }
// )();

//轮播塌陷事件
let timer = null;
let li = document.querySelectorAll("li1");

// 保存页面中四条数据的top值
let topArr = [0, 40, 80, 120, 160, 200, 240, 280];

// 初始给每一条数据添加top值
for (let i = 0; i < li.length; i++) {
    li[i].style.top = topArr[i] + "px";
}

function run() {
    timer = setInterval(() => {
        for (let i = 0; i < topArr.length; i++) {
            // 当第一条数据移出dom外面时
            if (topArr[0] == -40) {
                // 暂停计时器
                clearInterval(timer);

                // 将第一条数据添加到最后
                dataArr.push(li[0].innerHTML);
                // 删除第一条数据
                dataArr.shift();

                // 将第3条数据添加到dom的最后
                const liDom = document.createElement("li1");
                liDom.innerHTML = dataArr[4];
                ul.appendChild(liDom);

                // 删除dom的第一条数据
                ul.removeChild(li[0]);

                topArr.shift();
                topArr.push(280);

                // 重新获取结构改变后的dom
                li = document.querySelectorAll("li1");

                setTimeout(() => {
                    // li[3].style.top = topArr[3] + "px";
                    run();
                }, 2000);
            }

            // 自减
            topArr[i] -= 1;
            // 重新赋值
            li[i].style.top = topArr[i] + "px";
        }
    }, 20);
}

run();


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
