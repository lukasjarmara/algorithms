export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0;
    let high = haystack.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const m = haystack[mid];

        if (m === needle) {
            return true;
        } else if (m < needle) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return false;
}
