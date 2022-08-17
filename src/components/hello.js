import { styled } from '@stitches/react';
import { useState } from 'react';
import Select from './select';

const Span = styled('span', {
  textTransform: 'capitalize',
});

const Hello = () => {
  const [value, setValue] = useState('react');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <h1>
        Hello
        {' '}
        <Span>{value}</Span>
        !!!
      </h1>
      <Select value={value} handleChange={handleChange} />
    </>
  );
};

export default Hello;

// const Upper = styled.span`
//   text-transform: capitalize;
// `;
