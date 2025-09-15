import { describe, expect, it } from "vitest";
import { toggleState } from "../toggleLED"

describe("toggle", () => {
    it("returns true if valid index", () => {
        expect(toggleState(1)).toBe(true);
    });
})