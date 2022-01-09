import { useQuery } from "@apollo/client";
import QUERIES from "src/apis/queries";
import { Query, QueryUsersArgs } from "src/schema";

const UserPage = () => {
  const { data } = useQuery<{ users: Query["users"] }, QueryUsersArgs>(
    QUERIES.Users
  );

  return (
    <article className="layout">
      <h1>User Page</h1>
      {data?.users.map((v) => (
        <section key={v.id}>
          <ul>
            <li>{`name: ${v.name}`}</li>
            <li>{`rocket: ${v.rocket}`}</li>
            <li>{`timestamp: ${v.timestamp}`}</li>
          </ul>
        </section>
      ))}
    </article>
  );
};
export default UserPage;
