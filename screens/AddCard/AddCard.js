import React, { Component } from 'react';
import { Alert } from 'react-native';
import { connect } from 'react-redux';
import { addCardToDeck } from '../../actions';
import Title from '../../components/Title/Title';
import { FilledButton } from '../../components/StyledButtons/StyledButtons';
import {
  Container,
  FullWidthContainer,
  InputContainer,
  StyledTextInput,
} from '../../styles/shared';

class AddCard extends Component {
  state = {
    questionInput: '',
    answerInput: '',
  };

  handleChange = (field) => (e) => {
    const userInput = e.nativeEvent.text;

    this.setState({
      [field]: userInput,
    });
  };

  handleSubmit = () => {
    const { questionInput, answerInput } = this.state;
    const { dispatch, title } = this.props;

    if (this.checkValidAnswer()) {
      dispatch(addCardToDeck(title, { question: questionInput, answer: `${answerInput}!` })).then(
        () => this.props.navigation.navigate('Deck')
      );

      this.setState({
        questionInput: '',
        answerInput: '',
      });
    }
  };

  showAlert = (errorMessage) => {
    Alert.alert('Ops, something is wrong!', errorMessage, [{ text: 'OK' }]);
  };

  checkValidAnswer = () => {
    const { questionInput, answerInput } = this.state;
    if (questionInput === '') {
      this.showAlert('Question should not be empty.');
      return false;
    } else if (answerInput === '') {
      this.showAlert('Answer should not be empty.');
      return false;
    } else if (answerInput !== 'Yes' && answerInput !== 'No') {
      this.showAlert('Answer should only be Yes or No');
      return false;
    }
    return true;
  };

  render() {
    const { questionInput, answerInput } = this.state;

    return (
      <Container>
        <FullWidthContainer>
          <Title>Enter your question and answer</Title>
          <InputContainer>
            <StyledTextInput
              onChange={this.handleChange('questionInput')}
              value={questionInput}
              placeholder="Enter the question"
            />
            <StyledTextInput
              onChange={this.handleChange('answerInput')}
              value={answerInput}
              placeholder="Enter YES or NO"
            />
            <FilledButton onPress={this.handleSubmit}>Submit</FilledButton>
          </InputContainer>
        </FullWidthContainer>
      </Container>
    );
  }
}

function mapStateToProps({}, props) {
  const { title } = props.route.params;

  return {
    title,
  };
}

export default connect(mapStateToProps)(AddCard);
