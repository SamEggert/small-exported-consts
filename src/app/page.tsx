import { config5 } from "./utils/consumer5";
import { T, useMessages } from "gt-next";

export default function Home() {
  const m = useMessages();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-8">
      <div className="bg-white rounded-2xl shadow-2xl p-12 max-w-2xl w-full text-center">
        <T>
          <h1 className="text-4xl font-bold text-gray-800 mb-8">
            🔗 Chained Exported Constants
          </h1>
        </T>

        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl p-8 mb-8">
          <T>
            <h2 className="text-2xl font-semibold mb-4">consumer5.ts</h2>
          </T>
          <div className="space-y-4">
            <div className="bg-white/20 rounded-lg p-4">
              <T>
                <p className="text-sm font-medium opacity-90">Name:</p>
              </T>
              <p className="text-xl font-bold">{m(config5.name)}</p>
            </div>
            <div className="bg-white/20 rounded-lg p-4">
              <T>
                <p className="text-sm font-medium opacity-90">Data:</p>
              </T>
              <p className="text-xl font-bold">{m(config5.data)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
