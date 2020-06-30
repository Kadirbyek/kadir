describe ("Test for Lab7", function(){
    it('1. Test for sum value and its result should ', function () {
        assert.equal(150, sum([50,50,50]));
    });
    it('2. Test for multiply value and its result should ', function () {
        assert.equal(24, multiply([1,2,3,4]));
    });
    it('3. Reverse ', function () {
        assert.equal('ridak', reverse('kadir'));
    });
    it('4. findLongestWord ', function () {
        assert.deepEqual(["longest8","middle7"], filterLongWords(["has4", "longest8", "middle7"],5));
    });


});