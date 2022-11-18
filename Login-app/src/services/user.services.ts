import { ILoginFormData } from "../views/Login/types";
import { get, post } from "./api";

export async function login(formData: ILoginFormData): Promise<any> {
    const response = await post("/login/", formData);
    return response;
}

export async function validate(formData: any): Promise<any> {
    const response = await post("/login/2fa/", formData);
    return response;
}


export async function get2FA(): Promise<any> {
    const response = await get("/sync");
    return response;
}
