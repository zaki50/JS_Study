(function (global) {
    var ATND = {};

    ATND.search = function (param) {
        var word = param.word;
        var onSuccess = param.onSuccess || onDefaultSuccess;
        var onError = param.onError || onDefaultError;

        $.ajax("http://api.atnd.org/events/", {
            type:"GET",
            dataType:"jsonp",
            success:onSuccess,
            eror:onError,
            data:{
                keyword:word,
                format:"jsonp"
            }
        });
    };

    function onDefaultSuccess(data) {
        alert("onSuccess");
    }

    function onDefaultError() {
        alert("onError");
    }

    global.ATND = ATND;

}(this))