import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { InputCell, InputGovernor } from './input';
import { styles } from './styles';
import type { FormBuilderProps } from './interface';
import { SimpleFooterWithSingleAction } from '../footer';
import { getContentFromData, getFormDataValues } from './util';
// import FeatherIcon from 'react-native-vector-icons/Feather';

export const FormBuilder = (props: FormBuilderProps) => {
  return <Builder {...props} />;
};

type BuilderProps = {
  model: any;
  pages: any;
};

function Builder(props: BuilderProps) {
  const [pageIndex, setPageIndex] = useState(0);

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

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.container}>
        {requiredPopover ? (
          <SimpleFooterWithSingleAction
            actions={[
              {
                callback: () => {
                  setPageIndex(pageIndex + 1);
                },
              },
            ]}
          >
            <App
              pageIndex={pageIndex}
              setForm={setForm}
              form={form}
              {...props}
            />
          </SimpleFooterWithSingleAction>
        ) : (
          <App pageIndex={pageIndex} setForm={setForm} form={form} {...props} />
        )}
      </View>
    </SafeAreaView>
  );
}

type FormProps = {
  form: any;
  setForm: any;
};

type AppProps = {
  pageIndex: any;
};

function App(props: BuilderProps & AppProps & FormProps) {
  const { pages, pageIndex } = props;
  // pages was still in the props just not needed and was passed using the spread operator

  const currentPage = pages[pageIndex];
  // the current design spec to follow for this page
  const content = getContentFromData(currentPage);

  return (
    <>
      {/* <View style={styles.container}> */}
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
      {/* </View> */}

      <KeyboardAwareScrollView>
        <View style={styles.form}>
          <ContentCell {...props} content={content} />
          {pageIndex === pages.length && (
            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}
            >
              <View style={styles.btn}>
                <Text style={styles.btnText}>Sign Up</Text>
              </View>
            </TouchableOpacity>
          )}
        </View>
      </KeyboardAwareScrollView>
    </>
  );
}

interface ContentCellProps {
  content: any;
  model: any;
}

const ContentCell: React.FC<ContentCellProps> = (props) => {
  const { content, model } = props;
  const { contentType, contentKeys } = getFormDataValues(content);

  if (!contentType) return null;

  const generateCellItem = (data: any, index: number) => {
    switch (contentType) {
      case 'radioGroup':
        return null;

      case 'inputGroup':
        return <InputGovernor key={index} {...props} {...data} />;

      default:
        return null;
    }
  };

  return (
    <>
      {contentKeys.map((contentKey, index) =>
        generateCellItem({ ...model[contentKey] }, index)
      )}
    </>
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
