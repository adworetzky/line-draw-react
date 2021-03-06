import * as React from 'react';
import { Slider } from 'baseui/slider';

export default () => {
  const [value, setValue] = React.useState([10]);
  return (
    <Slider
      value={value}
      onChange={({ value }) => value && setValue(value)}
      onFinalChange={({ value }) => console.log(value)}
      max={50}
    />
  );
};
