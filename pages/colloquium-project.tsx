import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import projectImage from "../public/plan2.jpg";

const DataAnalysis: NextPage = () => {
  return (
    <div>
      <h1 className="text-xl text-indigo-600 mb-4 font-bold">
        Colliquium Project
      </h1>
      <Image src={projectImage} />
      <div className="mt-4">
      Tasked with focusing on a feature of a product or service that we would like to improve on over the course of the semester. With lots of current services having their issues, I chose to stick to a program that bothered me personally and is used a lot by its users, the battlenet messaging/friend system.
      </div>
      <div className="mt-6">
        <Link href="/">
          <a className="font-bold underline hover:text-indigo-600">Back</a>
        </Link>
      </div>
    </div>
  );
};

export default DataAnalysis;
