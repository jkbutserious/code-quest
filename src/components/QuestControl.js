import React from "react";
import QuestList from './QuestList';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import QuestEdit from './QuestEdit';
import QuestDetail from './QuestDetails';
import NewQuestForm from './NewQuestForm';
import * as c from '../actions';

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
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleSelectingQuest = (id) => {
    console.log(id);
    const newSelectQuest = this.props.masterQuestList[id]
    console.log(newSelectQuest)
    this.setState({
      selectedQuest: newSelectQuest
    })
  }

  handleAddNewQuest = (newQuest) => {
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

  handleEditingQuest = (questToEdit) => {
    const { dispatch } = this.props;
    const { id, name, progLang, code, bounty } = questToEdit;
    const action = {
      type: 'ADD_QUEST',
      id: id,
      name: name,
      progLang: progLang,
      code: code,
      bounty: bounty
    }
    dispatch(action);
    this.setState({
      editing: false,
      selectedQuest: null
    });
  }

  handleDeletingQuest = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_QUEST',
      id: id
    }
    dispatch(action);
    this.setState({ selectedQuest: null });
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
      currentlyVisibleState = <QuestList questList={this.props.masterQuestList} onSelectQuest={this.handleSelectingQuest} onUpVoting={this.handleVotingUp} onDownVoting={this.handleVotingDown} />
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
export default QuestControl;