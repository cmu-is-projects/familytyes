function resizeStemPie(ele, metric) { 
        var diameter = (1.75 * metric) + 'px';

        if (metric<0)
            {
            var diameter = '130px';
            var marginLeft = '1.3em';
            var circleBackground = '#ffffff';
            var textColor = '#f0a350';
            }
        else if (metric>=100)
            {
            var diameter = '187px';
            var marginLeft = '0.8em';
            var circleBackground = '#153a54';
            var textColor = '#ffffff';
            }
        else if (metric>50)
            {
            var diameter = '168px';
            var marginLeft = '1em';
            var circleBackground = '#18557f';
            var textColor = '#ffffff';  
            }
        else
            {
            var diameter = '149px';
            var marginLeft = '1.2em';
            var circleBackground = '#2f7ed8';
            var textColor = '#ffffff';  
            }
        $(ele).css({
            width: diameter,
            height: diameter,
            lineHeight: diameter,
            background: circleBackground,
            color: textColor, 
            marginLeft: marginLeft,
            marginTop: '0.2em',
            marginBottom: '0.2em',
        });
    };
    
    // NOTE TO DEV: SERVER CODE HERE
    var science = 137,
        engineering = 89,
        tech = -29,
        math = 29;

    resizeStemPie('#science_pie', science);
    resizeStemPie('#engineering_pie', engineering);
    resizeStemPie('#tech_pie', tech);
    resizeStemPie('#math_pie', math);