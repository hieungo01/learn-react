import React, { useState } from "react";
import useHackerNewsAPI from "../../hooks/useHackerNewsApi";
import _ from "lodash";
//https://hn.algolia.com/api/v1/search?query=react
const HackerNewsWithHook = () => {
  const [query, setQuery] = useState("");
  const { setUrl, loading, errorMessage, data } = useHackerNewsAPI(
    `https://hn.algolia.com/api/v1/search?query=""`,
    { hits: [] }
  );
  const handleUpdateQuery = _.debounce((e) => {
    setQuery(e.target.value);
  }, 3000);
  return (
    <div className="bg-white mx-auto mt-5 mb-5 p-5 rounded-lg shadow-md w-2/4">
      <div className="flex mb-5 gap-x-5">
        <input
          type="text"
          className="border border-gray-200 block w-full rounded-md p-5  transition-all focus:border-blue-400"
          placeholder="Typeing your keyword..."
          defaultValue={query}
          onChange={handleUpdateQuery}
        ></input>
        <button
          className="bg-blue-500 text-white font-semibold p-5 rounded-md"
          onClick={() =>
            setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`)
          }
        >
          Fetching
        </button>
      </div>
      {loading && (
        <div className="loading w-8 h-8 rounded-full border-blue-500 mx-auto my-10 border-4 border-r-4 border-r-transparent animate-spin"></div>
      )}
      {!loading && errorMessage && <p>{{ errorMessage }}</p>}
      <div className="flex flex-wrap gap-5">
        {!loading &&
          data.hits.length > 0 &&
          data.hits.map((item, index) => {
            if (!item.title || item.title.length <= 0) return null;
            return (
              <h3 className="p-3 bg-gray-100 rounded-md" key={item.title}>
                {item.title}
              </h3>
            );
          })}
      </div>
    </div>
  );
};

export default HackerNewsWithHook;
