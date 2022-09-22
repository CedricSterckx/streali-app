import { iconToast, ToastType } from '../toast';

export interface ToastProps {
  type: ToastType;
  title?: string;
  content?: React.ReactNode;
  icon?: string;
}

export function ToastUI(props: ToastProps) {
  const { type, title, content, icon } = props;

  const toastType = {
    [ToastType.Success]: 'border-success-500',
    [ToastType.Error]: 'border-error-500',
    [ToastType.Warning]: 'border-warning-500',
    [ToastType.Default]: 'border-dark-300',
  };

  const displayIcon = () => {
    if (icon) {
      return (
        <div className="w-9 h-9 rounded bg-dark-300 flex flex-shrink-0 items-center justify-center">
          <i className={`ri-${icon}`} role="img"></i>
        </div>
      );
    }

    if (type !== ToastType.Default) {
      return (
        <div
          className={`w-9 h-9 rounded flex flex-shrink-0 items-center justify-center ${
            type === ToastType.Success ? 'bg-success-100' : ''
          } ${type === ToastType.Error ? 'bg-error-100' : ''} ${
            type === ToastType.Warning ? 'bg-warning-100' : ''
          }`}>
          <i className={`ri-${iconToast[type]} text-dark-500 text-lg`} role="img"></i>
        </div>
      );
    }

    return null;
  };

  return (
    <div
      className={`p-3 border-2 ${toastType[type]} bg-dark-500 flex gap-3 items-start w-[300px] rounded-md`}>
      {displayIcon()}
      <div>
        <p className="leading-none mb-0.5 font-bold">{title}</p>
        <div className="text-sm">{content}</div>
      </div>
    </div>
  );
}

export default ToastUI;
