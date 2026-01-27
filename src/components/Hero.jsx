import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-[90vh] lg:min-h-screen flex items-center overflow-hidden pt-20"
      style={{
        backgroundImage: 'url(/hero-tech.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-[#1a1f3c]/80 z-0"></div>

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
          className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] mix-blend-multiply"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[150px] mix-blend-multiply"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 12, repeat: Infinity, delay: 4 }}
          className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] mix-blend-multiply"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-20 3xl:px-24 4xl:px-32 relative z-10 max-w-[1920px]">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl 3xl:max-w-5xl 4xl:max-w-6xl mx-auto"
        >
          {/* Content */}
          <div className="text-center lg:text-left max-w-2xl 3xl:max-w-3xl 4xl:max-w-4xl mx-auto lg:mx-0">
            <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6 md:space-y-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-7xl font-black text-white leading-tight bg-gradient-to-r from-white via-blue-100 to-[#f39c12] bg-clip-text text-transparent">
                Empowering Businesses <br className="hidden sm:block" />
                with <span className="text-[#f39c12]">Technology</span>
              </h1>

              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-100/70 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Leveraging deep expertise, our team has delivered over 25 software products
                across diverse industries like agritech, healthcare, ticketing, and real estate.
                We handle everything, from design to launch and ongoing maintenance.
              </p>

              <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start pt-2">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/services"
                    className="inline-block px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-gradient-to-r from-[#f39c12] to-[#e67e22] hover:from-[#e67e22] hover:to-[#f39c12] text-white font-bold rounded-lg transition-all shadow-lg shadow-orange-500/30 active:scale-95 text-sm sm:text-base md:text-lg"
                  >
                    Explore our works
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

    </section>
  );
}



