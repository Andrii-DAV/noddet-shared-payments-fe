import { UseFormRegisterReturn } from 'react-hook-form';
import clsx from 'clsx';
import { Eye } from '../../assets/icons';
import { useMemo, useState } from 'react';

interface FormInputProps {
  error?: string;
  type: string;
  id: string;
  placeholder: string;
  label: string;
  required?: boolean;
  register: UseFormRegisterReturn<string>;
  className?: string;
}
export const FormInput = ({
  error,
  id,
  label,
  type,
  placeholder,
  register,
  required,
  className,
}: FormInputProps) => {
  const [isPassHidden, setIsPassHidden] = useState(true);

  const inputType = useMemo(() => {
    if (type !== 'password') return type;
    return isPassHidden ? type : 'text';
  }, [isPassHidden, type]);

  return (
    <div className={className || ''}>
      <label htmlFor={id}>
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      <div className="relative">
        <input
          type={inputType}
          placeholder={placeholder}
          id={id}
          {...register}
          className={clsx(
            'transition-border mt-2 border-[1px]  rounded-lg w-full pl-5 py-2 focus:outline-amber-500 pr-[40px]',
            {
              'border-red-400': error,
              'border-gray-400': !error,
            }
          )}
        />

        {type === 'password' && (
          <div
            className="w-[20px] h-[20px] right-[15px] top-[18px] cursor-pointer absolute select-none"
            onClick={() => setIsPassHidden(!isPassHidden)}
          >
            <Eye />
            <div
              className={clsx(
                'text-lg font-medium right-[6px] top-[-5px] absolute select-none transition-all',
                {
                  'scale-0': isPassHidden,
                  'scale-1': !isPassHidden,
                }
              )}
            >
              /
            </div>
          </div>
        )}
      </div>

      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};
