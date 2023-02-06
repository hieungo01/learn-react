import axios from "axios";
import React, { useEffect, useReducer, useRef, useState } from "react";
import _ from "lodash";
//https://hn.algolia.com/api/v1/search?query=react
const initialState = {
  hits: [],
  query: "",
  loading: true,
  errorMessage: "",
  url: `https://hn.algolia.com/api/v1/search`,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA": {
      return { ...state, hits: action.payload };
    }
    case "SET_LOADING": {
      return { ...state, loading: action.payload };
    }

    case "SET_ERROR_MESSAGE": {
      return { ...state, errorMessage: action.payload };
    }
    case "SET_QUERY": {
      return { ...state, query: action.payload };
    }
    case "SET_URL": {
      return { ...state, url: action.url };
    }
    default:
      break;
  }
};
const HackerNewsWithReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleFetchData = useRef({});
  //   const [hits, setHits] = useState([]);
  //   const [query, setQuery] = useState("");
  //   const [loading, setLoading] = useState(true);
  //   const [errorMessage, setErrorMessage] = useState("");
  //   const [url, setUrl] = useState(
  //     `https://hn.algolia.com/api/v1/search?query=${query}`
  //   );
  handleFetchData.current = async () => {
    try {
      //   setLoading(true);
      dispatch({
        type: "SET_LOADING",
        payload: true,
      });
      const response = await axios.get(state.url);
      dispatch({
        type: "SET_DATA",
        payload: response.data?.hits || [],
      });
      //   setHits(response.data?.hits || []);
      //   setLoading(false);
      dispatch({
        type: "SET_LOADING",
        payload: false,
      });
    } catch (error) {
      //   setLoading(false);
      dispatch({
        type: "SET_LOADING",
        payload: true,
      });
      dispatch({
        type: "SET_ERROR_MESSAGE",
        payload: error,
      });
      //   setErrorMessage(error);
    }
  };
  //   const handleUpdateQuery = _.debounce((e) => {
  //     setQuery(e.target.value);
  //   }, 3000);
  useEffect(() => {
    handleFetchData.current();
  }, [state.url]);
  return (
    <div className="bg-white mx-auto mt-5 mb-5 p-5 rounded-lg shadow-md w-2/4">
      <div className="flex mb-5 gap-x-5">
        <input
          type="text"
          className="border border-gray-200 block w-full rounded-md p-5  transition-all focus:border-blue-400"
          placeholder="Typeing your keyword..."
          defaultValue={state.query}
          onChange={(e) => {
            dispatch({
              type: "SET_QUERY",
              payload: e.target.value,
            });
          }}
        ></input>
        <button
          className="bg-blue-500 text-white font-semibold p-5 rounded-md"
          onClick={() =>
            //   setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`)
            dispatch({
              type: "SET_URL",
              payload: `https://hn.algolia.com/api/v1/search?query=${state.query}`,
            })
          }
        >
          Fetching
        </button>
      </div>
      {state.loading && (
        <div className="loading w-8 h-8 rounded-full border-blue-500 mx-auto my-10 border-4 border-r-4 border-r-transparent animate-spin"></div>
      )}
      {!state.loading && state.errorMessage && <p>{state.errorMessage}</p>}
      <div className="flex flex-wrap gap-5">
        {!state.loading &&
          state.hits.length > 0 &&
          state.hits.map((item, index) => {
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

export default HackerNewsWithReducer;
