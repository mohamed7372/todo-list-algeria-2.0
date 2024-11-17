import React, { useState } from "react";
import SectionCards from "../components/SectionCards";
import CategoryCard from "../components/CategoryCard";
import AddTask from "../components/AddTask";
import categoriesData from "../data/categories.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SearchBar from "../layout/SearchBar";
import ICONS from "../assets/constants/icons";
import TaskCard from "../components/TaskCard";

const HomePage = () => {
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const tasks = [
    {
      id: 1,
      title: "learn advanced react",
    },
    {
      id: 2,
      title: "learn hooks",
    },
    {
      id: 3,
      title: "learn api context",
    },
  ];

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <main className="relative h-full">
      <div className="space-y-8">
        {/* header of page  */}
        <div className="flex items-center justify-between">
          <h1 className="first-letter:capitalize text-2xl md:text-4xl font-semibold text-gray-300">
            Hello Algeria 2.0!
          </h1>
          <SearchBar search={search} setSearch={setSearch} />
        </div>

        {/* section to display categories  */}
        <SectionCards title={"categories"} css="space-x-4">
          <Swiper slidesPerView="auto" spaceBetween={20}>
            {categoriesData?.map((item) => (
              <SwiperSlide
                style={{
                  width: "200px",
                }}
              >
                <CategoryCard
                  name={item?.name}
                  number={10}
                  number_active_task={5}
                  color={item?.color}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </SectionCards>

        {/* section to display tasks  */}
        <SectionCards title={"today's tasks"} css={"flex-col"}>
          <div className="h-[300px]  overflow-y-auto w-full space-y-2 pr-4">
            {tasks?.map((item) => (
              <TaskCard task={item?.title} key={item?.id} />
            ))}
          </div>
        </SectionCards>
      </div>

      {/* button to add new task  */}
      <button
        onClick={showModal}
        className="absolute -bottom-0 -right-0 bg-blue-500 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-500/90 duration-300 transform"
      >
        <img src={ICONS.PLUS} alt="" className="w-6" />
      </button>

      {/* modal to open form add task  */}
      <AddTask isModalOpen={isModalOpen} handleCancel={handleCancel} />
    </main>
  );
};

export default HomePage;
