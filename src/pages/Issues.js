import React, { useEffect } from "react";
import ItemsList from "../components/itemsList/ItemsList";
import { useInfiniteQuery } from "react-query";
import LoadingIcon from "../components/UI/LoadingIcon";
import K9 from "../components/k9/K9";
const Issues = () => {
  const fetchClassic = async ({ pageParam = 1 }) => {
    const response = await fetch(
      `https://cors-app.onrender.com/issues/${pageParam}`
    );
    const data = await response.json();
    return data;
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    isLoading,
    data,
    isError,
    error,
    isFetchingNextPage,
    hasNextPage,
    isFetching,
    fetchNextPage,
  } = useInfiniteQuery(["issues"], fetchClassic, {
    getNextPageParam: (_lastPage, pages) => {
      if (pages.length < 3) {
        return pages.length + 1;
      } else {
        return undefined;
      }
    },
  });

  var comicWidth = { width: "240px" };
  var comicsGrid = {
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  };
  var hoverWidth = { width: "100%" };
  function detectMob() {
    return window.innerWidth <= 450 && window.innerHeight <= 800;
  }
  if (detectMob()) {
    comicsGrid = {
      gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
    };
    comicWidth = { width: "300px" };
    hoverWidth = { width: "89%" };
  }
  const comicSize = { width: "238px", height: "360px" };

  if (isLoading) {
    return (
      <div className="centered">
        <LoadingIcon />
        <K9 />
      </div>
    );
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }
  if (hasNextPage) {
    fetchNextPage();
  }

  return (
    <>
      <h1>Issues:</h1>
      {data.pages.map((page, idx) => {
        return (
          <ItemsList
            hoverWidth={hoverWidth}
            itemSize={comicSize}
            itemWidth={comicWidth}
            comicsGrid={comicsGrid}
            results={page}
            key={idx}
          />
        );
      })}
      <div>{isFetching && isFetchingNextPage ? <LoadingIcon /> : null}</div>
    </>
  );
};

export default Issues;
