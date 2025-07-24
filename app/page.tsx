import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans min-h-screen flex flex-col items-center justify-center p-8 sm:p-20 text-center">
      <h1 className="text-4xl font-bold mb-4">VerdiGrow</h1>
      <p className="text-lg text-gray-600 mb-8">Growing Smarter, Living Better</p>
      <div className="px-6 py-3 bg-gray-200 text-gray-800 rounded-full text-sm uppercase tracking-wider">
        Coming Soon
      </div>
    </div>
  );
}
