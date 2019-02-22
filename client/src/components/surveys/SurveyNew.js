import React, { Component } from 'react';
import ServeyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';
import { reduxForm } from 'redux-form';

class SurveyNew extends Component {
  state = { showformReview: false };

  renderContent() {
    if (this.state.showformReview) {
      return <SurveyFormReview onCancel={() => this.setState({ showformReview: false })} />;
    }
    return <ServeyForm onSurveyFormSubmit={() => this.setState({ showformReview: true })} />;
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default SurveyNew;
