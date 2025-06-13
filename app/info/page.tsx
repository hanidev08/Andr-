"use client";
import AnimatedText from "@/components/AnimatedText";
import img from "@/public/assets/images/Lipstick3.jpeg";
import { useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const Page = () => {
  const description = useRef(null);
  const isInView = useInView(description, {
    once: false,
    margin: "-100px 0px", // أو استخدم threshold
  });
  return (
    <section ref={description}>
      <div className="container py-20">
        <div className="flex flex-col md:flex-row max-md:justify-between md:justify-end gap-30">
          <div className=" flex flex-col max-md:w-full max-md:items-end text-[12px] font-bold">
            <ul>
              <li>
                <AnimatedText
                  phrase={"In their studio created"}
                  isInView={isInView}
                />
              </li>
              <li>
                <AnimatedText
                  phrase={"in Paris in 2012,"}
                  isInView={isInView}
                />
              </li>
              <li>
                <AnimatedText phrase={"Paul & Henriette"} isInView={isInView} />
              </li>
              <li>
                <AnimatedText
                  phrase={"imagine photographs,"}
                  isInView={isInView}
                />
              </li>
              <li>
                <AnimatedText
                  phrase={"books of pictures,"}
                  isInView={isInView}
                />
              </li>
              <li>
                <AnimatedText
                  phrase={"and installations."}
                  isInView={isInView}
                />
              </li>
              <li>
                <AnimatedText
                  phrase={"they constantly try"}
                  isInView={isInView}
                />
              </li>
              <li>
                <AnimatedText
                  phrase={"in compositions of"}
                  isInView={isInView}
                />
              </li>
              <li>
                <AnimatedText
                  phrase={"an apparent simplicity,"}
                  isInView={isInView}
                />
              </li>
              <li>
                <AnimatedText
                  phrase={"to hatch a sense of"}
                  isInView={isInView}
                />
              </li>
              <li>
                <AnimatedText phrase={"strangeness and"} isInView={isInView} />
              </li>
              <li>
                <AnimatedText
                  phrase={"vibrant sensuality."}
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
                <AnimatedText
                  phrase={"Air France Magazine"}
                  isInView={isInView}
                />
                <li>
                  <AnimatedText phrase={"Bulgari"} isInView={isInView} />
                </li>
                <li>
                  <AnimatedText phrase={"Cartier"} isInView={isInView} />
                </li>
                <li>
                  <AnimatedText phrase={"Elle"} isInView={isInView} />
                </li>
                <li>
                  <AnimatedText phrase={"Hermès"} isInView={isInView} />
                </li>
                <li>
                  <AnimatedText phrase={"Jil Sander"} isInView={isInView} />
                </li>
                <li>
                  <AnimatedText phrase={"Miu Miu"} isInView={isInView} />
                </li>
                <li>
                  <AnimatedText phrase={"Libération"} isInView={isInView} />
                </li>
                <li>
                  <AnimatedText phrase={"M, Le Monde:"} isInView={isInView} />
                </li>
                <li>
                  <AnimatedText phrase={"Marie-Claire:"} isInView={isInView} />
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
                <AnimatedText
                  phrase={"André Étienne live and work"}
                  isInView={isInView}
                />
              </li>
              <li>
                <AnimatedText phrase={"in Paris"} isInView={isInView} />
              </li>
              <li className=" max-md:mt-4">
                <AnimatedText
                  phrase={"studio@paulethenriette.com"}
                  isInView={isInView}
                />
              </li>
              <li>
                <AnimatedText
                  phrase={"+33 6 84 20 68 96"}
                  isInView={isInView}
                />
              </li>
              <li className="">
                <AnimatedText
                  phrase={"+33 6 20 37 15 29"}
                  isInView={isInView}
                />
              </li>
              <li className=" max-md:mt-4">
                <AnimatedText phrase={"Instagram"} isInView={isInView} />
              </li>
              <li className=" max-md:mt-4">
                <AnimatedText
                  phrase={"represented by FMA Le Bureau"}
                  isInView={isInView}
                />
              </li>
              <li className=" max-md:mt-4">
                <AnimatedText
                  phrase={"studio@paulethenriette.com"}
                  isInView={isInView}
                />
              </li>
              <li className="">
                <AnimatedText
                  phrase={"+33 6 20 37 15 29"}
                  isInView={isInView}
                />
              </li>
            </ul>
          </div>
        </div>
        <div className=" hidden md:w-[90%] md:flex md:justify-between md:items-end  md:mt-20">
          <div className="text-8xl uppercase font-bold text-center">
            <AnimatedText phrase={"André Étienne"} isInView={isInView} />
          </div>
          <div className=" flex relative w-[30vw] max-w-[200px] aspect-[4/5]">
            <Image src={img} alt="img" fill className=" object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
