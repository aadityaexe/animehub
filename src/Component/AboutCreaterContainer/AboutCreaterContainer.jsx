import Card from "../Card/Card";

const AboutCreaterContainer = () => {
  return (
    <div
      className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80')",
      }}
    >
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {/* Render multiple Card components */}
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default AboutCreaterContainer;
