import storesData from "@/data/shops.json";

export const GET = async function (req, { params }) {
    try {
        const { storeId } = params;
        const storesList = storesData;
        const store = storesList.find((store) => store.id === storeId);

        if (!store) {
            return new Response(JSON.stringify({ message: 'Store not found' }), {
                status: 404,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        return new Response(JSON.stringify(store), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });

    } catch (error) {
        return new Response("Failed to fetch stores", { status: 500 });
    }
}