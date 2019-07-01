/** libs */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
/** constants */
/** actions */
import {
  handleOnChangeWebsiteName,
  handleOnChangeWebsiteDomain,
  nextToStep2,
} from './newWebsiteActions';
/** apis */
/** logics */
/** utils */
/** modules */
/** components */
import Spinner from '../../components/spinner/spinner.jsx';
import NewWebsite from './newWebsite.jsx';
/** containers */
/** styles */
/** files */
/** strings */

class NewWebsiteContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      language, 
      isFetching, 
      user, 
      step,
      stepForm1,
      stepForm2,
      stepForm3,
      stepForm4,
      handleOnChangeWebsiteName,
      handleOnChangeWebsiteDomain,
      nextToStep2,
    } = this.props;

    return(
      <div className="new-website-container">
        <Spinner
          isFetching={isFetching}
        />
        <NewWebsite
          language={language}
          user={user}
          step={step}
          stepForm1={stepForm1}
          stepForm2={stepForm2}
          stepForm3={stepForm3}
          stepForm4={stepForm4}
          handleOnChangeWebsiteName={handleOnChangeWebsiteName}
          handleOnChangeWebsiteDomain={handleOnChangeWebsiteDomain}
          nextToStep2={nextToStep2}
        />
      </div>
    );
  }
}

NewWebsiteContainer.proptypes = {
  language: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
  step: PropTypes.number.isRequired,
  stepForm1: PropTypes.object.isRequired,
  stepForm2: PropTypes.object.isRequired,
  stepForm3: PropTypes.object.isRequired,
  stepForm4: PropTypes.object.isRequired,
  handleOnChangeWebsiteName: PropTypes.func.isRequired,
  handleOnChangeWebsiteDomain: PropTypes.func.isRequired,
  nextToStep2: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  language: state.language,
  isFetching: state.pages.newWebsite.isFetching,
  user: state.user,
  step: state.pages.newWebsite.step,
  stepForm1: state.pages.newWebsite.stepForm1,
  stepForm2: state.pages.newWebsite.stepForm2,
  stepForm3: state.pages.newWebsite.stepForm3,
  stepForm4: state.pages.newWebsite.stepForm4,
});

const mapDispatchToProps = (dispatch) => ({
  handleOnChangeWebsiteName: (websiteName) => dispatch(handleOnChangeWebsiteName(websiteName)),
  handleOnChangeWebsiteDomain: (websiteDomain) => dispatch(handleOnChangeWebsiteDomain(websiteDomain)),
  nextToStep2: () => dispatch(nextToStep2()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewWebsiteContainer);