$(document).ready(function () {
  $('#fullpage').fullpage({
    //options here
    sectionsColor: ['gold', '#1abc9c', '#C0C0C0'],
    anchors: ['firstPage', 'secondPage', 'thirdPage'],
    menu: '#enu',
    navigation: true,
    navigationTooltips: ['firstPage', 'secondPage', 'thirdPage'],
    navigationPosition: 'right',

    //methods
    afterLoad: function (anchorLink, index) {
      console.log(index);
      if(index == 3) {
        $('#thirdPage > div').append('<p>reached page</p>');
      }
    }
  });

});

// new fullpage('#fullpage', {
//   sectionsColor: ['gold', '#1abc9c', '#C0C0C0'],
//   anchors:['firstPage', 'secondPage', 'thirdPage'],
//   menu: '#myMenu',
//   navigation: true,
//   navigationTooltips: ['firstPage', 'secondPage', 'thirdPage'],
// });


