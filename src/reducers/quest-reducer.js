export default (state = {}, action) => {
  const { name, progLang, code, bounty, id } = action;
  switch (action.type) {
    case 'ADD_QUEST':
      return Object.assign({}, state, {
        [id]: {
          name: name,
          progLang: progLang,
          code: code,
          bounty: bounty,
          id: id
        }
      });
    case 'DELETE_QUEST':
      const newState = { ...state };
      delete newState[id];
      return newState;
    default:
      return state;
  }
}