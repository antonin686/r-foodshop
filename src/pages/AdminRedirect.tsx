import { hostAdmin } from '../helpers/apiLinks';

function AdminRedirect() {
  window.location.href = hostAdmin;
  return null;
}

export default AdminRedirect