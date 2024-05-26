import Image from "next/image";
import Hero from "./components/sections/Hero";
import StatsBanner from "./components/sections/StatsBanner";
import SuperSkills from "./components/sections/SuperSkills";
import CoursesList from "./components/sections/CoursesList";
import Carousel from "./components/sections/Carousel";
import {
  courses,
  latestCourses,
  popularCourses,
  path,
  reviews,
} from "@/data/courses";
import PathCarousel from "./components/sections/PathCarousel";
import Masterclass from "./components/sections/Masterclass";
import WhySection from "./components/sections/WhySection";
import TimedCarousel from "./components/sections/TimedCarousel";
import DownloadBanner from "./components/sections/DownloadBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBanner />
      <SuperSkills />
      <CoursesList />
      <Carousel carouselTitle="Scopri tutti i corsi" courses={courses} />
      <Carousel carouselTitle="Gli ultimi arrivi" courses={latestCourses} />
      <PathCarousel carouselTitle="I nostri percorsi" courses={path} />
      <Carousel carouselTitle="I più seguiti" courses={popularCourses} />
      <Masterclass />
      <WhySection />
      <TimedCarousel
        carouselTitle="Cosa dice di noi chi ha frequentato un corso di Edulia..."
        reviews={reviews}
      />
      <DownloadBanner />
    </>
  );
}
