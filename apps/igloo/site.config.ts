import type { SiteConfig } from "@sites/landing-ui";
export const siteConfig: SiteConfig = {
  brand: "Residential Igloo Inn",
  shortBrand: "II",
  eyebrow: "Clube de férias desde os anos 70",
  description:
    "Conforto, praticidade e experiências de hospedagem para associados Residential Igloo Inn.",
  colors: {
    primary: "#24596a",
    primaryDark: "#0b2631",
    accent: "#e6b968",
    paper: "#f4f1ea",
    ink: "#16252b",
    muted: "#647177",
  },
  hero: {
    title: "Tempo para viver.",
    highlight: "Lugares para lembrar.",
    text: "Uma nova experiência para aproximar associados, destinos e momentos de descanso — com atendimento simples e acolhedor.",
    image: "/images/hero.jpg",
    note: "O clube está em processo de reestruturação. Consulte a central para informações atualizadas sobre atendimento, reservas e hospedagem.",
  },
  nav: [
    { label: "Início", href: "/" },
    { label: "Quem somos", href: "/quem-somos" },
    { label: "Comunicado", href: "/comunicado" },
    { label: "Hotéis", href: "/hoteis" },
    { label: "Contato", href: "/contato" },
  ],
  contact: {
    phone: "+5531999777153",
    phoneDisplay: "(31) 99977-7153",
    whatsapp: "5531999777153",
    whatsappDisplay: "",
    hours: "Segunda a sexta, das 9h às 17h",
    address:
      "Avenida Treze de Maio, 33 — Bloco A, sala 2109 — Centro, Rio de Janeiro/RJ — CEP 20031-007",
    cnpj: "29.203.221/0001-49",
  },
  about: {
    title: "Mais de quatro décadas conectando pessoas e destinos.",
    intro:
      "Um clube privado dedicado a cuidar da sua história e renovar a experiência dos associados.",
    paragraphs: [
      "Existente desde os anos 70, o Residential Igloo Inn passa por um processo de reorganização para retornar ao atendimento de seus associados. A marca reúne mais de oito mil associados e mais de 40 anos de história.",
      "O objetivo é atender e gerir a carteira existente, ao mesmo tempo em que o clube evolui seus produtos, serviços e vantagens. Benefícios oferecidos por entidades terceiras permanecem sob responsabilidade das respectivas prestadoras.",
    ],
    image: "/images/about.jpg",
    facts: [
      { value: "40+", label: "anos de história da marca" },
      { value: "8 mil+", label: "associados informados pelo clube" },
      { value: "Brasil", label: "atuação e relacionamento nacional" },
    ],
  },
  features: [
    {
      number: "01",
      title: "Conveniência",
      text: "Menos etapas e um atendimento mais direto para facilitar o relacionamento com o clube.",
    },
    {
      number: "02",
      title: "Qualidade",
      text: "Acomodações apresentadas com foco em conforto, bem-estar e tranquilidade.",
    },
    {
      number: "03",
      title: "Localização",
      text: "Experiências em destinos turísticos no Brasil e possibilidades ao redor do mundo.",
    },
  ],
  stays: [
    {
      name: "Chalé Búzios — Tucuns",
      location: "Búzios, Rio de Janeiro",
      description:
        "Uma experiência próxima ao litoral, apresentada entre as instalações do clube.",
      image: "/images/buzios.jpg",
    },
    {
      name: "Acomodações selecionadas",
      location: "Rede de hospedagem",
      description:
        "Quartos e instalações voltados ao descanso dos associados e seus dependentes.",
      image: "/images/room-1.jpg",
    },
    {
      name: "Conforto em cada detalhe",
      location: "Hotéis e pousadas",
      description:
        "Diversidade de acomodações para diferentes estilos de viagem.",
      image: "/images/room-2.jpg",
    },
  ],
  gallery: [
    "/images/room-1.jpg",
    "/images/room-2.jpg",
    "/images/room-3.jpg",
    "/images/room-4.jpg",
    "/images/room-5.jpg",
  ],
  notice: {
    title: "Uma nova fase está sendo preparada.",
    paragraphs: [
      "A diretoria do Residential Igloo Inn comunica a seus associados em todo o Brasil que, neste momento, o clube está fechado e não realiza atendimento presencial. A instituição está em processo de reestruturação para um breve retorno das atividades, principalmente na área de reservas e hospedagem.",
    ],
    important:
      "Aos sócios proprietários com diárias acumuladas, o comunicado original informa a possibilidade de negociação por meio de conversão em ações sobre o patrimônio, relacionada a tratativas com uma empresa investidora. Entre em contato com a equipe para receber informações oficiais e atualizadas antes de qualquer decisão.",
  },
};
