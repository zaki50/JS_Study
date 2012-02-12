describe("twice関数に対するテスト", function () {

    var mock=true;
    if (mock){
        $.mockjax({
            url:"http://api.atnd.org/events/",
            responseText:[
                {
                    text:"かっしーぽーん",
                    user:{
                        screen_name:"かっしー",
                        name:"かっしー"
                    }
                },
                {
                    text:"もしもし",
                    user:{
                        screen_name:"もちもち",
                        name:"もちもち"
                    }
                }
            ]
        });
    }

    var result = null;
    it("取得に対するテスト", function () {
        ATND.search({
            word:"javascript",
            onSuccess:function (data) {
                result = data
            },
            onError:function () {
                result = {};
            }
        });

        waitsFor(function () {
            // ここは繰り返し呼ばれる
            return result;
        }, 5000);
        runs(function () {
            expect(result).toBeDefined();
            expect(result.events).toBeDefined();
            expect(result.events.length).toBeDefined();
            expect(result.events[0]["catch"]).toBeDefined();
        });
    });

});
