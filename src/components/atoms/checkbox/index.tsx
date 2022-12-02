import './checkbox.sass'

const Checkbox = ({ label, defaultValue, onChange, deleteTodo }: CheckboxProps): JSX.Element => {

return (
    <form className='todoItem'>
      <input type="checkbox" checked={defaultValue} onChange={onChange} />
      <span onClick={deleteTodo}>{label}</span>
    </form>
  );
};

export default Checkbox