$(document).ready(function () {
  $(".arrow").click(function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: $(".footter").offset().top }, 800);
  });
  $(".openSideBarButton").click(function (e) {
    e.preventDefault();
    $(".sideBar").addClass("showSideBar");
    $(".grayLayerForSideBar").addClass("showGrayLayer");
  });
  $(".grayLayerForSideBar").click(function (e) {
    e.preventDefault();
    console.log("haha");
    $(".sideBar").removeClass("showSideBar");
    $(".grayLayerForSideBar").removeClass("showGrayLayer");
  });
});
