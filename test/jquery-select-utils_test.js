(function ($) {

    test('check if setEmpty (without prompt) produces a zero item select list', function () {
        $('#qunit-fixture').selectUtils('setEmpty');
        equal($('#qunit-fixture').children().length, 0);
    });

    test('check if setEmpty (with prompt) produces a zero item select list', function () {
        $('#qunit-fixture').selectUtils('setEmpty', 'A prompt');
        equal($('#qunit-fixture').children().length, 1);
        equal($('#qunit-fixture').children().text(), 'A prompt');
    });

    test('check if populateFromObjectList (without prompt) properly populates the data ', function () {
        $('#qunit-fixture').selectUtils('populateFromObjectList', [{id: 1, name: "Name 1", foo:"bar"}, {id: 2, name: "Name 2", foo:"bar"}], 'id', 'name');
        equal($('#qunit-fixture').children().length, 2);
        equal($('#qunit-fixture option:nth-child(1)').text(), "Name 1");
        equal($('#qunit-fixture option:nth-child(1)').val(), "1");
        equal($('#qunit-fixture option:nth-child(2)').text(), "Name 2");
        equal($('#qunit-fixture option:nth-child(2)').val(), "2");
    });

    test('check if populateFromObjectList (with prompt) properly populates the data ', function () {
        $('#qunit-fixture').selectUtils('populateFromObjectList', [{id: 1, name: "Name 1", foo:"bar"}, {id: 2, name: "Name 2", foo:"bar"}], 'id', 'name', "Pick up a name");
        equal($('#qunit-fixture').children().length, 3);
        equal($('#qunit-fixture option:nth-child(1)').text(), "Pick up a name");
        equal($('#qunit-fixture option:nth-child(2)').text(), "Name 1");
        equal($('#qunit-fixture option:nth-child(2)').val(), "1");
        equal($('#qunit-fixture option:nth-child(3)').text(), "Name 2");
        equal($('#qunit-fixture option:nth-child(3)').val(), "2");
    });

    test('check if populateFromArray (without prompt) properly populates the data ', function () {
        $('#qunit-fixture').selectUtils('populateFromArray', ["DATA 1", "DATA 2", "DATA 3", "DATA 4"]);
        equal($('#qunit-fixture').children().length, 4);
        equal($('#qunit-fixture option:nth-child(1)').text(), "DATA 1");
        equal($('#qunit-fixture option:nth-child(1)').val(), "0");
        equal($('#qunit-fixture option:nth-child(2)').text(), "DATA 2");
        equal($('#qunit-fixture option:nth-child(2)').val(), "1");
        equal($('#qunit-fixture option:nth-child(3)').text(), "DATA 3");
        equal($('#qunit-fixture option:nth-child(3)').val(), "2");
        equal($('#qunit-fixture option:nth-child(4)').text(), "DATA 4");
        equal($('#qunit-fixture option:nth-child(4)').val(), "3");
    });

    test('check if populateFromArray (without prompt, with offset) properly populates the data ', function () {
        $('#qunit-fixture').selectUtils('populateFromArray', ["DATA 1", "DATA 2", "DATA 3", "DATA 4"], null, 1);
        equal($('#qunit-fixture').children().length, 4);
        equal($('#qunit-fixture option:nth-child(1)').text(), "DATA 1");
        equal($('#qunit-fixture option:nth-child(1)').val(), "1");
        equal($('#qunit-fixture option:nth-child(2)').text(), "DATA 2");
        equal($('#qunit-fixture option:nth-child(2)').val(), "2");
        equal($('#qunit-fixture option:nth-child(3)').text(), "DATA 3");
        equal($('#qunit-fixture option:nth-child(3)').val(), "3");
        equal($('#qunit-fixture option:nth-child(4)').text(), "DATA 4");
        equal($('#qunit-fixture option:nth-child(4)').val(), "4");
    });
}(jQuery));
