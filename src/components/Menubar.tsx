import React from "react";

const menus = [
  {
    id: 1,
    image:
      "https://a0.muscache.com/pictures/d7445031-62c4-46d0-91c3-4f29f9790f7a.jpg",
    title: "Rooms",
  },
  {
    id: 2,
    image:
      "https://a0.muscache.com/pictures/d7445031-62c4-46d0-91c3-4f29f9790f7a.jpg",
    title: "Icons",
  },
  {
    id: 3,
    image:
      "https://a0.muscache.com/pictures/d7445031-62c4-46d0-91c3-4f29f9790f7a.jpg",
    title: "Amazing Views",
  },
  {
    id: 4,
    image:
      "https://a0.muscache.com/pictures/d7445031-62c4-46d0-91c3-4f29f9790f7a.jpg",
    title: "Beachfront",
  },
  {
    id: 5,
    image:
      "https://a0.muscache.com/pictures/d7445031-62c4-46d0-91c3-4f29f9790f7a.jpg",
    title: "Lake",
  },
  {
    id: 6,
    image:
      "https://a0.muscache.com/pictures/d7445031-62c4-46d0-91c3-4f29f9790f7a.jpg",
    title: "Countryside",
  },
];

const Menubar = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center">
        {menus.map((menu) => (
          <div
            key={menu.id}
            className="flex flex-col items-center px-1 min-w-14"
          >
            <img src={menu.image} alt={menu.title} className="w-6 h-6 mb-1" />
            <span className="text-xs text-zinc-500 text-center font-medium">
              {menu.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menubar;
