import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import _ from "lodash";
//https://hn.algolia.com/api/v1/search?query=react
const HackerNews = () => {
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [url, setUrl] = useState(
    `https://hn.algolia.com/api/v1/search?query=${query}`
  );
  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  });

  const handleFetchData = useRef({});
  handleFetchData.current = async () => {
    try {
      setLoading(true);
      const response = await axios.get(url);
      setTimeout(() => {
        if (isMounted.current) {
          setHits(response.data?.hits || []);
          setLoading(false);
        }
      }, 3000);
    } catch (error) {
      setLoading(false);
      setErrorMessage(error);
    }
  };
  const handleUpdateQuery = _.debounce((e) => {
    setQuery(e.target.value);
  }, 3000);
  useEffect(() => {
    handleFetchData.current();
  }, [url]);
  return (
    <div className="bg-white mx-auto mt-5 mb-5 p-5 rounded-lg shadow-md w-2/4">
      <div className="flex mb-5 gap-x-5">
        <input
          type="text"
          className="border border-gray-200 block w-full rounded-md p-5  transition-all focus:border-blue-400"
          placeholder="Typeing your keyword..."
          defaultValue={query}
          onChange={(e) => setQuery(e.target.value)}
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
          hits.length > 0 &&
          hits.map((item, index) => {
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

export default HackerNews;
