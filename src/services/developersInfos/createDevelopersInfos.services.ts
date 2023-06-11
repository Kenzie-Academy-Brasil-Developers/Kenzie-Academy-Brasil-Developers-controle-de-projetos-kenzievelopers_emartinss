import { QueryConfig, QueryResult } from "pg";
import { IDeveloper, IDeveloperInfosCreate, iDeveloperCreate } from "../../interfaces/interfacesDevelopers";
import format from "pg-format";
import { client } from "../../database/database";

export const registerDevelopersInfosService = async (developerData: IDeveloperInfosCreate): Promise<IDeveloperInfosCreate> => {
  const values: String[] = Object.values(developerData);
  const keys: string[] = Object.keys(developerData);
  const formatString: string = format(
    `INSERT INTO developerinfos (%I) VALUES (%L) RETURNING *;`,
     keys, values
    );

  
  const queryResult: QueryResult<IDeveloperInfosCreate> = await client.query(formatString);

  return queryResult.rows[0];
};
