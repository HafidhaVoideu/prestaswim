import React from "react";
import Header from "@/scenes/global/Header";

import Footer from "@/scenes/global/Footer";

import Services from "@/scenes/homepage/Services";
import LandingPage from "./LandingPage";

import Contact from "@/scenes/homepage/Contact";

import Transition from "@/scenes/homepage/Transition";

import FAQ from "@/scenes/homepage/FAQ";

import Presentation from "./Presentation";
import About from "./About";
const Home = () => {
  return (
    <main>
      <Header></Header>

      <LandingPage></LandingPage>

      <section className="max-w-[1150px] mx-auto flex flex-col items-center justify-center gap-36 pb-36">
        <Services></Services>

        <Presentation></Presentation>
        <About></About>
        <Contact></Contact>
        <FAQ></FAQ>
      </section>

      <Transition></Transition>

      <Footer></Footer>
    </main>
  );
};

export default Home;
