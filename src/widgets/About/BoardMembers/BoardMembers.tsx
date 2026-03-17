import Title from "@/components/Title";
import React from "react";

const BoardMembers: React.FC = () => {
  const members = Array(8).fill({
    name: "Board Memeber Name",
    position: "Position",
  });

  return (
    <section className="bg-white py-16 px-4 border-t border-gray-100">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-14 space-y-2">
          <Title dark={true}>Board Memebers</Title>
          <p className="font-medium text-[15px] leading-none tracking-tightest text-gray-500">
            Meet the board
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {members.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
            >
              <div className="w-full aspect-square rounded-[20px] bg-gray-200 mb-4 overflow-hidden">
              </div>
              <h3 className="text-[15px] font-bold text-gray-900 mb-1 leading-snug">
                {member.name}
              </h3>
              <p className="text-gray-400 text-[13px] font-medium">
                {member.position}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BoardMembers;
