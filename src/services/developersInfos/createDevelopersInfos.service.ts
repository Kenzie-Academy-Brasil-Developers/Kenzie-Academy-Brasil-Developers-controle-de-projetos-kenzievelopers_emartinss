import { QueryResult } from "pg";
import { IDeveloperInfosCreate } from "../../interfaces/interfacesDevelopers";
import format from "pg-format";
import { client } from "../../database/database";

export const registerDevelopersInfosService = async (developerData: IDeveloperInfosCreate): Promise<IDeveloperInfosCreate> => {
  const values = Object.values(developerData);
  const keys = Object.keys(developerData);

  const formatString: string = format(`INSERT INTO "developerInfos" (%I) VALUES (%L) RETURNING *;`, keys, values);

  const queryResult: QueryResult<IDeveloperInfosCreate> = await client.query(formatString);

  return queryResult.rows[0];
};
