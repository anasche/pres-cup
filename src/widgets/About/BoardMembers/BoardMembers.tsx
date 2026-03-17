import Title from "@/components/Title";
import React from "react";

const BoardMembers: React.FC = () => {
  const members = Array(8).fill({
    name: "Board Member Name",
    position: "Position",
  });

  return (
    <section className="bg-white py-24 px-4 border-t border-gray-100">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20 space-y-2">
          <Title dark={true}>Board Members</Title>
          <p className="font-medium text-[17px] leading-none tracking-tightest text-gray-700 max-w-sm md:max-w-xl">
            Meet the Board{" "}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {members.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center group text-center"
            >
              <div className="w-full aspect-square rounded-[40px] bg-gray-200 mb-6 transition-transform duration-500 group-hover:scale-105 shadow-sm border border-gray-100 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1 font-serif uppercase tracking-tight">
                {member.name}
              </h3>
              <p className="text-gray-500 text-sm font-medium tracking-widest uppercase">
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
