'use client'

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { arbitros } from '../../data/arbitros';

export default function ArbitroDemoPage() {
  const [arbitro] = useState(arbitros[0]);
  const [activeTab, setActiveTab] = useState('perfil');

  // Simulação de solicitações de jogos
  const solicitacoes = [
    { id: 1, time: 'FC São Paulo Futebol Clube', data: '15/04/2025', horario: '14:00', local: 'Campo da Várzea, São Paulo', valor: 180, status: 'pendente' },
    { id: 2, time: 'Santos FC Amador', data: '22/04/2025', horario: '16:00', local: 'Arena Santos, Santos', valor: 200, status: 'pendente' },
    { id: 3, time: 'Corinthians Paulista', data: '10/04/2025', horario: '10:00', local: 'Campo Corinthians, São Paulo', valor: 190, status: 'pendente' }
  ];
  
  // Simulação de partidas apitadas recentemente
  const partidasRecentes = [
    { id: 1, times: 'Flamengo x Palmeiras', data: '05/03/2025', resultado: '2 x 1', avaliacao: 4.8 },
    { id: 2, times: 'São Paulo x Corinthians', data: '22/02/2025', resultado: '0 x 0', avaliacao: 5.0 },
    { id: 3, times: 'Santos x Portuguesa', data: '15/02/2025', resultado: '3 x 1', avaliacao: 4.7 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-800 to-green-900 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          {/* Cabeçalho */}
          <div className="bg-green-700 text-white p-4">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold">Árbitros SP - Modo Demonstração</h1>
              <Link href="/arbitro" className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
                </svg>
                Sair
              </Link>
            </div>
          </div>
          
          {/* Perfil do árbitro */}
          <div className="flex flex-col md:flex-row">
            {/* Sidebar */}
            <div className="w-full md:w-1/3 bg-gray-50 p-6">
              <div className="text-center">
                <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-green-500 mx-auto mb-4">
                  <Image 
                    src={arbitro.imagem}
                    alt={arbitro.nome}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <h2 className="text-2xl font-bold text-green-800">{arbitro.nome}</h2>
                <p className="text-gray-600 text-sm">{arbitro.certificacao}</p>
                
                <div className="flex justify-center mt-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${star <= Math.round(arbitro.avaliacao) ? 'text-yellow-400' : 'text-gray-300'}`} viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-1 text-gray-600">{arbitro.avaliacao}</span>
                </div>
              </div>
              
              <div className="mt-6 space-y-4">
                <div className="flex justify-between border-b pb-2">
                  <span className="font-semibold text-gray-600">Jogos Apitados</span>
                  <span className="text-green-700 font-bold">{arbitro.jogosApitados}</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-semibold text-gray-600">Valor por Jogo</span>
                  <span className="text-green-700 font-bold">R$ {arbitro.valorPorJogo}</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-semibold text-gray-600">Anos de Experiência</span>
                  <span className="text-green-700 font-bold">{arbitro.anoExperiencia} anos</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-semibold text-gray-600">Especialidade</span>
                  <span className="text-green-700 font-bold">{arbitro.especialidade}</span>
                </div>
              </div>
              
              <div className="mt-6">
                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                  <h3 className="font-bold text-green-800 mb-2">Disponibilidade</h3>
                  <p className="text-green-700">
                    {arbitro.disponivel 
                      ? 'Disponível para novos jogos' 
                      : 'Indisponível no momento'}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Conteúdo principal */}
            <div className="w-full md:w-2/3 p-6">
              <div className="flex border-b border-gray-200">
                <button 
                  className={`py-2 px-4 focus:outline-none ${activeTab === 'perfil' ? 'border-b-2 border-green-600 text-green-600 font-medium' : 'text-gray-500 hover:text-green-500'}`}
                  onClick={() => setActiveTab('perfil')}
                >
                  Meu Perfil
                </button>
                <button 
                  className={`py-2 px-4 focus:outline-none ${activeTab === 'solicitacoes' ? 'border-b-2 border-green-600 text-green-600 font-medium' : 'text-gray-500 hover:text-green-500'}`}
                  onClick={() => setActiveTab('solicitacoes')}
                >
                  Solicitações
                </button>
                <button 
                  className={`py-2 px-4 focus:outline-none ${activeTab === 'historico' ? 'border-b-2 border-green-600 text-green-600 font-medium' : 'text-gray-500 hover:text-green-500'}`}
                  onClick={() => setActiveTab('historico')}
                >
                  Histórico
                </button>
              </div>
              
              <div className="mt-6">
                {activeTab === 'perfil' && (
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Sobre Mim</h3>
                    <p className="text-gray-600 mb-6">{arbitro.descricao}</p>
                    
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Certificações</h3>
                    <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200 mb-6">
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <div>
                          <h4 className="font-bold text-gray-800">{arbitro.certificacao}</h4>
                          <p className="text-sm text-gray-600">Certificação ativa</p>
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Estatísticas</h3>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                        <h4 className="font-bold text-gray-700">Jogos Apitados</h4>
                        <p className="text-2xl font-bold text-green-700">{arbitro.jogosApitados}</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                        <h4 className="font-bold text-gray-700">Avaliação Média</h4>
                        <div className="flex items-center">
                          <p className="text-2xl font-bold text-green-700">{arbitro.avaliacao}</p>
                          <span className="text-yellow-500 ml-2">★</span>
                        </div>
                      </div>
                    </div>
                    
                    <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg">
                      Editar Perfil
                    </button>
                  </div>
                )}
                
                {activeTab === 'solicitacoes' && (
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Solicitações de Arbitragem</h3>
                    
                    {solicitacoes.length === 0 ? (
                      <div className="text-center py-8">
                        <p className="text-gray-500">Nenhuma solicitação pendente no momento.</p>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {solicitacoes.map((sol) => (
                          <div key={sol.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                            <div className="flex justify-between items-start">
                              <div>
                                <h4 className="font-bold text-gray-800">{sol.time}</h4>
                                <p className="text-sm text-gray-600">{sol.data} às {sol.horario}</p>
                                <p className="text-sm text-gray-600">{sol.local}</p>
                              </div>
                              <div className="text-right">
                                <p className="font-bold text-green-700">R$ {sol.valor}</p>
                                <span className="inline-block px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full mt-1">
                                  Pendente
                                </span>
                              </div>
                            </div>
                            
                            <div className="flex justify-end gap-2 mt-4">
                              <button className="bg-red-100 hover:bg-red-200 text-red-700 px-3 py-1 rounded-md text-sm">
                                Recusar
                              </button>
                              <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-md text-sm">
                                Aceitar
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
                
                {activeTab === 'historico' && (
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Histórico de Jogos</h3>
                    
                    {partidasRecentes.length === 0 ? (
                      <div className="text-center py-8">
                        <p className="text-gray-500">Nenhum jogo registrado ainda.</p>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {partidasRecentes.map((partida) => (
                          <div key={partida.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                            <div className="flex justify-between items-start">
                              <div>
                                <h4 className="font-bold text-gray-800">{partida.times}</h4>
                                <p className="text-sm text-gray-600">{partida.data}</p>
                                <p className="text-sm text-gray-600">Resultado: {partida.resultado}</p>
                              </div>
                              <div className="text-right">
                                <div className="flex items-center">
                                  <span className="font-bold text-yellow-500 mr-1">{partida.avaliacao}</span>
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    <button className="w-full mt-4 border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 font-bold py-3 px-4 rounded-lg">
                      Ver Todos os Jogos
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 