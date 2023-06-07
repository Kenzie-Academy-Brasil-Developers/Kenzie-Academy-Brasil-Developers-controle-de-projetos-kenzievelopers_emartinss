import format from "pg-format";
import { IDeveloper } from "../../interfaces/interfaces";
import { QueryConfig, QueryResult } from "pg";
import { client } from "../../database/database";

export const updateDevelopersServices = async (id: string, body: string): Promise<IDeveloper[]> => {
  const updateColumns: string[] = Object.keys(body);
  const updateValues: string[] = Object.values(body);

  const queryTemplate: string = format(
    `
  UPDATE developers
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

  const queryResult: QueryResult<IDeveloper> = await client.query(queryConfig);

  return queryResult.rows;
};
