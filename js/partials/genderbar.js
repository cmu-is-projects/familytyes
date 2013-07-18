$(function () {
    Highcharts.setOptions({
        colors: ['#153A54', '#0B1F36', '#18557F', '#2f7ed8', '#30A9FF']
    });
        $('#genderbar').highcharts({
            chart: {
                type: 'bar',
                backgroundColor: "#E9E9E9",
                plotBackgroundColor: "#E9E9E9"
            },
            title: {
                text: ''
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Percentage (%)'
                }
            },
            credits: {
                enabled: false,
            },
            exporting: {
                enabled: false,
            },
            legend: {
                layout: 'vertical',
                backgroundColor: '#E9E9E9',
                borderWidth: 0,
                reversed: true,
                align: 'right',
                verticalAlign: 'top',
                x: -20,
                y: 0,
                itemStyle: {
                    fontFamily: 'ColaborateBoldRegular',
                },
            },
            plotOptions: {
                series: {
                    stacking: 'percent'
                }
            },
                series: [{
                name: 'FEMALE',
                data: [45],
                color: '#F0A350'
            }, {
                name: 'MALE',
                data: [55]
            }]
        });
    });