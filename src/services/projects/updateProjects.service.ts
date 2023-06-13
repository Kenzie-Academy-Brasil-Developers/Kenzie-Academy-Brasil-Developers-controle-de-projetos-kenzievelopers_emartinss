import format from "pg-format";
import { IProjectCreate, IProjects } from "../../interfaces/interfacesProjects";
import { QueryConfig, QueryResult } from "pg";
import { client } from "../../database/database";

export const updateProjectsServices = async (projectData: IProjectCreate, id: string): Promise<IProjects> => {
  const updateColumns = Object.keys(projectData);
  const updateValues = Object.values(projectData);

  const queryTemplate: string = format(
    `
  UPDATE projects
  SET (%I) = (%L)
  WHERE id = $1
  RETURNING *;
`,
    updateColumns,
    updateValues
  );

  const queryConfig: QueryConfig = {
    text: queryTemplate,
    values: [id],
  };

  const queryResult: QueryResult<IProjects> = await client.query(queryConfig);

  return queryResult.rows[0];
};
