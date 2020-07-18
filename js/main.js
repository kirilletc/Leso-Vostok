var options1 = {
    chart: {
        width: 339,
        type: 'donut',
    },
    colors: ['#f9c614', '#23ad4b', '#12aed1'],
    labels: ['Хвойные', 'Твердолиственные', 'Мягколиственные'],
    series: [56, 37, 7],
    dataLabels: {
        enabled: false
    },
    legend: {
        position: 'bottom',
        offsetY: 10,
        offsetX: 65,
        height: 70,
        fontSize: '15px',
    },
    plotOptions: {
        pie: {
            donut: {
                margin: 15,
                size: "85%"
            },
        }
    },
};
var options3 = {
    chart: {
        width: 339,
        type: 'donut',
    },
    colors: ['#f9c614', '#23ad4b', '#12aed1'],
    labels: ['Хвойные', 'Твердолиственные', 'Мягколиственные'],
    series: [56, 37, 7],
    dataLabels: {
        enabled: false
    },
    legend: {
        position: 'right',
        offsetY: 0,
        height: 170,
        fontSize: '15px',
    },
    plotOptions: {
        pie: {
            donut: {
                margin: 15,
                size: "85%"
            },
        }
    },
};
var chart1 = new ApexCharts(document.querySelector("#chart1"), options1);
chart1.render();
var chart2 = new ApexCharts(document.querySelector("#chart2"), options1);
chart2.render();
var chart3 = new ApexCharts(document.querySelector("#chart3"), options3);
chart3.render();
var chart4 = new ApexCharts(document.querySelector("#chart4"), options1);
chart4.render();