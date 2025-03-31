export interface Arbitro {
  id: number;
  nome: string;
  imagem: string;
  jogosApitados: number;
  valorPorJogo: number;
  certificacao: string;
  avaliacao: number;
  disponivel: boolean;
  especialidade?: string;
  anoExperiencia: number;
  descricao: string;
}

export const arbitros: Arbitro[] = [
  {
    id: 1,
    nome: "Carlos Pereira",
    imagem: "/images/arb_1.png",
    jogosApitados: 153,
    valorPorJogo: 180,
    certificacao: "CBF Nível 1",
    avaliacao: 4.8,
    disponivel: true,
    especialidade: "Jogos de Várzea",
    anoExperiencia: 7,
    descricao: "Árbitro experiente com mais de 150 jogos apitados em campeonatos amadores e semi-profissionais. Especialista em manter a disciplina e garantir partidas justas."
  },
  {
    id: 2,
    nome: "André Santos",
    imagem: "/images/arb_2.png",
    jogosApitados: 87,
    valorPorJogo: 150,
    certificacao: "FPF Regional",
    avaliacao: 4.6,
    disponivel: true,
    especialidade: "Jogos de Futebol Society",
    anoExperiencia: 5,
    descricao: "Árbitro com certificação da Federação Paulista de Futebol. Especialista em futebol society e torneios corporativos. Conhecido pela comunicação clara com os jogadores."
  },
  {
    id: 3,
    nome: "Fernanda Oliveira",
    imagem: "/images/arb_3.png",
    jogosApitados: 112,
    valorPorJogo: 200,
    certificacao: "CONMEBOL",
    avaliacao: 4.9,
    disponivel: true,
    especialidade: "Campeonatos Femininos",
    anoExperiencia: 8,
    descricao: "Árbitra internacional com experiência em campeonatos femininos. Já atuou em competições oficiais da CONMEBOL e tem uma abordagem profissional e respeitosa no campo."
  },
  {
    id: 4,
    nome: "Rodrigo Lima",
    imagem: "/images/arb_4.png",
    jogosApitados: 64,
    valorPorJogo: 130,
    certificacao: "Curso de Arbitragem SENAC",
    avaliacao: 4.5,
    disponivel: true,
    especialidade: "Futsal e Futebol de Campo",
    anoExperiencia: 3,
    descricao: "Árbitro versátil, atua tanto em jogos de futsal quanto em partidas de campo. Possui curso técnico pelo SENAC e está em constante evolução. Ótimo para jogos amadores."
  }
]; 