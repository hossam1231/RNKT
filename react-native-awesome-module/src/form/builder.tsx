import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  type TextStyle,
  type ViewStyle,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Input, type InputStyles, type InputProps } from './input';
import { styles } from './styles';
// import FeatherIcon from 'react-native-vector-icons/Feather';

function InputCell(props: any) {
  const { form, setForm, contentKey } = props;

  const thisFormItem = form[contentKey];

  const [requiredState, setRequiredState] = useState(thisFormItem.required);

  React.useEffect(() => {
    setForm({
      ...form,
      contentKey: { ...contentKey, required: requiredState },
    });
    return () => {
      // effect;
    };
  }, [requiredState]);

  return (
    <Input
      autoCapitalize="none"
      autoCorrect={false}
      keyboardType="email-address"
      onChangeText={(text) =>
        setForm({
          ...form,
          contentKey: { ...contentKey, value: text, required: requiredState },
        })
      }
      style={styles.inputControl}
      value={form.email}
      placeholder={'Enter your email'}
      label={'Email address'}
      // validationType="email"
      validationCallback={setRequiredState}
      // {...props}
    />
  );
}

function generateCellItem({
  props,
  form,
  setForm,
  contentType,
  contentKey,
  index,
}: {
  props: any;
  contentType: string;
  contentKey: string;
  form: any;
  setForm: any;
  index: number;
}) {
  switch (contentType) {
    case 'radioGroup':
      return;

    case 'inputGroup':
      // return <Input {...props} />;
      return (
        <InputCell
          form={form}
          contentKey={contentKey}
          setForm={setForm}
          key={index}
          {...props}
        />
      );

    default:
      return;
  }
}

const ContentCell = (props: {
  contentType: any;
  contentKeys: string;
  form: any;
  setForm: any;
}) => {
  const { contentType, contentKeys, form, setForm } = props;
  if (!contentType) return <></>;

  return contentKeys.map((key, index) =>
    generateCellItem({
      props,
      form,
      setForm,
      contentType,
      index,
      contentKey: key,
    })
  );
};

function Builder(props: any) {
  const { pages, model, pageStyles, formStyles } = props;

  const [form, setForm] = useState(
    Object.keys(model).reduce((acc, key) => {
      acc[key] = { value: '', required: 0 };
      return acc;
    }, {})
  );

  const [index, setIndex] = useState(0);

  const currentPage = pages[index];
  const content = currentPage.content;
  const contentType = Object.keys(content)[0];
  const contentKeys = content[contentType];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={pageStyles ? pageStyles.container : styles.container}>
        <View style={pageStyles ? pageStyles.header : styles.header}>
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
          <View style={formStyles ? formStyles.form : styles.form}>
            <ContentCell
              form={form}
              setForm={setForm}
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
      </View>
    </SafeAreaView>
  );
}

export const FormBuilder = (props: FormBuilderProps) => {
  return <Builder {...props} />;
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
