import { useActions } from "../hooks/useActions";
import "./action-bar.css";

interface ActionBarProps {
  id: string;
}

const ActionBar: React.FC<ActionBarProps> = ({ id }) => {
  const { moveCell, deleteCell } = useActions();
  return (
    <div className='action-bar'>
      <button
        className='button is-primary is-small'
        onClick={() => moveCell(id, "up")}
        title='move cell up'
      >
        <span className='icon'>
          <i className='fas fa-arrow-up' />
        </span>
      </button>
      <button
        onClick={() => moveCell(id, "down")}
        className='button is-primary is-small'
        title='move cell down'
      >
        <span className='icon'>
          <i className='fas fa-arrow-down' />
        </span>
      </button>
      <button
        onClick={() => deleteCell(id)}
        className='button is-primary is-small'
        title='delete cell'
      >
        <span className='icon'>
          <i className='fas fa-times' />
        </span>
      </button>
    </div>
  );
};

export default ActionBar;
