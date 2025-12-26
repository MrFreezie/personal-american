import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Book, Play, X, ChevronDown, Skull, Star, User, Medal, Shield, Radio } from 'lucide-react';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  const quotes = [
    {
      text: "I fell into the dystopian narrative with immediate ease thanks to the immersive and atmospheric language, and the story rooted in current geopolitical tensions made everything feel gripping and eerily plausible.",
      author: "K.C. Finn"
    },
    {
      text: "Grimy, raw, beautifully written. I couldn't stop turning pages.",
      author: "Hugo Stoltz"
    },
    {
      text: "The Continentals is, somehow, even better than book one. Hollywood, take notes.",
      author: "Howard Cooper"
    },
    {
      text: "The themes of survival, loyalty, and patriotism are woven seamlessly into the narrative, providing depth to the action-packed storyline.",
      author: "Anna Bachmann"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 7500); // Updated to 7.5 seconds
    return () => clearInterval(interval);
  }, []);

  const scrollToBooks = () => {
    document.getElementById('books')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-gray-200 terminal-effect">
      {/* Hero Section */}
      <div className="h-screen bg-wasteland bg-cover bg-center parallax-bg relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="font-orbitron text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-apocalypse-orange flicker-text text-stroke">
              In the ashes of America,
              <br />
              two stories rise from the ruin.
            </h1>
            <p className="font-terminal text-xl md:text-2xl text-apocalypse-green mb-8 opacity-90">
              Dive into Edward Pocock's gripping post-collapse saga—where justice rides alone, 
              and freedom is a bloodstained path.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToBooks}
                className="bg-apocalypse-orange text-black font-orbitron py-3 px-8 rounded-md flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                <Book className="w-5 h-5" />
                Enter the Calamity
              </motion.button>
              <motion.a
                href="https://www.youtube.com/live/KjNDAXMTHPI?si=vvNudRrVs-HhwDTE"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-apocalypse-orange text-apocalypse-orange font-orbitron py-3 px-8 rounded-md flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                <Play className="w-5 h-5" />
                Podcast
              </motion.a>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
              <ChevronDown 
                className="w-8 h-8 text-apocalypse-orange animate-pulse-slow cursor-pointer"
                onClick={scrollToBooks}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Books Section */}
      <div id="books" className="py-20 bg-gradient-to-b from-black to-apocalypse-brown/20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Book 1 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="book-card">
                <motion.div
                  whileHover={{ 
                    rotateY: 5,
                    rotateX: 1,
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                  className="bg-black/60 p-8 rounded-lg border border-apocalypse-metal/30 crt-effect transform perspective-1000"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <Skull className="w-8 h-8 text-apocalypse-red" />
                    <h2 className="font-orbitron text-3xl text-apocalypse-red">American Calamity</h2>
                  </div>
                  <div className="flex gap-8 items-start">
                    <div className="w-1/2">
                      <motion.img
                        src="https://images-na.ssl-images-amazon.com/images/P/1958891800.01.L.jpg"
                        alt="American Calamity Book Cover"
                        className="w-full rounded-lg shadow-2xl book-cover"
                        whileHover={{ scale: 1.05 }}
                      />
                    </div>
                    <div className="w-1/2">
                      <p className="font-terminal text-gray-400 mb-4">
                        When the lights go out and the nation turns on itself, one man and an old tank fight to reclaim America from the ashes.
                      </p>
                      <div className="flex items-center gap-1 mb-6">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-apocalypse-orange text-apocalypse-orange" />
                        ))}
                        <span className="ml-2 text-apocalypse-orange">(5/5)</span>
                      </div>
                      <motion.a
                        href="https://www.amazon.com/dp/1958891800?psc=1&language=en_US"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-apocalypse-red text-black font-orbitron py-3 px-6 rounded inline-flex items-center gap-2"
                      >
                        <Book className="w-5 h-5" />
                        Buy Now on Amazon
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Book 2 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="book-card">
                <motion.div
                  whileHover={{ 
                    y: -20,
                    transition: { duration: 0.3 }
                  }}
                  className="bg-black/60 p-8 rounded-lg border border-apocalypse-metal/30 crt-effect"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <Skull className="w-8 h-8 text-apocalypse-green" />
                    <h2 className="font-orbitron text-3xl text-apocalypse-green">
                      The Continentals
                    </h2>
                  </div>
                  <div className="flex gap-8 items-start">
                    <div className="w-1/2">
                      <motion.img
                        src="https://images-na.ssl-images-amazon.com/images/P/1959620649.01.L.jpg"
                        alt="The Continentals Book Cover"
                        className="w-full rounded-lg shadow-2xl book-cover"
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                    <div className="w-1/2">
                      <p className="font-terminal text-gray-400 mb-4">
                        When the Continentals march, the world watches. But the battle for freedom has just begun.
                      </p>
                      <div className="flex items-center gap-1 mb-6">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-apocalypse-orange text-apocalypse-orange" />
                        ))}
                        <span className="ml-2 text-apocalypse-orange">(5/5)</span>
                      </div>
                      <motion.a
                        href="https://www.amazon.com/American-Calamity-Continentals-Edward-Pocock/dp/1959620649/ref=pd_sbs_d_sccl_2_1/131-2302736-6613323?psc=1"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-apocalypse-green text-black font-orbitron py-3 px-6 rounded inline-flex items-center gap-2"
                      >
                        <Book className="w-5 h-5" />
                        Continue the Journey
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Author Section */}
      <div className="py-20 bg-tank bg-cover bg-center bg-fixed relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-black/40 backdrop-blur-sm p-8 rounded-lg border border-apocalypse-metal/30 dossier-card">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative">
                  <motion.div
                    initial={{ x: -50 }}
                    whileInView={{ x: 0 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-apocalypse-orange/20 to-transparent mix-blend-overlay"></div>
                    <img
                      src="/ed_pocock_silhouette2.jpg"
                      alt="Edward Pocock"
                      className="rounded-lg shadow-2xl vintage-photo w-full max-w-[300px] mx-auto border-2 border-apocalypse-metal/30"
                    />
                    <div className="absolute top-0 left-0 w-full h-full vintage-overlay rounded-lg"></div>
                  </motion.div>
                </div>
                <div>
                  <motion.div
                    initial={{ x: 50 }}
                    whileInView={{ x: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <User className="w-6 h-6 text-apocalypse-orange" />
                      <h2 className="font-orbitron text-2xl text-apocalypse-orange">Edward Pocock</h2>
                    </div>
                    <div className="space-y-4 font-terminal text-gray-300">
                      <div className="flex items-center gap-2">
                        <Medal className="w-5 h-5 text-apocalypse-red" />
                        <span>USAF Veteran</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Shield className="w-5 h-5 text-apocalypse-green" />
                        <span>Retired Police Commander</span>
                      </div>
                      <p className="text-gray-400 mt-6 typewriter-text">
                        "A vociferous consumer of white papers and general research, Ed believes that a good fictional book can and should provide real nuggets of knowledge. He believes American Calamity does just that."
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Social Proof Section */}
      <div className="py-20 bg-black/90 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Radio className="w-8 h-8 text-apocalypse-green animate-pulse" />
                <h2 className="font-orbitron text-3xl text-apocalypse-green">Intercepted Transmissions</h2>
              </div>
            </div>
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentQuoteIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="bg-black/60 p-8 rounded-lg border border-apocalypse-metal/30 transmission-card"
                >
                  <div className="space-y-6">
                    <p className="font-terminal text-xl text-apocalypse-green mb-4 transmission-text">
                      "{quotes[currentQuoteIndex].text}"
                    </p>
                    <p className="font-orbitron text-apocalypse-orange text-right">
                      - {quotes[currentQuoteIndex].author}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
              <div className="absolute inset-0 transmission-overlay"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black py-8 border-t border-apocalypse-metal/30">
        <div className="container mx-auto px-4 text-center font-terminal text-apocalypse-metal">
          <p>&copy; 2025 Edward Pocock | SURVIVE. ADAPT. OVERCOME.</p>
        </div>
      </footer>

      {/* Trailer Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center modal-overlay"
          >
            <div className="relative w-full max-w-4xl mx-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsModalOpen(false)}
                className="absolute -top-12 right-0 text-white"
              >
                <X className="w-8 h-8" />
              </motion.button>
              <div className="relative pt-[56.25%]">
                <iframe
                  className="absolute inset-0 w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/KjNDAXMTHPI"
                  title="Book Trailer"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;