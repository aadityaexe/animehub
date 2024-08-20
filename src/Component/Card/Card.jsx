const userInfo = [
  {
    name: "KATANA",
    description: "The great sax",
    imgUrl:
      "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "SAMURAI",
    description: "The master blade",
    imgUrl:
      "https://images.unsplash.com/photo-1581579188876-94a509aa59bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
  },
  // Add more objects as needed
];

const Card = () => {
  return (
    <div className="flex flex-wrap gap-6 mt-6 justify-center">
      {userInfo.map((user, index) => (
        <div
          key={index}
          className="w-full sm:w-64 md:w-80 lg:w-96 bg-white shadow-md rounded-lg overflow-hidden"
        >
          <div className="relative h-48 sm:h-56">
            <img
              src={user.imgUrl}
              alt={user.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <h5 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
              {user.name}
            </h5>
            <p className="text-gray-600">{user.description}</p>
          </div>
          <div className="p-4">
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Read More
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
