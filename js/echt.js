//alert($("#textval").text());
$(document).ready(function () {
    $('#textChange').bind('mousewheel DOMMouseScroll', function (event) {
        console.log("sadsa");
        //var content = $('#textChange');
        //var scrollUp = (event.originalEvent.deltaY / 120 > 0);
        //if (scrollUp) {
        //    var isRed = (content.css('color') == 'rgb(255, 0, 0)');

        //    console.log('you scrolled up!');

        //    if (isRed) {
        //        content.css('color', 'rgb(0, 0, 255)');
        //        console.log('you scrolled up!');
        //    } else {
        //        content.css('color', 'rgb(255, 255, 0)');
        //        console.log('you scrolled up!');
        //    }
        //}
    });
});