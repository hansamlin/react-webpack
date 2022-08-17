import { styled } from '@stitches/react';
import PropTypes from 'prop-types';

const Container = styled('select', {
  width: '100px',
  height: '30px',
  fontSize: '1.25rem',

  '& + div': {
    height: '200px',
  },
});

const Select = ({ value, handleChange }) => (
  <Container id="select" value={value} onChange={handleChange}>
    <option value=""> </option>
    <option value="vue">Vue</option>
    <option value="react">React</option>
    <option value="angular">Angular</option>
  </Container>
);

Select.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Select;

// const Container = styled.select`
//   width: 100px;
//   height: 30px;
//   font-size: 1.25rem;
// `;
