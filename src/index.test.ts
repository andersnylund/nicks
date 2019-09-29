import nicknamesDefaultImport, { nicknames } from './index';

describe('nicknames', () => {
  it('should handle default import', () => {
    expect(nicknamesDefaultImport('')).toEqual([]);
  });

  it('should not return anything with an empty string', () => {
    expect(nicknames('')).toEqual([]);
  });

  it('should handle special latin characters', () => {
    expect(nicknames('á.èíđßöå')).toEqual(['aaeioa', 'aeioaa', 'aeiaei']);
  });

  it('should give suggestion based on one name', () => {
    expect(nicknames('Matti')).toEqual(['mmatti', 'mattim', 'matmat']);
  });

  it('should give suggestions based on two names', () => {
    expect(nicknames('Matti Meikäläinen-Muukalainen')).toEqual([
      'mmeika',
      'meikam',
      'matmei',
      'meimat',
    ]);
  });

  it('should handle double spaces', () => {
    expect(nicknames('Matti  Meikäläinen')).toEqual([
      'mmeika',
      'meikam',
      'matmei',
      'meimat',
    ]);
  });

  it('should handle more than two names', () => {
    expect(nicknames('Matti Meikäläinen Muukalainen')).toEqual([
      'mmuuka',
      'muukam',
      'matmuu',
      'muumat',
    ]);
  });
});
