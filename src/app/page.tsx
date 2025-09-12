import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans min-h-screen bg-gradient-to-b from-purple-400 to-pink-500 p-8 pb-20 flex flex-col items-center justify-center text-white">
      <main className="flex flex-col items-center gap-8 max-w-4xl mx-auto text-center">
        <h1 className="text-6xl font-bold mb-4 animate-bounce">
          🎉 Happy Birthday Yasir! 🎉
        </h1>
        <div className="text-2xl font-light space-y-4">
          <p className="mb-6">
            On this special day, may all your dreams take flight and your aspirations turn into achievements.
          </p>
          <div className="bg-white/20 p-6 rounded-lg backdrop-blur-sm">
            <h2 className="text-3xl font-semibold mb-4">Our Wishes For You:</h2>
            <ul className="text-xl space-y-3">
              <li>🚀 May you land your dream job at an amazing company</li>
              <li>💼 Success in all your professional endeavors</li>
              <li>✨ Growth and learning in every step of your journey</li>
              <li>🌟 Happiness and fulfillment in everything you do</li>
            </ul>
          </div>

          <div className="mt-8 space-y-4">
            <p className="text-2xl italic">"Your potential is limitless, and your future is bright!"</p>
            <div className="animate-pulse text-4xl">
              🎂 🎈 🎁
            </div>
          </div>
        </div>
      </main>
      <footer className="mt-16 text-center text-white/80">
        <p className="text-lg">Made with ❤️ for Yasir</p>
        <p className="text-sm mt-2">September 12, 2025</p>
      </footer>
    </div>
  );
}
