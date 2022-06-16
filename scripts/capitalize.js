function isAlpha(ch) {
    return (
        typeof ch === "string" &&
        ch.length === 1 &&
        ((ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z"))
    );
}

function capitalize(string) {
    let charFound = false;
    for (let i = 0; i < string.length; i++) {
        if (isAlpha(string[i])) {
            charFound = true;
            string =
                string.slice(0, i) +
                string[i].toUpperCase() +
                string.slice(i + 1);
            break;
        }
    }
    if (charFound === false) {
        return "No valid characters";
    }
    return string;
}

export default capitalize;
