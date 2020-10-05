import questReducer from '../../reducers/quest-reducer';

describe('questReducer', () => {

  let action;
  const questData = {
    name: 'Starter Quest',
    progLang: 'JavaScript',
    code: 'let sampleCode = sampleString',
    bounty: '300',
    id: 1
  };

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(questReducer({}, { type: null })).toEqual({});
  });
  
})