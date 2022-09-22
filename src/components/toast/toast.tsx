import { toastr, ToastType } from '../../utils/toast/toast';
import { Button } from '../button/button';

export interface ToastProps {
  type?: ToastType;
  title: string;
  content?: React.ReactNode;
}

export const Toast = (props: ToastProps) => {
  const { type = ToastType.Default, title, content } = props;

  const display = () => toastr(type, title, content);

  return <Button onClick={display}>Display toast</Button>;
};
