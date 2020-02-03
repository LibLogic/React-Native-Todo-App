import React, { useState } from "react";
import { StyleSheet, View, Button, TextInput, Modal } from "react-native";

const TodoInput = props => {
  const [enteredTodo, setEnteredTodo] = useState("");

  const doTodoHandler = () => {
    props.addTodoHandler(enteredTodo);
    setEnteredTodo(enteredTodo => "");
  };

  const inputTodoHandler = enteredText => setEnteredTodo(enteredText);

  return (
    <Modal visible={props.isModal}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Create Todo"
          onChangeText={inputTodoHandler}
          value={enteredTodo}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
            <Button title="ADD" onPress={doTodoHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    padding: 4,
    paddingLeft: 10,
    marginBottom: 10,
    width: "80%",
    borderWidth: 1
  },
  buttonContainer: {
    flexDirection: "row",
    width: "60%",
    justifyContent: "space-around"
  },
  button: {
    width: "30%"
  }
});

export default TodoInput;
