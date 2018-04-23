import React, { Component } from "react";
import axios from "axios";

import PageHeader from "../template/pageHeader";
import TodoForm from "./todoForm";
import TodoList from "./todoList";

const URL = "http://localhost:3003/api/todos";

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = { description: "", list: [] };
    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.refresh();
  }
  handleAdd() {
    const description = this.state.description;
    axios.post(URL, { description }).then(resp => this.refresh());
  }
  handleDelete(idTodo) {
    alert(idTodo);
    const key = idTodo;
    axios.delete(URL, { key }).then(resp => this.refresh());
  }
  refresh() {
    axios
      .get(`${URL}?sort=-createdAt`)
      .then(res =>
        this.setState({ ...this.state, description: "", list: res.data })
      );
  }
  handleChange(e) {
    this.setState({ ...this.state, description: e.target.value });
  }
  render() {
    return (
      <div>
        <PageHeader name="Tarefas" small="Cadastro" />
        <TodoForm
          handleChange={this.handleChange}
          handleAdd={this.handleAdd}
          description={this.state.description}
        />
        <TodoList list={this.state.list} handleDelete={this.handleDelete} />
      </div>
    );
  }
}
