import { FC, MouseEventHandler } from 'react';

import './styles.css';

interface ButtonProps {
  label: string;
  size?: string | undefined;
  handleClick: MouseEventHandler<HTMLButtonElement>;
}

const Button: FC<ButtonProps> = ({ label, size, handleClick }: ButtonProps) => {
  return (
    <button
      onClick={(e) => handleClick(e)}
      className={size?.length ? `${size}-button` : 'button'}
    >
      {label}
    </button>
  );
};

export default Button;
