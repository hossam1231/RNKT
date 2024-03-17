import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { InputCell } from './input';
import { styles } from './styles';
import type { FormBuilderProps } from './interface';
import { SimpleFooterWithSingleAction } from '../footer';
// import FeatherIcon from 'react-native-vector-icons/Feather';

export const FormBuilder = (props: FormBuilderProps) => {
  return <Builder {...props} />;
};

type BuilderProps = {
  model: any;
  pages: any;
};

function Builder(props: BuilderProps) {
  const { model } = props;

  const [form, setForm] = useState(
    Object.keys(model).reduce((acc, key) => {
      acc[key] = { value: '' };
      return acc;
    }, {})
  );
  // map the model to make a minified object suitable for posting

  const [requiredPopover, setRequiredPopover] = useState();

  React.useEffect(() => {
    const areRequiredFieldsCompleted = Object.values(form).some(
      (field) => field.required === true
    );
    setRequiredPopover(!areRequiredFieldsCompleted);
    // return () => {
    //   effect;
    // };
  }, [form]);

  const [index, setIndex] = useState(0);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.container}>
        {requiredPopover ? (
          <SimpleFooterWithSingleAction>
            <App setForm={setForm} form={form} {...props} />
          </SimpleFooterWithSingleAction>
        ) : (
          <App setForm={setForm} form={form} {...props} />
        )}
      </View>
    </SafeAreaView>
  );
}

type FormProps = {
  form: any;
  setForm: any;
};

function App(props: BuilderProps & FormProps) {
  const { pages } = props;
  // pages was still in the props just not needed and was passed using the spread operator

  const currentPage = pages[index];
  // the current design spec to follow for this page
  const content = currentPage.content;
  // path to content
  const contentType = Object.keys(content)[0];
  // what type of form object will be showed on the page
  const contentKeys = content[contentType];
  console.log(
    `$: ----------------------------------------------------------------------------------------------`
  );
  console.log(
    `%c $: App -> contentKeys `,
    `font-size:16px;background-color:#a7764f;color:white;`,
    contentKeys
  );
  console.log(
    `$: ----------------------------------------------------------------------------------------------`
  );
  // the keyed content to be showed on this page

  return (
    <>
      <View style={styles.container}>
        {pages.pageItems?.right ? (
          <View style={styles.headerAction}>
            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}
            >
              <Text>ho</Text>
              {/* <FeatherIcon color="#000" name="x" size={24} /> */}
            </TouchableOpacity>
          </View>
        ) : (
          // <Text style={{ color: 'transparent' }}>hi</Text>
          <></>
        )}

        <Text style={styles.headerTitle}>{currentPage['title']}</Text>

        <View style={[styles.headerAction, { alignItems: 'flex-end' }]}>
          {pages.pageItems?.right ? (
            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}
            >
              {/* <FeatherIcon color="#000" name="info" size={24} /> */}
            </TouchableOpacity>
          ) : (
            // <Text style={{ color: 'transparent' }}>hi</Text>
            <></>
          )}
        </View>
      </View>

      <KeyboardAwareScrollView>
        <View style={styles.form}>
          <ContentCell
            {...props}
            contentType={contentType}
            contentKeys={contentKeys}
          />

          <TouchableOpacity
            onPress={() => {
              // handle onPress
            }}
          >
            <View style={styles.btn}>
              <Text style={styles.btnText}>Sign Up</Text>
            </View>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </>
  );
}

type ContentCellProps = {
  contentType: any;
  contentKeys: string;
  form: any;
  setForm: any;
};

const ContentCell = (props: BuilderProps & FormProps & ContentCellProps) => {
  const { contentType, contentKeys } = props;
  if (!contentType) return <></>;

  type CellItemGeneratorProps = {
    contentKey: any;
    index: any;
  };

  function generateCellItem({ contentKey, index }: CellItemGeneratorProps) {
    switch (contentType) {
      case 'radioGroup':
        return;

      case 'inputGroup':
        // return <Input {...props} />;
        return <InputCell contentKey={contentKey} key={index} {...props} />;

      default:
        return;
    }
  }

  return contentKeys.map((key, index) =>
    generateCellItem({
      index,
      contentKey: key,
    })
  );
};

{
  /* <Input
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={(email) => setForm({ ...form, email })}
              style={styles.inputControl}
              value={form.email}
              placeholder={'Enter your email'}
              label={'Email address'}
              // validationType="email"
            />

            <Input
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={(password) => setForm({ ...form, password })}
              style={formStyles ? formStyles.inputControl : styles.inputControl}
              password={true}
              value={form.password}
              label={'Password'}
              validationType="minLength"
            />

            <Input
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="phone-pad"
              onChangeText={(phoneNumber) => setForm({ ...form, phoneNumber })}
              style={styles.inputControl}
              value={form.phoneNumber}
              placeholder={'Enter your phone number'}
              label={'Phone Number'}
              validationType="number"
            />

            <Input
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={(username) => setForm({ ...form, username })}
              style={styles.inputControl}
              value={form.username}
              placeholder={'Choose a username'}
              label={'Username'}
              validationType="lowerCase"
            /> */
}
