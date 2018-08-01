import { connect } from 'react-redux';
import { toggleBar } from '../actions';
import { withRouter } from 'react-router';

import Footer from '../components/Footer';

const mapStateToProps = state => {
  const { isVisable } = state.rightbar;
  return {
    isVisable
  };
};

const mapDispatchToProps = dispatch => ({
  toggleBar: isVisable => dispatch(toggleBar(isVisable))
});

const FooterContainer = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Footer)
);

export default FooterContainer;
