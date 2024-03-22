import { sumNumbers } from "../sum";

describe("sumNumbers", () => {
    it("happy path", () => {
        expect(sumNumbers(1,2)).toBe(3);
    })
});