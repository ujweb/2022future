var data1,
	data2,
	data3;

var fill = d3.scaleOrdinal([
  "rgba(8, 74, 149, 1)",
  "rgba(8, 74, 149, 0.9)",
  "rgba(8, 74, 149, 0.8)",
  "rgba(8, 74, 149, 0.7)",
  "rgba(8, 74, 149, 0.6)",
  "rgba(8, 74, 149, 0.5)",
  "rgba(8, 74, 149, 0.4)",
  "rgba(8, 74, 149, 0.3)",
]);

var dataInterval = setInterval(() => {
	data1 = q1Data;
	data2 = q2Data;
	data3 = q3Data;
	if ( q1Check == true && q2Check == true && q3Check == true ) {
		clearInterval(dataInterval);
		clound();
		rank();
	}
}, 100);

function clound() {
	//取得呈現處的寬、高
	var w = parseInt(d3.select("#cloud-1").style("width"));
	var h = parseInt(d3.select("#cloud-1").style("height"));

	d3.layout
	.cloud()
	.size([w, h])
	.words(data1)
	.padding(3)
	.rotate(function () {
		return ~~(Math.random() * 2) * 90;
	})
	.rotate(function () {
		return 0;
	})
	.fontSize(function (d) {
		return d.size;
	})
	.on("end", draw1)
	.start();

	function draw1(words) {
	d3.select("#cloud-1")
		.append("svg")
		.attr("width", w)
		.attr("height", h)
		.append("g")
		.attr("transform", "translate(" + w / 2 + "," + h / 2 + ")")
		.selectAll("text")
		.data(words)
		.enter()
		.append("text")
		.style("font-size", function (d) {
		return d.size + "px";
		})
		.style("fill", function (d, i) {
		return fill(i);
		})
		.attr("text-anchor", "middle")
		.attr("transform", function (d) {
		return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
		})
		.text(function (d) {
		return d.text;
		});
	}

	d3.layout
	.cloud()
	.size([w, h])
	.words(data2)
	.padding(3)
	.rotate(function () {
		return ~~(Math.random() * 2) * 90;
	})
	.rotate(function () {
		return 0;
	})
	.fontSize(function (d) {
		return d.size;
	})
	.on("end", draw2)
	.start();

	function draw2(words) {
		d3.select("#cloud-2")
		.append("svg")
		.attr("width", w)
		.attr("height", h)
		.append("g")
		.attr("transform", "translate(" + w / 2 + "," + h / 2 + ")")
		.selectAll("text")
		.data(words)
		.enter()
		.append("text")
		.style("font-size", function (d) {
			return d.size + "px";
		})
		.style("fill", function (d, i) {
			return fill(i);
		})
		.attr("text-anchor", "middle")
		.attr("transform", function (d) {
			return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
		})
		.text(function (d) {
			return d.text;
		});
	}

	d3.layout
	.cloud()
	.size([w, h])
	.words(data3)
	.padding(3)
	.rotate(function () {
		return ~~(Math.random() * 2) * 90;
	})
	.rotate(function () {
		return 0;
	})
	.fontSize(function (d) {
		return d.size;
	})
	.on("end", draw3)
	.start();

	function draw3(words) {
		d3.select("#cloud-3")
		.append("svg")
		.attr("width", w)
		.attr("height", h)
		.append("g")
		.attr("transform", "translate(" + w / 2 + "," + h / 2 + ")")
		.selectAll("text")
		.data(words)
		.enter()
		.append("text")
		.style("font-size", function (d) {
			return d.size + "px";
		})
		.style("fill", function (d, i) {
			return fill(i);
		})
		.attr("text-anchor", "middle")
		.attr("transform", function (d) {
			return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
		})
		.text(function (d) {
			return d.text;
		});
	}
}

function rank() {
	let question1 = {
		sum: 0,
		title1: 0,
		score1: 0,
		title2: 0,
		score2: 0,
		title3: 0,
		score3: 0,
	};
	let question2 = {
		sum: 0,
		title1: 0,
		score1: 0,
		title2: 0,
		score2: 0,
		title3: 0,
		score3: 0,
	};
	let question3 = {
		sum: 0,
		title1: 0,
		score1: 0,
		title2: 0,
		score2: 0,
		title3: 0,
		score3: 0,
	};
	for (let i = 0; i < data1.length; i++) {
		question1.sum += data1[i]['value'];
		question1.title1 = data1[0]['text'];
		question1.title2 = data1[1]['text'];
		question1.title3 = data1[2]['text'];
		question1.score1 = Math.round((data1[0]['value']/question1.sum) * 100);
		question1.score2 = Math.round((data1[1]['value']/question1.sum) * 100);
		question1.score3 = Math.round((data1[2]['value']/question1.sum) * 100);
	}
	for (let i = 0; i < data2.length; i++) {
		question2.sum += data2[i]['value'];
		question2.title1 = data2[0]['text'];
		question2.title2 = data2[1]['text'];
		question2.title3 = data2[2]['text'];
		question2.score1 = Math.round((data2[0]['value']/question2.sum) * 100);
		question2.score2 = Math.round((data2[1]['value']/question2.sum) * 100);
		question2.score3 = Math.round((data2[2]['value']/question2.sum) * 100);
	}
	for (let i = 0; i < data3.length; i++) {
		question3.sum += data3[i]['value'];
		question3.title1 = data3[0]['text'];
		question3.title2 = data3[1]['text'];
		question3.title3 = data3[2]['text'];
		question3.score1 = Math.round((data3[0]['value']/question3.sum) * 100);
		question3.score2 = Math.round((data3[1]['value']/question3.sum) * 100);
		question3.score3 = Math.round((data3[2]['value']/question3.sum) * 100);
	}
	let html1 = `<div class="rank-item"><b class="h6">No.1</b><div>${question1.title1}<br/>${question1.score1}%</div></div><div class="rank-item"><b class="h6">No.2</b><div>${question1.title2}<br/>${question1.score2}%</div></div><div class="rank-item"><b class="h6">No.3</b><div>${question1.title3}<br/>${question1.score3}%</div></div>`;
	$('.rank-1').html(html1);

	let html2 = `<div class="rank-item"><b class="h6">No.1</b><div>${question2.title1}<br/>${question2.score1}%</div></div><div class="rank-item"><b class="h6">No.2</b><div>${question2.title2}<br/>${question2.score2}%</div></div><div class="rank-item"><b class="h6">No.3</b><div>${question2.title3}<br/>${question2.score3}%</div></div>`;
	$('.rank-2').html(html2);

	let html3 = `<div class="rank-item"><b class="h6">No.1</b><div>${question3.title1}<br/>${question3.score1}%</div></div><div class="rank-item"><b class="h6">No.2</b><div>${question3.title2}<br/>${question3.score2}%</div></div><div class="rank-item"><b class="h6">No.3</b><div>${question3.title3}<br/>${question3.score3}%</div></div>`;
	$('.rank-3').html(html3);
}
