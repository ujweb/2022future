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
var data1 = [
  { text: "傳承接班", size: 38 },
  { text: "社會參與", size: 30 },
  { text: "企業領導", size: 24 },
  { text: "ESG", size: 24 },
  { text: "選項五", size: 20 },
  { text: "選項六", size: 18 },
  { text: "選項七", size: 14 },
  { text: "選項八", size: 14 },
];
var data2 = [
  { text: "傳承接班", size: 38 },
  { text: "社會參與", size: 30 },
  { text: "企業領導", size: 24 },
  { text: "ESG", size: 24 },
  { text: "選項五", size: 20 },
  { text: "選項六", size: 18 },
  { text: "選項七", size: 14 },
  { text: "選項八", size: 14 },
];
var data3 = [
  { text: "傳承接班", size: 38 },
  { text: "社會參與", size: 30 },
  { text: "企業領導", size: 24 },
  { text: "ESG", size: 24 },
  { text: "選項五", size: 20 },
  { text: "選項六", size: 18 },
  { text: "選項七", size: 14 },
  { text: "選項八", size: 14 },
];

//取得呈現處的寬、高
var w = parseInt(d3.select("#cloud-1").style("width"), 10);
var h = parseInt(d3.select("#cloud-1").style("height"), 10);

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
