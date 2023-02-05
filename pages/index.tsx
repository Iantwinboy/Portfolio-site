import type { NextPage } from "next";
import Profile from "../components/profile";
import ProjectPreview, {
  ProjectPreviewInterface,
} from "../components/project_preview";

const Home: NextPage = () => {
  const projectMetadataArray = [];

  projectMetadataArray.push({
    title: "Colloquium Project",
    desc: "Itteration Cycles",
    linkUrl: "/data_analysis",
    image: "/plan2.jpg",
  });

  projectMetadataArray.push({
    title: "Printable Augmented Reality",
    desc: "Hands on Augmented Reality",
    linkUrl: "/sound_processing",
    image: "/ar2.jpg",
  });

  projectMetadataArray.push({
    title: "Interactive Catlalog",
    desc: "Backpacker Magazine",
    linkUrl: "/social_tracker",
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
