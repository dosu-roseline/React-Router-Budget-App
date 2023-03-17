import { redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import { deleteItem } from '../helpers';

export async function logoutAction() {
  // delete the user
  deleteItem({
    key: 'userName',
  });
  toast.success("You've deleted your account!");
  // return redirect
  return redirect('/');
}
