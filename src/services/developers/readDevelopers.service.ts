import { QueryResult } from "pg";
import { client } from "../../database/database";
import { IDeveloperGet } from "../../interfaces/interfacesDevelopers";

export const readDevelopersService = async (id: string): Promise<IDeveloperGet> => {
  const queryString: string = `SELECT
    "dl"."id" AS "developerId",
    "dl"."name" AS "developerName",
    "dl"."email" AS "developerEmail",
    "di"."preferredOS" AS "developerInfoPreferredOS",
    "di"."developerSince" AS "developerInfoDeveloperSince"

  FROM
    developers AS "dl"
  LEFT JOIN
  "developerInfos" AS "di" 
  ON 
    "dl".id = "di"."developerId"
  WHERE
  "dl"."id" = ${id};
    `;

  const queryResult: QueryResult<IDeveloperGet> = await client.query(queryString);

  return queryResult.rows[0];
};
