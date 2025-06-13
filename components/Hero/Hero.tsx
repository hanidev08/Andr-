"use client";
import useWindowSize from "@/hooks/useWindowSize";
import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { sampleData } from "@/sampleData";
import Link from "next/link";
import { SliderConfig } from "./config";

const MAX_IMAGE_WIDTH = 100;
const MIN_IMAGE_WIDTH = 100;

const TABLET_SIZE = 1028;
const PHONE_SIZE = 768;
const DESCTOP_SIZE = 1200;

const interval = 2000;
const animationDuration = 1.5;
export const Hero = () => {
  const [isAnimating, setIsAnimating] = useState(true);

  const { width, height } = useWindowSize();
  console.log(isAnimating);

  const isTablet = width < TABLET_SIZE;
  const isPhone = width < PHONE_SIZE;
  const isDesctop = width < DESCTOP_SIZE;

  useEffect(() => {
    setTimeout(() => {
      setIsAnimating(false);
    }, interval);
  }, []);

  const normalizedWidth = useMemo(
    () =>
      SliderConfig.clampWidth({
        windowWidth: width,
        maxWidth: MAX_IMAGE_WIDTH,
        minWidth: MIN_IMAGE_WIDTH,
      }),
    [width]
  );

  const normalizedHeight = useMemo(
    () => SliderConfig.aspectRatio(normalizedWidth),
    [normalizedWidth]
  );

  const transforms = useMemo(
    () =>
      SliderConfig.calcTransforms({
        windowWidth: width,
        windowHeight: height,
        imageWidth: normalizedWidth,
        imageHeight: normalizedHeight,
        count: sampleData.length,
        isTablet,
        isPhone,
        isDesctop,
      }),
    [
      width,
      height,
      normalizedHeight,
      normalizedWidth,
      isTablet,
      isPhone,
      isDesctop,
    ]
  );

  return (
    <section className=" h-screen">
      <div
        className="container relative w-full h-full max-sm:mt-56 sm:mt-0 md:mt-0
       flex justify-center items-center"
      >
        {sampleData.map(({ url, slug }, index) => {
          const activeData = transforms[index];

          return (
            <motion.div
              key={index}
              initial={{
                x: 0,
                y: 0,
                width: activeData.width,
                height: activeData.height,
                zIndex: 10 * (index + 1),
              }}
              animate={{
                x: activeData.x,
                y: activeData.y,
                width: activeData.width,
                height: activeData.height,
              }}
              transition={{
                duration: animationDuration,
                ease: [0.77, 0, 0.175, 1],
              }}
              className="absolute"
            >
              <Link href={slug}>
                <div className="relative w-full h-full">
                  <Image src={url} alt="img" fill />
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
