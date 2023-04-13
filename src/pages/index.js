import React from 'react';
import Layout from '../components/Layout';
import { StaticImage } from "gatsby-plugin-image";
import AllRecipes from "../components/AllRecipes";

const index = () => {
  return (
    <Layout>
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/main.jpeg"
            alt="flour and eggs dropped on a work surface"
            className="hero-img"
            placeholder="blurred"
            layout="fullWidth"
          ></StaticImage>
          <div className="hero-container">
            <div className="hero-text">
              <h1>Simply Recipes</h1>
              <h4>No fluff, just recipes</h4>
            </div>
          </div>
        </header>
        <AllRecipes></AllRecipes>
      </main>
    </Layout>
  )
}

export default index
