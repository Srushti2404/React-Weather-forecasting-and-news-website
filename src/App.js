
import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import axios from "axios";
import "./App.css";
function App() {
  const [news, setNews] = useState([])

  const fetchNews = () => {
    // you can get your news api key by sign in to newsapi.org//
    axios.get("Enter your news api key here")
      .then((response) => {
        console.log(response);
        setNews(response.data.articles)
      })
  }
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <>
      <div className=" fetch-btn-container">
        <div className="row-1">
          <div className="col">
            <button className='btn-btn-primary' onClick={fetchNews}>Explore News</button>
          </div>
        </div>
      </div>

      <div className="news-container">
        <div className="row">
          {
            news.map((value,index1) => {
              return (
                <div key={index1} className="col-4">
                  <div className="card" style={{ width: "18rem" }}>
                    <img src={value.urlToImage} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{value.title}</h5>
                      <p className="card-text">{value.description}</p>
                      <a href="#" className="btn-btn-secondary">Read More</a>
                    </div>
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
    </>

    </React.Fragment>
  );
 }
 
 
 export default App;
