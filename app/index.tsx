import CustomButton from "@/components/CustomButton";
import TextInputRHF from "@/components/form/TextInputRHF";
import { loginSchema, TLoginSchema } from "@/validation/auth/login";
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from "react-hook-form";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function IndexScreen() {
    const form = useForm<TLoginSchema>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    });

    const handleSubmit = (data: TLoginSchema) => {
        console.log('data', data);
    }

    return (
        <SafeAreaView className="px-5 flex-1 justify-center bg-slate-50">
            <View className="items-center mb-5">
                <Text className="text-3xl font-bold mb-2">WargaKu</Text>
                <Text className="text-lg text-center text-slate-500">Kelola komunitas rukun tetangga anda dengan mudah dan efisien</Text>
            </View>
            <FormProvider {...form}>
                {/* <TextInputRHF name="email" placeholder="Email atau NIK" className="w-full" /> */}
                <TextInputRHF<TLoginSchema>
                    name="email"
                    // label="Email"
                    placeholder="Masukkan Email atau NIK"
                    icon="mail-outline"
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                <TextInputRHF<TLoginSchema>
                    name="password"
                    // label="Password"
                    placeholder="Masukkan password"
                    icon="lock-closed-outline"
                    secureTextEntry
                />
                <CustomButton title="Login" onPress={form.handleSubmit(handleSubmit)} />
            </FormProvider>
        </SafeAreaView>
    )
}