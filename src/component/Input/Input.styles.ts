import Colors from '@quil/constants/Colors';
import { StyleSheet } from 'react-native';

import { INPUT_HEIGHT, LABEL_HEIGHT, VERTICAL_SPACING } from './InputSpacings';

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    marginTop: VERTICAL_SPACING,
    marginBottom: VERTICAL_SPACING,
    backgroundColor: Colors.inputBackground,
    borderColor: Colors.inputBorder,
    borderRadius: 10,
    borderWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  fieldHeight: {
    height: INPUT_HEIGHT,
  },
  lateralPadding: {
    paddingHorizontal: 22,
  },
  containerWithoutBottomBorders: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  input: {
    flex: 1,
    fontFamily: 'Nunito-SemiBold',
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 24,
    color: Colors.deepBlue,
  },
  errorText: {
    fontFamily: 'NunitoSans-SemiBold',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 20,
    color: Colors.errorText,
  },
  inputField: {
    paddingLeft: 0,
  },
  withIconInputField: {
    paddingLeft: 16,
  },
  multilineTextAlign: {
    textAlignVertical: 'top',
  },
  fieldNameStyle: {
    fontFamily: 'NunitoSans-Bold',
    textTransform: 'uppercase',
    fontSize: 10,
    lineHeight: LABEL_HEIGHT,
    letterSpacing: 1.5,
    color: Colors.stone,
  },
  multilineContainerStyle: {
    minHeight: 120,
    justifyContent: 'flex-start',
  },
  iconContainer: {
    position: 'absolute',
    right: 5,
    top: 5,
    zIndex: 2,
    width: 40,
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.inputBackground,
  },
  paddingRight: {
    paddingRight: 40,
  },
  paddingStyle: {
    paddingLeft: 40,
  },
});

export default styles;
