"use server";
import getCollection, { DB_NAME } from "@/db";

export default async function createNewPost(
    name: string,
    city: string,
) {
    console.log("Adding new user", name);
    const p = {
        name : name,
        city : city,
    };
    const coll = await getCollection(DB_NAME);
    const res = await coll.insertOne(p);
    if (!res.acknowledged) {
        throw new Error("Failed to create new post");
    }
    return {p, id: res.insertedId.toHexString()};
}