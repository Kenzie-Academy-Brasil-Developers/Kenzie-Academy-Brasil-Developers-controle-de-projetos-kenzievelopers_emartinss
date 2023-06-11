import { QueryResult } from "pg";
import { client } from "../../database/database";
import { IDeveloper } from "../../interfaces/interfacesDevelopers";

export const readProjectsServices = async (id: string) => {
  const queryString: string = `SELECT
    "pj"."id" AS "projectId",
    "pj"."name" AS "projectName",
    "pj"."description" AS "projectDescription",
    "pj"."repository" AS "projectRepository",
    "pj"."startDate" AS "projectStartDate",
    "pj"."endDate" AS "projectEndDate",
    "dl"."name" AS "projectDeveloperName"
FROM
    "projects" AS "pj"
LEFT JOIN
    "developers" AS "dl"
ON
    "dl"."id" = "pj"."developerId"
WHERE
    "pj"."id" = ${id};

    `;

  const queryResult: QueryResult<IDeveloper> = await client.query(queryString);

  return queryResult.rows;
};
