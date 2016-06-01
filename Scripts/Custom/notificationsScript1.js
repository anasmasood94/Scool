$(document).ready(function () {

    $('#d_emp').hide();
    $('#d_parents').hide();
    $('#d_grades').hide();
    $('#d_students').hide();

/***********************************************/
// For student
/***********************************************/
$('#stdName').click(function () {
    var m = $('#msg_body').val();
    m = m + $('#stdName').data("value");
    $('#msg_body').val(m);
    $('msg_body').focus();
});
$('#stdRoll').click(function () {
    var m = $('#msg_body').val();
    m = m + $('#stdRoll').data("value");
    $('#msg_body').val(m);
    $('msg_body').focus();
});
$('#stdLogin').click(function () {
    var m = $('#msg_body').val();
    m = m + $('#stdLogin').data("value");
    $('#msg_body').val(m);
    $('msg_body').focus();
});

/***********************************************/
// For Teacher
/***********************************************/

$('#teachName').click(function () {
    var m = $('#msg_body').val();
    m = m + $('#teachName').data("value");
    $('#msg_body').val(m);
    $('msg_body').focus();
});
$('#teachId').click(function () {
    var m = $('#msg_body').val();
    m = m + $('#teachId').data("value");
    $('#msg_body').val(m);
    $('msg_body').focus();
});
$('#teachLogin').click(function () {
    var m = $('#msg_body').val();
    m = m + $('#teachLogin').data("value");
    $('#msg_body').val(m);
    $('msg_body').focus();
});

/***********************************************/
// For Parent
/***********************************************/

$('#pName').click(function () {
    var m = $('#msg_body').val();
    m = m + $('#pName').data("value");
    $('#msg_body').val(m);
    $('msg_body').focus();
});
$('#pEmail').click(function () {
    var m = $('#msg_body').val();
    m = m + $('#pEmail').data("value");
    $('#msg_body').val(m);
    $('msg_body').focus();
});
$('#pMobile').click(function () {
    var m = $('#msg_body').val();
    m = m + $('#pMobile').data("value");
    $('#msg_body').val(m);
    $('msg_body').focus();
});
$('#pmName').click(function () {
    var m = $('#msg_body').val();
    m = m + $('#pmName').data("value");
    $('#msg_body').val(m);
    $('msg_body').focus();
});
$('#pLogin').click(function () {
    var m = $('#msg_body').val();
    m = m + $('#pLogin').data("value");
    $('#msg_body').val(m);
    $('msg_body').focus();
});

/***********************************************/
// For Checkbox
/***********************************************/
$('#all_parents').click(function () {
    if ($('#d_parents').is(":visible")) {
        $('#d_parents').hide();
        $('#ch_parent').prop('checked', false);
    }

});
$('#all_employees   ').click(function () {
    if ($('#d_emp').is(":visible")) {
        $('#d_emp').hide();
        $('#ch_staff').prop('checked', false);
    }

});
$('#all_students').click(function () {
    if ($('#d_students').is(":visible")) {
        $('#d_students').hide();
        $('#ch_student').prop('checked', false);
    }
    if ($('#d_grades').is(":visible")) {
        $('#d_grades').hide();
        $('#ch_grade').prop('checked', false);
    }

});
$('#ch_parent').click(function () {
    if ($('#d_parents').is(":visible")) {
        $('#d_parents').hide();
    }
    else {
        $('#d_parents').show();
        $('#all_parents').attr('checked', false);
    }
    $('#msg_body').focus();
});
$('#ch_staff').click(function () {
    if ($('#d_emp').is(":visible")) {
        $('#d_emp').hide();
    }
    else {
        $('#d_emp').show();
        $('#all_employees').attr('checked', false);
    }
    $('#msg_body').focus();
});
$('#ch_grade').click(function () {
    if ($('#d_grades').is(":visible")) {
        $('#d_grades').hide();
    }
    else {
        $('#d_grades').show();
    }
    $('#msg_body').focus();
});
$('#ch_student').click(function () {
    if ($('#d_students').is(":visible")) {
        $('#d_students').hide();
    }
    else {
        $('#d_students').show();
        $('#all_students').attr('checked', false);
    }
    $('#msg_body').focus();
});
});