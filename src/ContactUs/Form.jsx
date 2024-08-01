// @flow
import { useCallback } from 'react';
import { useIntl } from 'react-intl';
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
  const intl = useIntl();

  const name = useInput({
    name: 'name',
    required: true,
    label: intl.formatMessage({ id: 'contactForm.firstName' }),
    value: '',
    errors: {
      requiredError: intl.formatMessage({ id: 'input.requiredError' }),
    },
  });

  const lastName = useInput({
    name: 'lastName',
    required: true,
    label: intl.formatMessage({ id: 'contactForm.lastName' }),
    value: '',
    errors: {
      requiredError: intl.formatMessage({ id: 'input.requiredError' }),
    },
  });

  const email = useInput({
    name: 'email',
    // eslint-disable-next-line no-useless-escape
    regexp: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/,
    validateEvent: 'blur',
    required: true,
    label: intl.formatMessage({ id: 'contactForm.workName' }),
    value: '',
    errors: {
      requiredError: intl.formatMessage({ id: 'input.requiredError' }),
      regexpError: intl.formatMessage({ id: 'input.useValidEmail' }),
      defaultError: 'Please insert a valid email',
    },
  });

  const phone = useInput({
    name: 'phone',
    required: true,
    label: intl.formatMessage({ id: 'contactForm.phone' }),
    value: '',
    errors: {
      requiredError: intl.formatMessage({ id: 'input.requiredError' }),
    },
  });

  const helpDescription = useInput({
    name: 'helpDescription',
    label: intl.formatMessage({ id: 'contactForm.help' }),
    value: '',
    errors: {
      requiredError: intl.formatMessage({ id: 'input.requiredError' }),
    },
  });

  const refererDescription = useInput({
    name: 'refererDescription',
    label: intl.formatMessage({ id: 'contactForm.hearAbout' }),
    value: '',
    errors: {
      requiredError: intl.formatMessage({ id: 'input.requiredError' }),
    },
  });

  const handleOnSubmit = useCallback(
    (e) => {
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
        fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }).then(() => {
          // eslint-disable-next-line no-alert
          alert('Form sent with success');
        });
      }
    },
    [email, helpDescription, lastName, name, phone, refererDescription],
  );

  return (
    <div className={stylex(styles.card)}>
      <Padding horizontal={16} vertical={24}>
        <Flexbox flexDirection="column" rowGap={24}>
          <Text type="h5" color="--neutral-color-800" id="contactForm.title" />
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

              <Button intlId="contactForm.submit" onClick={handleOnSubmit} />
            </Flexbox>
          </form>
        </Flexbox>
      </Padding>
    </div>
  );
}
