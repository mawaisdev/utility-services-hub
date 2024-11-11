export interface User {
  id: string;
  email: string;
  name: string;
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
  errors?: string[];
}

export type ServiceStatus = 'idle' | 'processing' | 'completed' | 'error';

export interface ServiceResponse {
  status: ServiceStatus;
  progress?: number;
  result?: string;
  error?: string;
}
