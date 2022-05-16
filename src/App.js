import React, { Component } from 'react';
import { DateTime } from 'luxon';
/*
 * Button щтримує функцію changeMessage (імя пропа),
 * що вткликається  при дії onClick
 */
const Button = ({ changeMessage, label }) => (
  <button type="button" onClick={changeMessage}>
    {label}
  </button>
);

export default class App extends Component {
  state = {
    message: DateTime.now().toJSDate().toString(),
  };

  // Метод який будем передавати в Button для виклику при клику
  updateMessage = evt => {
    console.log(evt); // Доступний обєкт eventa

    this.setState({
      message: DateTime.now().toJSDate().toString(),
    });
  };

  render() {
    return (
      <>
        <span>{this.state.message}</span>
        <Button label="Change message" changeMessage={this.updateMessage} />
      </>
    );
  }
}
