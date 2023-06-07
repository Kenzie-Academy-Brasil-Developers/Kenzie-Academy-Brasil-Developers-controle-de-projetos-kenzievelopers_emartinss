export interface IDeveloper {
  id: number;
  name: String;
  email: string;
}

export type iDeveloperCreate = Omit<IDeveloper, "id">;

export interface IDeveloperInfos {
  developerId: number;
  developerName: string;
  developerEmail: string;
  developerInfoDeveloperSince: Date | null;
  developerInfoPreferredOS: string | null;
}
