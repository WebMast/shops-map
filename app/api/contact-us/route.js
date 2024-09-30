import { MongoClient } from 'mongodb';

export async function POST(req) {
    const uri = process.env.MONGODB_URI;
    const client = new MongoClient(uri);

    try {
        const data = await req.json();
        await client.connect();
        const database = client.db('contactUsDatabase');
        const collection = database.collection('formData');

        await collection.insertOne(data);

        return new Response(JSON.stringify({ message: 'Data was successfully saved' }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        return new Response(JSON.stringify({ message: 'Data saving failed' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    } finally {
        await client.close();
    }
}