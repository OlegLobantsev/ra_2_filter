import './toolbar-style.css';
import { ToolbarProps } from '../../module/ToolbarProps';

const Toolbar: React.FC<ToolbarProps> = ({ filters, selected, onSelectFilter }) => {
  return (
    <div className='toolbar'>
      <ul className="toolbar__list">
        {
          filters.map(filter => 
            <li
              className={
                filter === selected
                  ? "toolbar__item_active"
                  : "toolbar__item"
              }
              key={filter}
              onClick={() => onSelectFilter(filter)}
            >
              {filter}
            </li>
          )
        }
      </ul>
    </div>
  )
}

export default Toolbar