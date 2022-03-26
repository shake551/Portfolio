$(function () {
  
  //ページ内スクロール
  var navHeight = $(".header").outerHeight();
  
  $('a[href^="#"]').on("click", function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - navHeight;
    $("html, body").animate({ scrollTop: position, }, 300, "swing");
    return false;
  });
  
  //ページトップ
  $("#js-page-top").on("click", function () {
    $("body,html").animate({ scrollTop: 0, }, 300);
    return false;
  });
  
  // chart表示のためのデータ定義
  backData =  {
    labels: ["Python", "PHP", "C++", "C", "Java"],
    datasets: [
        {
            label: 'back-end',
            backgroundColor: "rgba(250,100,150,0.5)",
            borderColor: "rgba(250,100,150,1)",
            pointBackgroundColor: "rgba(250,100,150,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(250,100,150,1)",
            hitRadius: 5,
            data: [4, 4, 3.5, 3, 5]
        }
    ]
  }
  
  frontData =  {
    labels: ["HTML", "CSS", "Javascript"],
    datasets: [
        {
            label: "front-end",
            backgroundColor: "rgba(150,200,250,0.5)",
            borderColor: "rgba(150,200,250,1)",
            pointBackgroundColor: "rgba(150,200,250,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(150,200,250,1)",
            hitRadius: 3,
            data: [2, 1.5, 2]
        }
    ]
  }

  displayChart(frontData, "frontChart", 3);
  displayChart(backData, "backChart", 5);

});


function displayChart(data, id, maxPoint) {
  var ctx = document.getElementById(id);
  var chart = new Chart(ctx, {
    type: 'radar',
    data: data,
  options: {
      // レスポンシブ指定
      responsive: true,
      scale: {
        ticks: {
          // 最小値の値を0指定
          beginAtZero:true,
          min: 0,
          // 最大値を指定
          max: maxPoint,
        }
      }
    }
  });
}

