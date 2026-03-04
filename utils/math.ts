export const increment = (setter: React.Dispatch<React.SetStateAction<number>>, step: number = 1) => setter((prev) => prev + step);

export const isOddNumber = (numberToCheck: number | undefined): boolean => 
  numberToCheck != null && numberToCheck % 2 !== 0;
//console.log(isOddNumber(3)); // true
//console.log(isOddNumber(4)); // false
//console.log(isOddNumber(undefined)); // false
//console.log(isOddNumber(null)); // false

//export const isEvenNumber = !isOddNumber(2);

// Generate random number in interval (min - optional)
export const getRandomInt = (max: number, min = 1): number => Math.floor(Math.random() * (max - min + 1) + min);
//console.log(getRandomInt(1, 10)); // Число от 1 до 10, включительно

export const calcProgress = (current: number, total: number): number => {
  if (!total) return 0;

  const value = Math.round((current / total) * 1000) / 10;

  return Math.min(100, Math.max(0, value));
};

// L=2πr
export const getCircumferenceLength = (radius: number): number => 2 * Math.PI * radius;