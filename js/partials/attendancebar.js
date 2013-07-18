$(function () {
        $('#attendancebar').highcharts({
            chart: {
                type: 'bar',
                spacingTop: 40,
                marginTop: 80,
            },
            title: {
                text: 'Bar Chart Showing Attedance Breakdown by Gender',
                style: {
                        fontSize: '20px',
                        fontFamily: 'ColaborateBoldRegular'
                    }
            },
            xAxis: {
                categories: ['0-25', '26-50', '51-75', '76-100'],
                title: {
                    text: 'Percentage (%)'
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: '# Students',
                    align: 'high'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            credits: {
                enabled: false,
            },
            exporting: {
                enabled: false,
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true,
                    }
                }
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'top',
                x: -30,
                y: -5,
                floating: true,
                borderWidth: 0,
                shadow: false,
                itemStyle: {
                    fontFamily: 'ColaborateBoldRegular',
                },
            },
            credits: {
                enabled: false
            },
            series: [{
                name: 'FEMALE',
                data: [5, 12, 19, 25],
                color: '#F0A350'
            }, {
                name: 'MALE',
                data: [7, 15, 17, 26]
            }]
        });
    });