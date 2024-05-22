// Web3ProviderHost = string
// Web3ProviderApiKey = string
// MaxTotalVUsForAllMethods = integer
// RampUpDuration = string
// HoldDuration = string
const Tab2 = () => {
  return (
    <div className="flex flex-col justify-between max-w-[400px] min-h-[80vh] bg-white p-4 rounded-3xl mx-auto border-2 border-black md:p-10">
      <div className="relative bg-inherit">
        <input
          type="text"
          id="field-1"
          name="field-1"
          className="peer bg-transparent rounded-xl outline-none border-black border-2 w-full py-1 h-12  text-gray-200 placeholder-transparent  px-2"
          placeholder="Web3ProviderHost"
        />
        <label
          htmlFor="field-1"
          className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sm transition-all"
        >
          Web3ProviderHost
        </label>
      </div>

      <div className="relative bg-inherit">
        <input
          type="text"
          id="field-5"
          name="field-5"
          className="peer bg-transparent rounded-xl outline-none border-black border-2 w-full py-1 h-12  text-gray-200 placeholder-transparent  px-2"
          placeholder="Web3ProviderApiKey"
        />
        <label
          htmlFor="field-5"
          className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sm transition-all"
        >
          Web3ProviderApiKey
        </label>
      </div>

      <div className="relative bg-inherit">
        <input
          type="text"
          id="field-2"
          name="field-2"
          className="peer bg-transparent rounded-xl border-black border-2 w-full py-1 h-12  text-gray-200 placeholder-transparent  px-2"
          placeholder="MaxTotalVUsForAllMethods"
        />
        <label
          htmlFor="field-2"
          className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sm transition-all"
        >
          MaxTotalVUsForAllMethods
        </label>
      </div>
      <div className="relative bg-inherit">
        <input
          type="text"
          id="field-3"
          name="field-3"
          className="peer bg-transparent rounded-xl border-black border-2 w-full py-1 h-12  text-gray-200 placeholder-transparent  px-2"
          placeholder="RampUpDuration"
        />
        <label
          htmlFor="field-3"
          className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sm transition-all"
        >
          RampUpDuration
        </label>
      </div>
      <div className="relative bg-inherit">
        <input
          type="text"
          id="field-4"
          name="field-4"
          className="peer bg-transparent rounded-xl border-black border-2 w-full py-1 h-12  text-gray-200 placeholder-transparent  px-2"
          placeholder="HoldDuration"
        />
        <label
          htmlFor="field-4"
          className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sm transition-all"
        >
          HoldDuration
        </label>
      </div>

      <div className="flex justify-around p-2">
        <button className="bg-lime-400 px-4 py-2 rounded-xl border-2 border-black">
          Deploy
        </button>
        <button className="bg-red-400 py-2 px-4 rounded-xl border-2 border-black">
          Destroy
        </button>
      </div>
    </div>
  );
};

export default Tab2;
