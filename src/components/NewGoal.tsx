import { type FC, useRef, type FormEvent } from 'react';
import { CourseGoalItem } from '../App.tsx';

type NewGoalProps = {
  onAddGoal: (newGoal: CourseGoalItem) => void;
};

const NewGoal: FC<NewGoalProps> = ({ onAddGoal }) => {
  const title = useRef<HTMLInputElement>(null);
  const description = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onAddGoal({ id: Math.random(), title: title.current!.value, description: description.current!.value });

    event.currentTarget.reset();
    title.current!.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor='title'>Your goal</label>
        <input id='title' type='text' ref={title} />
      </p>
      <p>
        <label htmlFor='description'>Short summary</label>
        <input id='description' type='text' ref={description} />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
};

export default NewGoal;
