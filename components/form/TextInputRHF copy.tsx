import { upperFirst } from '@/libs/helpers';
import { FC, useEffect } from 'react';
import { RegisterOptions, useFormContext } from 'react-hook-form';
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';

type Props = {
  name: string;
  label?: string;
  placeholder?: string;
  icon?: string;
  rules?: RegisterOptions;
} & TextInputProps;

const TextInputRHF: FC<Props> = ({
  name,
  label,
  placeholder,
  icon,
  rules,
  ...rest
}) => {
  const {
    register,
    setValue,
    watch,
    formState: {errors},
  } = useFormContext();

  useEffect(() => {
    register(name, rules);
  }, [register, name, rules]);

  const value = watch(name);
  const error = errors[name]?.message as string | undefined;

  return (
    <View>
      {label && (
        <Text style={[styles.label]}>{label}</Text>
      )}
      <View
        style={dynamicStyles.inputContainer({
          error,
          borderColor: '#ccc',
          // borderColor: theme.border,
        })}>
        <TextInput
          style={[styles.input]}
          placeholder={placeholder || label || upperFirst(name)}
          value={value}
          onChangeText={text => setValue(name, text)}
          {...rest}
        />
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const dynamicStyles = {
  inputContainer: ({
    error,
    borderColor,
  }: {
    error: string | undefined;
    borderColor: string;
  }): ViewStyle => ({
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: error ? 'red' : borderColor,
    paddingHorizontal: 12,
    paddingVertical: 6,
  }),
  icon: ({
    error,
    color,
  }: {
    error: string | undefined;
    color: string;
  }): TextStyle => ({
    color: error ? 'red' : color,
    fontSize: 16,
    marginRight: 8,
  }),
};

const styles = StyleSheet.create({
  label: {
    marginBottom: 5,
    marginLeft: 5,
  },
  input: {
    flex: 1,
    fontSize: 14,
  },
  errorText: {
    color: 'red',
  },
});

export default TextInputRHF;
