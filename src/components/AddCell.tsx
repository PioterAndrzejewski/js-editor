import { useActions } from "../hooks/useActions";
import "./add-cell.css";

interface AddCellProps {
  id: string | null;
}

const AddCell: React.FC<AddCellProps> = ({ id }) => {
  const { insertCellBefore } = useActions();
  return (
    <div className='add-cell-wrapper'>
      <button
        onClick={() => insertCellBefore(id, "text")}
        className='button is-primary is-small'
      >
        <span className='icon'>
          <i className='fas fa-plus' />
        </span>
        <span className='text'>Add text editor</span>
      </button>
      <button
        onClick={() => insertCellBefore(id, "code")}
        className='button is-primary is-small'
      >
        <span className='icon'>
          <i className='fas fa-plus' />
        </span>
        <span className='text'>Add code editor</span>
      </button>
    </div>
  );
};

export default AddCell;
