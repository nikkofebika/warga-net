import { upperFirst } from '@/libs/helpers';
import { Ionicons } from '@expo/vector-icons';
import { useEffect } from 'react';
import {
  FieldValues,
  Path,
  PathValue,
  RegisterOptions,
  useFormContext,
} from 'react-hook-form';
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';

type Props<T extends FieldValues> = {
  name: Path<T>;
  label?: string;
  placeholder?: string;
  icon?: keyof typeof Ionicons.glyphMap;
  rules?: RegisterOptions<T, Path<T>>;
} & TextInputProps;

function TextInputRHF<T extends FieldValues>({
  name,
  label,
  placeholder,
  icon,
  rules,
  ...rest
}: Props<T>) {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext<T>();

  useEffect(() => {
    register(name, rules);
  }, [register, name, rules]);

  const value = watch(name);
  const error = errors[name]?.message as string | undefined;

  return (
    <View style={{ marginBottom: 12 }}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View
        style={dynamicStyles.inputContainer({
          error,
          borderColor: '#ccc',
        })}
      >
        {icon && (
          <Ionicons
            name={icon}
            style={dynamicStyles.icon({ error, color: '#666' })}
          />
        )}
        <TextInput
          style={styles.input}
          placeholder={placeholder || label || upperFirst(name)}
          value={value as string}
          onChangeText={(text) => setValue(name, text as PathValue<T, Path<T>>, { shouldValidate: true })}
          {...rest}
        />
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}

const dynamicStyles = {
  inputContainer: ({
    error,
    borderColor,
  }: {
    error?: string;
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
    error?: string;
    color: string;
  }): TextStyle => ({
    color: error ? 'red' : color,
    fontSize: 18,
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
    paddingVertical: 6,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 4,
  },
});

export default TextInputRHF;
