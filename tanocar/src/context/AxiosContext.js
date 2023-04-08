import React, { createContext, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from './AuthContext';
import createAuthRefreshInterceptor from 'axios-auth-refresh';
import * as Keychain from 'react-native-keychain';
import API_URL from '../api/index';

const AxiosContext = createContext();
const { Provider } = AxiosContext;

const AxiosProvider = ({ children }) => {
    const authContext = useContext(AuthContext);

    const authAxios = axios.create({
        baseURL: API_URL,
    });

    const publicAxios = axios.create({
        baseURL:API_URL + 'auth/',
    });

    authAxios.interceptors.request.use(
        config => {
            if (!config.headers.Authorization) {
                config.headers.Authorization = `Bearer ${authContext.getAccessToken()}`;
            }

            return config;
        },
        error => {
            return Promise.reject(error);
        },
    );

    const refreshAuthLogic = failedRequest => {
        const data = {
            refresh: authContext.authState.refresh,
        };

        const options = {
            method: "POST",
            data,
            url: `${API``}auth/token/refresh/`,
        };

        return axios(options)
            .then(async tokenRefreshResponse => {
                failedRequest.response.config.headers.Authorization =
                    'Bearer ' + tokenRefreshResponse.data.access;

                authContext.setAuthState({
                    ...authContext.authState,
                    access: tokenRefreshResponse.data.access,
                });

                await Keychain.setGenericPassword(
                    'token',
                    JSON.stringify({
                        access: tokenRefreshResponse.data.access,
                        refresh: authContext.authState.refresh,
                    }),
                );

                return Promise.resolve();
            })
            .catch(e => {
                authContext.setAuthState({
                    access: null,
                    refresh: null,
                });
            });
    };

    createAuthRefreshInterceptor(authAxios, refreshAuthLogic, {});

    return (
        <Provider
            value={{
                authAxios,
                publicAxios,
            }}>
            {children}
        </Provider>
    );
};

export { AxiosContext, AxiosProvider };