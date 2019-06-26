/** libs */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
/** constants */
/** actions */
/** apis */
/** logics */
/** utils */
/** modules */
/** components */
import Home from './home.jsx';
// import SpinnerPage from '../components/spinner/spinnerPage.jsx';
/** containers */
/** styles */
/** files */
/** strings */

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {language} = this.props;
    return(
      <div className="home-container">
        <Home
          language={language}
        />
      </div>
    );
  }
}

HomeContainer.propTypes = {
  language: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  language: state.language,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);