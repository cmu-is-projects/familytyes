$(function () {
	    $('#knowledgeModal-graph1').highcharts({
		    chart: {
		        type: 'boxplot',
		        spacingTop: 0,
                marginTop: 80
		    },
		    
		    title: {
		        text: "Paul's Pre-Test Scores <br>VS. Program's Performance",
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
		        enabled: false
		    },
		
		    xAxis: {
		        categories: ['Pre-Test'],
		        title: {
		            text: 'Test'
		        }
		    },
		    
		    yAxis: {
		        title: {
		            text: 'Score'
		        },
		        plotLines: [{
		            value: 53,
		            color: 'red',
		            width: 1,
		            zIndex: 5,
		            label: {
		                text: "Paul's Score: 53",
		                align: 'center',
		                style: {
		                    color: 'gray'
		                }
		            }
		        }]  
		    },
		
		    series: [{
		        name: 'Observations',
		        data: [
		            [76, 80, 84, 89, 34,
		            33, 53, 93, 78, 10,
		            14, 62, 17, 70, 18,
		            24, 12, 6, 71, 50,
		            34, 36, 4, 42, 10]
		        ],
		        tooltip: {
		            headerFormat: '<em>Pre-Test {point.key}</em><br/>'
		        }
		    }]
		
		});
	});

	$(function () {
	    $('#knowledgeModal-graph2').highcharts({
		    chart: {
		        type: 'boxplot',
		        spacingTop: 0,
                marginTop: 80
		    },
		    
		    title: {
		        text: "Paul's Post-Test Scores <br>VS. Program's Performance",
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
		        enabled: false
		    },
		
		    xAxis: {
		        categories: ['Pre-Test'],
		        title: {
		            text: 'Test'
		        }
		    },
		    
		    yAxis: {
		        title: {
		            text: 'Score'
		        },
		        plotLines: [{
		            value: 73,
		            color: 'red',
		            width: 1,
		            zIndex: 5,
		            label: {
		                text: "Paul's Score: 73",
		                align: 'center',
		                style: {
		                    color: 'gray'
		                }
		            }
		        }]  
		    },
		
		    series: [{
		        name: 'Observations',
		        data: [
		            [86, 86, 88, 89, 34,
		            33, 53, 93, 78, 70,
		            64, 62, 37, 70, 68,
		            64, 42, 26, 71, 50,
		            34, 36, 24, 42, 30]
		        ],
		        tooltip: {
		            headerFormat: '<em>Pre-Test {point.key}</em><br/>'
		        }
		    }]
		
		});
	});