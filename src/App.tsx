import React, { useState } from 'react';
import { Gift } from 'lucide-react';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200 flex items-center justify-center p-4">
      <div className="text-center">
        {!isOpen ? (
          <button
            onClick={() => setIsOpen(true)}
            className="transform transition-transform hover:scale-110 active:scale-95 focus:outline-none"
            aria-label="Abrir regalo"
          >
            <Gift
              className="w-32 h-32 text-pink-500 hover:text-pink-600 filter drop-shadow-lg animate-bounce"
              strokeWidth={1.5}
            />
            <p className="mt-4 text-gray-600 text-lg font-medium">
              Haz clic en el regalo
            </p>
          </button>
        ) : (
          <div className="animate-fade-in">
            <div className="max-w-md bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-2xl transform transition-all duration-500 animate-scale-up">
              <h1 className="text-4xl font-bold text-pink-600 mb-6">
                ¡Feliz Cumpleaños!
              </h1>
              <p className="text-gray-700 text-xl leading-relaxed mb-6">
                Que este día esté lleno de alegría, sonrisas y momentos inolvidables.
                ¡Que todos tus deseos se hagan realidad!
              </p>
              <div className="text-6xl mb-6">🎉 🎂 ✨</div>
              <button
                onClick={() => setIsOpen(false)}
                className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-6 rounded-full transition-colors duration-300"
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