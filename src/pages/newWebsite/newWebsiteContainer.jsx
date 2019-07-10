/** libs */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
/** constants */
/** actions */
import {
  handleChangeStep,
  handleOnChangeWebsiteName,
  handleOnChangeWebsiteDomain,
  handleOnChoosePlan,
  handleOnChangeUserForm,
  handleOnChangePaymentForm,
  handleOnClickPay,
} from './newWebsiteActions';
/** apis */
/** logics */
import paymentProcessorInclude from '../../payments/paymentProcessorInclude';
import paymentProcessorInit from '../../payments/paymentProcessorInit';
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
    paymentProcessorInclude();
    paymentProcessorInit();
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
      handleChangeStep,
      handleOnChangeWebsiteName,
      handleOnChangeWebsiteDomain,
      handleOnChoosePlan,
      handleOnChangeUserForm,
      handleOnChangePaymentForm,
      handleOnClickPay,
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
          handleChangeStep={handleChangeStep}
          handleOnChangeWebsiteName={handleOnChangeWebsiteName}
          handleOnChangeWebsiteDomain={handleOnChangeWebsiteDomain}
          handleOnChoosePlan={handleOnChoosePlan}
          handleOnChangeUserForm={handleOnChangeUserForm}
          handleOnChangePaymentForm={handleOnChangePaymentForm}
          handleOnClickPay={handleOnClickPay}
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
  handleChangeStep: PropTypes.func.isRequired,
  handleOnChangeWebsiteName: PropTypes.func.isRequired,
  handleOnChangeWebsiteDomain: PropTypes.func.isRequired,
  handleOnChoosePlan: PropTypes.func.isRequired,
  handleOnChangeUserForm: PropTypes.func.isRequired,
  handleOnChangePaymentForm: PropTypes.func.isRequired,
  handleOnClickPay: PropTypes.func.isRequired,
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
  handleChangeStep: (newStep) => dispatch(handleChangeStep(newStep)),
  handleOnChangeWebsiteName: (websiteName) => dispatch(handleOnChangeWebsiteName(websiteName)),
  handleOnChangeWebsiteDomain: (websiteDomain) => dispatch(handleOnChangeWebsiteDomain(websiteDomain)),
  handleOnChoosePlan: (plan) => dispatch(handleOnChoosePlan(plan)),
  handleOnChangeUserForm: (newForm) => dispatch(handleOnChangeUserForm(newForm)),
  handleOnChangePaymentForm: (newForm) => dispatch(handleOnChangePaymentForm(newForm)),
  handleOnClickPay: () => dispatch(handleOnClickPay()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewWebsiteContainer);