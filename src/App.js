import React from 'react';
import { connect } from 'react-redux';

import Question from './components/Question/Question';
import Sentence from './components/Sentence/Sentence';
import QUESTION_DATA from './components/Question/question.data';

import { setWho, setWhat, setWhen, setWhere, setNew } from './redux/question.actions';

import './App.css';

class App extends React.Component {
  state = {
    text: ''
  }

  handleSubmit = (event) => {
    const { display } = this.props;

    event.preventDefault();
    switch (display) {
      case 'who':
        return this.props.setWho(this.state.text);

      case 'what':
        return this.props.setWhat(this.state.text);

      case 'when':
        return this.props.setWhen(this.state.text);

      case 'where':
        return this.props.setWhere(this.state.text);

      case 'sentence':
        return this.props.setNew();

      default:
        return null
    }
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  renderQuestion = ({ display }) => {
    return QUESTION_DATA.filter(item => item.id === display).map(({ id, text }) => {
      return (
        <Question 
          key={id} 
          title={text.title} 
          value={this.state.text}
          placeholder={text.placeholder} 
          handleSubmit={this.handleSubmit} 
          handleChange={this.handleChange} 
        />
      )
    })
  }

  renderSentence = ({ who, what, when, where }) => {
    return (
      <Sentence text={`${who} ${what} ${when} ${where}`}/>
    )
  }

  render() {
    return (
      <div className="App">
        {
        this.props.display === 'sentence'
        ? this.renderSentence(this.props)
        : this.renderQuestion(this.props)
        }
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    display: state.question.display,
    who: state.question.who,
    what: state.question.what,
    when: state.question.when,
    where: state.question.where
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setWho: word => dispatch(setWho(word)),
    setWhat: word => dispatch(setWhat(word)),
    setWhen: word => dispatch(setWhen(word)),
    setWhere: word => dispatch(setWhere(word)),
    setNew: () => dispatch(setNew())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);