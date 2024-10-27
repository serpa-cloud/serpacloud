// @flow
import { useCallback, useState } from 'react';
import stylex from '@serpa-cloud/stylex';

import { Text, Flexbox, Padding, useInput, Input, Button, validateData } from '../shared';

const styles = stylex.create({
  appInput: {
    flex: 1,
  },
  card: {
    background: 'white',
    boxShadow: 'var(--shadow-1)',
    borderTop: '4px solid var(--primary-color-1)',
  },
});

export default function Form(): React$Node {
  const [pending, setPending] = useState(false);

  const name = useInput({
    name: 'name',
    required: true,
    label: 'First Name',
    value: '',
    errors: {
      requiredError: 'This field is required',
    },
  });

  const lastName = useInput({
    name: 'lastName',
    required: true,
    label: 'Last Name',
    value: '',
    errors: {
      requiredError: 'This field is required',
    },
  });

  const email = useInput({
    name: 'email',
    // eslint-disable-next-line no-useless-escape
    regexp: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/,
    validateEvent: 'blur',
    required: true,
    label: 'Work Email',
    value: '',
    errors: {
      requiredError: 'This field is required',
      regexpError: 'Please enter a valid email',
      defaultError: 'Please insert a valid email',
    },
  });

  const phone = useInput({
    name: 'phone',
    required: true,
    label: 'Phone',
    value: '',
    errors: {
      requiredError: 'This field is required',
    },
  });

  const helpDescription = useInput({
    name: 'helpDescription',
    label: 'How can we help you?',
    value: '',
    errors: {
      requiredError: 'This field is required',
    },
  });

  const refererDescription = useInput({
    name: 'refererDescription',
    label: 'How did you hear about us?',
    value: '',
    errors: {
      requiredError: 'This field is required',
    },
  });

  const handleOnSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      const { errors, data } = validateData([
        name,
        lastName,
        email,
        phone,
        helpDescription,
        refererDescription,
      ]);

      if (!errors) {
        setPending(true);
        try {
          await fetch('/api/contact', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          });
          // eslint-disable-next-line no-alert
          alert('Form sent with success');
        } catch (error) {
          console.error('Error sending form:', error);
        } finally {
          setPending(false);
        }
      }
    },
    [email, helpDescription, lastName, name, phone, refererDescription],
  );

  return (
    <div className={stylex(styles.card)}>
      <Padding horizontal={16} vertical={24}>
        <Flexbox flexDirection="column" rowGap={24}>
          <Text type="h5" color="--neutral-color-800">
            Contact Us
          </Text>
          <form onSubmit={handleOnSubmit} autoComplete="nope">
            <input type="submit" style={{ display: 'none' }} />
            <Flexbox flexDirection="column" rowGap={24}>
              <div className={stylex(styles.appInput)}>
                <Input input={name.input} />
              </div>

              <div className={stylex(styles.appInput)}>
                <Input input={lastName.input} />
              </div>

              <div className={stylex(styles.appInput)}>
                <Input input={email.input} />
              </div>

              <div className={stylex(styles.appInput)}>
                <Input input={phone.input} />
              </div>

              <div className={stylex(styles.appInput)}>
                <Input input={helpDescription.input} />
              </div>

              <div className={stylex(styles.appInput)}>
                <Input input={refererDescription.input} />
              </div>

              <Button onClick={handleOnSubmit} disabled={pending} loading={pending}>
                Submit
              </Button>
            </Flexbox>
          </form>
        </Flexbox>
      </Padding>
    </div>
  );
}
