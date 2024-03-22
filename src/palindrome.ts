export const isPalindrome = (s: string) :boolean => {
    if(s === s.split("").reverse().join("")) {
        return true;
    }
    return false;
};