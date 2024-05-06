// @flow
import stylex from '@serpa-cloud/stylex';
import { useIntl } from 'react-intl';

import { Text, Flexbox, Padding, useInput, Input, Button } from '../shared';

import noiseUrl from '../LandingPage/assets/noise.png';

const styles = stylex.create({
  appInput: {
    flex: 1,
  },
});

export default function Form() {
  const intl = useIntl();

  const firstName = useInput({
    name: 'firstName',
    required: true,
    // eslint-disable-next-line no-useless-escape
    regexpOverwrite: /^[a-z0-9\-]*/,
    label: intl.formatMessage({ id: 'contactForm.firstName' }),
    value: '',
    errors: {
      requiredError: intl.formatMessage({ id: 'input.requiredError' }),
    },
  });

  const lastName = useInput({
    name: 'lastName',
    required: true,
    // eslint-disable-next-line no-useless-escape
    regexpOverwrite: /^[a-z0-9\-]*/,
    label: intl.formatMessage({ id: 'contactForm.lastName' }),
    value: '',
    errors: {
      requiredError: intl.formatMessage({ id: 'input.requiredError' }),
    },
  });

  const workName = useInput({
    name: 'workName',
    required: true,
    label: intl.formatMessage({ id: 'contactForm.workName' }),
    value: '',
    errors: {
      requiredError: intl.formatMessage({ id: 'input.requiredError' }),
    },
  });

  const phone = useInput({
    name: 'phone',
    type: 'number',
    required: true,
    label: intl.formatMessage({ id: 'contactForm.phone' }),
    value: '',
    errors: {
      requiredError: intl.formatMessage({ id: 'input.requiredError' }),
    },
  });

  const help = useInput({
    name: 'help',
    type: 'textarea',
    label: intl.formatMessage({ id: 'contactForm.help' }),
    value: '',
    errors: {
      requiredError: intl.formatMessage({ id: 'input.requiredError' }),
    },
  });

  const hearAbout = useInput({
    name: 'hearAbout',
    label: intl.formatMessage({ id: 'contactForm.hearAbout' }),
    value: '',
    errors: {
      requiredError: intl.formatMessage({ id: 'input.requiredError' }),
    },
  });
  return (
    <div
      style={{
        backgroundImage: `url("${noiseUrl}"), var(--neutral-gradient)`,
      }}
    >
      <Padding horizontal={32} vertical={32}>
        <Flexbox flexDirection="column" rowGap={24}>
          <Text type="h4" color="--neutral-color-800" id="contactForm.title" />
          <form>
            <Flexbox flexDirection="column" rowGap={24}>
              <Flexbox columnGap={16}>
                <div className={stylex(styles.appInput)}>
                  <Input input={firstName.input} />
                </div>
                <div className={stylex(styles.appInput)}>
                  <Input input={lastName.input} />
                </div>
              </Flexbox>

              <div className={stylex(styles.appInput)}>
                <Input input={workName.input} />
              </div>

              <div className={stylex(styles.appInput)}>
                <Input input={phone.input} />
              </div>

              <div className={stylex(styles.appInput)}>
                <Input input={help.input} />
              </div>

              <div className={stylex(styles.appInput)}>
                <Input input={hearAbout.input} />
              </div>

              <Button intlId="contactForm.submit" onClick={() => {}} />
            </Flexbox>
          </form>
        </Flexbox>
      </Padding>
    </div>
  );
}
