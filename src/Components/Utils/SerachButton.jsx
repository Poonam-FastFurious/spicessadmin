/* eslint-disable react/prop-types */
function SerachButton({ placeholder, value, onChange }) {
  return (
    <div className="search-input relative">
      <input
        className="input h-[44px] w-full pl-14 border border-gray-300 rounded-md"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <button className="absolute top-1/2 left-5 translate-y-[-50%] hover:text-theme">
        <svg
          width="16"
          height="16"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M18.9999 19L14.6499 14.65"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </button>
    </div>
  );
}

export default SerachButton;
