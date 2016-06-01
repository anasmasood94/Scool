$(document).ready(function () { 
$('#print').on('click', function () {
    reverse();
    jQuery("#example").print({
        noPrintSelector: ".actions",
        // Add this on top
        append: "My Footer<br/>",
        // Add this at bottom
        prepend: "<br/>jQueryScript.net",
        title: "My Title"
    });
    reverseBack();

});
function reverseBack() {
    $('#example thead th').each(function (i, v) {
        // var title = $('#example tfoot th').eq( $(this).index() ).text();
        var title = $(this).text();
        if (title != "Actions") {
            $(this).html(
            '<input type="text"  class="form-control" style="height:auto" id="exampleInputName2" placeholder="' + title + ' search">'
            );
        }
    });
}
function reverse() {
    $('#example thead th').each(function (i, v) {
        // var title = $('#example tfoot th').eq( $(this).index() ).text();
        var title = $(this).html();
        var input = $('#exampleInputName2').attr('placeholder');
        if (input != null) {
            var input = input.replace('search', '');
        }
        //            debugger
        if (title != "Actions") {
            $(this).html(input);
        }
    });
}
});