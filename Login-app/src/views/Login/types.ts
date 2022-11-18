export interface ILoginProps {
    onLoginClick: (formData: ILoginFormData) => void;
}

export interface ILoginFormData {
    email: string;
    password: string;
}
