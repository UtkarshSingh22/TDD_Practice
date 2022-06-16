import reverseString from "./reverseString";

test('"test" should become "tset"', () => {
    expect(reverseString("test")).toBe("tset");
});

test('"REVERSE" should become "ESREVER"', () => {
    expect(reverseString("REVERSE")).toBe("ESREVER");
});

test('"  test  " should become "  tset  "', () => {
    expect(reverseString("  test  ")).toBe("  tset  ");
});

test('"1234" should become "4321"', () => {
    expect(reverseString("1234")).toBe("4321");
});

test('"nice work" should become "krow ecin"', () => {
    expect(reverseString("nice work")).toBe("krow ecin");
});
