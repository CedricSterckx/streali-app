import React, { useState } from 'react';
import { Label } from '../label/label';

export enum TextareaState {
  Normal = 'normal',
  Error = 'error',
  Success = 'success',
}

export interface TextareaProps extends React.ComponentPropsWithoutRef<'textarea'> {
  label?: string;
  className?: string;
  labelClassName?: string;
  containerClassName?: string;
  state?: TextareaState;
  errorMessage?: string;
  onChange?: (event: React.ChangeEvent) => void;
}

export const Textarea = (props: TextareaProps) => {
  const {
    label,
    labelClassName = '',
    className = '',
    containerClassName = '',
    state = TextareaState.Normal,
    errorMessage,
    onChange,
    ...textareaProps
  } = props;

  const [val, setVal] = useState<string>('');

  const stateClassName = {
    [TextareaState.Normal]: '',
    [TextareaState.Error]: '!border-error-500',
    [TextareaState.Success]: '!border-success-500',
  };

  const haveValueClassName =
    val.length > 0 && state === TextareaState.Normal ? `!border-primary-300` : '';

  const disabledClassName = textareaProps.disabled ? '!bg-dark-400' : '';

  const onChangeValue = (event: React.ChangeEvent) => {
    const { value } = event.target as HTMLTextAreaElement;
    setVal(value);
    onChange && onChange(event);
  };

  return (
    <label className={containerClassName}>
      {label && <Label className={labelClassName}>{label}</Label>}
      <textarea
        className={`h-40 w-full border-2 border-transparent text-sm text-white bg-dark-400 rounded-md p-4 outline-none focus:border-primary-300 transition ${stateClassName[state]} ${haveValueClassName} ${disabledClassName} ${className}`}
        data-testid="input"
        onChange={onChangeValue}
        {...textareaProps}></textarea>
      {errorMessage && (
        <span className="text-xs text-error-500 mt-1.5" data-testid="input-errormessage">
          {errorMessage}
        </span>
      )}
    </label>
  );
};
