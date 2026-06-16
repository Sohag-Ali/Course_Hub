import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGODBURI;
const dbName = process.env.DBNAME;

export const collections = {
  COURSES: "courses",
  USERS: "users",
};

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let clientPromise;

if (!global._mongoClientPromise) {
  global._mongoClientPromise = client.connect();
}

clientPromise = global._mongoClientPromise;

export const dbConnect = async (collectionName) => {
  const connectedClient = await clientPromise;
  return connectedClient.db(dbName).collection(collectionName);
};