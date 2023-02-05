import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import projectImage from "../public/back2.jpg";

const SocialTracker: NextPage = () => {
  return (
    <div>
      <h1 className="text-xl text-indigo-600 mb-4 font-bold">
        Interactive Catalog
      </h1>
      <Image src={projectImage} />
      <div className="mt-4">
      BackPacker is a resource for gear reviews, hiking, and outdoor information with destinations and skills required for outdoor areas. This ranges from Camping to hiking. My primary goal for this project was to create an interactive catalog that could not only stay under BackPackers well mapped out education but further, educate users while also further engaging users with an interactive mobile app that could show and demonstrate items’ features while feeling simple and modern.
      </div>
      <div className="mt-6">
        <Link href="/">
          <a className="font-bold underline hover:text-indigo-600">Back</a>
        </Link>
      </div>
    </div>
  );
};

export default SocialTracker;
