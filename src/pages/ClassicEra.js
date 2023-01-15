import { useEffect } from "react";
import ItemsList from "../components/itemsList/ItemsList";
import LoadingIcon from "../components/UI/LoadingIcon";
import K9 from "../components/k9/K9";
import { useInfiniteQuery } from "react-query";
const ClassicEra = () => {
  const fetchClassic = async ({ pageParam = 1 }) => {
    const response = await fetch(
      `https://cors-app.onrender.com/classic/${pageParam}`
    );
    const data = await response.json();
    return data;
  };
  const {
    isLoading,
    data,
    isError,
    error,
    isFetchingNextPage,
    hasNextPage,
    isFetching,
    fetchNextPage,
  } = useInfiniteQuery(["classic"], fetchClassic, {
    getNextPageParam: (_lastPage, pages) => {
      if (pages.length < 4) {
        return pages.length + 1;
      } else {
        return undefined;
      }
    },
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
      <h1>Classic Era Series:</h1>
      {data.pages.map((page, idx) => {
        return <ItemsList results={page} key={idx} />;
      })}

      <div>{isFetching && isFetchingNextPage ? <LoadingIcon /> : null}</div>
    </>
  );
};

export default ClassicEra;
