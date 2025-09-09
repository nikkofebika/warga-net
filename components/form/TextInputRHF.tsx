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
import { Text, TextInput, View } from 'react-native';

type Props<T extends FieldValues> = {
  name: Path<T>;
  label?: string;
  placeholder?: string;
  icon?: keyof typeof Ionicons.glyphMap;
  rules?: RegisterOptions<T, Path<T>>;
  className?: string;
} & Omit<React.ComponentProps<typeof TextInput>, 'onChangeText' | 'value'>;

/**
 * TextInputRHF
 * - khusus field string
 * - aman di TS (value selalu string)
 */
function TextInputRHF<T extends FieldValues>({
  name,
  label,
  placeholder,
  icon,
  rules,
  className,
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

  const value = watch(name) as string | undefined;
  const error = errors[name]?.message as string | undefined;

  return (
    <View className={`mb-3 ${className ?? ''}`}>
      {label && <Text className="mb-1 ml-1 font-medium">{label}</Text>}
      <View
        className={`flex-row items-center rounded-xl border px-3 py-2 ${error ? 'border-red-500' : 'border-slate-300'
          }`}
      >
        {icon && (
          <Ionicons
            name={icon}
            size={18}
            color={error ? 'red' : '#666'}
            style={{ marginRight: 8 }}
          />
        )}
        <TextInput
          className="flex-1 text-sm"
          placeholder={placeholder || label || upperFirst(name)}
          value={value ?? ''}
          onChangeText={(text) =>
            setValue(
              name,
              text as PathValue<T, Path<T>>, // ✅ bukan any lagi
              { shouldValidate: true }
            )
          }
          {...rest}
        />
      </View>
      {error && <Text className="text-xs text-red-500 mt-1">{error}</Text>}
    </View>
  );
}

export default TextInputRHF;
