import React from "react";
import NavBar from "../components/NavBar";
import Banner from "../components/Banner";
import requests from "../store/request";
import Row from "../components/Row";

function HomePage(){
  return (
    <div className="homePage">
      <NavBar/>

      <Banner/>

      <Row title="Trending Now" fetchURL={requests.fetchNetflixOriginals} isLargeRow/>
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} isLargeRow/>
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies} isLargeRow/>
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} isLargeRow/>
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} isLargeRow/>
      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} isLargeRow/>
      <Row title="Documentaries" fetchURL={requests.fetchDocumentaries} isLargeRow/>
    </div>
  )
}

export default HomePage