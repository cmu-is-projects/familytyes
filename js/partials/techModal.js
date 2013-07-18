$(function () {
        $('#techModal-graph').highcharts({
            chart: {
                type: 'column',
                spacingTop: 40,
            },
            title: {
                text: 'Histogram of Technology Post-Test Scores',
                style: {
                        fontSize: '20px',
                        fontFamily: 'ColaborateBoldRegular'
                    }
            },
            credits: {
                enabled: false,
            },
            exporting: {
                enabled: false,
            },
            legend: {
                enabled: false,
            },
            xAxis: {
                categories: [
                    '10',
                    '20',
                    '30',
                    '40',
                    '50',
                    '60',
                    '70',
                    '80',
                    '90',
                    '100'
                ],
                title: {
                    text: 'Score'
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: '# Students'
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                name: '# Students',
                data: [1, 2, 4, 6, 8, 12, 17, 22, 10,7]
    
            }]
        });
    });