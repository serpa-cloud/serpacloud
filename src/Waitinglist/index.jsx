// @flow
import React, { useState } from 'react';
import Text from '../shared/Text';
import Button from '../shared/Button';
import { Flexbox, Input, Padding, useInput } from '../shared';
import styles from './Waitinglist.module.scss';
import Modal from '../shared/Modal'; // Importa el componente Modal

const Waitinglist = () => {
  const emailInput = useInput({
    name: 'email',
    type: 'email',
    label: 'Enter your email',
    required: true,
    errors: {
      requiredError: 'This field is required',
    },
  });

  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [betaLoading, setBetaLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const urlParams = new URLSearchParams(window.location.search);
    const refererDescription = urlParams.get('referer') || '';

    try {
      if (!emailInput.validate()) {
        const response = await fetch('/api/waitinglist', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: emailInput.input.value,
            refererDescription,
          }),
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        setShowModal(true); // Muestra el modal al completar
        emailInput.setData({ value: '', displayValue: '', error: '' }); // Limpia el campo
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error signing up. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleBetaDownload = async () => {
    if (emailInput.validate()) {
      return;
    }

    setBetaLoading(true);
    try {
      const response = await fetch('/api/billings/stripe/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: emailInput.input.value,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const { url } = await response.json();
      window.location.href = url;
    } catch (error) {
      console.error('Error creating checkout session:', error);
      alert('There was an error processing your request. Please try again.');
    } finally {
      setBetaLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.titleContainer}>
          <Text type="h4">Request access to our Waiting List</Text>
        </div>
        <div className={styles.descriptionContainer}>
          <Text type="bd">
            Sign up to be notified when we launch. Each week, we send app download links to a new
            group of users.
          </Text>
        </div>
        <form onSubmit={handleSubmit}>
          <Padding bottom={24}>
            <Input input={emailInput.input} />
          </Padding>
          <div className={styles.buttonContainer}>
            <Button
              buttonType="primary"
              onClick={handleSubmit}
              disabled={loading}
              loading={loading}
            >
              Join the Waiting List
            </Button>
            <Button
              buttonType="secondary"
              onClick={handleBetaDownload}
              disabled={betaLoading}
              loading={betaLoading}
            >
              Download the beta now
            </Button>
            <Text type="s1r" className={styles.note}>
              * Pay $20 for early access and enjoy all features during the beta period.
            </Text>
          </div>
        </form>
      </div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <Padding bottom={16}>
            <Text type="h5">Registration Successful</Text>
          </Padding>
          <Padding bottom={24}>
            <Text type="bd">You have been added to the waiting list. Thank you!</Text>
          </Padding>
        </Modal>
      )}
    </div>
  );
};

export default Waitinglist;
