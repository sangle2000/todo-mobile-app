import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [goal, setGoal] = useState('');
  const [goals, setGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setGoal(enteredText);
  }

  const addGoalHandler = () => {
    if (goal.trim().length === 0) {
      return;
    }
    setGoals((currentGoals) => [...currentGoals, goal]);
    setGoal('');
  }

  const deleteGoalHandler = (goalIndex) => {
    setGoals((currentGoals) => {
      return currentGoals.filter((_, index) => index !== goalIndex);
    });
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput value={goal} onChangeText={goalInputHandler} style={styles.textInput} placeholder='Your course goal!' />
        <Button onPress={addGoalHandler} title='Add Goal' />
      </View>
      <View style={styles.goalsContainer}>
        {
          goals.length > 0 ? goals.map((g, index) => <Text onPress={() => deleteGoalHandler(index)} key={index}>{g}</Text>) : <Text>No goals added yet!</Text>
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 3,
  }
});
