import clsx from 'clsx';
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  text: string;
  variant?: 'outlined' | 'filled';
}
export const Button = ({ text, variant = 'filled', ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={clsx(props.className || '', {
        'w-full mt-5 px-16 py-2 rounded-md bg-green-500 transition-all hover:bg-green-400 text-white font-bold text-md uppercase':
          variant === 'filled',
        'w-full mt-5 px-16 py-2 rounded-md': variant === 'outlined',
      })}
    >
      {text}
    </button>
  );
};
