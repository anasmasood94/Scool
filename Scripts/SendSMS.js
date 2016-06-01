function SendSMS(smsAccountUserName, smsAccountPassword, Sender_Name, ReceiverMobile, Message, SendAsync) {
    var JsonHeader = { 'UserName': smsAccountUserName, 'Password': smsAccountPassword, 'SendAsync': SendAsync };
    var ObjContentData = [{ 'SenderName': Sender_Name, 'Message': Message, 'Mobiles': ReceiverMobile }]
    var ContentDataObjectSMSSend = JSON.stringify(ObjContentData);
    $.ajax({
        type: 'POST',
        url: 'http://api.innodevelopment.org/sms',
        contentType: 'application/json; charset=utf-8',
        headers: JsonHeader,
        data: ContentDataObjectSMSSend,
        dataType: 'text',
        accept: 'application/json charset=utf-8'
    }).done(function (ResultData) {
        var responseObject = JSON.parse(ResultData);
        if (responseObject.success == "true") {
            $('#dvResult').text(responseObject.data);
        }
        else {
            $('#dvResult').text(responseObject.data);
        }
    }).error(function (jqXHR, textStatus, errorThrown) {
        var errorObject = JSON.parse(jqXHR.responseText);
        $('#dvResult').text(errorObject.message);
    });
}
function GetSMSBalance(smsAccountUserName, smsAccountPassword) {
    var JsonHeader = { 'UserName': smsAccountUserName, 'Password': smsAccountPassword };
    $.ajax({
        type: 'GET',
        url: 'http://api.innodevelopment.org/sms',
        contentType: 'application/json; charset=utf-8',
        headers: JsonHeader,
        dataType: 'text',
        accept: 'application/json charset=utf-8'
    }).done(function (ResultData) {
        var responseObject = JSON.parse(ResultData);
            if (responseObject.success == "true") {
                $('#dvResult').text(responseObject.data);
                }
            else {
                $('#dvResult').text(responseObject.data);
            }
    }).error(function (jqXHR, textStatus, errorThrown) {
            var errorObject = JSON.parse(jqXHR.responseText);
            $('#dvResult').text(errorObject.message);
    });
}