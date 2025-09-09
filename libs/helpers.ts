import * as SecureStore from "expo-secure-store";

export const TOKEN_KEY = 'token';
export const getToken = () => SecureStore.getItemAsync(TOKEN_KEY);
export const setToken = (token: string) => SecureStore.setItemAsync(TOKEN_KEY, token);
export const removeToken = () => SecureStore.deleteItemAsync(TOKEN_KEY);

export const upperFirst = (str: string): string => str ? str.charAt(0).toUpperCase() + str.slice(1) : '';