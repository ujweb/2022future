var data1 = [
		{key: "ESG", value: 25},
		{key: "傳承接班", value: 14},
		{key: "企業領導", value: 13},
		{key: "社會參與", value: 13},
		{key: "選項五", value: 12},
		{key: "選項六", value: 10},
		{key: "選項七", value: 8},
		{key: "選項八", value: 7}
	],
	data2 = [
		{key: "ESG", value: 25},
		{key: "傳承接班", value: 14},
		{key: "企業領導", value: 13},
		{key: "社會參與", value: 13},
		{key: "選項五", value: 12},
		{key: "選項六", value: 10},
		{key: "選項七", value: 8},
		{key: "選項八", value: 7}
	],
	data3 = [
		{key: "ESG", value: 25},
		{key: "傳承接班", value: 14},
		{key: "企業領導", value: 13},
		{key: "社會參與", value: 13},
		{key: "選項五", value: 12},
		{key: "選項六", value: 10},
		{key: "選項七", value: 8},
		{key: "選項八", value: 7}
	];
var svg1 = d3.select(".issue-1"),
	svg2 = d3.select(".issue-2"),
	svg3 = d3.select(".issue-3"),
	width = svg1.attr("width"),
	height = svg1.attr("height"),
	radius = Math.min(width, height) / 2;

var g1 = svg1.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")"),
	g2 = svg2.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")"),
	g3 = svg3.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

var colors1 = d3.scaleOrdinal([
	"#63B3E3",
	"#56A4D8",
	"#4995CD",
	"#3E88C3",
	"#327BB9",
	"#256CAE",
	"#1A5EA4",
	"#0E509A",
	]),
	colors2 = d3.scaleOrdinal([
		"#FFDA00",
		"#F9CF06",
		"#F3B80B",
		"#EDA010",
		"#E98F14",
		"#E57A19",
		"#E9632D",
		"#E75128",
	]);

var pie = d3.pie().value(function (d) {
	return d.value;
});

var path = d3
	.arc()
	.outerRadius(radius - 100)
	.innerRadius(0.1)
	.startAngle(function(d) { return -d.startAngle; })
	.endAngle(function(d) { return -d.endAngle; });
	
var label = d3
	.arc()
	.outerRadius(radius - 60)
	.innerRadius(radius - 30)
	.startAngle(function(d) { return -d.startAngle; })
	.endAngle(function(d) { return -d.endAngle; });

// 第一題
var arc1 = g1
	.selectAll(".arc1")
	.data(pie(data1))
	.enter()
	.append("g")
	.attr("class", "arc arc1");
var tgroup1 = arc1
	.append("g")
	.attr("class", "tgroup1");
arc1.append("path")
	.attr("d", path)
	.attr("fill", function (d, i) {
		return colors1(i);
	}).on('mouseover', function (d, i) {
		d3.select(this)
			.transition()
			.duration(500)
			.attr('transform', function (d) {
				var dist = 12;
				d.midAngle = ((d.endAngle - d.startAngle) / 2) + d.startAngle;
				var x = Math.sin(d.midAngle) * dist;
				var y = -Math.cos(d.midAngle) * dist;
				return 'scale(1.11)';
			});
	}).on('mouseout', function (d, i) {
		d3.select(this)
			.transition()
			.duration(500)
			.attr('transform', 'translate(0,0)')
	});
arc1.append("polyline").each(function (d, i) {
	var centroid = label.centroid(d);
	d3.select(this)
		.attr("stroke", "black")
		.style("fill", "none")
		.attr("stroke-width", 1)
		.attr("points", function (d) {
			var posA1 = path.centroid(d)[0] * 1.75,
				posA2 = path.centroid(d)[1] * 1.75,
				posB1 = label.centroid(d)[0] * 0.85,
				posB2 = label.centroid(d)[1] * 0.85;
			return [posA1, posA2, posB1, posB2];
	});
});
tgroup1.append("text").each(function (d, i) {
	var centroid = label.centroid(d);
	if ( i < 3 ) {
			d3.select(this)
				.attr("x", centroid[0])
				.attr("y", centroid[1])
				.attr("dy", "10px")
				.attr("dx", "-78px")
				.attr("class", "order")
				.attr("font-size", "3rem")
				.text(i+1);
	}
});
tgroup1.append("text").each(function (d, i) {
	var centroid = label.centroid(d);
	if ( i < 3 ) {
			d3.select(this)
			.attr("x", centroid[0])
			.attr("y", centroid[1])
			.attr("dy", "10px")
			.attr("dx", "-43px")
			.text(d.data.key);
	} else {
			d3.select(this)
			.attr("x", centroid[0])
			.attr("y", centroid[1])
			.attr("dy", "10px")
			.attr("dx", "-33px")
			.text(d.data.key);
	}
});
tgroup1.append("text").each(function (d, i) {
	var centroid = label.centroid(d);
	if ( i < 3 ) {
			d3.select(this)
			.attr("x", centroid[0])
			.attr("y", centroid[1])
			.attr("dy", "-10px")
			.attr("dx", "-43px")
			.text(d.value + "%");
	} else {
			d3.select(this)
			.attr("x", centroid[0])
			.attr("y", centroid[1])
			.attr("dy", "-10px")
			.attr("dx", "-33px")
			.text(d.value + "%");
	}
});

// 第二題
var arc2 = g2
	.selectAll(".arc2")
	.data(pie(data2))
	.enter()
	.append("g")
	.attr("class", "arc arc2");
var tgroup2 = arc2
	.append("g")
	.attr("class", "tgroup2");
arc2.append("path")
	.attr("d", path)
	.attr("fill", function (d, i) {
		return colors2(i);
	}).on('mouseover', function (d, i) {
		d3.select(this)
			.transition()
			.duration(500)
			.attr('transform', function (d) {
				var dist = 12;
				d.midAngle = ((d.endAngle - d.startAngle) / 2) + d.startAngle;
				var x = Math.sin(d.midAngle) * dist;
				var y = -Math.cos(d.midAngle) * dist;
				return 'scale(1.11)';
			});
	}).on('mouseout', function (d, i) {
		d3.select(this)
			.transition()
			.duration(500)
			.attr('transform', 'translate(0,0)')
	});
arc2.append("polyline").each(function (d, i) {
	var centroid = label.centroid(d);
	d3.select(this)
		.attr("stroke", "black")
		.style("fill", "none")
		.attr("stroke-width", 1)
		.attr("points", function (d) {
			var posA1 = path.centroid(d)[0] * 1.75,
				posA2 = path.centroid(d)[1] * 1.75,
				posB1 = label.centroid(d)[0] * 0.85,
				posB2 = label.centroid(d)[1] * 0.85;
			return [posA1, posA2, posB1, posB2];
	});
});
tgroup2.append("text").each(function (d, i) {
	var centroid = label.centroid(d);
	if ( i < 3 ) {
			d3.select(this)
				.attr("x", centroid[0])
				.attr("y", centroid[1])
				.attr("dy", "10px")
				.attr("dx", "-78px")
				.attr("class", "order")
				.attr("font-size", "3rem")
				.text(i+1);
	}
});
tgroup2.append("text").each(function (d, i) {
	var centroid = label.centroid(d);
	if ( i < 3 ) {
			d3.select(this)
			.attr("x", centroid[0])
			.attr("y", centroid[1])
			.attr("dy", "10px")
			.attr("dx", "-43px")
			.text(d.data.key);
	} else {
			d3.select(this)
			.attr("x", centroid[0])
			.attr("y", centroid[1])
			.attr("dy", "10px")
			.attr("dx", "-33px")
			.text(d.data.key);
	}
});
tgroup2.append("text").each(function (d, i) {
	var centroid = label.centroid(d);
	if ( i < 3 ) {
			d3.select(this)
			.attr("x", centroid[0])
			.attr("y", centroid[1])
			.attr("dy", "-10px")
			.attr("dx", "-43px")
			.text(d.value + "%");
	} else {
			d3.select(this)
			.attr("x", centroid[0])
			.attr("y", centroid[1])
			.attr("dy", "-10px")
			.attr("dx", "-33px")
			.text(d.value + "%");
	}
});

// 第三題
var arc3 = g3
	.selectAll(".arc3")
	.data(pie(data3))
	.enter()
	.append("g")
	.attr("class", "arc arc3");
var tgroup3 = arc3
	.append("g")
	.attr("class", "tgroup3");
arc3.append("path")
	.attr("d", path)
	.attr("fill", function (d, i) {
		return colors1(i);
	}).on('mouseover', function (d, i) {
		d3.select(this)
			.transition()
			.duration(500)
			.attr('transform', function (d) {
				var dist = 12;
				d.midAngle = ((d.endAngle - d.startAngle) / 2) + d.startAngle;
				var x = Math.sin(d.midAngle) * dist;
				var y = -Math.cos(d.midAngle) * dist;
				return 'scale(1.11)';
			});
	}).on('mouseout', function (d, i) {
		d3.select(this)
			.transition()
			.duration(500)
			.attr('transform', 'translate(0,0)')
	});
arc3.append("polyline").each(function (d, i) {
	var centroid = label.centroid(d);
	d3.select(this)
		.attr("stroke", "black")
		.style("fill", "none")
		.attr("stroke-width", 1)
		.attr("points", function (d) {
			var posA1 = path.centroid(d)[0] * 1.75,
				posA2 = path.centroid(d)[1] * 1.75,
				posB1 = label.centroid(d)[0] * 0.85,
				posB2 = label.centroid(d)[1] * 0.85;
			return [posA1, posA2, posB1, posB2];
	});
});
tgroup3.append("text").each(function (d, i) {
	var centroid = label.centroid(d);
	if ( i < 3 ) {
			d3.select(this)
				.attr("x", centroid[0])
				.attr("y", centroid[1])
				.attr("dy", "10px")
				.attr("dx", "-78px")
				.attr("class", "order")
				.attr("font-size", "3rem")
				.text(i+1);
	}
});
tgroup3.append("text").each(function (d, i) {
	var centroid = label.centroid(d);
	if ( i < 3 ) {
			d3.select(this)
			.attr("x", centroid[0])
			.attr("y", centroid[1])
			.attr("dy", "10px")
			.attr("dx", "-43px")
			.text(d.data.key);
	} else {
			d3.select(this)
			.attr("x", centroid[0])
			.attr("y", centroid[1])
			.attr("dy", "10px")
			.attr("dx", "-33px")
			.text(d.data.key);
	}
});
tgroup3.append("text").each(function (d, i) {
	var centroid = label.centroid(d);
	if ( i < 3 ) {
			d3.select(this)
			.attr("x", centroid[0])
			.attr("y", centroid[1])
			.attr("dy", "-10px")
			.attr("dx", "-43px")
			.text(d.value + "%");
	} else {
			d3.select(this)
			.attr("x", centroid[0])
			.attr("y", centroid[1])
			.attr("dy", "-10px")
			.attr("dx", "-33px")
			.text(d.value + "%");
	}
});
