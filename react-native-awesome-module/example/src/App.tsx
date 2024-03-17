import * as React from 'react';
import { FormBuilder } from 'rnkt';

type Page = {
  pageIcons?: any;
  title: string;
  content: {
    inputGroup?: string[];
    radioGroup?: string[];
  };
};

const App = () => {
  const [data, setData] = React.useState();

  console.log(data);

  const pageIcons = {
    left: () => {
      return <Text>hi</Text>;
    },
    right: () => {
      return <Text>hi</Text>;
    },
  };

  const model = {
    email: {
      required: true,
      label: 'Email',
      placeholder: 'Enter your email',
      autoCapitalize: 'none',
      autoCorrect: false,
      keyboardType: 'email-address',
    },
    username: {
      required: true,
      label: 'Username',
      placeholder: 'Enter your username',
    },
    password: {
      required: true,
      label: 'Password',
      placeholder: 'Enter your password',
    },
    confirmPassword: {
      required: true,
      label: 'Confirm Password',
      placeholder: 'Re-enter your password',
    },
    phoneNumber: {
      required: false,
      label: 'Phone Number',
      placeholder: 'Enter your phone number',
    },
    address: {
      required: false,
      label: 'Address',
      placeholder: 'Enter your address',
    },
    city: {
      required: false,
      label: 'City',
      placeholder: 'Enter your city',
    },
    country: {
      required: false,
      label: 'Country',
      placeholder: 'Enter your country',
    },
    postalCode: {
      required: false,
      label: 'Postal Code',
      placeholder: 'Enter your postal code',
    },
    dateOfBirth: {
      required: false,
      label: 'Date of Birth',
      placeholder: 'Enter your date of birth',
    },
    gender: {
      required: false,
      label: 'Gender',
      placeholder: 'Select your gender',
    },
    subscription: {
      required: false,
      label: 'Subscribe to Newsletter',
      placeholder: 'Subscribe to our newsletter',
    },
  };

  const pages: Page[] = [
    {
      pageIcons,
      title: 'Create account',
      content: {
        inputGroup: ['email', 'username', 'password', 'confirmPassword'],
      },
    },
    {
      title: 'Gender',
      content: {
        radioGroup: ['gender'],
      },
    },
  ];

  return <FormBuilder pages={pages} model={model} callBack={setData} />;
};

// export { default } from '../.storybook';
export default App;
