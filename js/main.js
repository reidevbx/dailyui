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

  setTimeout(function () {
    $('body').append('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/loaders.css/0.1.2/loaders.min.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">');
    }, 500);
});
