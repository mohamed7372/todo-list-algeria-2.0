import React from "react";
import SectionCards from "../components/SectionCards";
import CategoryCard from "../components/CategoryCard";
import TaskCard from "../components/TaskCard";

const HomePage = () => {
  return (
    <main>
      <div className="space-y-8">
        <h1 className="first-letter:capitalize text-4xl font-semibold text-gray-300">
          Hello Algeria 2.0!
        </h1>
        <SectionCards title={"categories"} css="space-x-4">
          {Array.from({ length: 2 }).map((item) => (
            <CategoryCard name={"sdf"} number={10} number_active_task={5} />
          ))}
        </SectionCards>
        <SectionCards title={"today's tasks"} css={"flex-col"}>
          <div className="h-[30%] overflow-y-auto w-full space-y-2 pr-4">
            {Array.from({ length: 5 }).map((item) => (
              <TaskCard task={"asdfasdf"} />
            ))}
          </div>
        </SectionCards>
      </div>
    </main>
  );
};

export default HomePage;
