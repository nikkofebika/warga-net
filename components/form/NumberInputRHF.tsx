import { upperFirst } from '@/libs/helpers';
import { Ionicons } from '@expo/vector-icons';
import { useEffect } from 'react';
import {
  FieldValues,
  Path,
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
};

/**
 * NumberInputRHF
 * - khusus field number
 * - handle konversi string → number
 * - aman di TS
 */
export function NumberInputRHF<T extends FieldValues>({
  name,
  label,
  placeholder,
  icon,
  rules,
  className,
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

  const value = watch(name) as number | undefined;
  const error = errors[name]?.message as string | undefined;

  return (
    <View className={`mb-3 ${className ?? ''}`}>
      {label && <Text className="mb-1 ml-1 font-medium">{label}</Text>}
      <View
        className={`flex-row items-center rounded-xl border px-3 py-2 ${
          error ? 'border-red-500' : 'border-slate-300'
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
          keyboardType="numeric"
          value={value !== undefined ? String(value) : ''}
          onChangeText={(text) => {
            // hanya parse kalau numeric, kalau kosong → undefined
            const parsed = text === '' ? undefined : Number(text);
            if (!isNaN(parsed as number)) {
              setValue(name, parsed as any, { shouldValidate: true });
            }
          }}
        />
      </View>
      {error && <Text className="text-xs text-red-500 mt-1">{error}</Text>}
    </View>
  );
}
