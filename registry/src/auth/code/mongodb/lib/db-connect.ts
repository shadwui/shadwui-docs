import mongoose from "mongoose";

type ConnectionObject = {
  isConnected?: number;
};

const alreadyHaveMongoUri = process.env.MONGODB_URI!;

if (!alreadyHaveMongoUri) {
  console.log("Please Provide Mongodb Uri");
}

const connection: ConnectionObject = {};

async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    console.log("Already Connected to database");
    return;
  }

  try {
    const db = await mongoose.connect(alreadyHaveMongoUri, {});

    connection.isConnected = db.connections[0].readyState;

    console.log("Database connected successfully");
  } catch (error) {
    console.log("Data Connection field", error);

    process.exit(1);
  }
}

export default dbConnect;
