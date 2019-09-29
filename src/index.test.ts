import nicksDefaultImport, { nicks } from './index';

describe('nicks', () => {
  it('should handle default import', () => {
    expect(nicksDefaultImport('')).toEqual([]);
  });

  it('should not return anything with an empty string', () => {
    expect(nicks('')).toEqual([]);
  });

  it('should handle special latin characters', () => {
    expect(nicks('á.èíđßöå')).toEqual(['aaeioa', 'aeioaa', 'aeiaei']);
  });

  it('should give suggestion based on one name', () => {
    expect(nicks('Matti')).toEqual(['mmatti', 'mattim', 'matmat']);
  });

  it('should give suggestions based on two names', () => {
    expect(nicks('Matti Meikäläinen-Muukalainen')).toEqual([
      'mmeika',
      'meikam',
      'matmei',
      'meimat',
    ]);
  });

  it('should handle double spaces', () => {
    expect(nicks('Matti  Meikäläinen')).toEqual([
      'mmeika',
      'meikam',
      'matmei',
      'meimat',
    ]);
  });

  it('should handle more than two names', () => {
    expect(nicks('Matti Meikäläinen Muukalainen')).toEqual([
      'mmuuka',
      'muukam',
      'matmuu',
      'muumat',
    ]);
  });
});
