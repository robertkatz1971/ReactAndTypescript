import { type CourseGoalItem } from '../App.tsx';
import { type FC } from 'react';
import CourseGoal from './CourseGoal.tsx';

interface CourseGoalListProps {
  goals: CourseGoalItem[];
  onDeleteGoal: (id: number) => void;
}

const CourseGoalList: FC<CourseGoalListProps> = ({ goals, onDeleteGoal }) => {
  return (
    <ul>
      {goals.map(goal => {
        return (
          <li key={goal.id}>
            <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        );
      })}
    </ul>
  );
};

export default CourseGoalList;
