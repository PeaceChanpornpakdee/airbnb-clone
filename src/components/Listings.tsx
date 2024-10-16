import React from 'react';

const listings = [
  { id: 1, image: 'https://dummyimage.com/400', title: 'Beautiful Beach House', price: '$200/night' },
  { id: 2, image: 'https://dummyimage.com/400', title: 'Cozy Cabin in the Woods', price: '$150/night' },
  { id: 3, image: 'https://dummyimage.com/400', title: 'Modern City Apartment', price: '$250/night' },
  { id: 4, image: 'https://dummyimage.com/400', title: 'Luxury Villa', price: '$500/night' },
];

const Listings = () => {
  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Available Listings</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {listings.map(listing => (
          <div key={listing.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={listing.image} alt={listing.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{listing.title}</h3>
              <p className="text-gray-600">{listing.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Listings;