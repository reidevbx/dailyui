/* global $ */
$(function () {
  var totalNum = 100;
  var $works = $('.works');
  var worksHtml = [];
  var workTpl = $('#work-tpl').html();

  for (var i = totalNum; i > 0; i--) {
    worksHtml.push(workTpl.replace(/\${num}/g, i));
  }

  $works.append(worksHtml.join(''));

  var lazyImg = $('.lazy').Lazy({
    scrollDirection: 'vertical',
    chainable: false,
    effect: 'fadeIn',
    afterLoad: function (img) {
      $(img).closest('.work').find('.loader').fadeOut(1000);
    },
    onError: function (img) {
      $(img).closest('.work').hide();
      lazyImg.update();
    }
  });

  $.ajax({
    url: 'links.json',
    dataType: 'json'
  })
  .done(function (data) {
    var linkHtml = '';
    var linkTpl = '<div class="link ${name}"><a href="${url}" target="_blank"><i class="fa fa-${icon}"></i></a></div>';

    data.forEach(function (link) {
      linkHtml += linkTpl.replace('${name}', link.name).replace('${url}', link.url).replace('${icon}', link.icon);
    });

    $('.user .links').html(linkHtml);
  });
});
