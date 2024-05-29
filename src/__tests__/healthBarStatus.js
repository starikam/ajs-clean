import healthBarStatus from '../healthBarStatus';

test.each([
  ['Mage', 90, 'healthy'],
  ['Archer', 30, 'wounded'],
  ['Warrior', 10, 'critical'],
])('testing healthBarStatus function with name %s and health %i', (name, health, expected) => {
  const result = healthBarStatus({ name, health });

  expect(result).toBe(expected);
});
