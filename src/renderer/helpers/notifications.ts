import { toast } from 'react-toastify';

export const dispatchNotification = () => {

  const dispatchSuccess = (msg: string) => {
    toast.success(msg, {
       position: toast.POSITION.TOP_CENTER,
       autoClose: 2000,
       theme: 'dark',
      });
  }

  const dispatchWarning = (msg: string) => {
    toast.warning(msg, {
       position: toast.POSITION.TOP_CENTER,
       autoClose: 4000,
       theme: 'dark',
      });
  }

  const dispatchError = (msg: string | Error, icon: string) => {
    toast.error(msg, {
       position: toast.POSITION.TOP_CENTER,
       autoClose: 8000,
       theme: 'dark',
       icon: icon,
      });
  }

  const dispatchInfo = (msg: string) => {
    toast.info(msg, {
       position: toast.POSITION.TOP_CENTER,
       autoClose: 4000,
       theme: 'dark',
      });
  }

  return { dispatchSuccess, dispatchWarning, dispatchError, dispatchInfo }
}
