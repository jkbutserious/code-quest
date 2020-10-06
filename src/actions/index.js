import * as c from './ActionTypes';

export const addQuest = (quest) => {
  const { id, name, progLang, code, bounty } = quest
  return {
    type: c.ADD_QUEST,
    id: id,
    name: name,
    progLang: progLang,
    code: code,
    bounty: bounty
  }
}

export const deleteQuest = id => ({
  type: c.DELETE_QUEST,
  id
})

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});