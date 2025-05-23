import { StyleSheet, View, FlatList, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const addGoalHandler = (goal) => {
    if (goal.trim().length === 0) {
      return;
    }
    setGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), text: goal },
    ]);
    setIsModalVisible(false);
  };

  const deleteGoalHandler = (goalID) => {
    setGoals((currentGoals) => {
      return currentGoals.filter((item) => item.id !== goalID);
    });
  };

  const showModalHandler = () => {
    setIsModalVisible(true);
  };

  const hideModalHandler = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          onPress={showModalHandler}
          color="#a065ec"
        />
        <GoalInput
          addGoalHandler={addGoalHandler}
          onShowModal={showModalHandler}
          onHideModal={hideModalHandler}
          visible={isModalVisible}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={goals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  id={itemData.item.id}
                  text={itemData.item.text}
                  deleteGoalHandler={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  goalsContainer: {
    flex: 5,
  },
});
