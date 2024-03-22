export const reverseVowels = (s: string): string => {

    const vowelDictionary: string[] = ['a','e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']; //O(1)
    let leftIndex: number = 0;
    let rightIndex: number = s.length-1;
    const sArr = [...s];

    while(leftIndex < rightIndex) {
        
        if(!vowelDictionary.includes(sArr[leftIndex])) {
            leftIndex++;
        } else {
            if(!vowelDictionary.includes(sArr[rightIndex])) {
                rightIndex--;
            } else {
                [sArr[leftIndex],sArr[rightIndex]] = [sArr[rightIndex], sArr[leftIndex]];
                rightIndex--;
                leftIndex++;
            }
        }
    }
    return sArr.join("");
}