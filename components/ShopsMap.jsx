"use client"

import {AdvancedMarker, APIProvider, InfoWindow, Map, Pin} from '@vis.gl/react-google-maps';
import Image from "next/image";
import Link from "next/link";
import {useState} from "react";

const ShopsMap = ({shopsList}) => {
    const [activeStore, setActiveStore] = useState(false);

    return (
        <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
                     onLoad={() => console.log('Maps API has loaded.')}>
            <div className="w-full h-[50vh] bg-gray-600 rounded-lg shadow-2xl">
                <Map
                    defaultZoom={9}
                    defaultCenter={{lat: 50.31218, lng: 30.53811}}
                    mapId='11c8af4ea652a062'
                    disableDefaultUI={true}>
                    {shopsList && shopsList.map((store) => (
                        <AdvancedMarker key={store.id}
                                        position={{
                                            lat: Number(store.coordinates.latitude),
                                            lng: Number(store.coordinates.longitude)
                                        }}
                                        onClick={() => setActiveStore(store)}>
                            <Pin background={"#000"} glyphColor={"#f59e0b"} borderColor={"#fff"}/>
                        </AdvancedMarker>
                    ))}
                    {activeStore && <InfoWindow
                        position={{lat: Number(activeStore.coordinates.latitude) + 0.04, lng: Number(activeStore.coordinates.longitude)}}
                        onCloseClick={() => setActiveStore(null)} className="min-h-52">
                        <div className="w-48 text-black text-center">
                            <Image src={`/store/${activeStore.images.mainImg}`} width={180} height={90} className="mx-auto"
                                   alt={activeStore.name}/>
                            <p className="mt-4 font-semibold uppercase">{activeStore.name}</p>
                            <p className="mt-2 text-ellipsis text-nowrap overflow-hidden">{activeStore.shortDescription}</p>
                            <div className="text-center mt-4 mb-1">
                                <Link className="outline_btn small" href={`/stores/${activeStore.id}`}>Store Details</Link>
                            </div>
                        </div>
                    </InfoWindow>}
                </Map>
            </div>
        </APIProvider>
    );
};

export default ShopsMap;