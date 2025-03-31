import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-green-800 to-green-900 p-4 relative overflow-hidden">
      {/* Padrão de campo de futebol */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-0 right-0 h-px bg-white"></div>
        <div className="absolute top-0 bottom-0 left-1/2 w-px bg-white"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full border-2 border-white"></div>
        <div className="absolute top-0 left-0 w-1/4 h-1/5 border-r-2 border-b-2 border-white"></div>
        <div className="absolute top-0 right-0 w-1/4 h-1/5 border-l-2 border-b-2 border-white"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/5 border-r-2 border-t-2 border-white"></div>
        <div className="absolute bottom-0 right-0 w-1/4 h-1/5 border-l-2 border-t-2 border-white"></div>
      </div>
      
      <main className="flex flex-col items-center justify-center w-full max-w-4xl px-4 py-8 bg-white bg-opacity-95 rounded-lg shadow-2xl z-10 relative">
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-green-600 rounded-full p-4 shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
          </svg>
        </div>
        
        <div className="text-center mb-12 mt-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-green-800">Árbitros SP</h1>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 mb-2">Aluguel de Árbitros para Jogos de Várzea</p>
          <p className="text-gray-600">Conectando árbitros e times para tornar seu jogo mais profissional</p>
        </div>

        <div className="w-full max-w-md flex flex-col md:flex-row gap-6 mb-8">
          <Link
            href="/arbitro"
            className="flex-1 flex items-center justify-center gap-3 py-4 px-4 bg-green-600 text-white rounded-lg shadow-xl hover:bg-green-700 transition-all transform hover:scale-105 text-lg font-medium border-b-4 border-green-800"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
            </svg>
            <span>Sou Árbitro</span>
          </Link>

          <Link
            href="/time"
            className="flex-1 flex items-center justify-center gap-3 py-4 px-4 bg-blue-600 text-white rounded-lg shadow-xl hover:bg-blue-700 transition-all transform hover:scale-105 text-lg font-medium border-b-4 border-blue-800"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <span>Sou Time</span>
          </Link>
        </div>

        <div className="w-full max-w-lg px-6 py-4 bg-gray-100 rounded-lg mb-8">
          <h2 className="text-xl font-bold text-green-800 mb-2 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            Por que usar Árbitros SP?
          </h2>
          <ul className="text-gray-600 text-sm md:text-base">
            <li className="flex items-start mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Árbitros profissionais para jogos amad0res
            </li>
            <li className="flex items-start mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Mais organização e imparcialidade
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Preços acessíveis e pagamento seguro
            </li>
          </ul>
        </div>

        <div className="mt-8 text-center text-green-900">
          <p>© {new Date().getFullYear()} Árbitros SP - Todos os direitos reservados</p>
        </div>
      </main>
    </div>
  );
}
