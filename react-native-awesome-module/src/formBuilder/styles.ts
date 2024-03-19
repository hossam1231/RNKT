import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1d1d1d',
    marginBottom: 12,
  },
  container: {
    padding: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  form: {
    paddingHorizontal: 24,
  },
  /** Header */
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  headerAction: {
    width: 40,
    height: 40,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 21,
    fontWeight: '600',
    color: '#292929',
  },
  /** Input */
  input: {
    marginBottom: 16,
  },
  inputInvalid: {
    opacity: 0.5,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '700',
    color: '#292929',
    marginBottom: 8,
  },
  inputControl: {
    height: 44,
    backgroundColor: '#f0f4f6',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
    borderColor: '#d7dbdd',
    borderWidth: 1,
  },
  inputValidation: {
    marginBottom: 12,
  },
  inputValidationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 6,
  },
  inputValidationRowInvalid: {
    opacity: 0.35,
  },
  inputValidationRowText: {
    fontSize: 13,
    fontWeight: '500',
    color: '#292b32',
    marginLeft: 5,
  },
  /** Button */
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 24,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: '#292B32',
    borderColor: '#292B32',
    marginTop: 16,
  },
  btnText: {
    fontSize: 16,
    lineHeight: 26,
    fontWeight: '600',
    color: '#fff',
    letterSpacing: 0.133,
  },
});
