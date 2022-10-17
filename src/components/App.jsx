import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/statistics';
import { Box, Section, Message } from './App.styled';
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function incrementState(type) {
    switch (type) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;

      default:
        break;
    }
  }

  return (
    <Box>
      <FeedbackOptions incrementState={incrementState} />
      <Section>
        <h2>Statistics</h2>
        {good === 0 && (neutral === 0) & (bad === 0) ? (
          <Message>😔 You have not left the feedback</Message>
        ) : (
          <Statistics good={good} neutral={neutral} bad={bad} />
        )}
      </Section>
    </Box>
  );
};

export default App;
