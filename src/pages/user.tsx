import { useQuery } from "@apollo/client";
import QUERIES from "src/apis/queries";
import { dummyData } from "src/dummy";
// import { dummyData } from "../dummy";
import { Query, QueryUsersArgs } from "src/schema";

const UserPage = () => {
  // const { data } = useQuery<{ v: Query["users"] }, QueryUsersArgs>(
  //   QUERIES.Users,
  //   {
  //     variables: {},
  //   }
  // );
  return (
    <>
      <h1>{dummyData}</h1>
    </>
  );
};
export default UserPage;
