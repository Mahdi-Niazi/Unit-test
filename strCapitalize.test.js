const strCapitalize = require('./strCapitalize');

test('First letter of the String should be capital letter', () => {
    expect(strCapitalize.capitalize("String")).toEqual("String");
})