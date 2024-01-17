import makeApp from "./app.js";
import database from "./database.js";

const app = makeApp(database);

app.listen(8080, () => console.log("listening on port 8080"));
