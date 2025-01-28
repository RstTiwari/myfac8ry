import axios, { AxiosError } from "axios";
import { registerUserInterface, LoginResponse } from "../Interface/register";
import { LocalStorageHelper } from "./LocalstorageHelper";

export default class AuthService {
    // Static baseUrl accessible from any instance or directly from the class
    static baseUrl: string | undefined =
        import.meta.env.MODE === "development"
            ? import.meta.env.VITE_URL_LOCAL
            : import.meta.env.VITE_URL_PROD;

    static token:string|undefined = LocalStorageHelper.get("token")

    async registerUser(data: object) {
        let response: registerUserInterface = await this.apiCall(
            "auth/register",
            "POST",
            undefined,
            data,
            undefined
        );
        return response;
    }
    async loginUser(data: object) {
        let response: LoginResponse = await this.apiCall(
            "auth/login",
            "POST",
            undefined,
            data,
            undefined
        );
        return response;
    }
    async verifyUser(data: object | undefined) {
        let response: LoginResponse = await this.apiCall(
            "auth/verify",
            "POST",
            undefined,
            data,
            undefined
        );
        return response;
    }
    async createEnquiry(data: object) {
   let response: LoginResponse = await this.apiCall(
            "app/enquiry",
            "POST",
            AuthService.token,
            data,
            undefined
        );
        return response;}

    async apiCall(
        path: string,
        method: string,
        token?: string,
        data?: object,
        params?: object
    ) {
        let axiosConfig = {
            url: AuthService.baseUrl + `/${path}`, // Accessing static baseUrl here
            method: method,
            headers: {
                "Content-Type": "application/json",
                token: token ? token : null,
            },
            data: data ? data : "",
            params: params ? params : "",
        };

        if (data instanceof FormData) {
            axiosConfig.headers["Content-Type"] = "multipart/form-data";
            axiosConfig.data = data;
        }

        try {
            let response = await axios(axiosConfig);
            const data = response.data;
            return {
                success: data ? data.success : 0,
                result: data ? data.result : null,
                message: data ? data.message : "Network Error",
            };
        } catch (error) {
            let response = {
                success: 0,
                result: null,
                message: "",
            };
            if (error instanceof AxiosError) {
                response.message = error.response
                    ? error.response.data.message
                    : "Unknown error";
            } else {
                response.message = "An unexpected error occurred";
            }
            return response;
        }
    }
}
