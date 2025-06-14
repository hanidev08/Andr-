"use client";
import AnimatedText from "@/components/AnimatedText";
import img from "@/public/assets/images/Andre.jpeg";
import { useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import "./style.scss";

const Page = () => {
  const imgRef = useRef(null);
  const isInViewImg = useInView(imgRef);
  const description = useRef(null);
  const isInView = useInView(description, {
    once: false,
    margin: "-100px 0px", // أو استخدم threshold
  });
  return (
    <section ref={description}>
      <div className="container max-md:py-20 md:pt-10 ">
        <div className="flex flex-col md:flex-row max-md:justify-between md:justify-end gap-30">
          <div className=" flex flex-col max-md:w-full max-md:items-end text-[12px] font-bold">
            <ul>
              <li>
                <AnimatedText
                  phrase={"Working out of their"}
                  isInView={isInView}
                />
              </li>
              <li>
                <AnimatedText
                  phrase={"Los Angeles studio since 2020"}
                  isInView={isInView}
                />
              </li>
              <li>
                <AnimatedText phrase={"André Étienne"} isInView={isInView} />
              </li>
              <li>
                <AnimatedText
                  phrase={"craft photographs,"}
                  isInView={isInView}
                />
              </li>
              <li>
                <AnimatedText phrase={"visual books,"} isInView={isInView} />
              </li>
              <li>
                <AnimatedText
                  phrase={"and immersive installations."}
                  isInView={isInView}
                />
              </li>
              <li>
                <AnimatedText phrase={"Their work,"} isInView={isInView} />
              </li>
              <li>
                <AnimatedText
                  phrase={"grounded in minimal compositions"}
                  isInView={isInView}
                />
              </li>
              <li>
                <AnimatedText
                  phrase={"explores the tension between familiarity,"}
                  isInView={isInView}
                />
              </li>
              <li>
                <AnimatedText phrase={"and the uncanny,"} isInView={isInView} />
              </li>
              <li>
                <AnimatedText
                  phrase={"often revealing a quiet yet"}
                  isInView={isInView}
                />
              </li>
              <li>
                <AnimatedText
                  phrase={"electric sensuality."}
                  isInView={isInView}
                />
              </li>
            </ul>
          </div>
          <div className=" md:hidden text-3xl uppercase font-bold text-center">
            <AnimatedText phrase={"André Étienne"} isInView={isInView} />
          </div>
          <div className=" flex justify-between max-md:items-end gap-16">
            <div className=" md:hidden relative w-[30vw] max-w-[200px] aspect-[4/5]">
              <Image src={img} alt="img" fill className=" object-cover" />
            </div>
            <div className=" text-[12px] font-bold">
              <ul>
                <li>
                  <AnimatedText phrase={"Clients:"} isInView={isInView} />
                </li>
                <AnimatedText phrase={"The New Yorker"} isInView={isInView} />
                <li>
                  <AnimatedText phrase={"MoMA"} isInView={isInView} />
                </li>
                <li>
                  <AnimatedText phrase={"Aesop"} isInView={isInView} />
                </li>
                <li>
                  <AnimatedText phrase={"COS"} isInView={isInView} />
                </li>
                <li>
                  <AnimatedText phrase={"Chanel"} isInView={isInView} />
                </li>
                <li>
                  <AnimatedText phrase={"Vogue US"} isInView={isInView} />
                </li>
                <li>
                  <AnimatedText
                    phrase={"Yves Saint Laurent"}
                    isInView={isInView}
                  />
                </li>
                <li>
                  <AnimatedText phrase={"Kinfolk"} isInView={isInView} />
                </li>
                <li>
                  <AnimatedText phrase={"T Magazine"} isInView={isInView} />
                </li>
                <li>
                  <AnimatedText phrase={"Nike"} isInView={isInView} />
                </li>
              </ul>
            </div>
          </div>
          <div className=" text-[12px] font-bold">
            <ul>
              <li>
                <AnimatedText phrase={"Contact:"} isInView={isInView} />
              </li>
              <li>
                <AnimatedText phrase={"André Étienne"} isInView={isInView} />
              </li>
              <li>
                <AnimatedText
                  phrase={"Live and work in New York"}
                  isInView={isInView}
                />
              </li>
              <li className=" max-md:mt-4">
                <AnimatedText
                  phrase={"studio@andre-etienne.com"}
                  isInView={isInView}
                />
              </li>
              <li>
                <AnimatedText
                  phrase={"+1 (646) 555-1832"}
                  isInView={isInView}
                />
              </li>
              <li className="">
                <AnimatedText
                  phrase={"+1 (917) 555-2049"}
                  isInView={isInView}
                />
              </li>
              <li className=" max-md:mt-4">
                <AnimatedText phrase={"Instagram"} isInView={isInView} />
              </li>
              <li className=" max-md:mt-4">
                <AnimatedText
                  phrase={"Represented by Field Representation NYC"}
                  isInView={isInView}
                />
              </li>
              <li className=" max-md:mt-4">
                <AnimatedText
                  phrase={"contact@field-rep.com"}
                  isInView={isInView}
                />
              </li>
              <li className="">
                <AnimatedText
                  phrase={"+1 (212) 555-7623"}
                  isInView={isInView}
                />
              </li>
            </ul>
          </div>
        </div>
        <div className=" hidden md:w-[90%] md:flex md:justify-between md:items-end  md:mt-20">
          <div className="text-[96px] uppercase font-bold text-center">
            <AnimatedText phrase={"André Étienne"} isInView={isInView} />
          </div>
          <div
            ref={imgRef}
            className="flex relative w-[30vw] max-w-[200px] aspect-[4/5] "
          >
            <Image
              src={img}
              alt="img"
              fill
              className={`image object-cover ${isInViewImg ? "is-reveal" : ""}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
