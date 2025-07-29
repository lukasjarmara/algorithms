export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0;
    let high = haystack.length - 1;
    let m = haystack[Math.floor((low + high) / 2)];

    do {
        if (m == needle) {
            return m == needle;
        }
        if (m < needle) {
            low = m + 1;
        } else {
            high = m;
        }
    } while (low < high);
    return false;
}
