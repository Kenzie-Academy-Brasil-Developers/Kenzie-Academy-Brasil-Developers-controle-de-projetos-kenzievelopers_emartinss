import { QueryResult } from "pg";
import { client } from "../../database/database";
import { IDeveloperGet } from "../../interfaces/interfacesDevelopers";

export const readDevelopersService = async (id: string): Promise<IDeveloperGet[]> => {
  const queryString: string = `SELECT
    "dl"."id" AS "developerId",
    "dl"."name" AS "developerName",
    "dl"."email" AS "developerEmail",
    "di"."preferredos" AS "developerInfoPreferredOS",
    "di"."developersince" AS "developerInfoDeveloperSince"

  FROM
    developers AS "dl"
  LEFT JOIN
   developerinfos AS "di" 
  ON 
    "dl".id = "di"."developerid"
  WHERE
  "dl"."id" = ${id};
    `;

  const queryResult: QueryResult<IDeveloperGet> = await client.query(queryString);

  return queryResult.rows;
};
