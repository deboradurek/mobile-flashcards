import React, { Component } from 'react';
import { connect } from 'react-redux';
import Title from '../../components/Title';
import { FilledButton } from '../../components/StyledButtons';
import {
  Container,
  FullWidthContainer,
  InputContainer,
  StyledTextInput,
} from '../../styles/shared';
import { addCardToDeck } from '../../actions';

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

    dispatch(addCardToDeck(title, { question: questionInput, answer: answerInput })).then(() =>
      this.props.navigation.navigate('Deck')
    );

    this.setState({
      questionInput: '',
      answerInput: '',
    });
  };

  render() {
    const { questionInput, answerInput } = this.state;

    return (
      <Container>
        <FullWidthContainer>
          <Title>What would you like to learn?</Title>
          <InputContainer>
            <StyledTextInput
              onChange={this.handleChange('questionInput')}
              value={questionInput}
              placeholder="Enter the question"
            />
            <StyledTextInput
              onChange={this.handleChange('answerInput')}
              value={answerInput}
              placeholder="Enter the answer"
            />
            <FilledButton
              onPress={this.handleSubmit}
              disabled={questionInput === '' || answerInput === ''}
            >
              Submit
            </FilledButton>
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
