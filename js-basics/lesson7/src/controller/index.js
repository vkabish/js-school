import { getGithubUser } from '../models/user';
import User from '../components/User';

export async function renderUserData(rootEl) {
  const userData = await getGithubUser();
  const rowHtml = User(userData);

  rootEl.innerHTML = rowHtml;
}
