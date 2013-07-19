$(function () {
	    $('#flyfishingModal-graph1').highcharts({
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
		            value: 2,
		            color: 'red',
		            width: 1,
		            zIndex: 5,
		            label: {
		                text: "Paul's Score: 2",
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
		            [1,2,3,4,1,2,3,4,1,3,5,6,7,2,1,0]
		        ],
		        tooltip: {
		            headerFormat: '<em>Pre-Test {point.key}</em><br/>'
		        }
		    }]
		
		});
	});

	$(function () {
	    $('#flyfishingModal-graph2').highcharts({
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
		            value: 5,
		            color: 'red',
		            width: 1,
		            zIndex: 5,
		            label: {
		                text: "Paul's Score: 5",
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
		            [2,3,4,5,3,4,6,4,2,3,5,6,7,2,2,2]
		        ],
		        tooltip: {
		            headerFormat: '<em>Pre-Test {point.key}</em><br/>'
		        }
		    }]
		
		});
	});