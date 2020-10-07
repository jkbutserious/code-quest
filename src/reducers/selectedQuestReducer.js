export default (state = null, action) => {
  const { id } = action;
  switch (action.type) {
    case 'SELECT_QUEST':
      return id;
    default:
      return state;
  }
}