import { config5 } from "./utils/consumer5";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-8">
      <div className="bg-white rounded-2xl shadow-2xl p-12 max-w-2xl w-full text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          🔗 Chained Exported Constants
        </h1>

        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">consumer5.ts</h2>
          <div className="space-y-4">
            <div className="bg-white/20 rounded-lg p-4">
              <p className="text-sm font-medium opacity-90">Name:</p>
              <p className="text-xl font-bold">{config5.name}</p>
            </div>
            <div className="bg-white/20 rounded-lg p-4">
              <p className="text-sm font-medium opacity-90">Data:</p>
              <p className="text-xl font-bold">{config5.data}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
