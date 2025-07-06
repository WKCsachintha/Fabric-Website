// import React from 'react';
// import { Heart, Users, Award, Globe } from 'lucide-react';

// const OurStory = () => {
//   return (
//     <div className="min-h-screen bg-stone-50">
//       {/* Hero Section */}
//       <div className="bg-gradient-to-r from-rose-100 to-stone-100 py-20">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
//             Our Story
//           </h1>
//           <p className="text-xl text-slate-600 leading-relaxed">
//             Every piece tells a story. Every story deserves the perfect piece.
//           </p>
//         </div>
//       </div>

//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         {/* Main Story */}
//         <div className="prose prose-lg max-w-none mb-16">
//           <div className="bg-white rounded-2xl p-8 shadow-sm mb-12">
//             <h2 className="text-2xl font-bold text-slate-800 mb-6">The Beginning</h2>
//             <p className="text-slate-600 leading-relaxed mb-6">
//               Pattern & Piece was born from a simple belief: fashion should be a celebration of individuality, 
//               not a constraint. Founded in 2020 by a team of passionate designers and fashion enthusiasts, 
//               we set out to create clothing that speaks to every chapter of your life story.
//             </p>
//             <p className="text-slate-600 leading-relaxed mb-6">
//               Our journey began in a small studio in New York, where we spent countless hours perfecting 
//               patterns, selecting fabrics, and crafting pieces that would become the foundation of our brand. 
//               We believed that great fashion shouldn't be exclusive – it should be accessible, sustainable, 
//               and meaningful.
//             </p>
//             <p className="text-slate-600 leading-relaxed">
//               Today, Pattern & Piece has grown into a global community of storytellers, each wearing their 
//               unique narrative through our carefully curated collections. From professional elegance to 
//               casual comfort, from special occasions to everyday moments, we're here to help you tell your story.
//             </p>
//           </div>
//         </div>

//         {/* Values */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
//           <div className="bg-white rounded-2xl p-8 shadow-sm">
//             <Heart className="text-rose-400 mb-4" size={32} />
//             <h3 className="text-xl font-bold text-slate-800 mb-4">Crafted with Love</h3>
//             <p className="text-slate-600">
//               Every piece is designed with meticulous attention to detail, using premium materials 
//               and ethical manufacturing practices that respect both people and planet.
//             </p>
//           </div>
//           <div className="bg-white rounded-2xl p-8 shadow-sm">
//             <Users className="text-rose-400 mb-4" size={32} />
//             <h3 className="text-xl font-bold text-slate-800 mb-4">Community First</h3>
//             <p className="text-slate-600">
//               We believe fashion is about connection. Our community of customers, designers, 
//               and partners work together to create something beautiful and meaningful.
//             </p>
//           </div>
//           <div className="bg-white rounded-2xl p-8 shadow-sm">
//             <Award className="text-rose-400 mb-4" size={32} />
//             <h3 className="text-xl font-bold text-slate-800 mb-4">Quality Promise</h3>
//             <p className="text-slate-600">
//               We stand behind every piece we create. Our commitment to quality means you can 
//               trust that your Pattern & Piece items will be cherished for years to come.
//             </p>
//           </div>
//           <div className="bg-white rounded-2xl p-8 shadow-sm">
//             <Globe className="text-rose-400 mb-4" size={32} />
//             <h3 className="text-xl font-bold text-slate-800 mb-4">Sustainable Future</h3>
//             <p className="text-slate-600">
//               We're committed to reducing our environmental impact through sustainable materials, 
//               responsible production, and circular fashion practices.
//             </p>
//           </div>
//         </div>

//         {/* Team Section */}
//         <div className="bg-white rounded-2xl p-8 shadow-sm mb-16">
//           <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">Meet Our Team</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="text-center">
//               <div className="w-24 h-24 bg-gradient-to-br from-rose-400 to-rose-500 rounded-full mx-auto mb-4"></div>
//               <h3 className="font-semibold text-slate-800">chavindu sachintha</h3>
//               <p className="text-slate-600 text-sm">Creative Director</p>
//             </div>
//             <div className="text-center">
//               <div className="w-24 h-24 bg-gradient-to-br from-stone-400 to-stone-500 rounded-full mx-auto mb-4"></div>
//               <h3 className="font-semibold text-slate-800">dilitha hansindu</h3>
//               <p className="text-slate-600 text-sm">Head of Design</p>
//             </div>
//             <div className="text-center">
//               <div className="w-24 h-24 bg-gradient-to-br from-lime-400 to-lime-500 rounded-full mx-auto mb-4"></div>
//               <h3 className="font-semibold text-slate-800">maduhsa asangi</h3>
//               <p className="text-slate-600 text-sm">Sustainability Lead</p>
//             </div>
//           </div>
//         </div>

//         {/* Mission Statement */}
//         <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-8 text-center text-white">
//           <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
//           <p className="text-lg leading-relaxed">
//             To create fashion that empowers individuals to express their authentic selves, 
//             while building a more sustainable and inclusive industry for future generations.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OurStory;




import React from 'react';
import { Heart, Users, Award, Globe } from 'lucide-react';
import chavinduImg from '../assets/chavindu.jpg';
import dilithaImg from '../assets/dilitha.jpg';
import maduhsaImg from '../assets/madusha.jpg';

const OurStory = () => {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-rose-100 to-stone-100 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Our Story
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Every piece tells a story. Every story deserves the perfect piece.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Story */}
        <div className="prose prose-lg max-w-none mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-sm mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">The Beginning</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Pattern & Piece was born from a simple belief: fashion should be a celebration of individuality, 
              not a constraint. Founded in 2020 by a team of passionate designers and fashion enthusiasts, 
              we set out to create clothing that speaks to every chapter of your life story.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              Our journey began in a small studio in New York, where we spent countless hours perfecting 
              patterns, selecting fabrics, and crafting pieces that would become the foundation of our brand. 
              We believed that great fashion shouldn't be exclusive – it should be accessible, sustainable, 
              and meaningful.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Today, Pattern & Piece has grown into a global community of storytellers, each wearing their 
              unique narrative through our carefully curated collections. From professional elegance to 
              casual comfort, from special occasions to everyday moments, we're here to help you tell your story.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <Heart className="text-rose-400 mb-4" size={32} />
            <h3 className="text-xl font-bold text-slate-800 mb-4">Crafted with Love</h3>
            <p className="text-slate-600">
              Every piece is designed with meticulous attention to detail, using premium materials 
              and ethical manufacturing practices that respect both people and planet.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <Users className="text-rose-400 mb-4" size={32} />
            <h3 className="text-xl font-bold text-slate-800 mb-4">Community First</h3>
            <p className="text-slate-600">
              We believe fashion is about connection. Our community of customers, designers, 
              and partners work together to create something beautiful and meaningful.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <Award className="text-rose-400 mb-4" size={32} />
            <h3 className="text-xl font-bold text-slate-800 mb-4">Quality Promise</h3>
            <p className="text-slate-600">
              We stand behind every piece we create. Our commitment to quality means you can 
              trust that your Pattern & Piece items will be cherished for years to come.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <Globe className="text-rose-400 mb-4" size={32} />
            <h3 className="text-xl font-bold text-slate-800 mb-4">Sustainable Future</h3>
            <p className="text-slate-600">
              We're committed to reducing our environmental impact through sustainable materials, 
              responsible production, and circular fashion practices.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-white rounded-2xl p-8 shadow-sm mb-16">
          <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src={chavinduImg}
                alt="Chavindu Sachintha"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover shadow-md"
              />
              <h3 className="font-semibold text-slate-800">chavindu sachintha</h3>
              <p className="text-slate-600 text-sm">Creative Director</p>
            </div>
            <div className="text-center">
              <img
                src={dilithaImg}
                alt="Dilitha Hansindu"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover shadow-md"
              />
              <h3 className="font-semibold text-slate-800">dilitha hansindu</h3>
              <p className="text-slate-600 text-sm">Head of Design</p>
            </div>
            <div className="text-center">
              <img
                src={maduhsaImg}
                alt="Maduhsa Asangi"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover shadow-md"
              />
              <h3 className="font-semibold text-slate-800">maduhsa asangi</h3>
              <p className="text-slate-600 text-sm">Sustainability Lead</p>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            To create fashion that empowers individuals to express their authentic selves, 
            while building a more sustainable and inclusive industry for future generations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
