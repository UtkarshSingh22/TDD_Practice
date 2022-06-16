import caesarCipher from "./caesarCipher";

test('"aaabbbccc" becomes "bbbcccddd"', () => {
    expect(caesarCipher("aaabbbccc")).toBe("bbbcccddd");
});

test('"aAabBbzZz" becomes "bBbcCcaAa"', () => {
    expect(caesarCipher("aAabBbzZz")).toBe("bBbcCcaAa");
});

test('"a1ab#bc c" becomes "b1bc#cd d"', () => {
    expect(caesarCipher("a1ab#bc c")).toBe("b1bc#cd d");
});

// test('1 becomes "not a string"', () => {
//     expect(caesarCipher(1)).toBe("not a string");
// });
