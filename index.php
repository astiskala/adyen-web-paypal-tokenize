<!DOCTYPE html>

<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <link rel="stylesheet" href="adyen/adyen.css">
</head>

<body>
    <script src="adyen/adyen.js"></script>
    <div id="paypal-container"></div>
  <script>
    const getPaymentMethods = () => fetch('paymentmethods_call.php').then((response) => response.json());

    const makePayment = (data) => fetch('payments_call.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((response) => response.json());

    const submitAdditionalDetails = (data) => fetch('paymentsdetails_call.php', {
      method: 'POST',
      headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      }).then((response) => response.json());

    let paypalComponent;
    const loadComponent = function loadComponent() {
      getPaymentMethods().then((paymentMethodsResponse) => {
        console.log('/paymentMethods response', paymentMethodsResponse);

        const paypalConfig = {
          amount: { currency: 'AUD', value: 0 },
          countryCode: 'AU',
        };

        const checkout = new AdyenCheckout({
          environment: 'test',
          clientKey: 'test_73KJZLA5WZFNJHIHSB2YCII2ZA6CO27V',
          paymentMethodsResponse: paymentMethodsResponse,
          locale: 'en-US',
        });

        paypalComponent = checkout
          .create('paypal', {
            ...paypalConfig,
            onSubmit: (state, component) => {
              console.log('onSubmit state', state.data);
              makePayment(state.data).then((response) => {
                console.log('/payments response', response);
                if (response.action) {
                  paypalComponent.handleAction(response.action);
                } else {
                  component.setStatus('ready');
                }
              })
              .catch((error) => {
                throw Error(error);
              });
            },
            onAdditionalDetails: (state, component) => {
              console.log('onAdditionalDetails state', state.data);
              submitAdditionalDetails(state.data).then((response) => {
                console.log('/payments/details response', response);
                if (response.action) {
                  paypalComponent.handleAction(response.action);
                } else {
                  component.setStatus('ready');
                }
              });
            },
            onCancel: (data, component) => {
              component.setStatus('ready');
            },
            onError: (error, component) => {
              component.setStatus('error');
            },
          })
          .mount('#paypal-container');
      });
    };

    loadComponent();
  </script>
</body>
