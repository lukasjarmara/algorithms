export default function two_crystal_balls(breaks: boolean[]): number {
    let jumpAmount = Math.sqrt(breaks.length);

    let i = jumpAmount
    for (; i < breaks.length; i += jumpAmount){
        if (breaks[i]){
            break
        }
    }

    if 
}
