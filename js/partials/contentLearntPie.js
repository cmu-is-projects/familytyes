function resizeContentPie(ele, metric) { 
        var diameter = (1.75 * metric) + 'px';

        if (metric<0)
            {
            var diameter = '130px';
            var marginLeft = '0.5em';
            var circleBackground = '#ffffff';
            var textColor = '#f0a350';
            }
        else if (metric>=100)
            {
            var diameter = '187px';
            var marginLeft = '0em';
            var circleBackground = '#153a54';
            var textColor = '#ffffff';
            }
        else if (metric>50)
            {
            var diameter = '168px';
            var marginLeft = '0.2em';
            var circleBackground = '#18557f';
            var textColor = '#ffffff';  
            }
        else
            {
            var diameter = '149px';
            var marginLeft = '0.4em';
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
            marginBottom: '-0.5em',
        });
    };

var knowledge = 89,
        fishing = 110;

resizeContentPie('#knowledge_pie', knowledge);
    resizeContentPie('#fishing_pie', fishing);