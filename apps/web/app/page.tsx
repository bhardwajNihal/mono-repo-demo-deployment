
// importing db client from the common package
import {Client} from "@repo/db/client"


export default async function Home() {

  const user = await Client.user.findFirst();

  return (
    <div>
      hello, {(user && user.username) ? user.username : "user"} <br /> welcome to our app.
    </div>
  );
}
