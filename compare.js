let handel1,
  handel2;
let link, link1, link2, link3, link0;
let flag = 0;
let handel1Contest,
  handel2Contest,
  handel1MaxRating = 0,
  handel1MinRating = 1000000,
  handel2MaxRating = 0,
  handel2MinRating = 1000000,
  handel1MinRank = 1000000,
  handel1MaxRank = 0,
  handel2MinRank = 1000000,
  handel2MaxRank = 0;
let handel1Ratings = [],
  handel2Ratings = [];
let handel1arr = new Array();
let handel1counts = {},
  handel1verdicts = {},
  handel1lang = {},
  handel1ratings = {},
  handel1tag = {},
  handel1seatings = {};
var handel1set1 = new Set();
var handel1set2 = new Set();
var handel1set3 = new Set();
var handel1set4 = new Set();
var handel1set6 = new Set();
var handel1set7 = new Set();
var handel1hasQuestion = new Set();
var handel1TriedQuestion = new Set();
var handel2TriedQuestion = new Set();
var handel1set5 = new Set();
let handel2arr = new Array();
let handel2counts = {},
  handel2verdicts = {},
  handel2lang = {},
  handel2ratings = {},
  handel2tag = {},
  handel2seatings = {};
var handel2set1 = new Set();
var handel2set2 = new Set();
var handel2set3 = new Set();
var handel2set4 = new Set();
var handel2set6 = new Set();
var handel2set7 = new Set();
var handel2hasQuestion = new Set();
var handel2set5 = new Set();
function refresh()
{
  flag=0;
  handel1Ratings.length=0;
  handel2Ratings.length=0;
  handel1set1.clear();
  handel1set2.clear();
  handel1set3.clear();
  handel1set6.clear();
  handel1set7.clear();
  handel1hasQuestion.clear();
  handel1set4.clear();
  handel1set5.clear();
  handel2set1.clear();
  handel2set2.clear();
  handel2set3.clear();
  handel2set6.clear();
  handel2set7.clear();
  handel2hasQuestion.clear();
  handel2set4.clear();
  handel2set5.clear();
  handel1MaxRating = 0,
  handel1MinRating = 1000000,
  handel2MaxRating = 0,
  handel2MinRating = 1000000,
  handel1MinRank = 1000000,
  handel1MaxRank = 0,
  handel2MinRank = 1000000,
  handel2MaxRank = 0;
  handel1arr.length=0;
  handel2arr.length=0;
  for (const prop of Object.getOwnPropertyNames(handel1counts)) {
    delete handel1counts[prop];
  }
  for (const prop of Object.getOwnPropertyNames(handel1seatings)) {
    delete handel1seatings[prop];
  }
  for (const prop of Object.getOwnPropertyNames(handel1verdicts)) {
    delete handel1verdicts[prop];
  }
  for (const prop of Object.getOwnPropertyNames(handel1lang)) {
    delete handel1lang[prop];
  }
  for (const prop of Object.getOwnPropertyNames(handel1ratings)) {
    delete handel1ratings[prop];
  }
  for (const prop of Object.getOwnPropertyNames(handel1tag)) {
    delete handel1tag[prop];
  }
  for (const prop of Object.getOwnPropertyNames(handel2counts)) {
    delete handel2counts[prop];
  }
  for (const prop of Object.getOwnPropertyNames(handel2seatings)) {
    delete handel2seatings[prop];
  }
  for (const prop of Object.getOwnPropertyNames(handel2verdicts)) {
    delete handel2verdicts[prop];
  }
  for (const prop of Object.getOwnPropertyNames(handel2lang)) {
    delete handel2lang[prop];
  }
  for (const prop of Object.getOwnPropertyNames(handel2ratings)) {
    delete handel2ratings[prop];
  }
  for (const prop of Object.getOwnPropertyNames(handel2tag)) {
    delete handel2tag[prop];
  }
}
function compareSearch() {
  refresh();
  let str=document.getElementById("search-inputs").value.split(" ");
  if(str.length==2)
  {
    handel1=str[0];
    handel2=str[1];
    link0 = "https://codeforces.com/api/user.rating?handle=";
    link =  "https://codeforces.com/api/user.rating?handle=";
    link1 = "https://codeforces.com/api/user.info?handles=";
    link2 = "https://codeforces.com/api/user.status?handle=";
    link3 = "https://codeforces.com/api/user.status?handle=";
    link1 = link1 + handel1+";"+handel2;
    console.log(link1);
    link2 += handel1;
    link3 += handel2;
    link0 += handel1;
    link += handel2;
    infoApi();
    statusApi();
    ratingApi();
  }
  else
  {
    swal({
      title: "Error",
      text: "Give two handel Names!",
      icon: "error",
    });
  }
}
async function infoApi() {
  let data1 = await fetch(link1);
  let data = await data1.json();
  if (data.status == "OK") {
    document.getElementById("user1").innerHTML = handel1;
    document.getElementById("user2").innerHTML = handel2;
    document.getElementById("compareuser1").innerHTML = handel1;
    document.getElementById("compareuser2").innerHTML = handel2;
    let handel1CurrentRating=data.result[0].rating;
    let handel2CurrentRating=data.result[1].rating;
    let handel1MaxRat=data.result[0].maxRating;
    let handel2MaxRat=data.result[1].maxRating;
    handel1CurrentRating/=50;
    handel1MaxRat/=50;
    handel2CurrentRating/=50;
    handel2MaxRat/=50;
    console.log(handel2CurrentRating);
    console.log(handel2MaxRat);
    // update(handel1CurrentRating);
    // update2(handel1MaxRat);
    // // update5();
    // rightupdate(handel2CurrentRating);
    // rightupdate2(handel2MaxRat);
    // rightupdate5();
  }
  else 
  {
    swal({
      title: "Error!",
      text: "Wrong user handle!",
      icon: "error",
    });
    flag=1;
    console,log("error found");
  }
}
async function ratingApi() {
  let handel1Data = await fetch(link0);
  let handel2Data = await fetch(link);
  let data1 = await handel1Data.json();
  let data2 = await handel2Data.json();
  if (data1.status == "OK" && data2.status == "OK") {
    handel1Contest = data1.result.length;
    handel2Contest = data2.result.length;
    for (let i = 0; i < data1.result.length; i++) {
      handel1Ratings.push([
        (data1.result[i].ratingUpdateTimeSeconds),
        data1.result[i].newRating,
      ]);
      if (handel1MaxRating < data1.result[i].newRating) {
        handel1MaxRating = data1.result[i].newRating;
      }
      if (handel1MaxRank < data1.result[i].rank) {
        handel1MaxRank = data1.result[i].rank;
      }
      if (handel1MinRating > data1.result[i].newRating) {
        handel1MinRating = data1.result[i].newRating;
      }
      if (handel1MinRank > data1.result[i].rank) {
        handel1MinRank = data1.result[i].rank;
      }
    }
    for (let i = 0; i < data2.result.length; i++) {
      handel2Ratings.push([
        (data2.result[i].ratingUpdateTimeSeconds),
        data2.result[i].newRating,
      ]);
      if (handel2MaxRating < data2.result[i].newRating) {
        handel2MaxRating = data2.result[i].newRating;
      }
      if (handel2MaxRank < data2.result[i].rank) {
        handel2MaxRank = data2.result[i].rank;
      }
      if (handel2MinRating > data2.result[i].newRating) {
        handel2MinRating = data2.result[i].newRating;
      }
      if (handel2MinRank > data2.result[i].rank) {
        handel2MinRank = data2.result[i].rank;
      }
    }
    let one =data1.result.length;
    let two =data2.result.length;
    // update4(handel1MinRating/50);
    // rightupdate4(handel2MinRating/50);
    // update3(((one)/(one+two))*100);
    // rightupdate3(((two)/(one+two))*100)
  } else {
    flag = 1;
    console.log("error found");
  }
}
async function statusApi() {
  let handel1data = await fetch(link2);
  let handel2data = await fetch(link3);
  let data1 = await handel1data.json();
  let data2 = await handel2data.json();
  if (data1.status == "OK" && data2.status == "OK") {
    for (var i = 0; i < data1.result.length; i++) {
      if (handel1TriedQuestion.has(data1.result[i].problem.name) == false) {
        handel1TriedQuestion.add(data1.result[i].problem.name);
      }
      if (data1.result[i].verdict == "OK") {
        if (handel1hasQuestion.has(data1.result[i].problem.name) == false) {
          handel1hasQuestion.add(data1.result[i].problem.name);
          handel1set1.add(data1.result[i].problem.index.substring(0, 1));
          var num = data1.result[i].problem.index.substring(0, 1);
          handel1counts[num] = handel1counts[num] ? handel1counts[num] + 1 : 1;
          for (let j = 0; j < data1.result[i].problem.tags.length; j++) {
            handel1set4.add(data1.result[i].problem.tags[j]);
            var ta = data1.result[i].problem.tags[j];
            handel1tag[ta] = handel1tag[ta] ? handel1tag[ta] + 1 : 1;
          }
          handel1set5.add(data1.result[i].problem.rating);
          var tas = data1.result[i].problem.rating;
          handel1ratings[tas] = handel1ratings[tas]
            ? handel1ratings[tas] + 1
            : 1;
        }
      }
      let seat = data1.result[i].problem.name;
      handel1seatings[seat] = handel1seatings[seat]
        ? handel1seatings[seat] + 1
        : 1;
      let pums = data1.result[i].problem.name;
      handel1lang[pums] = handel1lang[pums] ? handel1lang[pums] + 1 : 1;
      handel1set3.add(data1.result[i].programmingLanguage);
      let nums = data1.result[i].verdict;
      handel1verdicts[nums] = handel1verdicts[nums]
        ? handel1verdicts[nums] + 1
        : 1;
      handel1set2.add(data1.result[i].verdict);
    }
    for (var i = 0; i < data2.result.length; i++) {
      if (handel2TriedQuestion.has(data2.result[i].problem.name) == false) {
        handel2TriedQuestion.add(data2.result[i].problem.name);
      }
      if (data2.result[i].verdict == "OK") {
        if (handel2hasQuestion.has(data2.result[i].problem.name) == false) {
          handel2hasQuestion.add(data2.result[i].problem.name);
          handel2set1.add(data2.result[i].problem.index.substring(0, 1));
          var num = data2.result[i].problem.index.substring(0, 1);
          handel2counts[num] = handel2counts[num] ? handel2counts[num] + 1 : 1;
          for (let j = 0; j < data2.result[i].problem.tags.length; j++) {
            handel2set4.add(data2.result[i].problem.tags[j]);
            var ta = data2.result[i].problem.tags[j];
            handel2tag[ta] = handel2tag[ta] ? handel2tag[ta] + 1 : 1;
          }
          handel2set5.add(data2.result[i].problem.rating);
          var tas = data2.result[i].problem.rating;
          handel2ratings[tas] = handel2ratings[tas]
            ? handel2ratings[tas] + 1
            : 1;
        }
      }
      let seat = data2.result[i].problem.name;
      handel2seatings[seat] = handel2seatings[seat]
        ? handel2seatings[seat] + 1
        : 1;
      handel2set7.add(years(data2.result[i].creationTimeSeconds));
      let pums = data2.result[i].problem.name;
      handel2lang[pums] = handel2lang[pums] ? handel2lang[pums] + 1 : 1;
      handel2set3.add(data2.result[i].programmingLanguage);
      let nums = data2.result[i].verdict;
      handel2verdicts[nums] = handel2verdicts[nums]
        ? handel2verdicts[nums] + 1
        : 1;
      handel2set2.add(data2.result[i].verdict);
    }
    max_acc();
    max_sub();
    one_acc();
    contestPlayed();
    QuestionsRatingComparison();
    questionsComparison();
    Ratingcomparison();
    tagscomparison();
    unsolvedQuestions();
    tried_solved_questions();
  } else {
    flag = 1;
    console.log("error found");
  }
}
//////////////////////////////////////////////////////////////////////////////////////////////////
function Ratingcomparison() {
  google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = new google.visualization.DataTable();
        data.addColumn('date', 'Date');
        data.addColumn('number', handel1);
        data.addColumn('number', handel2);
        let a=alignTimeline(handel1Ratings,handel2Ratings);
        data.addRows(a.length);
        for(let i=0; i<a.length; i++)
        {
           data.setCell(i,0,a[i][0]);
           data.setCell(i,1,a[i][1]);
           data.setCell(i,2,a[i][2]);
        }
        var options = {
          titleTextStyle: {
            color: "#ffffff",
          },
          chartArea: { backgroundColor: "#344675" },
          backgroundColor: {
            color: "#344675",
            fill: "#344675",
            storke: "#344675",
          },
          title: 'Timeline',
          width: Math.max(data.getNumberOfRows() * 15, $('#timelineCon').width()),
          height: 500,
          hAxis: {
            format: 'MMM yyyy',
            textStyle: { color: "#FFF" },
          },
          vAxis: {
            viewWindowMode: 'pretty', textStyle: { color: "#FFF" },
          },
          colors:  ["#00f2c3", "#11cdef"],
          curveType: 'function'
        };
        var chart = new google.visualization.LineChart(document.getElementById('chart_div'));

        chart.draw(data, options);
      }
}
/////////////////////////////////////////////////////////////////////////////////
function tagscomparison() {
  google.charts.load("current", { packages: ["corechart", "bar"] });
  google.charts.setOnLoadCallback(drawStuff);
  function drawStuff() {
    let a = [];
          for (let p in handel1tag) {
            if (handel2tag[p] == undefined) {
              a.push([p, handel1tag[p], 0]);
            } else {
              a.push([p, handel1tag[p], handel2tag[p]]);
            }
          }
          for (let p in handel2tag) {
            if (handel1tag[p] == undefined) {
              a.push([p, 0, handel2tag[p]]);
            }
          }
    var data = new google.visualization.DataTable();
    data.addColumn("string", "tagssss");
    data.addColumn("number", handel1);
    data.addColumn("number", handel2);
    data.addRows(a.length);
    for (let i = 0; i < a.length; i++) {
          data.setCell(i, 0, a[i][0]);
          data.setCell(i, 1, a[i][1]);
          data.setCell(i, 2, a[i][2]);
        }
    var view = new google.visualization.DataView(data);
    view.setColumns([
      0,
      1,
      {
        calc: "stringify",
        sourceColumn: 1,
        type: "string",
        role: "annotation",
      },
      2,
    ]);
    var materialOptions = {
      width: 1600,
      titleTextStyle: {
        color: "#ffffff",
      },
      colors: ["#00f2c3", "#11cdef"],
      chartArea: { backgroundColor: "#344675" },
      backgroundColor: {
        color: "#344675",
        fill: "#344675",
        storke: "#344675",
      },
      chart: {
        title: "Ratings of question solved by " + handel1 + " and " + handel2,
        // subtitle: "distance on the left, brightness on the right",
      },
      series: {
        0: { axis: "distance" }, // Bind series 0 to an axis named 'distance'.
        1: { axis: "brightness" }, // Bind series 1 to an axis named 'brightness'.
      },
      hAxis: {
        textStyle: { color: "#FFF" },
      },
      vAxis: {
        textStyle: { color: "#FFF" },
      },
      axes: {
        y: {
          // distance: { label: "parsecs" }, // Left y-axis.
          brightness: { side: "right", label: "No of questions" }, // Right y-axis.
        },
      },
    };
    var materialChart = new google.charts.Bar(Comaparison);
    materialChart.draw(view, google.charts.Bar.convertOptions(materialOptions));
  }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function QuestionsRatingComparison() {
  google.charts.load("current", { packages: ["corechart", "bar"] });
  google.charts.setOnLoadCallback(drawStuff);
  function drawStuff() {
    let a = [];
    for (let p in handel1ratings) {
      if (handel2ratings[p] == undefined) {
        a.push([p, handel1ratings[p], 0]);
      } else {
        a.push([p, handel1ratings[p], handel2ratings[p]]);
      }
    }
    for (let p in handel2ratings) {
      if (handel1ratings[p] == undefined) {
        a.push([p, 0, handel2ratings[p]]);
      }
    }
    var data = new google.visualization.DataTable();
    data.addColumn("string", "tags");
    data.addColumn("number", handel1);
    data.addColumn("number", handel2);
    data.addRows(a.length);
    for (let i = 0; i < a.length; i++) {
      data.setCell(i, 0, a[i][0]);
      data.setCell(i, 1, a[i][1]);
      data.setCell(i, 2, a[i][2]);
    }
    var view = new google.visualization.DataView(data);
    view.setColumns([
      0,
      1,
      {
        calc: "stringify",
        sourceColumn: 1,
        type: "string",
        role: "annotation",
      },
      2,
    ]);
    var materialOptions = {
      width: 1600,
      titleTextStyle: {
        color: "#ffffff",
      },
      colors: ["#00f2c3", "#11cdef"],
      chartArea: { backgroundColor: "#344675" },
      backgroundColor: {
        color: "#344675",
        fill: "#344675",
        storke: "#344675",
      },
      chart: {
        title: "Ratings of question solved by " + handel1 + " and " + handel2,
        // subtitle: "distance on the left, brightness on the right",
      },
      series: {
        0: { axis: "distance" }, // Bind series 0 to an axis named 'distance'.
        1: { axis: "brightness" }, // Bind series 1 to an axis named 'brightness'.
      },
      hAxis: {
        textStyle: { color: "#FFF" },
      },
      vAxis: {
        textStyle: { color: "#FFF" },
      },
      axes: {
        y: {
          brightness: { side: "right", label: "No of questions" }, // Right y-axis.
        },
      },
    };
    var materialChart = new google.charts.Bar(questionsRatingComaparison);
    materialChart.draw(view, google.charts.Bar.convertOptions(materialOptions));
  }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////
function questionsComparison() {
  google.charts.load("current", { packages: ["corechart", "bar"] });
  google.charts.setOnLoadCallback(drawStuff);
  function drawStuff() {
    let a = [];
    for (let p in handel1counts) {
      if (handel2counts[p] == undefined) {
        a.push([p, handel1counts[p], 0]);
      } else {
        a.push([p, handel1counts[p], handel2counts[p]]);
      }
    }
    for (let p in handel2counts) {
      if (handel1counts[p] == undefined) {
        a.push([p, 0, handel2counts[p]]);
      }
    }
    var chartDiv = document.getElementById("chart_div");
    var data = new google.visualization.DataTable();
    data.addColumn("string", "tags");
    data.addColumn("number", handel1);
    data.addColumn("number", handel2);
    data.addRows(a.length);
    for (let i = 0; i < a.length; i++) {
      data.setCell(i, 0, a[i][0]);
      data.setCell(i, 1, a[i][1]);
      data.setCell(i, 2, a[i][2]);
    }
    var view = new google.visualization.DataView(data);
    view.setColumns([
      0,
      1,
      {
        calc: "stringify",
        sourceColumn: 1,
        type: "string",
        role: "annotation",
      },
      2,
    ]);
    var materialOptions = {
      width: 1600,
      titleTextStyle: {
        color: "#ffffff",
      },
      colors: ["#00f2c3", "#11cdef"],
      chart: {
        title: "Types of question solved by " + handel1 + " and " + handel2,
        // subtitle: "distance on the left, brightness on the right",
      },
      chartArea: { backgroundColor: "#344675" },
      backgroundColor: {
        color: "#344675",
        fill: "#344675",
        storke: "#344675",
      },
      hAxis: {
        textStyle: { color: "#FFF" },
      },
      vAxis: {
        textStyle: { color: "#FFF" },
      },
      series: {
        0: { axis: "distance" }, // Bind series 0 to an axis named 'distance'.
        1: { axis: "brightness" }, // Bind series 1 to an axis named 'brightness'.
      },
      axes: {
        y: {
          distance: { label: "parsecs" }, // Left y-axis.
          brightness: { side: "right", label: "No of questions" }, // Right y-axis.
        },
      },
    };
    var materialChart = new google.charts.Bar(questionsComaparison);
    materialChart.draw(view, google.charts.Bar.convertOptions(materialOptions));
  }
}
///////////////////////////////////////////////////////////////////////////////////////////
function tried_solved_questions() {
  google.charts.load("current", { packages: ["corechart", "bar"] });
  google.charts.setOnLoadCallback(drawStuff);
  function drawStuff() {
    var chartDiv = document.getElementById("chart_div");
    var data = new google.visualization.DataTable();
    data.addColumn("string", "tags");
    data.addColumn("number", handel1);
    data.addColumn("number", handel2);
    data.addRows(2);
    data.setCell(0, 0, "tried");
    data.setCell(0, 1, handel1TriedQuestion.size);
    data.setCell(0, 2, handel2TriedQuestion.size);
    data.setCell(1, 0, "solved");
    data.setCell(1, 1, handel1hasQuestion.size);
    data.setCell(1, 2, handel2hasQuestion.size);
    var materialOptions = {
      width: 615,
      titleTextStyle: {
        color: "#ffffff",
      },
      colors: ["#00f2c3", "#11cdef"],
      backgroundColor: {
        fill: "#344675",
      },
      hAxis: {
        textStyle: { color: "#FFF" },
      },
      vAxis: {
        textStyle: { color: "#FFF" },
      },
      chartArea: { backgroundColor: "#344675" },
      backgroundColor: "#344675",
      chart: {
        title: "Questions Tries and Solved by " + handel1 + " and " + handel2,
      },
      series: {
        0: { axis: "distance" }, 
        1: { axis: "brightness" }, 
      },
      axes: {
        y: {
          distance: { label: "parsecs" }, // Left y-axis.
          brightness: { side: "right", label: "apparent magnitude" }, // Right y-axis.
        },
      },
    };
    var materialChart = new google.charts.Bar(tried_solved);
    materialChart.draw(data, google.charts.Bar.convertOptions(materialOptions));
  }
}
function years(unixtimestamp) {
  var months_arr = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var date = new Date(unixtimestamp * 1000);
  var year = date.getFullYear();
  var month = months_arr[date.getMonth()];
  var day = date.getDate();
  var hours = date.getHours();
  var minutes = "0" + date.getMinutes();
  var seconds = "0" + date.getSeconds();
  var fulldate =
    month +
    " " +
    day +
    "-" +
    year +
    " " +
    hours +
    ":" +
    minutes.substr(-2) +
    ":" +
    seconds.substr(-2);
  var convdataTime = year;
  return convdataTime;
}
//////////////////////////////////////////////////////////////
function max_sub() {
  google.charts.load("current", { packages: ["corechart"] });
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
    var data = new google.visualization.DataTable();
    let max1 = 0,
      max2 = 0;
    for (let p in handel1lang) {
      if (handel1lang[p] > max1) {
        max1 = handel1lang[p];
      }
    }
    for (let p in handel2lang) {
      if (handel2lang[p] > max2) {
        max2 = handel2lang[p];
      }
    }
    var data = new google.visualization.DataTable();
    data.addColumn("string", "Cars");
    data.addColumn("number", "Numbers");
    data.addColumn({ type: "string", role: "style" });
    data.addRows(2);
    data.setCell(0, 0, handel1);
    data.setCell(1, 0, handel2);
    data.setCell(0, 1, max1);
    data.setCell(1, 1, max2);
    data.setCell(
      1,
      2,
      "stroke-color: #11cdef; stroke-opacity: 0.6; stroke-width: 4; fill-color: #11cdef; fill-opacity: 0.4"
    );
    data.setCell(
      0,
      2,
      "stroke-color: #00f2c3; stroke-opacity: 0.6; stroke-width: 4; fill-color: #00f2c3; fill-opacity: 0.4"
    );
    var view = new google.visualization.DataView(data);
    view.setColumns([
      0,
      1,
      {
        calc: "stringify",
        sourceColumn: 1,
        type: "string",
        role: "annotation",
      },
      2,
    ]);
    var options = {
      title:
        "Maximum submission of single Questions by " +
        handel1 +
        " and " +
        handel2,
      titleTextStyle: {
        color: "#ffffff",
      },
      color: "white",
      backgroundColor: {
        fill: "#344675",
      },
      hAxis: {
        textStyle: { color: "#FFF" },
      },
      vAxis: {
        textStyle: { color: "#FFF" },
      },
      vAxes: {
        0: { baseline: 0 },
      },
      chart: { title: "Max submission of one problem" },
      bars: "vertical", // Required for Material Bar Charts.
      axes: {
        x: {
          0: { side: "bottom", label: "Percentage" }, // Top x-axis.
        },
      },
      bar: { groupWidth: "30%" },
    };
    var chart = new google.visualization.ColumnChart(
      document.getElementById("max_sub")
    );
    chart.draw(view, options);
  }
}
//////////////////////////////////////////////////////////////
function one_acc() {
  google.charts.load("current", { packages: ["corechart"] });
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
    var data = new google.visualization.DataTable();
    let max1 = 0,
      max2 = 0;
    for (let p in handel1seatings) {
      if (handel1seatings[p] == 1) {
        max1++;
      }
    }
    for (let p in handel2seatings) {
      if (handel2seatings[p] == 1) {
        max2++;
      }
    }
    var data = new google.visualization.DataTable();
    data.addColumn("string", "Cars");
    data.addColumn("number", "Numbers");
    data.addColumn({ type: "string", role: "style" });
    data.addRows(2);
    data.setCell(0, 0, handel1);
    data.setCell(1, 0, handel2);
    data.setCell(0, 1, max1);
    data.setCell(1, 1, max2);
    data.setCell(
      1,
      2,
      "stroke-color: #11cdef; stroke-opacity: 0.6; stroke-width: 4; fill-color: #11cdef; fill-opacity: 0.4"
    );
    data.setCell(
      0,
      2,
      "stroke-color: #00f2c3; stroke-opacity: 0.6; stroke-width: 4; fill-color: #00f2c3; fill-opacity: 0.4"
    );
    var view = new google.visualization.DataView(data);
    view.setColumns([
      0,
      1,
      {
        calc: "stringify",
        sourceColumn: 1,
        type: "string",
        role: "annotation",
      },
      2,
    ]);
    var options = {
      title:
        "Questions Accepted in one atempt by " + handel1 + " and " + handel2,
      titleTextStyle: {
        color: "#ffffff",
      },
      color: "white",
      backgroundColor: {
        fill: "#344675",
      },
      hAxis: {
        textStyle: { color: "#FFF" },
      },
      vAxis: {
        textStyle: { color: "#FFF" },
      },
      vAxes: {
        0: { baseline: 0 },
      },
      chart: { title: "Max submission of one problem" },
      bars: "vertical", // Required for Material Bar Charts.
      axes: {
        x: {
          0: { side: "bottom", label: "Percentage" }, // Top x-axis.
        },
      },
      bar: { groupWidth: "30%" },
    };
    var chart = new google.visualization.ColumnChart(
      document.getElementById("one_accept")
    );
    chart.draw(view, options);
  }
}
//////////////////////////////////////////////////////////////
function max_acc() {
  google.charts.load("current", { packages: ["corechart"] });
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
    var data = new google.visualization.DataTable();
    var data = new google.visualization.DataTable();
    data.addColumn("string", "Cars");
    data.addColumn("number", "Numbers");
    data.addColumn({ type: "string", role: "style" });
    data.addRows(2);
    data.setCell(
      1,
      2,
      "stroke-color: #11cdef; stroke-opacity: 0.6; stroke-width: 4; fill-color: #11cdef; fill-opacity: 0.4"
    );
    data.setCell(
      0,
      2,
      "stroke-color: #00f2c3; stroke-opacity: 0.6; stroke-width: 4; fill-color: #00f2c3; fill-opacity: 0.4"
    );
    data.setCell(0, 0, handel1);
    data.setCell(1, 0, handel2);
    data.setCell(0, 1, handel1hasQuestion.size);
    data.setCell(1, 1, handel2hasQuestion.size);
    var view = new google.visualization.DataView(data);
    view.setColumns([
      0,
      1,
      {
        calc: "stringify",
        sourceColumn: 1,
        type: "string",
        role: "annotation",
      },
      2,
    ]);
    var options = {
      title: "Accepted Questions of " + handel1 + "and " + handel2,
      titleTextStyle: {
        color: "#ffffff",
      },
      color: "white",
      backgroundColor: {
        fill: "#344675",
      },
      hAxis: {
        textStyle: { color: "#FFF" },
      },
      vAxis: {
        textStyle: { color: "#FFF" },
      },
      vAxes: {
        0: { baseline: 0 },
      },
      chart: { title: "Max submission of one problem" },
      bars: "vertical",
      axes: {
        x: {
          0: { side: "bottom", label: "Percentage" }, // Top x-axis.
        },
      },
      bar: { groupWidth: "30%" },
    };
    var chart = new google.visualization.ColumnChart(
      document.getElementById("max_acc")
    );
    chart.draw(view, options);
  }
}
//////////////////////////////////////////////////////////
function unsolvedQuestions() {
  google.charts.load("current", { packages: ["corechart"] });
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
    var data = new google.visualization.DataTable();
    var data = new google.visualization.DataTable();
    data.addColumn("string", "Cars");
    data.addColumn("number", "Numbers");
    data.addColumn({ type: "string", role: "style" });
    data.addRows(2);
    data.setCell(
      1,
      2,
      "stroke-color: #11cdef; stroke-opacity: 0.6; stroke-width: 4; fill-color: #11cdef; fill-opacity: 0.4"
    );
    data.setCell(
      0,
      2,
      "stroke-color: #00f2c3; stroke-opacity: 0.6; stroke-width: 4; fill-color: #00f2c3; fill-opacity: 0.4"
    );
    data.setCell(0, 0, handel1);
    data.setCell(1, 0, handel2);
    data.setCell(0, 1, handel1TriedQuestion.size - handel1hasQuestion.size);
    data.setCell(1, 1, handel2TriedQuestion.size - handel2hasQuestion.size);
    var view = new google.visualization.DataView(data);
    view.setColumns([
      0,
      1,
      {
        calc: "stringify",
        sourceColumn: 1,
        type: "string",
        role: "annotation",
      },
      2,
    ]);
    var options = {
      title: "Unsolved Qusetions Of" + handel1 + " and " + handel2,
      titleTextStyle: {
        color: "#ffffff",
      },
      color: "white",
      backgroundColor: {
        fill: "#344675",
      },
      hAxis: {
        textStyle: { color: "#FFF" },
      },
      vAxis: {
        textStyle: { color: "#FFF" },
      },
      vAxes: {
        0: { baseline: 0 },
      },
      chart: { title: "Max submission of one problem" },
      bars: "vertical", // Required for Material Bar Charts.
      axes: {
        x: {
          0: { side: "bottom", label: "Percentage" }, // Top x-axis.
        },
      },
      bar: { groupWidth: "30%" },
    };
    var chart = new google.visualization.ColumnChart(
      document.getElementById("unsolved")
    );
    chart.draw(view, options);
  }
}
//////////////////////////////////////////////////////////////////////
function contestPlayed() {
  google.charts.load("current", { packages: ["corechart"] });
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
    var data = new google.visualization.DataTable();
    var data = new google.visualization.DataTable();
    data.addColumn("string", "Cars");
    data.addColumn("number", "Numbers");
    data.addColumn({ type: "string", role: "style" });
    data.addRows(2);
    data.setCell(
      1,
      2,
      "stroke-color: #11cdef; stroke-opacity: 0.6; stroke-width: 4; fill-color: #11cdef; fill-opacity: 0.4"
    );
    data.setCell(
      0,
      2,
      "stroke-color: #00f2c3; stroke-opacity: 0.6; stroke-width: 4; fill-color: #00f2c3; fill-opacity: 0.4"
    );
    data.setCell(0, 0, handel1);
    data.setCell(1, 0, handel2);
    data.setCell(0, 1, handel1Ratings.length);
    data.setCell(1, 1, handel2Ratings.length);
    var view = new google.visualization.DataView(data);
    view.setColumns([
      0,
      1,
      {
        calc: "stringify",
        sourceColumn: 1,
        type: "string",
        role: "annotation",
      },
      2,
    ]);
    var options = {
      title: "Contest Played by " + handel1 + " and " + handel2,
      titleTextStyle: {
        color: "#ffffff",
      },
      color: "white",
      backgroundColor: {
        fill: "#344675",
      },
      hAxis: {
        textStyle: { color: "#FFF" },
      },
      vAxis: {
        textStyle: { color: "#FFF" },
      },
      vAxes: {
        0: { baseline: 0 },
      },
      chart: { title: "Max submission of one problem" },
      bars: "vertical", // Required for Material Bar Charts.
      axes: {
        x: {
          0: { side: "bottom", label: "Percentage" }, // Top x-axis.
        },
      },
      bar: { groupWidth: "30%" },
    };
    var chart = new google.visualization.ColumnChart(
      document.getElementById("average_sub")
    );
    chart.draw(view, options);
  }
}
function update(data) { 
  var element = document.getElementById("progress_bar_left");    
  var width = 100; 
  var identity = setInterval(scene, 10); 
  function scene() { 
    if (width <= (100-data)) { 
      clearInterval(identity); 
    } else { 
      width--;  
      element.style.width = width + '%';  
    } 
  } 
} 
function update2(data) { 
  var element = document.getElementById("progress_bar_left2");    
  var width = 100; 
  var identity = setInterval(scene, 10); 
  function scene() { 
    if (width <= (100-data)) { 
      clearInterval(identity); 
    } else { 
      width--;  
      element.style.width = width + '%';  
    } 
  } 
} 
function update3(data) { 
  var element = document.getElementById("progress_bar_left3");    
  var width = 100; 
  var identity = setInterval(scene, 10); 
  function scene() { 
    if (width <= 100-data) { 
      clearInterval(identity); 
    } else { 
      width--;  
      element.style.width = width + '%';  
    } 
  } 
} 
function update4(data) { 
  var element = document.getElementById("progress_bar_left4");    
  var width = 100; 
  var identity = setInterval(scene, 10); 
  function scene() { 
    if (width <= 100-data) { 
      clearInterval(identity); 
    } else { 
      width--;  
      element.style.width = width + '%';  
    } 
  } 
} 
function update5(data) { 
  var element = document.getElementById("progress_bar_left5");    
  var width = 100; 
  var identity = setInterval(scene, 10); 
  function scene() { 
    if (width <= 100-data) { 
      clearInterval(identity); 
    } else { 
      width--;  
      element.style.width = width + '%';  
    } 
  } 
} 
function rightupdate(data) { 
  console.log(data);
  var element = document.getElementById("progress_bar_right");    
  var width = 0; 
  var identity = setInterval(scene, 10); 
  function scene() { 
    if (width >= data) { 
      clearInterval(identity); 
    } else { 
      width++;  
      element.style.width = width + '%';  
    } 
  } 
} 
function rightupdate2(data) { 
  console.log(data);
  var element = document.getElementById("progress_bar_right2");    
  var width = 0; 
  var identity = setInterval(scene, 10); 
  function scene() { 
    if (width >= data) { 
      clearInterval(identity); 
    } else { 
      width++;  
      element.style.width = width + '%';  
    } 
  } 
} 
function rightupdate3(data) { 
  var element = document.getElementById("progress_bar_right3");    
  var width = 0; 
  var identity = setInterval(scene, 10); 
  function scene() { 
    if (width >= data) { 
      clearInterval(identity); 
    } else { 
      width++;  
      element.style.width = width + '%';  
    } 
  } 
} 
function rightupdate4(data) { 
  var element = document.getElementById("progress_bar_right4");    
  var width = 0; 
  var identity = setInterval(scene, 10); 
  function scene() { 
    if (width >= data) { 
      clearInterval(identity); 
    } else { 
      width++;  
      element.style.width = width + '%';  
    } 
  } 
} 
function rightupdate5(data) { 
  var element = document.getElementById("progress_bar_right5");    
  var width = 0; 
  var identity = setInterval(scene, 10); 
  function scene() { 
    if (width >= data) { 
      clearInterval(identity); 
    } else { 
      width++;  
      element.style.width = width + '%';  
    } 
  } 
} 
function alignTimeline(r1, r2) {
  ret = [];
  var i = 0;
  var j = 0;
  while (i <= r1.length || j <= r2.length) {
    if (compDate(r1[i][0], r2[j][0]) === 0) {
      ret.push([new Date(r1[i][0] * 1000), r1[i][1], r2[j][1]]);
      i++;
      j++;
    } else if (compDate(r1[i][0], r2[j][0]) < 0) {
      if (j === 0) ret.push([new Date(r1[i][0] * 1000), r1[i][1], null]);
      else ret.push([new Date(r1[i][0] * 1000), r1[i][1], r2[j - 1][1]]);
      i++;
    } else {
      if (i === 0) ret.push([new Date(r2[j][0] * 1000), null, r2[j][1]]);
      else ret.push([new Date(r2[j][0] * 1000), r1[i - 1][1], r2[j][1]]);
      j++;
    }

    if (i == r1.length) {
      while (j < r2.length) {
        ret.push([new Date(r2[j][0] * 1000), r1[i - 1][1], r2[j][1]]);
        j++;
      }
      break;
    }
    if (j == r2.length) {
      while (i < r1.length) {
        ret.push([new Date(r1[i][0] * 1000), r1[i][1], r2[j - 1][1]]);
        i++;
      }
      break;
    }
  }
  return ret;
}
var MAX_TIME_DIFF = 7200;
function compDate(d1, d2) {
  if (Math.abs(d1 - d2) < MAX_TIME_DIFF) {
    return 0;
  }
  return d1 - d2;
}