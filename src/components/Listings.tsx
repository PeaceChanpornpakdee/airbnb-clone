import React from "react";
import { ReactComponent as StarIcon } from "../assets/images/icons/StarIcon.svg";

const listings = [
  {
    id: 1,
    image:
      "https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-616470083732125587/original/f13ad82b-ef72-4e51-ab63-6af69d93b253.jpeg?im_w=720",
    title: "Beautiful Beach House",
    price: "$200/night",
  },
  {
    id: 2,
    image:
      "https://a0.muscache.com/im/pictures/airflow/Hosting-16245152/original/b453bc0d-824b-4dd8-a8a9-64a9a71ea8be.jpg?im_w=720",
    title: "Cozy Cabin in the Woods",
    price: "$150/night",
  },
  {
    id: 3,
    image:
      "https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-616470083732125587/original/f13ad82b-ef72-4e51-ab63-6af69d93b253.jpeg?im_w=720",
    title: "Modern City Apartment",
    price: "$250/night",
  },
  {
    id: 4,
    image:
      "https://a0.muscache.com/im/pictures/airflow/Hosting-16245152/original/b453bc0d-824b-4dd8-a8a9-64a9a71ea8be.jpg?im_w=720",
    title: "Luxury Villa",
    price: "$500/night",
  },
  {
    id: 5,
    image:
      "https://a0.muscache.com/im/pictures/airflow/Hosting-16245152/original/b453bc0d-824b-4dd8-a8a9-64a9a71ea8be.jpg?im_w=720",
    title: "Modern City Apartment",
    price: "$250/night",
  },
  {
    id: 6,
    image:
      "https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-616470083732125587/original/f13ad82b-ef72-4e51-ab63-6af69d93b253.jpeg?im_w=720",
    title: "Luxury Villa",
    price: "$500/night",
  },
];

const Listings = () => {
  return (
    <section className="mx-auto py-3 px-6 lg:px-10 xl:px-20">
      {/* <h2 className="text-2xl font-bold mb-6">Available Listings</h2> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
        {listings.map((listing) => (
          <div
            key={listing.id}
            className="bg-white overflow-hidden transform hover:scale-105 transition duration-300"
          >
            <div className="w-full relative pb-[95%] rounded-xl overflow-hidden">
              <img
                src={listing.image}
                alt={listing.title}
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </div>
            <div className="pt-3 text-[15px] grid grid-cols-[1fr_48px] grid-rows-4 grid-flow-col">
              <h3 className="font-medium">{listing.title}</h3>
              <p className="text-gray-600 col-span-2">City Views</p>
              <p className="text-gray-600 col-span-2">Oct 29 - Nov 3</p>
              <p className="text-gray-600 col-span-2 mt-1 font-semibold">
                {listing.price}
              </p>
              <div className="flex items-center gap-1">
                <StarIcon className="w-3" />
                <p className="text-gray-600">4.75</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Listings;
