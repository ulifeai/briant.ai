export function range(start: number, stop: number, step: number) {
    var a = [start], b = start;
    while (b < stop) {
        a.push(b += step || 1);
    }
    console.log(a, start, stop)
    return a;
}