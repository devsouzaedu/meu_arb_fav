import Link from "next/link";
import Demo from "../components/DemoArbitro";

export default function TimePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-800 to-blue-900 p-4 relative overflow-hidden">
      {/* Padrão de campo de futebol */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-0 right-0 h-px bg-white"></div>
        <div className="absolute top-0 bottom-0 left-1/2 w-px bg-white"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full border-2 border-white"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/5 border-r-2 border-t-2 border-white"></div>
        <div className="absolute bottom-0 right-0 w-1/4 h-1/5 border-l-2 border-t-2 border-white"></div>
      </div>

      <main className="flex flex-col items-center justify-center w-full max-w-4xl px-4 py-8 bg-white bg-opacity-95 rounded-lg shadow-2xl z-10 relative">
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-blue-600 rounded-full p-4 shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </div>
        
        <div className="text-center mb-8 mt-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-blue-800">Área do Time</h1>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Cadastre-se ou faça login para contratar árbitros para seus jogos</p>
        </div>

        <div className="w-full max-w-md px-6 py-6 bg-gray-50 rounded-lg shadow-md mb-8">
          <div className="flex items-center justify-center mb-6">
            <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
            </div>
          </div>
          
          <div className="w-full flex flex-col gap-4 mb-6">
            <button className="py-3 px-6 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all transform hover:scale-105 text-lg font-medium border-b-4 border-blue-800 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
              </svg>
              Fazer Login
            </button>
            
            <Demo senha="2210" tipoUsuario="time" />
            
            <button className="py-3 px-6 bg-white text-blue-800 border border-blue-600 rounded-lg shadow-md hover:bg-blue-50 transition-all transform hover:scale-105 text-lg font-medium flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              Cadastrar Time
            </button>
          </div>
          
          <div className="text-center text-gray-500 text-sm">
            <p>Cadastre seu time e encontre os melhores árbitros para seu jogo!</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-md mb-8">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
            <div className="flex items-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <h3 className="font-semibold text-blue-800">Busca Rápida</h3>
            </div>
            <p className="text-sm text-gray-600">Encontre árbitros disponíveis para a data do seu jogo.</p>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
            <div className="flex items-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <h3 className="font-semibold text-blue-800">Avaliações</h3>
            </div>
            <p className="text-sm text-gray-600">Veja avaliações e escolha o melhor profissional.</p>
          </div>
        </div>

        <Link href="/" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors py-2 px-4 rounded-lg hover:bg-blue-50">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Voltar para a página inicial
        </Link>
      </main>
    </div>
  );
} 