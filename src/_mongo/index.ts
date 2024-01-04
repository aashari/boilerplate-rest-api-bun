import Elysia from 'elysia';
import mongoose from 'mongoose';

/**
 * The connection object for the MongoDB database.
 */
var connection: typeof mongoose.connection | undefined = undefined;

/**
 * Retrieves the MongoDB connection.
 * If a connection already exists, it returns the existing connection.
 * Otherwise, it establishes a new connection using the provided connection string and database name.
 * 
 * @returns {Promise<mongoose.connection | undefined>} The MongoDB connection or undefined if the connection fails.
 */
export async function mongoGetConnection() {
    if (connection) return connection;
    const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/test';
    const connectionDatabase = process.env.MONGODB_DATABASE || 'test';
    connection = await mongoose.connect(connectionString, {
        appName: Bun.env.SERVER_NAME,
        dbName: connectionDatabase,
    }).then((response) => {
        console.log(`[mongo.ts] 🦊 successfully connected to MONGODB`);
        return response.connection;
    }).catch((error) => {
        console.warn(`[mongo.ts] 😨 failed to connect to MONGODB: ${error}`);
        return undefined;
    });
    return connection;
}

/**
 * Registers the MongoDB connection to the app state.
 * @param app - The Elysia app instance.
 * @returns The updated app instance with the MongoDB connection stored in the app state.
 */
export async function mongoRegister(app: Elysia) {
    // we store the connection to the app state
    app.state('mongoose', await mongoGetConnection());
    return app;
}
