import capitalize from "./capitalize";

test('"test" should become "Test"', () => {
    expect(capitalize("test")).toBe("Test");
});

test('"Test" should become "Test"', () => {
    expect(capitalize("Test")).toBe("Test");
});

test('"TEST" should become "TEST"', () => {
    expect(capitalize("TEST")).toBe("TEST");
});

test('"123test" should become "123Test"', () => {
    expect(capitalize("123test")).toBe("123Test");
});

test('"123TeST" should become "123TeST"', () => {
    expect(capitalize("123TeST")).toBe("123TeST");
});

test('" test test" should become " Test test"', () => {
    expect(capitalize(" test test")).toBe(" Test test");
});

test('"£$%" should become "No valid characters"', () => {
    expect(capitalize("£$%")).toBe("No valid characters");
});

test('"123" should become "No valid characters"', () => {
    expect(capitalize("123")).toBe("No valid characters");
});
