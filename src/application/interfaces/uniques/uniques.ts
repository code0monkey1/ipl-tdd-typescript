interface GetUniques<A, O> {
  execute(attribute: keyof O | (keyof O)[]): A[];
}

class UniqueValuesExtractor implements GetUniques<string, { name: string; age: number }[]> {
  execute(attribute: keyof { name: string; age: number } | (keyof { name: string; age: number })[]): string[] {
    const objects: { name: string; age: number }[] = [
      { name: 'a', age: 2 },
      { name: 'b', age: 1 },
      { name: 'b', age: 2 }
    ];

    const uniqueValues = [...new Set(objects.map(obj => {
      if (Array.isArray(attribute)) {
        return attribute.map(attr => String(obj[attr]));
      } else {
        return String(obj[attribute]);
      }
    }).flat())];

    return uniqueValues;
  }
}

// Example usage
const extractor = new UniqueValuesExtractor();
const uniqueNames = extractor.execute('name');
console.log(uniqueNames); // Output: ['a', 'b']

const uniqueAges = extractor.execute('age');
console.log(uniqueAges); // Output: ['2', '1']