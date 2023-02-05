import type { NextPage } from "next";
import Profile from "../components/profile";
import ProjectPreview, {
  ProjectPreviewInterface,
} from "../components/project_preview";

const Home: NextPage = () => {
  const projectMetadataArray = [];

  projectMetadataArray.push({
    title: "colloquium-project",
    desc: "Itteration Cycles",
    linkUrl: "/colloquium-project",
    image: "/plan2.jpg",
  });

  projectMetadataArray.push({
    title: "Printable Augmented Reality",
    desc: "Hands on Augmented Reality",
    linkUrl: "/print",
    image: "/ar2.jpg",
  });

  projectMetadataArray.push({
    title: "Interactive Catlalog",
    desc: "Backpacker Magazine",
    linkUrl: "/backpack",
    image: "/back2.jpg",
  });

  const projectPreviewElements = [];

  for (let i = 0; i < projectMetadataArray.length; i++) {
    const metaData = projectMetadataArray[i];
    const element = <ProjectPreview {...metaData} key={i} />;
    projectPreviewElements.push(element);
  }

  return (
    <div>
      <Profile />
      <div className="mt-4 flex flex-col gap-4">{projectPreviewElements}</div>
    </div>
  );
};

export default Home;
