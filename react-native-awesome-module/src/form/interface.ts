import type { ViewStyle, TextStyle } from "react-native";

export interface FormStyles {
  form: ViewStyle;
  inputControl: TextStyle;
}

export interface PageStyles {
  pageItems?: {
    right?: any;
    left?: any;
  };
  container: ViewStyle;
  header: ViewStyle;
  headerAction: ViewStyle;
  headerTitle: TextStyle;
}

export interface ButtonStyles {
  btn: ViewStyle;
  btnText: TextStyle;
}

export interface CallbackProps {
  setPaginatedForm: any;
}

export interface ModelProps extends InputProps {
  required?: boolean;
  name: string;
}

export interface FormBuilderProps {
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

export interface ValidationComponentProps {
  inputString: string;
  validationCallback: any;
  validationType: string;
}

export interface ValidationProps {
  type: string;
  validationCallback: any;
  inputString: string;
}
