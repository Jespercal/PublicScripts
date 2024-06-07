function SVG(t) {
    return document.createElementNS('http://www.w3.org/2000/svg', t)
}
var drawGraph = function() {
		var circles = [],lastAt = -1;
        var t = dayjs.unix(latestAt),
            e = '',
            e2 = '',
            r = 20,
            r2 = 20;
        values.forEach(t => {
            let a = 360 - 3 * t;
            r += 20,
			e += ('' == e ? '' : ' ') + r + ',' + a,
			circles.push([r, a, t])
        });
		values2.forEach(t => {
            let a = 360 - 3 * t;
            r2 += 20,
			e2 += ('' == e2 ? '' : ' ') + r2 + ',' + a,
			circles.push([r2, a, t])
        });
        for (let a = 1; a < 20; a++){
			$(SVG('line')).attr('x1', 60 + 20 * a).attr('x2', 60 + 20 * a).attr('y1', 40).attr('y2', 360).attr('stroke-width', '0.2').attr('stroke', 'rgba(0,0,0,0.5)').appendTo(l);
		}
        console.log(e);
        var l = $('.graph svg');
        $(SVG('polyline')).attr('points', e).attr('style', 'stroke:red;stroke-width:2;fill:transparent;').appendTo(l)
        $(SVG('polyline')).attr('points', e2).attr('style', 'stroke:blue;stroke-width:2;fill:transparent;').appendTo(l)
		$(SVG('polyline')).attr('points', '40,360 ' + e + ' ' + r + ',360').attr('style', 'fill:rgba(255,0,0,0.1);').appendTo(l)
		$(SVG('polyline')).attr('points', '40,360 ' + e2 + ' ' + r2 + ',360').attr('style', 'fill:rgba(0,0,255,0.1);').appendTo(l)
		circles.forEach(t => {
            $(SVG('circle')).attr('cx', t[0]).attr('cy', t[1]).attr('r', 3).attr('stroke', 'transparent').attr('stroke-width', '20').click(function() {
                if (lastAt != t[0]) {
                    lastAt = t[0];
                    let e = $(this).position();
                    $('#hoverer').css({
                        top: e.top - 48,
                        left: e.left - 22,
                        position: 'absolute'
                    })
					$('#hoverer span:first-child').text(t[2] + '%')
					$('#hoverer span:last-child').text(t[2] + '°')
                } else lastAt = !1, $('#hoverer').css({
                    top: -100,
                    left: -100,
                    position: 'absolute'
                })
            }).appendTo(l)
        });
        for (let n = 0; n < 11; n++) {
            let s = 40 + 32 * n;
            $(SVG('line')).attr('x1', 35).attr('x2', 45).attr('y1', s).attr('y2', s).attr('stroke-width', 1).attr('stroke', 'black').appendTo(l)
			$(SVG('text')).attr('x', 5).attr('y', s).text(100 - 10 * n + '%%').attr('style', 'alignment-baseline: central;font-size:12;').appendTo(l)
        }
        for (let o = 0; o < Math.ceil(values.length / 2); o++) {
            let i = t.clone();
            t = t.subtract(2 * intervalMinutes, 'minutes')
			$(SVG('text')).attr('dx', 40 + 40 * o).attr('style', 'writing-mode: vertical-lr;-webkit-writing-mode: vertical-lr;font-size:12;').attr('dy', 365).text('- ' + i.format('HH:mm - DD/MM')).appendTo(l)
        }
    },
    setGraphInterval = function(t) {
        intervalMinutes = t
    };