import React, { Component } from 'react'

class QuizQuestionButton extends Component {

render() {
  return (
    <main>
    <li><button>{this.props.button_text}</button></li>
  </main>
  )
}

}

export default QuizQuestionButton