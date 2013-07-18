$(function () {
        Highcharts.setOptions({
            colors: ['#0B1F36','#2f7ed8']
        });
        $('#flyskillbar').highcharts({
            chart: {
                type: 'column',
                paddingTop: '-2em',
                backgroundColor: "#F0A350",
                plotBackgroundColor: "#F0A350",
                spacingRight: 0,
                marginRight: -30,
                spacingTop: 0,
                marginTop: 30,
                marginLeft: 50,
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: [
                    ''
                ],
                lineWidth: 0
            },
            yAxis: {
                min: 0,
                title: {
                    text: ''
                },
                gridLineWidth: 0,
                lineWidth: 0,
                minorGridLineWidth: 0,
                lineColor: 'transparent',
                labels: {
                    enabled: false
                },
                minorTickLength: 0,
                tickLength: 0
            },
            credits: {
                enabled: false,
            },
            exporting: {
                enabled: false,
            },
            legend: {
                verticalAlign: 'top',
                borderWidth: 0,
                align: 'left',
                itemStyle: {
                    color: '#ffffff',
                    fontFamily: 'ColaborateBoldRegular',
                },
            },
            tooltip: {
                enabled: false
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                name: '# SKILLS (PRE)',
                data: [49.9],
                dataLabels: {
                    enabled: true,
                    rotation: 0,
                    color: '#ffffff',
                    formatter: function() {
                        return (this.y);
                    },
                    style: {
                        fontSize: '16px',
                        fontFamily: 'ColaborateBoldRegular',
                    }
                }
    
            }, {
                name: '# SKILLS (POST)',
                data: [83.6],
                dataLabels: {
                    enabled: true,
                    rotation: 0,
                    color: '#ffffff',
                    formatter: function() {
                        return (this.y);
                    },
                    style: {
                        fontSize: '16px',
                        fontFamily: 'ColaborateBoldRegular'
                    }
                }
            }]
        },function(chart){
        
           chart.series[0].data[0].graphic.attr({
                width:15
            });
           chart.series[1].data[0].graphic.attr({
                width:15
            });
           
        });
    });