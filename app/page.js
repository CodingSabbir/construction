'use client'

import Aos from "aos";
import "aos/dist/aos.css";
import Slider from "./component/Slider";
import { useEffect } from "react";
import HeroButton from "./component/HeroButton";
import Carousel from "./component/Crousel";
import BlogCard from "./component/BlogCard";
import Project from "./component/Project";
import OurClient from "./component/OurClient";





export default function Home() {
  useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
  return (
<main>  

<Slider/>
<HeroButton/>
<Carousel/>
<BlogCard/>
<Project/>
<OurClient/>
</main>
  );
}
