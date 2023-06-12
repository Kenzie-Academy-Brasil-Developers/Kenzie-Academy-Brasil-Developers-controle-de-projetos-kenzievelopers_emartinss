import { QueryResult } from "pg";
import { IDeveloper, iDeveloperCreate } from "../../interfaces/interfacesDevelopers";
import format from "pg-format";
import { client } from "../../database/database";

export const registerDevelopersService = async (developerData: iDeveloperCreate): Promise<IDeveloper> => {
  const values = Object.values(developerData);
  const keys = Object.keys(developerData);

  const formatString: string = format(
    `
  INSERT INTO
  developers(%I)
  VALUES
  (%L)
  RETURNING *;
  `,
    keys,
    values
  );
  const queryResult: QueryResult<IDeveloper> = await client.query(formatString);

  return queryResult.rows[0];
};
