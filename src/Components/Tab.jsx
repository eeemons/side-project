/* eslint-disable react/prop-types */
const Tab = ({ label, isSelected, onClick }) => {
  const color = isSelected
    ? "font-bold border-b border-black text-white bg-black"
    : "text-black";
  // console.log(label, isSelected, onClick, color);
  return (
    <button
      className={`px-3 py-2 ${color} border-gray-200 hover:text-bold focus:outline-none transition duration-300 text-[12px] md:text-[15px] w-full`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Tab;
