import Header from './components/Header.tsx';
import goalsImg from './assets/goals.jpg';
import { useState } from 'react';
import CourseGoalList from './components/CourseGoalList.tsx';
import NewGoal from './components/NewGoal.tsx';

export type CourseGoalItem = {
  title: string;
  description: string;
  id: number;
};

const App = () => {
  const [goals, setGoals] = useState<CourseGoalItem[]>([]);

  const handleAddGoal = (newGoal: CourseGoalItem) => {
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
      <NewGoal onAddGoal={handleAddGoal} />
      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal}  />
    </main>
  );
};

export default App;
