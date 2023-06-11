export interface IProjects {
  id: number;
  name: string;
  description: string;
  repository: string;
  startDate: Date;
  endDate: Date | null;
  developerId: number | null;
}

export type IProjectCreate = Omit<IProjects, "id">;
