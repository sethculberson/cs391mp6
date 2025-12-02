import {MongoClient, Db, Collection } from 'mongodb';

const MONGO_URI = process.env.MONGO_URI as string;
export const DB_NAME = process.env.DB_NAME as string;

if (!MONGO_URI) {
    throw new Error("MONGO_URI environment variable is not set.");
}
if (!DB_NAME) {
    throw new Error("DB_NAME environment variable is not set.");
}

let client : MongoClient | null = null;
let db : Db | null = null;

async function connect(): Promise<Db> {
    if (!client) {
        client = new MongoClient(MONGO_URI);
        await client.connect();
    }
    return client.db(DB_NAME);
}

export default async function getCollection(collectionName: string):
    Promise<Collection> {
    if (!db) {
        db = await connect();
    }
    return db.collection(collectionName);
}