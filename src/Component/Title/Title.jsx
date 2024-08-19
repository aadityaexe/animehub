/* eslint-disable react/prop-types */

const Title = ({ title, subtitle }) => {
  return (
    <div className="text-center my-4">
      <h1 className="text-4xl font-bold mb-2">{title}</h1>
      <h2 className="text-2xl text-gray-600">{subtitle}</h2>
    </div>
  );
};

export default Title;
