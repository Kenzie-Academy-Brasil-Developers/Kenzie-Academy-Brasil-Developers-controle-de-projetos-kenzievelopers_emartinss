import { QueryResult } from "pg";
import { client } from "../../database/database";

export const deleteDevelopersServices = async (id: string) => {
  const queryString = `DELETE FROM developers WHERE id = ${id};`;
  const queryResult: QueryResult = await client.query(queryString);
  return queryResult;
};
