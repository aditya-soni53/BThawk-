/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const Context = createContext();

export const UserProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("https://www.bthawk.com/api/blog_api", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ type: "blogFetch" }),
        });
        const data = await res.json();
        if (res.status === 200 && data.message === "successful") {
          setData(data.data);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message);
        setLoading(false);
      }
    })();
  }, []);

  return <Context.Provider value={{ data, error, loading }}>{children}</Context.Provider>;
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
