/**
 * @description User-Service parameters
 */
export interface IUserOptions {
  uid: number;
}

export interface ITemplateOptions {
  id?: number;
  name: string;
  userId: number;
  mbId?: string;
  description?: string;
}

export interface IReportOptions {
  id?: number;
  name: string;
  userId: number;
  mbId?: string;
  description?: string;
}
