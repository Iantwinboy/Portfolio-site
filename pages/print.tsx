import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import projectImage from "../public/ar2.jpg";

const SoundProcessing: NextPage = () => {
  return (
    <div>
      <h1 className="text-xl text-indigo-600 mb-4 font-bold">
        Augmented Reality
      </h1>
      <Image src={projectImage} />
      <div className="mt-4">
      When first starting this project we had an almost infinite way to go about it. It had to be tied to some sort of physical item be it a postcard to poser. I decided on going with the idea of a brochure tied to Zion National Park, a park native to Utah. I have gone to Ziona a few times and despite not enjoying camping have found it to be rather enjoyable there. So I wanted to make an A.R experience that ties with the commonly used brochures you pick up before attending Zion. I wanted to focus on the warning symbols and cool displays of Zion, especially the Narrows. A display of common things to use and visit as well as warnings of potential safety issues because I had experienced a few of them.
      </div>
      <div className="mt-6">
        <Link href="/">
          <a className="font-bold underline hover:text-indigo-600">Back</a>
        </Link>
      </div>
    </div>
  );
};

export default SoundProcessing;
