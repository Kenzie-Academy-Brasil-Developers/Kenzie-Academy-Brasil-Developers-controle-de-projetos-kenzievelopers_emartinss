import { QueryResult } from "pg";
import format from "pg-format";
import { IProjectCreate, IProjects } from "../../interfaces/interfacesProjects";
import { client } from "../../database/database";

export const createProjectsServices = async (projectData: IProjectCreate): Promise<IProjects> => {
  const values = Object.values(projectData);
  const keys = Object.keys(projectData);

  const formatString: string = format(
    `
    INSERT INTO
    projects(%I)
    VALUES
    (%L)
    RETURNING *;
    `,
    keys,
    values
  );
  const queryResult: QueryResult<IProjects> = await client.query(formatString);

  return queryResult.rows[0];
};
