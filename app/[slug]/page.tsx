import { sampleData } from "@/sampleData";
import { notFound } from "next/navigation";
import React from "react";
import Image from "next/image";
 
const getPageData = (slug: string) => {
  return sampleData.find((sample) => sample.slug === slug);
};
const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const data = getPageData(slug);
  if (!data) return notFound();
  console.log(data);
  return (
    <section>
      <div className=" container mt-20">
        <div className=" mt-4 flex flex-col max-md:justify-center max-md:items-center gap-4">
          <div className=" flex flex-col md:flex-row md:items-start gap-4 md:gap-36">
            <div className=" relative w-[80vw] max-w-[600px] aspect-[3/4] md:aspect-[3/4] md:max-w-[650px]">
              <Image src={data.url} alt="img" fill />
            </div>
            <div className=" relative w-[80vw] max-w-[600px] aspect-[3/4] md:max-w-[250px]">
              <Image
                src={data.images[0]}
                alt="img"
                fill
                className=" object-cover"
              />
            </div>
          </div>
          <div className=" md:flex md:justify-center md:items-center">
            <div className=" relative w-[80vw] max-w-[800px] aspect-[3/4]">
              <Image
                src={data.images[1]}
                alt="img"
                fill
                className=" object-cover"
              />
            </div>
          </div>
          <div className=" relative w-[80vw] max-w-[700px] aspect-[3/4]">
            <Image
              src={data.images[2]}
              alt="img"
              fill
              className=" object-cover"
            />
          </div>{" "}
          <div className=" flex flex-col md:flex-row gap-4">
            <div className=" relative w-[80vw] max-w-[450px] aspect-[3/4]">
              <Image
                src={data.images[3]}
                alt="img"
                fill
                className=" object-cover"
              />
            </div>{" "}
            <div className=" relative w-[80vw] max-w-[450px] aspect-[3/4]">
              <Image
                src={data.images[4]}
                alt="img"
                fill
                className=" object-cover"
              />
            </div>
          </div>
        </div>
        <div className=" flex md:justify-end">
          <div className="py-12 flex max-md:flex-col max-md:gap-32 justify-between w-full  md:w-1/2">
            <div className=" flex w-full max-md:justify-between md:gap-32">
              <div className="max-w-[60px]">{data.client}</div>
              <div className=" flex flex-col">
                <span>{data.location}</span>
                <span>{data.date}</span>
              </div>
            </div>
            <div className="text-[12px] font-bold">
              <ul>
                <li>Contact </li>
                <li>André Étienne Live </li>
                <li> and work in New York</li>
                <li>studio@andre-etienne.com</li>
                <li>+1 (646) 555-1832 </li>
                <li>+1 (917) 555-2049 </li>
                <li>Instagram</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
