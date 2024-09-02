export function generateUUID(): string {
    const x = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
    const m = [1, 2, 3, 4, 5];
    const n = [8, 9, 'a', 'b'];
    let uuid = "";
    for (var i = 0; i < 36; i++) {
        if (i >= 0 && i <= 7) {
            // x
            uuid += getRandomElementFromArray(x);
        } else if (i === 8 || i === 13 || i === 18 || i === 23) {
            // dash
            uuid += '-';
        } else if (i >= 9 && i <= 12) {
            // x
            uuid += getRandomElementFromArray(x);
        } else if (i >= 14 && i <= 17) {
            // x
            uuid += getRandomElementFromArray(x);
        } else if (i === 19) {
            // N
            uuid += getRandomElementFromArray(n);
        } else if (i >= 20 && i <= 22) {
            // x
            uuid += getRandomElementFromArray(x);
        } else if (i >= 24 && i <= 35) {
            // x
            uuid += getRandomElementFromArray(x);
        }
    }
    return uuid;
}

// https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array
function getRandomElementFromArray(array: any[]) {
    return array[Math.floor(Math.random() * array.length)];
}