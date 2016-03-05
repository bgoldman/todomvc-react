import _ from 'lodash';
import React, { Component } from 'react';

export default class TodoListCount extends Component {
  numActiveTodos() {
    const { todos } = this.props;

    return _.reject(todos, todo => todo.completed).length;
  }

  render() {
    const numActiveTodos = this.numActiveTodos();

    return (
      <span className="todo-count">
        <strong>{numActiveTodos}</strong>
        <span> </span>
        item{numActiveTodos !== 1 && 's'} left
      </span>
    );
  }
}
