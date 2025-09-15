const leds: boolean[] = [false, false, false, false, false];

export function toggleState(index: number): boolean {
    if (index < 0 || index >= leds.length) {
        return false;
    } else {
        leds[index] = !leds[index];
        console.log(`Index ${index} toggled to ${leds[index]}`);
        return true;
    }

}