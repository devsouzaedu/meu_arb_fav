'use client'

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { arbitros, Arbitro } from '../../data/arbitros';

export default function TimeDemoPage() {
  const [activeTab, setActiveTab] = useState('arbitros');
  const [filtro, setFiltro] = useState('');
  const [arbitrosSelecionados, setArbitrosSelecionados] = useState<number[]>([]);
  const [arbitroDetalhes, setArbitroDetalhes] = useState<Arbitro | null>(null);
  const [showModal, setShowModal] = useState(false);

  // Função para filtrar os árbitros
  const arbitrosFiltrados = arbitros.filter(arb => 
    arb.nome.toLowerCase().includes(filtro.toLowerCase()) ||
    arb.certificacao.toLowerCase().includes(filtro.toLowerCase()) ||
    arb.especialidade?.toLowerCase().includes(filtro.toLowerCase())
  );

  // Jogos agendados simulados
  const jogosAgendados = [
    { 
      id: 1, 
      data: '10/04/2025', 
      horario: '15:00', 
      local: 'Campo Grande SP, São Paulo', 
      adversario: 'FC Rivais',
      arbitro: arbitros[2].nome,
      status: 'confirmado'
    },
    { 
      id: 2, 
      data: '25/04/2025', 
      horario: '18:30', 
      local: 'Arena Municipal, São Paulo', 
      adversario: 'Atlético Paulista',
      arbitro: 'Aguardando confirmação',
      status: 'pendente'
    }
  ];

  const abrirDetalhes = (arbitro: Arbitro) => {
    setArbitroDetalhes(arbitro);
    setShowModal(true);
  };

  const toggleSelecao = (id: number) => {
    if (arbitrosSelecionados.includes(id)) {
      setArbitrosSelecionados(arbitrosSelecionados.filter(arbId => arbId !== id));
    } else {
      setArbitrosSelecionados([...arbitrosSelecionados, id]);
    }
  };

  const handleContratarArbitro = () => {
    setShowModal(false);
    alert('Solicitação enviada com sucesso! Aguarde a confirmação do árbitro.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-800 to-blue-900 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          {/* Cabeçalho */}
          <div className="bg-blue-700 text-white p-4">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold">Times SP - Modo Demonstração</h1>
              <Link href="/time" className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
                </svg>
                Sair
              </Link>
            </div>
          </div>
          
          {/* Navegação */}
          <div className="p-4 border-b">
            <div className="flex border-b border-gray-200">
              <button 
                className={`py-2 px-4 focus:outline-none ${activeTab === 'arbitros' ? 'border-b-2 border-blue-600 text-blue-600 font-medium' : 'text-gray-500 hover:text-blue-500'}`}
                onClick={() => setActiveTab('arbitros')}
              >
                Árbitros Disponíveis
              </button>
              <button 
                className={`py-2 px-4 focus:outline-none ${activeTab === 'meusjogos' ? 'border-b-2 border-blue-600 text-blue-600 font-medium' : 'text-gray-500 hover:text-blue-500'}`}
                onClick={() => setActiveTab('meusjogos')}
              >
                Meus Jogos
              </button>
              <button 
                className={`py-2 px-4 focus:outline-none ${activeTab === 'perfil' ? 'border-b-2 border-blue-600 text-blue-600 font-medium' : 'text-gray-500 hover:text-blue-500'}`}
                onClick={() => setActiveTab('perfil')}
              >
                Perfil do Time
              </button>
            </div>
          </div>
          
          <div className="p-6">
            {/* Tab de Árbitros */}
            {activeTab === 'arbitros' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-gray-800">Árbitros Disponíveis</h2>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Buscar árbitros..."
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={filtro}
                      onChange={(e) => setFiltro(e.target.value)}
                    />
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {arbitrosFiltrados.map((arbitro) => (
                    <div key={arbitro.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="relative h-48 bg-gray-200">
                        <Image
                          src={arbitro.imagem}
                          alt={arbitro.nome}
                          fill
                          style={{ objectFit: 'cover' }}
                        />
                        {arbitro.disponivel && (
                          <span className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                            Disponível
                          </span>
                        )}
                      </div>
                      
                      <div className="p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-bold text-lg text-gray-800">{arbitro.nome}</h3>
                            <p className="text-sm text-gray-600">{arbitro.certificacao}</p>
                          </div>
                          <div className="flex items-center">
                            <span className="text-yellow-500 mr-1">{arbitro.avaliacao}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          </div>
                        </div>
                        
                        <div className="mt-3 space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Jogos apitados:</span>
                            <span className="font-medium">{arbitro.jogosApitados}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Valor:</span>
                            <span className="font-medium text-blue-600">R$ {arbitro.valorPorJogo}</span>
                          </div>
                          {arbitro.especialidade && (
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-600">Especialidade:</span>
                              <span className="font-medium">{arbitro.especialidade}</span>
                            </div>
                          )}
                        </div>
                        
                        <div className="mt-4 flex justify-between gap-2">
                          <button 
                            onClick={() => toggleSelecao(arbitro.id)}
                            className={`flex-1 py-2 px-3 text-sm rounded-md ${
                              arbitrosSelecionados.includes(arbitro.id)
                                ? 'bg-blue-100 text-blue-700 border border-blue-300'
                                : 'bg-gray-100 text-gray-700 border border-gray-300 hover:bg-gray-200'
                            }`}
                          >
                            {arbitrosSelecionados.includes(arbitro.id) ? 'Selecionado' : 'Selecionar'}
                          </button>
                          <button 
                            onClick={() => abrirDetalhes(arbitro)}
                            className="flex-1 py-2 px-3 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-md"
                          >
                            Ver Detalhes
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {arbitrosFiltrados.length === 0 && (
                  <div className="text-center py-8">
                    <p className="text-gray-500">Nenhum árbitro encontrado com os filtros atuais.</p>
                  </div>
                )}
                
                {arbitrosSelecionados.length > 0 && (
                  <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg border-t border-gray-200 z-20">
                    <div className="max-w-6xl mx-auto flex justify-between items-center">
                      <div>
                        <span className="font-medium">{arbitrosSelecionados.length} árbitro(s) selecionado(s)</span>
                      </div>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg">
                        Solicitar Orçamento
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
            
            {/* Tab Meus Jogos */}
            {activeTab === 'meusjogos' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-gray-800">Meus Jogos Agendados</h2>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg">
                    Agendar Novo Jogo
                  </button>
                </div>
                
                {jogosAgendados.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-gray-500">Nenhum jogo agendado ainda.</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {jogosAgendados.map((jogo) => (
                      <div key={jogo.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-bold text-lg text-gray-800">vs {jogo.adversario}</h3>
                            <p className="text-sm text-gray-600">{jogo.data} às {jogo.horario}</p>
                            <p className="text-sm text-gray-600">{jogo.local}</p>
                            <p className="text-sm mt-2">
                              <span className="font-semibold">Árbitro:</span> {jogo.arbitro}
                            </p>
                          </div>
                          <div className="text-right">
                            <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                              jogo.status === 'confirmado' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {jogo.status === 'confirmado' ? 'Confirmado' : 'Pendente'}
                            </span>
                          </div>
                        </div>
                        
                        <div className="flex justify-end gap-2 mt-4">
                          <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-md text-sm">
                            Detalhes
                          </button>
                          <button className="bg-red-50 hover:bg-red-100 text-red-700 px-3 py-1 rounded-md text-sm">
                            Cancelar
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
            
            {/* Tab Perfil */}
            {activeTab === 'perfil' && (
              <div>
                <div className="text-center mb-6">
                  <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">FC São Paulo Demo</h2>
                  <p className="text-gray-600">Time de Futebol de Várzea</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h3 className="font-bold text-gray-800 mb-2">Informações do Time</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Nome Completo:</span>
                        <span>FC São Paulo Futebol Clube</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Categoria:</span>
                        <span>Amador Adulto</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Cidade:</span>
                        <span>São Paulo, SP</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Fundação:</span>
                        <span>2020</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h3 className="font-bold text-gray-800 mb-2">Contato</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Responsável:</span>
                        <span>Roberto Silva</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">E-mail:</span>
                        <span>contato@fcsaopaulodemo.com.br</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Telefone:</span>
                        <span>(11) 98765-4321</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg">
                  Editar Informações
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Modal de detalhes do árbitro */}
      {showModal && arbitroDetalhes && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-xl font-bold text-gray-900">Detalhes do Árbitro</h3>
              <button 
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-1/3">
                  <div className="relative w-full h-64 rounded-lg overflow-hidden">
                    <Image 
                      src={arbitroDetalhes.imagem}
                      alt={arbitroDetalhes.nome}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  
                  <div className="mt-4 space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Avaliação:</span>
                      <div className="flex items-center">
                        <span className="font-bold text-yellow-500 mr-1">{arbitroDetalhes.avaliacao}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Jogos Apitados:</span>
                      <span className="font-bold">{arbitroDetalhes.jogosApitados}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Valor por Jogo:</span>
                      <span className="font-bold text-blue-600">R$ {arbitroDetalhes.valorPorJogo}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Experiência:</span>
                      <span className="font-bold">{arbitroDetalhes.anoExperiencia} anos</span>
                    </div>
                  </div>
                </div>
                
                <div className="w-full md:w-2/3">
                  <h2 className="text-2xl font-bold text-gray-800">{arbitroDetalhes.nome}</h2>
                  <p className="text-gray-600">{arbitroDetalhes.certificacao}</p>
                  
                  <div className="mt-4">
                    <h3 className="font-bold text-gray-800 mb-2">Sobre</h3>
                    <p className="text-gray-600">{arbitroDetalhes.descricao}</p>
                  </div>
                  
                  <div className="mt-6">
                    <h3 className="font-bold text-gray-800 mb-2">Certificações</h3>
                    <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <div>
                          <h4 className="font-bold text-gray-800">{arbitroDetalhes.certificacao}</h4>
                          <p className="text-sm text-gray-600">Certificação ativa</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h3 className="font-bold text-gray-800 mb-2">Especialidades</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                        {arbitroDetalhes.especialidade || "Futebol de Campo"}
                      </span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                        Jogos Amadores
                      </span>
                    </div>
                  </div>
                  
                  <div className="mt-8 flex gap-4">
                    <button
                      onClick={() => setShowModal(false)}
                      className="flex-1 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                    >
                      Voltar
                    </button>
                    <button
                      onClick={handleContratarArbitro}
                      className="flex-1 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
                    >
                      Contratar Árbitro
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 