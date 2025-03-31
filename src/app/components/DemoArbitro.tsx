'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface DemoProps {
  senha: string;
  tipoUsuario: 'arbitro' | 'time';
}

export default function Demo({ senha, tipoUsuario }: DemoProps) {
  const [showModal, setShowModal] = useState(false);
  const [senhaInput, setSenhaInput] = useState('');
  const [erro, setErro] = useState(false);
  const router = useRouter();

  const handleVerificarSenha = () => {
    if (senhaInput === senha) {
      setErro(false);
      setShowModal(false);
      router.push(`/${tipoUsuario}/demo`);
    } else {
      setErro(true);
    }
  };

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="py-3 px-6 bg-yellow-500 text-white rounded-lg shadow-md hover:bg-yellow-600 transition-all transform hover:scale-105 text-lg font-medium border-b-4 border-yellow-700 flex items-center justify-center"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
          <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
        </svg>
        Modo Demonstração
      </button>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Acesso ao Modo Demonstração</h3>
            
            <p className="text-gray-600 mb-4">
              Digite a senha para acessar o modo de demonstração {tipoUsuario === 'arbitro' ? 'de árbitro' : 'de time'}.
            </p>
            
            <div className="mb-4">
              <input
                type="password"
                placeholder="Digite a senha"
                className={`w-full px-3 py-2 border ${erro ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-green-500`}
                value={senhaInput}
                onChange={(e) => setSenhaInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleVerificarSenha()}
              />
              {erro && (
                <p className="text-red-500 text-sm mt-1">Senha incorreta</p>
              )}
            </div>
            
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
              >
                Cancelar
              </button>
              <button
                onClick={handleVerificarSenha}
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
              >
                Acessar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 