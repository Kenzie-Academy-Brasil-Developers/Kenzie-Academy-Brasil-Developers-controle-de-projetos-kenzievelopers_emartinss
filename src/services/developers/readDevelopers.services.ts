import { QueryResult } from "pg";
import { client } from "../../database/database";
import { IDeveloperInfos } from "../../interfaces/interfaces";

export const readDevelopersService = async (id: string): Promise<IDeveloperInfos[]> => {
  const queryString: string = `SELECT
    "dl"."id" AS "developerId",
    "dl"."name" AS "developerName",
    "dl"."email" AS "developerEmail",
    "di"."preferredos" AS "developerInfoPreferredOS",
    "di"."developersince" AS "developerInfoDeveloperSince"

FROM
  developers "dl"
LEFT JOIN
  developerinfos "di" ON "dl".id = "di"."id"
  WHERE
  "dl"."id" = ${id};
    `;

  const queryResult: QueryResult<IDeveloperInfos> = await client.query(queryString);

  return queryResult.rows;
};
