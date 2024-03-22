import { reverseVowels } from "../reverse";

describe("reverseVowels", () => {
    it("return empty string for empty input", () => {
        expect(reverseVowels("")).toBe("")
    });
    it("return the reverse vowels string for 'hello'", () => {
        expect(reverseVowels("hello")).toBe("holle")
    });
    it("return the reverse vowels string for 'leetcode'", () => {
        expect(reverseVowels("leetcode")).toBe("leotcede")
    });
})