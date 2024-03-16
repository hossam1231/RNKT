interface FormStyles {
  form: ViewStyle;
  inputControl: TextStyle;
}

interface PageStyles {
  pageItems?: {
    right?: any;
    left?: any;
  };
  container: ViewStyle;
  header: ViewStyle;
  headerAction: ViewStyle;
  headerTitle: TextStyle;
}

interface ButtonStyles {
  btn: ViewStyle;
  btnText: TextStyle;
}

interface CallbackProps {
  setPaginatedForm: any;
}

interface ModelProps extends InputProps {
  required?: boolean;
  name: string;
}

interface FormBuilderProps {
  // pageItems?: {
  //   right?: boolean;
  // };
  // [key: string]: any;
  pageStyles?: PageStyles;
  pages: any;
  formStyles?: FormStyles;
  buttonStyles?: ButtonStyles;
  inputStyles?: InputStyles;
  callback: CallbackProps;
  model: ModelProps[];
}

export interface InputStyles {
  input: ViewStyle;
  inputInvalid: ViewStyle;
  inputLabel: TextStyle;
  inputControl: TextStyle;
}

export interface InputProps {
  label: string;
  inputStyles?: InputStyles;
  validationCallback: any;
  placeholder: string | undefined;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  autoCorrect?: boolean;
  password?: boolean;
  keyboardType?:
    | 'default'
    | 'email-address'
    | 'numeric'
    | 'phone-pad'
    | 'number-pad'
    | 'decimal-pad'
    | 'numeric'
    | 'phone-pad'
    | 'visible-password'
    | 'ascii-capable'
    | 'numbers-and-punctuation'
    | 'url'
    | 'number-pad'
    | 'name-phone-pad'
    | 'twitter'
    | 'web-search';
  onChangeText?: (text: string) => void;
  placeholderTextColor?: string;
  style?: object;
  value?: string;
  validationType?: string;
}

interface ValidationComponentProps {
  inputString: string;
  validationCallback: any;
  validationType: string;
}

interface ValidationProps {
  type: string;
  validationCallback: any;
  inputString: string;
}
