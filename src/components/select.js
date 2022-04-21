import PropTypes from "prop-types";

const Select = ({ value, handleChange }) => {
  return (
    <select id="select" value={value} onChange={handleChange}>
      <option value=""></option>
      <option value="vue">Vue</option>
      <option value="react">React</option>
      <option value="angular">Angular</option>
    </select>
  );
};

Select.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
};

export default Select;
