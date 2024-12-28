/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

export const Context = createContext();

export const UserProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.post("https://www.bthawk.com/api/api", {
          type: "blogFetch",
        });

        if (res.status === 200 && res.data.message === "successful") {
          setData(res.data.data);
          // console.log(res);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.response?.data?.message || error.message);
        setLoading(false);
      }
    };
    fetchBlog();
  }, []);
  return (
    <Context.Provider
      value={{ data, error, loading, isModalOpen, setIsModalOpen }}
    >
      {children}
    </Context.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
