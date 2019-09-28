import nicknameDefaultImport, { nickname } from './index';

describe('nickname', () => {
  it('should handle default import', () => {
    expect(nicknameDefaultImport('')).toEqual([]);
  });

  it('should not return anything with an empty string', () => {
    expect(nickname('')).toEqual([]);
  });

  it('should handle special latin characters', () => {
    expect(nickname('á.èíđßöå')).toEqual(['aaeioa', 'aeioaa', 'aeiaei']);
  });

  it('should give suggestion based on one name', () => {
    expect(nickname('Matti')).toEqual(['mmatti', 'mattim', 'matmat']);
  });

  it('should give suggestions based on two names', () => {
    expect(nickname('Matti Meikäläinen-Muukalainen')).toEqual([
      'mmeika',
      'meikam',
      'matmei',
      'meimat',
    ]);
  });

  it('should handle double spaces', () => {
    expect(nickname('Matti  Meikäläinen')).toEqual([
      'mmeika',
      'meikam',
      'matmei',
      'meimat',
    ]);
  });

  it('should handle more than two names', () => {
    expect(nickname('Matti Meikäläinen Muukalainen')).toEqual([
      'mmuuka',
      'muukam',
      'matmuu',
      'muumat',
    ]);
  });
});
