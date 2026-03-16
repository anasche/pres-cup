import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900">Trusted by Industry Leaders</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-12 items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Logo placeholders - these would be replaced with actual assets */}
          <div className="text-2xl font-bold">TECHCORP</div>
          <div className="text-2xl font-bold">STREAMLINE</div>
          <div className="text-2xl font-bold">NEXUS</div>
          <div className="text-2xl font-bold">VORTEX</div>
          <div className="text-2xl font-bold">QUANTUM</div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
