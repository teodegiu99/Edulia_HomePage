"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import useMeasure from "react-use-measure";
import { Review } from "@/data/courses";
import ReviewCard from "../components/ReviewCard";
import { MdOutlineStarPurple500 } from "react-icons/md";

const CARD_WIDTH = 400;
const MARGIN = 20;
const CARD_SIZE = CARD_WIDTH + MARGIN;

const BREAKPOINTS = {
  sm: 640,
  lg: 1024,
};

const TimedCarousel = ({
  carouselTitle,
  reviews,
}: {
  carouselTitle: string;
  reviews: Review[];
}) => {
  const [ref, { width }] = useMeasure();
  const [offset, setOffset] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(true);

  const CARD_BUFFER =
    width > BREAKPOINTS.lg ? 3 : width > BREAKPOINTS.sm ? 2 : 1;

  const CAN_SHIFT_LEFT = offset < 0;

  const CAN_SHIFT_RIGHT =
    Math.abs(offset) < CARD_SIZE * (reviews.length - CARD_BUFFER);

  const shiftLeft = () => {
    if (!CAN_SHIFT_LEFT) {
      return;
    }
    setOffset((pv) => (pv += CARD_SIZE));
  };

  const shiftRight = () => {
    if (!CAN_SHIFT_RIGHT) {
      return;
    }
    setOffset((pv) => (pv -= CARD_SIZE));
  };

  useEffect(() => {
    if (isAnimating) {
      const interval = setInterval(() => {
        setOffset((prevOffset) => {
          const newOffset = prevOffset - CARD_SIZE;
          if (Math.abs(newOffset) >= CARD_SIZE * reviews.length) {
            return 0; // Reset to the beginning if at the end
          }
          return newOffset;
        });
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [isAnimating, reviews.length]);

  return (
    <section
      className="bg-[#f8485e] py-8 w-full"
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl flex flex-col items-center">
          <div className="flex items-center justify-center mb-4 lg:mb-8">
            <h2 className="mt-4 lg:mt-12 lg:text-2xl text-[18px] text-white font-bold">
              {carouselTitle}
            </h2>
          </div>
          <div className="w-full overflow-hidden">
            <motion.div
              animate={{
                x: offset,
              }}
              transition={{
                ease: "easeInOut",
              }}
              className="flex space-x-[21.5px]"
              onAnimationComplete={() => {
                if (Math.abs(offset) >= CARD_SIZE * reviews.length) {
                  setOffset(0);
                }
              }}
            >
              {[...reviews, ...reviews].map((review, index) => {
                return <ReviewCard key={index} {...review} />;
              })}
            </motion.div>
          </div>
          <button className="flex my-12 flex-row items-center justify-center bg-white border border-t-black border-l-black border-b-slate-700 border-r-slate-700 p-3 font-medium">
            Scrivi una recensione su di noi{" "}
            <MdOutlineStarPurple500 className="text-[#00B67A] ml-1 text-xl" />
            <span className="text-sm font-light">Trustpilot</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TimedCarousel;
