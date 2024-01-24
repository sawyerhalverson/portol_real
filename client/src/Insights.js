import React, { useState, useEffect } from "react";
import BarChart from "./components/BarChart";
import axios from "axios";
import {Link} from 'react-router-dom'

function Insights() {

  const [tagData, setTagData] = useState({
    labels: [],
    datasets: [
      {
        label: "Location",
        data: [],
      },
    ],
  });

  useEffect(() => {
    // Function to fetch data from your server
// Function to fetch data from your server
const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8081/insights");
      console.log("Response data:", response.data); // Log the response data
  
      // Extract data properties for labels and data
      const labels = response.data.map((item) => item.location);
      const data = response.data.map((item) => item.taps);
  
      setTagData({
        labels: labels,
        datasets: [
          {
            label: "Location",
            data: data,
          },
        ],
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  

    // Fetch data initially
    fetchData();
  }, []); // Empty dependency array ensures useEffect runs only once

  return (
    <div className="">
        <Link to="/">Back to Tags</Link>
      {/* You can display the data or pass it to the BarChart component */}
      {tagData && tagData.labels.length > 0 ? (
        <BarChart chartData={tagData} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Insights;
