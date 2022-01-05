import { gql } from "@apollo/client";

const QUERIES = {
  Users: gql`
    query Users($where: users_bool_exp, $offset: Int, $limit: Int) {
      users(where: $where, offset: $offset, limit: $limit) {
        id
        name
        rocket
        timestamp
      }
    }
  `,
};

export default QUERIES;
