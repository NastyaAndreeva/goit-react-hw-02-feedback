import { FeedbackList, FeedbackButton } from './FeedbackOptionsStyled';
import { Section } from 'components/ui/Section';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <Section title="Please, leave feedback">
    <FeedbackList>
      <li>
        <FeedbackButton
          type="button"
          onClick={() => onLeaveFeedback(options.good)}
        >
          Good
        </FeedbackButton>
      </li>
      <li>
        <FeedbackButton
          type="button"
          onClick={() => onLeaveFeedback(options.neutral)}
        >
          Neutral
        </FeedbackButton>
      </li>
      <li>
        <FeedbackButton
          type="button"
          onClick={() => onLeaveFeedback(options.bad)}
        >
          Bad
        </FeedbackButton>
      </li>
    </FeedbackList>
  </Section>
);
