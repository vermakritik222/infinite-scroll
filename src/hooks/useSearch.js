import { useEffect, useState } from "react";
import axios from "axios";

export default function useSearch(query, pageNumber) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setData([]);
  }, [query]);

  useEffect(() => {
    if (!query) return;
    setLoading(true);
    setError(false);
    let cancel;
    axios({
      method: "GET",
      url: "https://newsapi.org/v2/everything",
      params: {
        q: query,
        page: pageNumber,
        pageSize: 10,
        sortBy: "publishedAt",
        apiKey: process.env.REACT_APP_API_KEY,
      },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        console.log("res==>", res);
        setData((prevBooks) => {
          return [...new Set([...prevBooks, ...res.data.articles])];
        });
        setHasMore(res.data.articles.length > 0);
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setErrorMsg(e.response.data.message);
        console.log(e);
        setError(true);
      });
    return () => cancel();
  }, [query, pageNumber]);

  return { loading, error, data, hasMore, errorMsg };
}
