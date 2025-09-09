import React from 'react';
import {
  ActivityIndicator,
  GestureResponderEvent,
  Text,
  TouchableOpacity
} from 'react-native';

type ButtonVariant = 'primary' | 'secondary' | 'outline';

interface ButtonProps {
  title: string;
  onPress?: (event: GestureResponderEvent) => void;
  disabled?: boolean;
  isLoading?: boolean;
  variant?: ButtonVariant;
  className?: string;
  textClassName?: string;
}

const CustomButton: React.FC<ButtonProps> = ({
  title,
  onPress,
  disabled = false,
  isLoading = false,
  variant = 'primary',
  className,
  textClassName,
}) => {
  return (
    <TouchableOpacity
      className={`bg-indigo-300 text-white py-3 px-4 rounded-lg ${className}`}
      onPress={onPress}
      activeOpacity={0.8}
      disabled={disabled || isLoading}>
      {isLoading ? (
        <ActivityIndicator
          color={variant === 'primary' ? 'white' : 'black'}
        />
      ) : (
        <Text className={`text-center text-lg font-medium ${textClassName}`}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
