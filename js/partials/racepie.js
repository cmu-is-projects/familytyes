$(function () {
    $('#racepie').highcharts({
        chart: {
            plotBackgroundColor: "#E9E9E9",
            plotBorderWidth: "#E9E9E9",
            plotShadow: false,
            marginTop: 0,
            spacingTop: 0,
        },
        title: {
            text: ' '
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        credits: {
                enabled: false,
            },
            exporting: {
                enabled: false,
            },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    color: '#000000',
                    connectorColor: '#000000',
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'Racial Breakdown',
            data: [
                ['Black',       15],
                ['Hispanic',    12],
                ['Caucasian',   55],
                ['Asian',     15],
                ['Other',   3]
            ]
        }]
    });
});