import React, { useState } from 'react';
import { Gift } from 'lucide-react';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200">
      <div className="text-center">
        {!isOpen ? (
          <button
            onClick={() => setIsOpen(true)}
            className="transition-transform transform hover:scale-110 active:scale-95 focus:outline-none"
            aria-label="Abrir regalo"
          >
            <Gift
              className="w-32 h-32 text-pink-500 hover:text-pink-600 filter drop-shadow-lg animate-bounce"
              strokeWidth={1.5}
            />
            <p className="mt-4 text-lg font-medium text-gray-600">
              Haz clic en el regalo
            </p>
          </button>
        ) : (
          <div className="animate-fade-in">
            <div className="max-w-md p-8 transition-all duration-500 transform shadow-2xl bg-white/80 backdrop-blur-sm rounded-2xl animate-scale-up">
              <h1 className="mb-6 text-4xl font-bold text-pink-600">
                ¡Feliz Cumpleaños! 🎈Fiama🎁
              </h1>
              <p className="mb-6 text-xl leading-relaxed text-gray-700">
                Que este día esté lleno de alegría, sonrisas y momentos inolvidables.
                ¡Que todos tus deseos se hagan realidad!
              </p>
              <div className="mb-6 text-6xl">🎉 🎂 ✨</div>
              <button
                onClick={() => setIsOpen(false)}
                className="px-6 py-2 font-semibold text-white transition-colors duration-300 bg-pink-500 rounded-full hover:bg-pink-600"
              >
                Cerrar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;