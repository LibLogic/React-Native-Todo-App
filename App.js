import React, { useState } from "react";
import { StyleSheet, View, Button } from "react-native";
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";

export default function App() {
  const [todos, setTodos] = useState([]);

  const [isModal, setIsModal] = useState(false);

  const addTodoHandler = todoTitle => {
    setTodos(todos => [
      ...todos,
      { key: Math.random().toString(), value: todoTitle }
    ]);
    setIsModal(isModal => false);
  };

  const onDelete = todoId => {
    setTodos(todos => {
      return todos.filter(todo => todo.key !== todoId);
    });
  };

  const onCancel = () => {
    setIsModal(isModal => false);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.addButton}>
        <Button
          style={styles.addButton}
          title="Add New Todo"
          onPress={() => setIsModal(isModal => true)}
        />
      </View>
      <TodoInput
        addTodoHandler={addTodoHandler}
        isModal={isModal}
        onCancel={onCancel}
      />
      <TodoItem todos={todos} onDelete={onDelete} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  addButton: {
    marginBottom: 10
  }
});
