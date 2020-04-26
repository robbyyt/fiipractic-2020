export interface ILoginRequestPayload {
  email: string;
  password: string;
}

export interface ILoginResponse {
  success: boolean;
  token: string;
}

export interface IRegisterPayload {
  email: string;
  firstname: string;
  lastname: string;
  password: string;
}
