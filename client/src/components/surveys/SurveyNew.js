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

/**
 * Added surveyForm here to clear the values of SurveyForm component:
 * Values will be cleared when the user is no longer creating or
 * reviewing the form. This is possible because SurveyNew is a parent
 * of both SurveyForm and SurveyFormReview.
 */
export default reduxForm({
  form: 'surveyForm',
})(SurveyNew);
