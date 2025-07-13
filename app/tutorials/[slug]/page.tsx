import Link from "next/link";
import {tutorials} from "../tutorialData";

interface TutorialPageProps {
  params: {
    slug: string;
  };
}

export default function TutorialPage({ params }: TutorialPageProps) {
const tutorial = tutorials.find((p) => p.link === `/tutorials/${params.slug}`);

  if (!tutorial) {
    return <div className="p-8 text-center text-red-500">Tutorial not found.</div>;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white py-12">
      <div className="container mx-auto mt-5 px-4 max-w-3xl">
        <div
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full text-sm">
                    {tutorial.level}
                  </span>
                  <span className="ml-2 text-gray-600 dark:text-gray-300">
                    {tutorial.duration}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{tutorial.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {tutorial.description}
                </p>
              </div>
            </div>
      </div>
    </div>
  );
}
