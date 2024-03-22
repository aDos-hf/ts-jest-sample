import { isPalindrome } from "../palindrome";

describe("isPalindrome", () => {
    it("happy path", () => {
        expect(isPalindrome("layal")).toBe(true);
    })
    it("not a palindrome", () => {
        expect(isPalindrome("loyal")).toBe(false);
    })
});