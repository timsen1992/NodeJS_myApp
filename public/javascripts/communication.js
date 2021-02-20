$(document).ready(function () {
    $("#input").submit(function () {
        var urlDst = 'http://localhost:3000/execute/run';
        var cmd = $("#command").val();
        console.log("sending " + $("#command").val() + " to " + urlDst);
        $.ajax(urlDst, {
            async: false,
            method: 'POST',
            url: urlDst,
            data: {"command": cmd},
            success: function(data){
                console.log("success - received: " + data);
                $("#result").html("<p>" + data + "</p>");
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log("error");
            },
            complete: function (jqXHR, textStatus){
                console.log("Complete with textStatus" + textStatus);
            }
        });
        return false;
    });
});
