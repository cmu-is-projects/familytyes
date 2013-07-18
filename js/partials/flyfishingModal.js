$(function () {
        $('#flyfishingModal-graph').highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: 'Bar Chart of Pre & Post-test Scores by # Skills Learnt',
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
            xAxis: {
                categories: [
                    '0-2',
                    '3-5',
                    '6-8',
                    '9-11',
                    '>11',
                ],
                title: {
                    text: '# Skills Learnt'
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
                name: 'PRE-TEST',
                data: [35, 10, 5, 2, 1]
    
            }, {
                name: 'POST-TEST',
                data: [15, 20, 15, 2, 1]
    
            }]
        });
    });