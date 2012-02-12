describe("twice関数に対するテスト", function () {
    it("0に対するテスト", function(){
        expect(twice(0)).toBe(0);
    });
    it("2に対するテスト", function(){
        expect(twice(2)).toBe(4);
    });
    it("負数に対するテスト", function(){
        expect(twice(-1)).toBe(-2);
    });
    it("NaNに対するテスト", function(){
        expect(isNaN(twice(NaN))).toBeTruthy();
    });
    it("Infinityに対するテスト", function(){
        expect(twice(Infinity)).toBe(Infinity);
    });

});
