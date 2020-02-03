import React from "react";
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  TouchableOpacity
} from "react-native";

const TodoItem = props => {
  return (
    <FlatList
      data={props.todos}
      renderItem={TodoData => (
        <TouchableOpacity
          onPress={props.onDelete.bind(this, TodoData.item.key)}
        >
          <View style={styles.listItem}>
            <Text>{TodoData.item.value}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: "#ccc",
    borderWidth: 1,
    marginVertical: 5,
    padding: 8
  }
});

export default TodoItem;
