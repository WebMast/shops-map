import Gallery from "@/components/Gallery";

async function fetchStoreData(storeId) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/stores/${storeId}`);

    if (!res.ok) {
        throw new Error('Failed to fetch store data');
    }

    return res.json();
}

const formatSchedule = (schedule) => {
    return schedule.split(',');
}

const StoreDetail = async ({params}) => {
    const store = await fetchStoreData(params.storeId);
    const googleMapsSearchUrl = `${process.env.GOOGLE_MAPS_SEARCH_QUERY}${store.coordinates.latitude},${store.coordinates.longitude}`;

    return (
        <section className="w-full flex-center flex-col">
            <h1 className="head_text text-center">
                Little Bit About Our
                <br className="max-md:hidden"/>
                <span className="orange_gradient text-center capitalize"> {store.name}</span>
            </h1>
            <p className='desc text-center'>{store.shortDescription}</p>
            <div className="flex max-md:flex-col md:flex-row justify-center gap-12 md:gap-24 mb-10">
                <div className="md:w-1/2">
                    <h2 className="text-2xl font-bold md:mt-8 mb-2 text-[#ea580c]">Our Contacts</h2>
                    <p className="mb-1"><strong>Address: </strong><a href={googleMapsSearchUrl} target="_blank">{store.address}</a></p>
                    <p className="mb-1"><strong>Email: </strong><a href={`mailto:${store.email}`}>{store.email}</a></p>
                    <p><strong>Phone: </strong><a href={`tel:${store.phone}`}>{store.phone}</a></p>
                </div>
                <div className="md:w-1/2">
                    <h2 className="text-2xl font-bold md:mt-12 mb-2 text-[#ea580c]">Working Schedule</h2>
                    <p>
                        {formatSchedule(store.schedule).map(date => {
                            return <span key={Date.now()} className="block mb-1">{date}</span>
                        })}
                    </p>
                    <p><strong>Departments: </strong>{store.departments}</p>
                </div>
            </div>
            <Gallery images={store.images} label={store.name}/>
            <div className="mt-12 text-lg">{store.description}</div>
        </section>
    );
}

export default StoreDetail;
