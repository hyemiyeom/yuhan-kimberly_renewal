$(document).ready(function () {
  // HEADER GNB배경
  var i = $(".main_title li.on").index();
  $("#header>.inner").mouseenter(function () {
    $("#header").css({ "background-color": "#fff" });
  });
  $("#header>.inner").mouseleave(function () {
    $("#header").css({ "background-color": "transparent" });
  });

  // HEADER GNB SEARCH(검색부분)
  const searchEl = document.querySelector(".search");
  const searchInputEl = searchEl.querySelector("input");

  searchEl.addEventListener("click", function () {
    searchInputEl.focus();
  });
  searchInputEl.addEventListener("focus", function () {
    searchEl.classList.add("focused");
    searchInputEl.setAttribute("placeholder", "통합검색");
  });
  searchInputEl.addEventListener("blur", function () {
    searchEl.classList.remove("focused");
    searchInputEl.setAttribute("placeholder", "");
  });

  // BANNER
  var b_i = $(".slide_btn>li.on").index();
  var b_wid = $(".container").width();
  var b_count = $(".slide_btn>li").length;

  $(".slide_btn>li").click(function () {
    b_i = $(this).index();

    $(".slide_btn>li").removeClass("b_on");
    $(".slide_btn>li").eq(b_i).addClass("b_on");
    $(".container_panel")
      .stop()
      .animate({ "margin-left": -b_wid * b_i });
  });

  // BANNER setInterval
  var autoSlide = setInterval(function () {
    if (b_i == b_count - 1) {
      b_i = 0;
    } else {
      b_i = b_i + 1;
    }
    $(".slide_btn>li").removeClass("b_on");
    $(".slide_btn>li").eq(b_i).addClass("b_on");
    $(".container_panel")
      .stop()
      .animate({ "margin-left": -b_wid * b_i });
  }, 3000);

  // BANNER clearInterval
  $(".container").mouseenter(function () {
    clearInterval(autoSlide);
  });

  $(".container").mouseleave(function () {
    autoSlide = setInterval(function () {
      if (b_i == b_count - 1) {
        b_i = 0;
      } else {
        b_i = b_i + 1;
      }
      $(".slide_btn>li").removeClass("b_on");
      $(".slide_btn>li").eq(b_i).addClass("b_on");
      $(".container_panel")
        .stop()
        .animate({ "margin-left": -b_wid * b_i });
    }, 3000);
  });

  // COMPANY
  $(".con_bg1 .play_box").mouseenter(function () {
    $(".black1").show();
  });
  $(".con_bg2 .play_box").mouseenter(function () {
    $(".black2").show();
  });
  $(".con_bg1 .play_box").mouseleave(function () {
    $(".black1").hide();
  });
  $(".con_bg2 .play_box").mouseleave(function () {
    $(".black2").hide();
  });

  var wid = $(".intro_contentBox").width();
  var cp_list = $(".int_btn li.c_on").index();
  var cp_count = $(".int_btn li").length;

  $(".con_prev").click(function () {
    $(".con_panel")
      .stop()
      .animate({ "margin-left": "0.5px" }, function () {
        $(".con_panel li").last().prependTo(".con_panel");
        $(".con_panel").css({ "margin-left": "-540px" });
      });
  });

  $(".con_next").click(function () {
    $(".con_panel")
      .stop()
      .animate({ "margin-left": "-1080px" }, function () {
        $(".con_panel li").first().appendTo(".con_panel");
        $(".con_panel").css({ "margin-left": "-540px" });
      });
  });

  $(".con_prev").click(function () {
    if (cp_list == 0) {
      cp_list = cp_count - 1;
    } else {
      cp_list--;
    }
    $(".int_btn li").removeClass("c_on");
    $(".int_btn li").eq(cp_list).addClass("c_on");

    $(".int_title").removeClass("c_on");
    $(".int_title").eq(cp_i).addClass("c_on");
  });

  $(".con_next").click(function () {
    if (cp_list == cp_count - 1) {
      cp_list = 0;
    } else {
      cp_list++;
    }
    $(".int_btn li").removeClass("c_on");
    $(".int_btn li").eq(cp_list).addClass("c_on");

    $(".int_title").removeClass("c_on");
    $(".int_title").eq(cp_i).addClass("c_on");
  });

  // TODAY'S FOCUS
  var t_i = $(".todays_panel>li.on").index();

  $(".todays_panel>li").click(function () {
    t_i = $(this).index();

    $(".todays_panel>li").removeClass("t_on");
    $(".todays_panel>li").eq(t_i).addClass("t_on");
    $(".todays_slide_panel>li").stop().fadeOut();
    $(".todays_slide_panel>li").eq(t_i).stop().fadeIn();
  });

  // TODAY'S FOCUS setInterval
  var autonewSlide = setInterval(function () {
    if (t_i == 3) {
      t_i = 0;
    } else {
      t_i = t_i + 1;
    }
    $(".todays_panel>li").removeClass("t_on");
    $(".todays_panel>li").eq(t_i).addClass("t_on");
    $(".todays_slide_panel>li").stop().fadeOut();
    $(".todays_slide_panel>li").eq(t_i).stop().fadeIn();
  }, 2000);

  // TODAY'S FOCUS clearInterval
  $(".todays_panel>li").mouseenter(function () {
    clearInterval(autonewSlide);
  });

  $(".todays_panel>li").mouseleave(function () {
    autonewSlide = setInterval(function () {
      if (t_i == 3) {
        t_i = 0;
      } else {
        t_i = t_i + 1;
      }
      $(".todays_panel>li").removeClass("t_on");
      $(".todays_panel>li").eq(t_i).addClass("t_on");
      $(".todays_slide_panel>li").stop().fadeOut();
      $(".todays_slide_panel>li").eq(t_i).stop().fadeIn();
    }, 2000);
  });

  // company_Story
  var st_list = $(".story_btn li.on3").index();

  $(".story_btn li").click(function () {
    st_list = $(this).index();

    $(".story_btn li").removeClass("on3");
    $(".story_btn li").eq(st_list).addClass("on3");

    $(".slider_panel").stop().fadeOut();
    $(".slider_panel").eq(st_list).stop().fadeIn();
  });

  // sns_content 모달창

  var sns_list = $(".m_panel>li.m_on").index();

  $(".content li").click(function () {
    event.preventDefault();
    document.documentElement.style.overflowY = "hidden";

    var sns_list = $(this).index();

    $(".modal_box").stop().fadeIn();
    $(".m_panel>li").stop().fadeOut();
    $(".m_panel>li").eq(sns_list).stop().fadeIn();
  });

  $(".m_conall .close_btn").click(function () {
    document.documentElement.style.overflowY = "auto";

    $(".modal_box").stop().fadeOut();
  });

  // top버튼
  $(window).scroll(function () {
    if ($(this).scrollTop() > 600) {
      $(".bottom_up").stop().animate({ opacity: 1 }, 200);
    } else {
      $(".bottom_up").stop().animate({ opacity: 0 }, 200);
    }
  });
  $(".topbtn").click(function () {
    $("html, body").stop().animate({ scrollTop: 0 }, 2000);
    return false;
  });

  $(window).scroll(function () {
    $(".show_box").each(function (i) {
      var bottom_of_element = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      if (bottom_of_window > bottom_of_element) {
        $(this).animate({ opacity: "1" }, 300);
      }
    });
  });
});
