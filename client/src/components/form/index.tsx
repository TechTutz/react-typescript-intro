import FormRow from './row';
import Button from './button';
import FormTitle from './title';

import './styles.css';

const Form = () => {
  return (
    <form className="form">
      <FormTitle label="Enter Information" />
      <FormRow label="Full Name" handleChange={() => console.log('hello')} />
      <FormRow label="Height" handleChange={() => console.log('hello')} />
      <FormRow label="Age" handleChange={() => console.log('hello')} />
      <Button label="submit" handleClick={() => console.log('hello')} />
    </form>
  );
};

export default Form;
