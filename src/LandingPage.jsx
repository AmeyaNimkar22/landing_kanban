import { motion } from "framer-motion";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import { ArrowRight, Plus, MoveRight } from "lucide-react";

const columnAnim = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.25 } }),
};

export default function LandingPage() {
  return (
    <ParallaxProvider>
      <div className="min-h-screen bg-gradient-to-b from-[#f3f0ff] via-[#eef3ff] to-white text-gray-900 overflow-x-hidden">
        {/* Navbar */}
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-6">
          <h1 className="text-xl font-semibold tracking-tight">KanBan Board</h1>
          <a
            href="https://kanban-board-chi-ashy.vercel.app/"
            className="rounded-full bg-indigo-600 px-5 py-2 text-sm font-medium text-white shadow-md hover:scale-105 transition"
          >
            Launch App
          </a>
        </nav>

        {/* Hero Section with Parallax */}
        <section className="relative max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold leading-tight mb-6">
              Your Work, <span className="text-indigo-600">Perfectly in Flow</span>
            </h2>
            <p className="text-lg text-gray-500 mb-8">
              A visually elegant Kanban board designed to help you think clearly,
              move faster, and stay organized.
            </p>
            <a
              href="https://kanban-board-chi-ashy.vercel.app/"
              className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-7 py-4 text-white font-medium shadow-xl hover:scale-105 transition"
            >
              Start Organizing <ArrowRight size={18} />
            </a>
          </motion.div>

          <Parallax speed={-15}>
            <div className="relative">
              <div className="absolute -top-16 -left-16 h-72 w-72 rounded-full bg-indigo-300/40 blur-3xl" />
              <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-purple-300/40 blur-3xl" />
              <div className="relative rounded-3xl bg-white/70 backdrop-blur-xl shadow-2xl p-6">
                <img
                  src="/edits/hero_img.jpg"
                  alt="Kanban UI"
                  className="rounded-2xl"
                />
              </div>
            </div>
          </Parallax>
        </section>

        {/* Scroll Triggered Section */}
        <section className="max-w-7xl mx-auto px-6 py-28">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-semibold mb-16"
          >
            Visualize Your Workflow
          </motion.h3>

          {/* Animated Kanban Mockup */}
          <div className="grid md:grid-cols-3 gap-8 text-indigo-600">
            {["To Do", "In Progress", "Done"].map((col, i) => (
              <motion.div
                key={col}
                variants={columnAnim}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="rounded-3xl bg-gradient-to-br from-white to-indigo-50 p-6 shadow-lg"
              >
                <h4 className="font-semibold mb-4 flex items-center justify-between">
                  {col}
                  <Plus size={16} />
                </h4>

                {[1, 2].map((card) => (
                  <motion.div
                    key={card}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.3 + card * 0.15 }}
                    className="mb-3 rounded-xl bg-white p-4 shadow-md"
                  >
                    <p className="text-sm text-indigo-400">Task {card}</p>
                    <MoveRight className="mt-2 text-indigo-400" size={14} />
                  </motion.div>
                ))}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Features – Alternating Layout */}
        <section className="max-w-7xl mx-auto px-6 py-32 space-y-32 text-indigo-600">
          {[{
            title: "Create Your Account",
            desc: "Get started in seconds with a clean onboarding flow. Your boards are saved securely and accessible anytime.",
            img: "/edits/f1.png",
          },{
            title: "Edit Tasks Effortlessly",
            desc: "Add, move, and update tasks with fluid drag-and-drop interactions designed to keep you in flow.",
            img: "/edits/f2.png",
          },{
            title: "Smooth & Minimal UI",
            desc: "Every animation is subtle, intentional, and calming — helping you focus without distractions.",
            img: "/edits/f3.png",
          },{
            title: "Phone Friendly",
            desc: "Fully responsive design ensures a seamless experience across mobile, tablet, and desktop devices.",
            img: "/edits/f4.png",
          }].map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid md:grid-cols-2 gap-16 items-center"
            >
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className={i % 2 !== 0 ? "md:order-2" : ""}
              >
                <h3 className="text-4xl font-bold mb-6">{f.title}</h3>
                <p className="text-lg text-gray-600 max-w-lg">{f.desc}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9 }}
                className={i % 2 !== 0 ? "md:order-1" : ""}
              >
                <div className="relative">
                  <div className="absolute -inset-4 rounded-3xl  from-indigo-300/40 to-purple-300/40 blur-2xl" />
                  <img src={f.img} alt={f.title} className="relative " />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </section>

        {/* Parallax CTA */}
        <section className="relative py-36 overflow-hidden">
          <Parallax speed={10}>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-300/40 to-indigo-300/40 blur-3xl" />
          </Parallax>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative max-w-5xl mx-auto px-6 text-center"
          >
            <h3 className="text-4xl font-bold mb-6">From Chaos to Clarity</h3>
            <p className="text-lg text-gray-600 mb-10">A calmer, smarter way to manage your daily tasks.</p>
            <a href="https://kanban-board-chi-ashy.vercel.app/" className="inline-block rounded-full bg-indigo-600 px-9 py-4 text-white font-medium shadow-xl hover:scale-105 transition">Launch KanbanFlow</a>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="bg-gradient-to-t from-[#eef3ff] to-white border-t">
          <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-4 gap-12">
            <div>
              <h4 className="text-xl font-semibold mb-4">Kanban Board</h4>
              <p className="text-gray-600">A beautifully crafted Kanban board for modern productivity.</p>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Product</h5>
              <ul className="space-y-2 text-gray-600">
                <li>Features</li>
                <li>Roadmap</li>
                <li>Updates</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Resources</h5>
              <ul className="space-y-2 text-gray-600">
                <li>Docs</li>
                <li>Support</li>
                <li>Community</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Get Started</h5>
              <a href="https://kanban-board-chi-ashy.vercel.app/" className="inline-block mt-2 rounded-full bg-indigo-600 px-6 py-3 text-white shadow hover:scale-105 transition">Open App</a>
            </div>
          </div>
          <div className="text-center text-sm text-gray-500 pb-6">© {new Date().getFullYear()} Kanban Board. Designed with focus.</div>
        </footer>
      </div>
    </ParallaxProvider>
  );
}
