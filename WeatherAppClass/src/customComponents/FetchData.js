import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather, fetchClimate} from '../redux/action';

class FetchData extends Component {
  componentDidMount() {
    const {cityName, dataSelector, fetchDataAction} = this.props;
    this.props.fetchData(cityName, dataSelector, fetchDataAction);
  }

  render() {
    return null; // No need to render anything for this component
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      fetchData: (cityName, dataSelector, fetchDataAction) => {
        return dispatch => {
          const dataSelectorFunc = dataSelector(dispatch.getState());
          if (!dataSelectorFunc) {
            return dispatch(fetchDataAction(cityName));
          }
        };
      },
    },
    dispatch,
  );
};

export default connect(null, mapDispatchToProps)(FetchData);
