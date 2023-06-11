export interface IDeveloper {
  id: number;
  name: String;
  email: string;
}

export type iDeveloperCreate = Omit<IDeveloper, "id">;

export interface IDeveloperInfos {
  id: number;
  developersince: Date;
  preferredos: "Windows" | "Linux" | "MacOS.";
  developerid: number;
}

export interface IDeveloperGet {
  developerId: number;
  developerName: string;
  developerEmail: string;
  developerInfoDeveloperSince: Date | null;
  developerInfoPreferredOS: string | null;
}

export interface IDeveloperInfosCreate {
  developerInfoDeveloperSince: Date;
  developerInfoPreferredOS: "Windows" | "Linux" | "MacOS.";
}

