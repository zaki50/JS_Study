$(document).ready(
    function () {
        //document.getElementsByClassName("name")[0].textContent = "ざっきー";

        var onSuccess = function (tl) {
            var name, text, tweet;
            for (var i = 0; i < tl.length; i++) {
                tweet = tl[i];
                console.log(tweet);
                name = tweet.user.name;
                text = tweet.text;

                addTweet(name, text);
            }
        }

        $.ajax("http://twitter.com/statuses/user_timeline/kassy_kz.json", {
            type:"GET",
            dataType:"jsonp",
            success:onSuccess,
            error:function () {
                alert("error");
            }
        });

        var template = $(".item:eq(0)");
        var addTweet = function (name, text) {
            var tweet = template.clone();
            tweet.removeClass("template");

            tweet.find(".name").text(name);
            tweet.find(".fav").text(text);

            tweet.appendTo("#itemList");
        }
//    $("<div class=\"item\"><span class=\"name\"> わかめ </span><span class=\"fav\"> まやさん </span></div>").appendTo("#itemList");
    }).call(this/* window */);
