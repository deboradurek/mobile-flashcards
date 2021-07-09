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
            <FilledButton>Submit</FilledButton>
          </InputContainer>
        </FullWidthContainer>
      </Container>
    );
  }
}

function mapStateToProps({ decks }, props) {
  const { title } = props.route.params;

  return {
    card: decks[title].questions,
    title,
  };
}

export default connect(mapStateToProps)(AddCard);
