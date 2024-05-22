const Tab4 = () => {
  return (
    <div className="flex flex-col gap-2 max-w-[400px] bg-white shadow-lg p-4 rounded-md mx-auto border-2 border-black">
      <input
        type="text"
        className="rounded border border-black px-2 py-1"
        placeholder="Enter"
      />
      <input
        type="text"
        className="rounded border border-black px-2 py-1"
        placeholder="Enter"
      />
      <input
        type="text"
        className="rounded border border-black px-2 py-1"
        placeholder="Enter"
      />
      <input
        type="text"
        className="rounded border border-black px-2 py-1"
        placeholder="Enter"
      />
      <input
        type="text"
        className="rounded border border-black px-2 py-1"
        placeholder="Enter"
      />
      <div className="flex justify-around p-2">
        <button className="bg-lime-400 px-4 py-2 rounded border-2 border-black">
          Deploy
        </button>
        <button className="bg-red-400 py-2 px-4 rounded border-2 border-black">
          Destroy
        </button>
      </div>
    </div>
  );
};

export default Tab4;
