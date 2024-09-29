import storesData from "@/data/shops.json";

export const GET = async function (req, res) {

    try {
        return new Response(JSON.stringify(storesData), { status: 201 });
    } catch (error) {
        return new Response("Failed to fetch stores", { status: 500 });
    }
}