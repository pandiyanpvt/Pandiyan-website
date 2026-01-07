import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] lg:min-h-screen flex items-center bg-[#1a1f3c] overflow-hidden pt-20">

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0">
        {/* Network Pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #4f46e5 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}
        />

        {/* Animated Glows */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[150px]"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-white leading-tight mb-6">
                Empowering Businesses <br />
                with <span className="text-[#f39c12]">Technology</span>
              </h1>

              <p className="text-lg text-blue-100/70 mb-10 leading-relaxed max-w-xl">
                Leveraging deep expertise, our team has delivered over 25 software products
                across diverse industries like agritech, healthcare, ticketing, and real estate.
                We handle everything, from design to launch and ongoing maintenance.
              </p>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link
                  to="/services"
                  className="px-8 py-4 bg-[#f39c12] hover:bg-[#e67e22] text-white font-bold rounded-lg transition-all shadow-lg shadow-orange-500/20 active:scale-95 text-lg"
                >
                  Explore our works
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right Visual Element */}
          <div className="relative hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              {/* Main Decorative Image Placeholder/Container */}
              {/* Main Decorative Image */}
              <div className="relative z-10 w-full max-w-[600px] mx-auto flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 to-purple-600/30 blur-[60px] rounded-full -z-10" />
                <motion.img
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 1, 0, -1, 0]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  src="/hero-tech.png"
                  alt="Future Technology"
                  className="w-full h-auto rounded-2xl shadow-2xl border border-white/10"
                />
              </div>
            </motion.div>
          </div>

        </div>
      </div>

    </section>
  );
}



