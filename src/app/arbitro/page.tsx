import Link from "next/link";
import Image from "next/image";
import Demo from "../components/DemoArbitro";

export default function ArbitroPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-green-800 to-green-900 p-4 relative overflow-hidden">
      {/* Padrão de campo de futebol */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-0 right-0 h-px bg-white"></div>
        <div className="absolute top-0 bottom-0 left-1/2 w-px bg-white"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full border-2 border-white"></div>
        <div className="absolute top-0 left-0 w-1/4 h-1/5 border-r-2 border-b-2 border-white"></div>
        <div className="absolute top-0 right-0 w-1/4 h-1/5 border-l-2 border-b-2 border-white"></div>
      </div>

      <main className="flex flex-col items-center justify-center w-full max-w-4xl px-4 py-8 bg-white bg-opacity-95 rounded-lg shadow-2xl z-10 relative">
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-green-600 rounded-full p-4 shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
          </svg>
        </div>
        
        <div className="text-center mb-8 mt-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-green-800">Área do Árbitro</h1>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Cadastre-se ou faça login para oferecer seus serviços de arbitragem</p>
        </div>

        <div className="w-full max-w-md px-6 py-6 bg-gray-50 rounded-lg shadow-md mb-8">
          <div className="flex items-center justify-center mb-6">
            <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
          </div>
          
          <div className="w-full flex flex-col gap-4 mb-6">
            <button className="py-3 px-6 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition-all transform hover:scale-105 text-lg font-medium border-b-4 border-green-800 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
              </svg>
              Fazer Login
            </button>
            
            <Demo senha="2210" tipoUsuario="arbitro" />

            <button className="py-3 px-6 bg-white text-green-800 border border-green-600 rounded-lg shadow-md hover:bg-green-50 transition-all transform hover:scale-105 text-lg font-medium flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
              Cadastrar-se
            </button>
          </div>
          
          <div className="text-center text-gray-500 text-sm">
            <p>Junte-se a dezenas de árbitros e comece a receber ofertas hoje mesmo!</p>
          </div>
        </div>
        
        <div className="mb-6 w-full max-w-md">
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  É necessário ter certificação ou experiência comprovada para atuar como árbitro na plataforma.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Link href="/" className="flex items-center gap-2 text-green-600 hover:text-green-800 transition-colors py-2 px-4 rounded-lg hover:bg-green-50">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Voltar para a página inicial
        </Link>
      </main>
    </div>
  );
} 