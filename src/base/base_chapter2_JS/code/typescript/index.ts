const div1: HTMLDivElement | null = document.querySelector(".div1");
const array1: number[] = [1, 2, 3, 4, 5];
console.log("array1", array1);
const entries: IterableIterator<[number, number]> = array1.entries();
console.log("array1.entries", entries[0]);
