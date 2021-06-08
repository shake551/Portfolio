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


  demo_wave();

});

function demo_wave() {
  function e() {
    demo_obj = document.getElementById("canvas_wave");
    demo_cntxt = demo_obj.getContext("2d");
    demo_h = 200; //高さ
    demo_w = window.innerWidth; //横幅
    demo_h_half = Math.floor(demo_h / 2); //少数切捨
    demo_draw();
  }
  function demo_draw() {
    demo_cntxt.clearRect(0, 0, demo_w, demo_h); //座標領域のクリア
    demo_cntxt.fillStyle = "#fff"; //塗りの色
    demo_cntxt.globalAlpha = 1; //塗りの透明度
    demo_cntxt.beginPath(); //パスを開始

    demo_anime(demo_draw.t); //アニメの描画

    demo_cntxt.lineTo(demo_w + 10, demo_h); //lineTo：線の終点
    demo_cntxt.lineTo(demo_w, 0); //lineTo：線の終点
    demo_cntxt.closePath(); //パスを閉じる
    demo_cntxt.fill(); //fillStyleの反映

    // カウントアップやら値のセット
    demo_draw.seconds = demo_draw.seconds + 0.04; //波の流れの速さが変わる
    demo_draw.t = demo_draw.seconds * Math.PI; //円周率

    setTimeout(demo_draw, 35); //波のコマの長さms
  }

  function demo_anime(e) {
    var a = e
      , o = Math.sin(a);
    for (demo_cntxt.moveTo(0, 0), i = 0; i <= demo_w + 10; i += 10) //moveTo：始点の移動
      a = e + i / u,
        o = Math.sin(a) / 3,
        demo_cntxt.lineTo(i, u * o + demo_h_half) //lineTo：線の終点
  }

  //初期値
  var u = 50; //波の高さ
  demo_draw.seconds = 0,
    demo_draw.t = 0,
    e()
}

function paint_white() {
  demo_obj = document.getElementById("canvas_white");
  demo_cntxt = demo_obj.getContext("2d");
  demo_h = 150; //高さ
  demo_w = window.innerWidth; //横幅
  demo_cntxt.clearRect(0, 0, demo_w, demo_h); //座標領域のクリア
  demo_cntxt.fillStyle = "#fff"; //塗りの色
  demo_cntxt.globalAlpha = 1; //塗りの透明度
  demo_cntxt.fillRect(0, 0, demo_w, demo_h)
}

