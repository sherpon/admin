/** libs */
// import axios from './mockAxios';
/** constants */
/** actions */
/** apis */
/** logics */
/** utils */
import history from '../../modules/history';
/** files */

export const backToDashboard = () => (dispatch, getState) => {
  const filename = getState().pages.editCode.file.filename.split('.').join('-dot-');
  history.push(`/website/pages/edit-attributes/${filename}`);
};