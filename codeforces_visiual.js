let arr = new Array();
let counts = {},
verdicts = {},
lang = {},
ratings={},
tag = {},
seatings={};
let link2, link1, link;
let size = 0,flag=0;
let handel;
let bestRank=1000000, worstRank=0;
var set1 = new Set();
var set2 = new Set();
var set3 = new Set();
var set4 = new Set();
var set6 = new Set();
var set7 =new Set();
var hasQuestion = new Set();
var set5 = new Set();
function search() {
  refresh();
  handel = document.getElementById("search-inputs").value;
  console.log(handel);
  if(handel!="")
  {
    console.log(handel);
    link = "https://codeforces.com/api/user.rating?handle=";
    link1 = "https://codeforces.com/api/user.info?handles=";
    link2 = "https://codeforces.com/api/user.status?handle=";
    link1 += handel;
    link += handel;
    link2 += handel;
    Api();
    Api1();
    Api2();
  }
  else 
  {
    swal({
      title: "Error",
      text: "Give the proper handle!",
      icon: "error",
    });
  }
}
//////////////////////////////////////////////////////////////////////////////////
function Api1() {
  fetch(link1)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      if(data.status==="FAILED")
      {
         flag=1;
         swal({
          title: "Error",
          text: "Handle not Found",
          icon: "error",
        });
      }
      else{
        if( data.result[0].rating<=1199)
        {
          document.getElementById("handels").innerHTML = handel;
          document.getElementById("welcome").innerHTML="Welcome,"+handel;
          document.getElementById("handels").style.color="grey";
          document.getElementById("welcome").style.color="grey";
          document.getElementById("minRankInformation").style.color='grey';
          document.getElementById("maxRankInformation").style.color="grey";
          document.getElementById("ratingInformation").style.color='grey';
          document.getElementById("rankInformation").style.color="grey";
          document.getElementById("maxInformation").style.color="grey";
          document.getElementById("contestInformation").style.color="grey";
          document.getElementById("max_information_desc").style.color="grey";
        }
        else if( data.result[0].rating>=1200 &&  data.result[0].rating<=1399)
        {
          document.getElementById("handels").innerHTML = handel;
          document.getElementById("welcome").innerHTML="Welcome,"+handel;
          document.getElementById("handels").style.color="green";
          document.getElementById("welcome").style.color="green";
          document.getElementById("minRankInformation").style.color='green';
          document.getElementById("maxRankInformation").style.color="green";
          document.getElementById("contestInformation").style.color="green";
          document.getElementById("ratingInformation").style.color='green';
          document.getElementById("rankInformation").style.color="green";
          document.getElementById("maxInformation").style.color="green";
          document.getElementById("max_information_desc").style.color="green";
        }
        else if( data.result[0].rating>=1400 &&  data.result[0].rating<=1599)
        {
          document.getElementById("handels").innerHTML = handel;
          document.getElementById("welcome").innerHTML="Welcome,"+handel;
          document.getElementById("handels").style.color="cyan";
          document.getElementById("welcome").style.color="cyan";
          document.getElementById("minRankInformation").style.color='cyan';
          document.getElementById("maxRankInformation").style.color="cyan";
          document.getElementById("contestInformation").style.color="cyan";
          document.getElementById("ratingInformation").style.color='cyan';
          document.getElementById("rankInformation").style.color="cyan";
          document.getElementById("maxInformation").style.color="cyan";
          document.getElementById("max_information_desc").style.color="cyan";
        }
        else if( data.result[0].rating>=1600 &&  data.result[0].rating<=1899)
        {
          document.getElementById("handels").innerHTML = handel;
          document.getElementById("welcome").innerHTML="Welcome,"+handel;
          document.getElementById("handels").style.color="blue";
          document.getElementById("welcome").style.color="blue";
          document.getElementById("minRankInformation").style.color='blue';
          document.getElementById("maxRankInformation").style.color="blue";
          document.getElementById("contestInformation").style.color="blue";
          document.getElementById("ratingInformation").style.color='blue';
          document.getElementById("rankInformation").style.color="blue";
          document.getElementById("maxInformation").style.color="blue";
          document.getElementById("max_information_desc").style.color="blue";
        }
        else if( data.result[0].rating>=1900 &&  data.result[0].rating<=2099)
        {
          document.getElementById("handels").innerHTML = handel;
          document.getElementById("welcome").innerHTML="Welcome,"+handel;
          document.getElementById("handels").style.color="violet";
          document.getElementById("welcome").style.color="violet";
          document.getElementById("minRankInformation").style.color='violet';
          document.getElementById("maxRankInformation").style.color="violet";
          document.getElementById("contestInformation").style.color="violet";
          document.getElementById("ratingInformation").style.color='violet';
          document.getElementById("rankInformation").style.color="violet";
          document.getElementById("maxInformation").style.color="violet";
          document.getElementById("max_information_desc").style.color="violet";
        }
        else if( data.result[0].rating>=2100 &&  data.result[0].rating<=2399)
        {
          document.getElementById("handels").innerHTML = handel;
          document.getElementById("welcome").innerHTML="Welcome,"+handel;
          document.getElementById("handels").style.color="orange";
          document.getElementById("welcome").style.color="orange";
          document.getElementById("minRankInformation").style.color='orange';
          document.getElementById("maxRankInformation").style.color="orange";
          document.getElementById("contestInformation").style.color="orange";
          document.getElementById("ratingInformation").style.color='orange';
          document.getElementById("rankInformation").style.color="orange";
          document.getElementById("maxInformation").style.color="orange";
          document.getElementById("max_information_desc").style.color="orange";
        }
        else if( data.result[0].rating>=2400)
        {
          document.getElementById("handels").innerHTML = handel;
          document.getElementById("welcome").innerHTML="Welcome,"+handel;
          document.getElementById("handels").style.color="red";
          document.getElementById("welcome").style.color="red";
          document.getElementById("minRankInformation").style.color='red';
          document.getElementById("maxRankInformation").style.color="red";
          document.getElementById("contestInformation").style.color="red";
          document.getElementById("ratingInformation").style.color='red';
          document.getElementById("rankInformation").style.color="red";
          document.getElementById("maxInformation").style.color="red";
          document.getElementById("max_information_desc").style.color="red";
        }
        console.log(data.result[0].rank);
        document.getElementById("ratingInformation").innerHTML =
          data.result[0].rating;
        document.getElementById("rankInformation").innerHTML =
          data.result[0].rank;
        document.getElementById("maxInformation").innerHTML =
          data.result[0].maxRating;
        document.getElementById("max_information_desc").innerHTML =
          data.result[0].maxRank;
      }
    })
    .catch(function (err) {
      console.log(err);
    });
}
//////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
async function Api() {
  let data1 = await fetch(link2);
  let data=await data1.json();
  if(data.status==="OK")
  {
        console.log(data);
        for (var i = 0; i < data.result.length; i++) {
          if (data.result[i].verdict == "OK") {
            // console.log(data.result[i].problem.name);
            if(hasQuestion.has(data.result[i].problem.name)==false)
            {
              hasQuestion.add(data.result[i].problem.name);
              set1.add(data.result[i].problem.index.substring(0, 1));
              var num = data.result[i].problem.index.substring(0, 1);
              counts[num] = counts[num] ? counts[num] + 1 : 1;
              for (let j = 0; j < data.result[i].problem.tags.length; j++) {
                set4.add(data.result[i].problem.tags[j]);
                var ta = data.result[i].problem.tags[j];
                tag[ta] = tag[ta] ? tag[ta] + 1 : 1;
              }
              set5.add(data.result[i].problem.rating);
              var tas = data.result[i].problem.rating;
              ratings[tas] = ratings[tas] ? ratings[tas] + 1 : 1;
            }
          }
          set7.add((years(data.result[i].creationTimeSeconds)));
          set6.add(convertStampDate(data.result[i].creationTimeSeconds));
          let seat=convertStampDate(data.result[i].creationTimeSeconds);
          seatings[seat]=seatings[seat]?seatings[seat]+1:1;
          let pums = data.result[i].programmingLanguage;
          lang[pums] = lang[pums] ? lang[pums] + 1 : 1;
          set3.add(data.result[i].programmingLanguage);
          let nums = data.result[i].verdict;
          verdicts[nums] = verdicts[nums] ? verdicts[nums] + 1 : 1;
          set2.add(data.result[i].verdict);
        }
        console.log(seatings);
        languageUsed();
        dataPercentage();
        topicCovered();
        questions();
        calender();
        ratingGraph();
  }

}
//////////////////////////////////
async function Api2() {
  let data1 =await fetch(link);
  let data=await data1.json();
  console.log(data);
  if(data.status==="OK")
  {
        document.getElementById("contestInformation").innerHTML =
        data.result.length;
        arr.length=0;
        bestRank=1000000;
        worstRank=0;
        for (var i = 0; i < data.result.length; i++) {
            arr.push([]);
            arr[i].push(new Array(2));
            arr[i][0] = convertStampDate(data.result[i].ratingUpdateTimeSeconds);
            arr[i][1] = data.result[i].newRating;
            //arr.push(data.result[i].rank);
            if(bestRank>data.result[i].rank)
            {
              bestRank=data.result[i].rank;
            }
            if(worstRank<data.result[i].rank)
            {
              worstRank=data.result[i].rank;
            }
          }
        document.getElementById("minRankInformation").innerHTML=bestRank==1000000?"---":bestRank;
        document.getElementById("maxRankInformation").innerHTML=worstRank==0?"---":worstRank;
        ratingCurve();
  }

}
////////////////////////////////////////////
function Accept(data1)
{
  let val=data1;
  let options = {
    startAngle: -1.55,
    size: 150,
    value: val,
    fill: {gradient: ['#32CD32', '#32CD32']}
  }
  $(".accepted .bar").circleProgress(options).on('circle-animation-progress',
  function(event, progress, stepValue){
    $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) + "%");
  });
}
function Wa(data2)
{
  let val=data2;
      let options = {
        startAngle: -1.55,
        size: 150,
        value: val,
        fill: {gradient: ['#ff073a', '#ff073a']}
      }
      $(".wrong .bar").circleProgress(options).on('circle-animation-progress',
      function(event, progress, stepValue){
        $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) + "%");
      });
}
function TLE(data3)
{
  let val=data3;
      let options = {
        startAngle: -1.55,
        size: 150,
        value: val,
        fill: {gradient: ['#0000FF', '#0000FF']}
      }
      $(".timeLimit .bar").circleProgress(options).on('circle-animation-progress',
      function(event, progress, stepValue){
        $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) + "%");
      });
}
function CompError(data4)
{
  let val=data4;
  let options = {
    startAngle: -1.55,
    size: 150,
    value: val,
    fill: {gradient: ['#000000', '#000000']}
  }
  $(".compilation .bar").circleProgress(options).on('circle-animation-progress',
  function(event, progress, stepValue){
    $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) + "%");
  });
}
///////////////////////////////////////////////////////////////////////////////////////////////////

function convertStampDate(unixtimestamp) {
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
  var convdataTime = month + " " + day + " " + year;
  return convdataTime;
}
function refresh()
{
  flag=0;
  set1.clear();
  set2.clear();
  set3.clear();
  set6.clear();
  hasQuestion.clear();
  set4.clear();
  set5.clear();
  arr.length=0;
  for (const prop of Object.getOwnPropertyNames(counts)) {
    delete counts[prop];
  }
  for (const prop of Object.getOwnPropertyNames(seatings)) {
    delete seatings[prop];
  }
  for (const prop of Object.getOwnPropertyNames(verdicts)) {
    delete verdicts[prop];
  }
  for (const prop of Object.getOwnPropertyNames(lang)) {
    delete lang[prop];
  }
  for (const prop of Object.getOwnPropertyNames(ratings)) {
    delete ratings[prop];
  }
  for (const prop of Object.getOwnPropertyNames(tag)) {
    delete tag[prop];
  }
}
///////////////////////////////////////////////////////////////////
function ratingCurve() {
  google.charts.load("current", { packages: ["corechart"] });
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
    var data = new google.visualization.DataTable();
    data.addColumn("string", "Contest Ratings");
    data.addColumn("number", "Numbers");
    data.addColumn({ type: "string", role: "style" });
    data.addRows(arr.length);
    for (var i = 0; i < arr.length; i++) {
      data.setCell(i, 0, arr[i][0]);
      data.setCell(i, 1, arr[i][1]);
      data.setCell(
        i,
        2,
        "#11cdef"
      );
    }
    var options = {
      title: "Contest Rating Curve of "+handel,
      titleTextStyle: {
        color: "#ffffff",
      },
      curveType: "function",
      chartArea: { backgroundColor: "#344675" },
      legend: { position: "bottom" },
      backgroundColor:{
        fill: "#344675"
      },
      hAxis: {
        textStyle: { color: "#FFF" },
      },
      vAxis: {
        textStyle: { color: "#FFF" },
      },
    };

    var chart = new google.visualization.LineChart(
      document.getElementById("curve_chart")
    );

    chart.draw(data, options);
  }
}
///////////////////////////////////////////
function ratingGraph() {
google.charts.load("current", { packages: ["corechart"] });
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
    var data = new google.visualization.DataTable();
    data.addColumn("string", "Cars");
          data.addColumn("number", "Numbers");
          data.addColumn({ type: "string", role: "style" });
          data.addRows(set5.size);
          let i = 0;
          for (let p in ratings) {
            if(p!="undefined")
            {
              data.setCell(i, 0, p);
              data.setCell(i, 1, ratings[p]);
              data.setCell(
                  i,
                  2,
                  "#11cdef"
                );
              i++;
            } 
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
    var options = {
      title:
      'QUESTIONS RATINGS Of'+handel,
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
      document.getElementById('top_y_div')
    );
    chart.draw(view, options);
  }
}
//////////////////////////////////////////
function questions() {
google.charts.load("current", { packages: ["corechart"] });
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
    var data = new google.visualization.DataTable();
    data.addColumn("string", "Questions Attempted");
          data.addColumn("number", "Numbers");
          data.addColumn({ type: "string", role: "style" });
          data.addRows(set1.size);
          let i = 0;
          let a=[];
          for (let p in counts) {
            a.push([p,counts[p]]);
          }
          a.sort(sortFunction);
          for(let i=0; i<a.length; i++)
          {
             data.setCell(i, 0, a[i][0]);
             data.setCell(i, 1, a[i][1]);
             data.setCell(
                            i,
                            2,
                            "#11cdef"
                          );
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
    var options = {
      title:
        "Questions Attemptd by " + handel,
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
      document.getElementById('top_x_div')
    );
    chart.draw(view, options);
  }
}
////////////////////////////////////////////
function sortFunction(a, b) {
  if (a[0] === b[0]) {
      return 0;
  }
  else {
      return (a[0] < b[0]) ? -1 : 1;
  }
}
//////////////////////////////////////////////////////
function topicCovered() {
  google.charts.load("current", { packages: ["corechart"] });
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
    var data = new google.visualization.DataTable();
    data.addColumn("string", "Concepts Covered");
    data.addColumn("number", "Number of Questions");
    data.addRows(set4.size);
     let j = 0;
    let a=[];
    for (let p in tag) {
      a.push([tag[p],p]);
    }
    a.sort(sortFunction);
    for(let i=a.length-1; i>=0; i--)
    {
        data.setCell(j, 0, a[i][1]+' '+a[i][0]);
        data.setCell(j, 1, a[i][0]);
        j++;
    }
    var options = {
      title: "Topic covered by "+handel,
      backgroundColor: {
        fill: "#344675",
      },
      chartArea: { backgroundColor: "#344675" },
    };
    var chart = new google.visualization.PieChart(
      document.getElementById("piechart")
    );
    chart.draw(data, options);
  }
}
//////////////////////////////////////////////////////
function dataPercentage()
 {
      let accept=0,WA=0,Tle=0,run=0;
      let sum=0,cum=0;
      for( let p in verdicts)
      {
         sum+=verdicts[p];
      }
      for(let k in counts)
      {
          cum+=counts[k];  
      }
      accept=cum/sum;
      WA=verdicts["WRONG_ANSWER"]==undefined?0:verdicts["WRONG_ANSWER"]/sum;
      run=verdicts["COMPILATION_ERROR"]==undefined?0:verdicts["COMPILATION_ERROR"]/sum;
      Tle=verdicts["TIME_LIMIT_EXCEEDED"]==undefined?0:verdicts["TIME_LIMIT_EXCEEDED"]/sum;
      document.getElementById("acc").innerHTML=cum;
      document.getElementById("wrongAnswer").innerHTML=verdicts["WRONG_ANSWER"]==undefined?0:verdicts["WRONG_ANSWER"];
      console.log(verdicts["TIME_LIMIT_EXCEEDED"]);
      document.getElementById("timeLimitError").innerHTML=verdicts["TIME_LIMIT_EXCEEDED"]==undefined?0:verdicts["TIME_LIMIT_EXCEEDED"];
      document.getElementById("compilationError").innerHTML=verdicts["COMPILATION_ERROR"]==undefined?0:verdicts["COMPILATION_ERROR"];
      Accept(accept);
      Wa(WA);
      TLE(Tle);
      CompError(run);
 }
 //////////////////////////////////////////////////////////////////////////////////////////////////////////
 function languageUsed() {
  google.charts.load("current", { packages: ["corechart"] });
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
    var data = new google.visualization.DataTable();
    data.addColumn("string", "Language");
    data.addColumn("number", "Numbers");
    data.addRows(set1.size);
    let j = 0;
    let a=[];
    for (let p in lang) {
      a.push([lang[p],p]);
    }
    a.sort(sortFunction);
    for(let i=a.length-1; i>=0; i--)
    {
       data.setCell(j, 0, a[i][1]);
       data.setCell(j, 1, a[i][0]);
       j++;
    }
    var options = {
      title: "Language Used "+handel,
      pieHole: 0.4,
      backgroundColor: {
        fill: "#344675",
      },
    };

    var chart = new google.visualization.PieChart(
      document.getElementById("donutchart")
    );
    chart.draw(data, options);
  }
}
///////////////////////////////////////////////////////////////////////////////
function calender()
{
  google.charts.load("current", {packages:["calendar"]});
  google.charts.setOnLoadCallback(drawChart);

function drawChart() {
   var dataTable = new google.visualization.DataTable();
   dataTable.addColumn({ type: 'date', id: 'Date' });
   dataTable.addColumn({ type: 'number', id: 'Won/Loss' });
   dataTable.addRows(set6.size);
   let i=0;
   for(let p in seatings)
   {
      dataTable.setCell(i,0,new Date(p));
      dataTable.setCell(i,1,seatings[p]);
      i++;
   }
  var options = {
    title: 'Sumbmission Heat Map of '+handel,
      height: set7.size * 155 + 30,
      width: Math.max($('#heatmapCon').width(), 900),
    fontName: 'Roboto',
    titleTextStyle: "#ffffff",
    colorAxis: {
      minValue: 0,
      colors: ['#ffffff', '#0027ff', '#00127d']
    },
    calendar: {
      cellSize: 15
    }
  };
  var chart = new google.visualization.Calendar(document.getElementById('calendar_basic'));
   chart.draw(dataTable, options);
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