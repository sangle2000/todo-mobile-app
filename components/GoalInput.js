import { useState } from "react";

import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";

function GoalInput({ addGoalHandler, onShowModal, onHideModal, visible }) {
  const [goal, setGoal] = useState("");

  const goalInputHandler = (enteredText) => {
    setGoal(enteredText);
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          value={goal}
          onChangeText={goalInputHandler}
          style={styles.textInput}
          placeholder="Your course goal!"
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              onPress={() => {
                addGoalHandler(goal);
                setGoal("");
              }}
              title="Add Goal"
              color="#5e0acc"
            />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={onHideModal} color="#ff00f2" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#311b6b",
  },
  textInput: {
    borderWidth: 1,
    backgroundColor: "#cccccc",
    borderRadius: 12,
    width: "90%",
    padding: 16,
    color: "#ffffff",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 8,
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },
});
