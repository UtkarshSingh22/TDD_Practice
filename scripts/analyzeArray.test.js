import analyzeArray from "./analyzeArray";

test("normal number array", () => {
    expect(analyzeArray([1, 2, 3, 4, 5])).toEqual({
        average: 3,
        min: 1,
        max: 5,
        length: 5,
    });
});

test("normal number array", () => {
    expect(analyzeArray([5, 3, 6, 4, 2])).toEqual({
        average: 4,
        min: 2,
        max: 6,
        length: 5,
    });
});

test("array with non-number", () => {
    expect(analyzeArray([1, 2, 3, 4, "5"])).toBe("not a proper input");
});

test("array-like object (string)", () => {
    expect(analyzeArray("12345")).toBe("not a proper input");
});
