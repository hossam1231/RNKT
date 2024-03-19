import * as React from 'react';
import { FormBuilder, VerticleItemListWithActionsAndDescriptions } from 'rnkt';

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

  // console.log(data);

  const pageIcons = {
    left: () => {
      return <Text>hi</Text>;
    },
    right: () => {
      return <Text>hi</Text>;
    },
  };

  const model = {
    // email: {
    //   required: true,
    //   label: 'Email',
    //   placeholder: 'Enter your email',
    //   autoCapitalize: 'none',
    //   autoCorrect: false,
    //   keyboardType: 'email-address',
    /* trunk-ignore(git-diff-check/error) */
    // },
    // email: {
    //   required: true,
    //   label: 'Email',
    //   placeholder: 'Enter your email',
    //   autoCapitalize: 'none',
    //   autoCorrect: false,
    //   keyboardType: 'email-address',
    /* trunk-ignore(git-diff-check/error) */
    // },
    previousOwners: {
      // tally
      modifier: 'tally',
      // this lets the input group know we have a disguised input so in this scenario our input is a tally
      required: false,
      label: 'Previous owners',
      description:
        'How many other owners has this vehicle had including yourself',
    },
    condition: {},
    make: {},
    name: {},
    price: {},
    distance: {},
    vehicleType: {
      required: true,
      options: {
        car: null,
        Bike: null,
        Van: null,
        Machinery: null,
      },
    },
    carModel: {
      required: true,
      options: {
        car: null,
        Bike: null,
        Van: null,
        Machinery: null,
      },
    },
  };

  const pages: Page[] = [
    {
      title: 'Vehicle Type',
      content: {
        radioGroup: ['vehicleType'],
      },
    },
    {
      title: 'Make',
      content: {
        list: ['make'],
      },
    },
    {
      pageIcons,
      title: 'Listing information',
      content: {
        inputGroup: [
          'name',
          'price',
          'distance',
          'year',
          'thumbnailImages',
          'previousOwners',
        ],
      },
    },
    {
      title: 'Condition',
      content: {
        radioGroup: ['condition'],
      },
    },
    {
      title: 'Nearest Location',
      content: {
        searchList: ['nearestLocation'],
      },
    },
    {
      pageIcons,
      title: 'Listing information',
      content: {
        inputGroup: [
          'name',
          'price',
          'distance',
          'year',
          'thumbnailImages',
          'previousOwners',
        ],
      },
    },
  ];

  return <FormBuilder pages={pages} model={model} callBack={setData} />;
};

const _App = () => {
  return <VerticalItemListWithActionsAndDescriptions />;
};

export { default } from '../.storybook';

export default _App;

// export default App;
