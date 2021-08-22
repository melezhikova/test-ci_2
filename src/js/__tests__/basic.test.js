import itemsSort from '../app';

test('should compare items in array_toEqual', () => {
  const input = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник2', health: 10 },
  ];
  const result = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
    { name: 'мечник2', health: 10 },
  ];
  const expected = itemsSort(input);
  expect(result).toEqual(expected);
});

test('should compare items in array_toBe', () => {
  const input = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];
  const result = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  const expected = itemsSort(input);
  expect(result[1].health).toBe(expected[1].health);
});
