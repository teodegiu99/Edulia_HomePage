"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import useMeasure from "react-use-measure";
import { Path } from "@/data/courses";
import VerticalCard from "../components/VerticalCard";

const CARD_WIDTH = 400;
const MARGIN = 40;
const CARD_SIZE = CARD_WIDTH + MARGIN;

const BREAKPOINTS = {
  sm: 640,
  lg: 1024,
};

const PathCarousel = ({
  carouselTitle,
  courses,
}: {
  carouselTitle: string;
  courses: Path[];
}) => {
  const [ref, { width }] = useMeasure();
  const [offset, setOffset] = useState(0);
  const [hovered, setHovered] = useState(false);

  const CARD_BUFFER =
    width > BREAKPOINTS.lg ? 3 : width > BREAKPOINTS.sm ? 2 : 1;

  const CAN_SHIFT_LEFT = offset < 0;

  const CAN_SHIFT_RIGHT =
    Math.abs(offset) < CARD_SIZE * (courses.length - CARD_BUFFER);

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

  return (
    <section
      className="bg-white py-8"
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden p-4">
        <button
          className={`rounded-lg border-[1px] border-neutral-400 bg-white p-1.5 text-2xl transition-opacity absolute left-4 top-[290px] z-50 ${
            hovered && CAN_SHIFT_LEFT ? "opacity-100" : "opacity-0"
          }`}
          disabled={!CAN_SHIFT_LEFT}
          onClick={shiftLeft}
        >
          <FiArrowLeft className="text-[#f8485e]" />
        </button>
        <button
          className={`rounded-lg border-[1px] border-neutral-400 bg-white p-1.5 text-2xl transition-opacity absolute right-4 top-[290px] z-50 ${
            hovered && CAN_SHIFT_RIGHT ? "opacity-100" : "opacity-0"
          }`}
          disabled={!CAN_SHIFT_RIGHT}
          onClick={shiftRight}
        >
          <FiArrowRight className="text-[#f8485e]" />
        </button>
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center justify-between lg:mb-8">
            <h2 className="mb-4 lg:text-3xl text-[20px] text-[#1d1d1f] font-bold">
              {carouselTitle}
            </h2>
          </div>
          <div className="w-full">
            <motion.div
              animate={{
                x: offset,
              }}
              transition={{
                ease: "easeInOut",
              }}
              className="flex"
            >
              {courses.map((course) => {
                return <VerticalCard key={course.id} {...course} />;
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PathCarousel;
