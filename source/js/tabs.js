$(document).ready(function() {
  $(".tabs li").each(function(i, v) {
    $(this).attr('data-tab', "tab-" + i)
    $('.tab-content').eq(i).attr('id', "tab-" + i)
  })



  $('ul.tabs li').click(function() {
    var tab_id = $(this).attr('data-tab');
    $('ul.tabs li').removeClass('current');
    $('.tab-content').removeClass('current');
    $(this).addClass('current');
    $("#" + tab_id).addClass('current');
  })
})
