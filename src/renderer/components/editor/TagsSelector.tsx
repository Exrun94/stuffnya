import React from 'react'
import Select from 'react-select'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

const theme = (theme: any) => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary25: "#3f3f3f",
    primary: "#9d26ff"

    // All possible overrides
    // primary: '#2684FF',
    // primary75: '#4C9AFF',
    // primary50: '#B2D4FF',
    // primary25: '#DEEBFF',

    // danger: '#DE350B',
    // dangerLight: '#FFBDAD',

    // neutral0: 'hsl(0, 0%, 100%)',
    // neutral5: 'hsl(0, 0%, 95%)',
    // neutral10: 'hsl(0, 0%, 90%)',
    // neutral20: 'hsl(0, 0%, 80%)',
    // neutral30: 'hsl(0, 0%, 70%)',
    // neutral40: 'hsl(0, 0%, 60%)',
    // neutral50: 'hsl(0, 0%, 50%)',
    // neutral60: 'hsl(0, 0%, 40%)',
    // neutral70: 'hsl(0, 0%, 30%)',
    // neutral80: 'hsl(0, 0%, 20%)',
    // neutral90: 'hsl(0, 0%, 10%)',
  }
  // Other options you can use
  // borderRadius: 4
  // baseUnit: 4,
  // controlHeight: 38
  // menuGutter: baseUnit * 2
});

const TagsSelector = () => {
  return (
    <>
       <Select
       options={options}
       isMulti
       theme={theme}
       />
    </>
  );
};

export default TagsSelector;
