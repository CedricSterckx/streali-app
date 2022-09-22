import React from 'react';
import toast from 'react-hot-toast';
import ToastUI from './ui/toast';

export enum ToastType {
  Default = 'default',
  Success = 'success',
  Error = 'error',
  Warning = 'warning',
}

export const iconToast = {
  [ToastType.Success]: 'check-line',
  [ToastType.Error]: 'close-circle-line',
  [ToastType.Warning]: 'error-warning-line',
  [ToastType.Default]: '',
};

export const toastr = (type: ToastType, title: string, content?: React.ReactNode) => {
  toast(<ToastUI type={type} title={title} content={content} />, {
    duration: 4000,
    position: 'top-right',
    className: '!p-0 !bg-transparent !border-0 !rounded-0 !shadow-none !text-white',
  });
};
