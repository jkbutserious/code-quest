import React from "react";
import QuestList from './QuestList';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import QuestEdit from './QuestEdit';
import QuestDetail from './QuestDetail';
import NewQuestForm from './NewQuestForm';
import * as c from '../actions';
import { withFirestore } from 'react-redux-firebase'

class QuestControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      selectedQuest: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedQuest != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedQuest: null
      });
    }
    else {
      const { dispatch } = this.props;
      const action = c.toggleForm;
      dispatch(action);
    }
    // else {
    //   this.setState(prevState => ({
    //     formVisibleOnPage: !prevState.formVisibleOnPage
    //   }));
    // }
  }

  // handleSelectingQuest = (id) => {
  //   console.log(id);
  //   const newSelectQuest = this.props.masterQuestList[id]
  //   console.log(newSelectQuest)
  //   this.setState({
  //     selectedQuest: newSelectQuest
  //   })
  // }

  handleChangingSelectedQuest = (id) => {
    this.props.firestore.get({collection: 'quests', doc: id}).then((quest) => {
      const firestoreQuest = {
        name: quest.get("name"),
        progLang: quest.get("progLang"),
        code: quest.get("code"),
        bounty: quest.get("bounty"),
        id: quest.id
      }
      this.setState({selectedQuest: firestoreQuest });
    });
  }

  handleAddNewQuest = () => {
    const { dispatch } = this.props;
    const action = c.toggleForm()
    dispatch(action);
    // const { name, progLang, code, bounty } = newQuest;
    // const action = {
    //   type: 'ADD_QUEST',
      // id: id,
      // name: name,
      // progLang: progLang,
      // code: code,
      // bounty: bounty
    // this.setState({
    //   formVisibleOnPage: false,
    //   selectedPost: null,
    //   editing: false
    // });
  }

  // handleEditingQuest = (questToEdit) => {
    // const { dispatch } = this.props;
    // const { id, name, progLang, code, bounty } = questToEdit;
    // const action = {
    //   type: 'ADD_QUEST',
    //   id: id,
    //   name: name,
    //   progLang: progLang,
    //   code: code,
    //   bounty: bounty
    // }
  handleEditingQuest = (questToEdit) => {
    this.setState({
      editing: false,
      selectedQuest: null
    });
  }

  handleDeletingQuest = (id) => {
    this.props.firestore.delete({collection: 'quests', doc: id});
    this.setState({selectedQuest: null});
    // const { dispatch } = this.props;
    // const action = {
    //   type: 'DELETE_QUEST',
    //   id: id
    // }
    // dispatch(action);
    // this.setState({ selectedQuest: null });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.selectedQuest != null) {
      currentlyVisibleState = <QuestDetail questDetail={this.selectedQuest} />
    } else if (this.state.editing) {
      currentlyVisibleState = <QuestEdit quest={this.state.selectedQuest} onEditQuest=
        {this.handleEditingQuest} />
      buttonText = "Return to Quests";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewQuestForm onNewQuestCreation={this.handleAddNewQuest} />
      buttonText = "Return to Quest List"
    } else {
      currentlyVisibleState = <QuestList questList={this.props.masterQuestList} onSelectQuest={this.handleChangingSelectedQuest} onUpVoting={this.handleVotingUp} onDownVoting={this.handleVotingDown} />
      buttonText = "Add Quest"
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}
const convertArrayToObj = (array, key) => {
  const initialVal = {};
  return array.reduce((obj, item) => {
    return {
      ...obj,
      [item[key]]: item,
    };
  }, initialVal);
};
QuestControl.propTypes = {
  masterQuestList: PropTypes.object
};
const mapStateToProps = state => {
  const stateToArray = Object.values(state);
  const sortedStateArray = stateToArray.sort(function(a, b) {return (b.score - a.score)})
  const returnObj = convertArrayToObj(sortedStateArray, 'id');
  return {
    masterQuestList: returnObj
  }
}
QuestControl = connect(mapStateToProps)(QuestControl);
export default withFirestore(QuestControl);