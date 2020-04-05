export interface ILoginRequestPayload {
  email: string;
  password: string;
}

export interface ILoginResponse {
  success: boolean;
  token: string;
}