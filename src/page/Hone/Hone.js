import React, { useState, useRef, useCallback, useEffect } from "react";
import "./Home.css";
import useSearch from "../../hooks/useSearch";
import SearchBar from "../../components/Shared/SearchBar/SearchBar";
import NewsCard from "../../components/NewsCard/NewsCard";
import Loader from "../../components/Shared/Loader/Loader";

// import datapack from "../../util/dummyData.json";
// const hasMore = false;
// const loading = false;
// const error = false;
// const errorMsg = "";

export default function Home() {
  const [query, setQuery] = useState("");
  // const [data, setData] = useState(datapack);
  const [showLoader, setShowLoader] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);

  const { data, hasMore, loading, error, errorMsg } = useSearch(
    query,
    pageNumber
  );

  const observer = useRef();
  const lastBookElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  function handleSearch(e) {
    setQuery(e.target.value);
    setPageNumber(1);
  }

  useEffect(() => {
    console.log(query);
    if (loading && query === "") {
      setShowLoader(false);
    } else {
      setShowLoader(true);
    }
    if (error) {
      setShowLoader(false);
    }
  }, [error, loading, query]);

  return (
    <div className="home">
      <SearchBar type="text" value={query} onChange={handleSearch} />
      {data.map((el, index) => {
        if (data.length === index + 3) {
          return <NewsCard newRef={lastBookElementRef} data={el} key={index} />;
        } else {
          return <NewsCard data={el} key={index} />;
        }
      })}
      {data.length === 0 && !error && (
        <h1 className="home__placeholder">Search For your favorite topic...</h1>
      )}
      {showLoader && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "50px 0",
          }}
        >
          <Loader />
        </div>
      )}
      {error && <div className="error"> {errorMsg}</div>}
    </div>
  );
}
