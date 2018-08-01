import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import RightBar from '../components/RightBar';

const mapStateToProps = state => {
  const { isVisable } = state.rightbar;
  return {
    isVisable
  };
};

const RightBarContainer = withRouter(connect(mapStateToProps)(RightBar));

export default RightBarContainer;
