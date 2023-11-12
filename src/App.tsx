import Header from './components/Header.tsx';
import goalsImg from './assets/goals.jpg';
import { useState } from 'react';
import CourseGoalList from './components/CourseGoalList.tsx';

export type CourseGoalItem = {
  title: string;
  description: string;
  id: number;
};

const App = () => {
  const [goals, setGoals] = useState<CourseGoalItem[]>([]);

  const handleAddGoal = () => {
    const newGoal: CourseGoalItem = {
      id: Math.random(),
      title: 'Learn React 18',
      description: 'Learning React 18 is better than 17.'
    };

    setGoals(prevGoals => [...prevGoals, newGoal]);
  };

  const handleDeleteGoal = (id: number) => {
    setGoals(prev => prev.filter(goal => goal.id !== id));  
  };

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "Goal's Image" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Add Goal</button>
      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal}  />
    </main>
  );
};

export default App;
