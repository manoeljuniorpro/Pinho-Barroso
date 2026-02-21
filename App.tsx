
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './components/Button';
import { ServiceCard } from './components/ServiceCard';
import { 
  MessageSquare, 
  ChevronRight, 
  ShieldCheck, 
  Clock, 
  Globe, 
  Award, 
  X, 
  Instagram, 
  Facebook, 
  Mail, 
  MapPin, 
  Phone 
} from 'lucide-react';

const App: React.FC = () => {
  const WHATSAPP_LINK = "https://wa.me/5533984022885"; 
  const [selectedService, setSelectedService] = useState<null | { title: string, description: string }>(null);

  const handleCta = () => {
    window.open(WHATSAPP_LINK, '_blank');
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const services = [
    {
      title: "BPC-LOAS Idoso e/ou deficiente",
      description: "O BPC-LOAS é um benefício pago pelo INSS no valor de 1 salário-mínimo por mês para idosos com 65 anos ou mais e pessoas com deficiência ou doença grave, de qualquer idade, que não têm condições de se sustentar. Não é aposentadoria e não precisa pagar o INSS para ter direito."
    },
    {
      title: "BPC-LOAS para autistas",
      description: "O BPC-LOAS para autistas é um benefício pago pelo INSS no valor de 1 salário mínimo por mês para pessoas que vivem em família de baixa renda, inclusive crianças, que possuam Transtorno do Espectro Autista (TEA). Não precisa pagar o INSS para ter direito."
    },
    {
      title: "Aposentadoria Urbana, Rural e Híbrida",
      description: "Análise completa do tempo de contribuição para homens e mulheres. Trabalhadores rurais podem se aposentar mais cedo (60 anos homens, 55 anos mulheres) com 15 anos de campo comprovados."
    },
    {
      title: "Auxílio Doença e Invalidez",
      description: "Para quem está temporária ou permanentemente incapacitado para o trabalho. Combatemos negativas indevidas do INSS para garantir seu sustento durante a enfermidade."
    },
    {
      title: "Pensão por Morte",
      description: "Benefício pago à família do segurado falecido. Orientação completa para viúvos(as), companheiros(as) e filhos dependentes garantirem o benefício rapidamente."
    },
    {
      title: "Demais serviços: Entre em contato",
      description: "Nosso escritório é especializado em Direito Previdenciário e oferece soluções completas para cuidar do seu benefício no INSS. Se não encontrou exatamente o que precisa ou ainda ficou com alguma dúvida, fale com a gente. Vamos analisar o seu caso com atenção e te orientar da melhor forma possível."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Persistent Floating WhatsApp */}
      <motion.a 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring' }}
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center w-20 h-20"
      >
        <svg viewBox="0 0 24 24" className="w-12 h-12 fill-current">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </motion.a>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://manoeljuniorpro.com.br/wp-content/uploads/2026/02/IMG-20260209-WA0048.jpg.jpeg" 
            alt="Fundo Advocacia" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center"
        >
          {/* Logo - Transparent background */}
          <img 
            src="https://manoeljuniorpro.com.br/wp-content/uploads/2026/02/WhatsApp_Image_2026-02-13_at_11.13.03-removebg-preview.png" 
            alt="Pinho Barroso Advogados Logo" 
            className="h-24 md:h-40 object-contain mb-6 md:mb-12"
          />

          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-7xl font-bold text-white leading-tight mb-6 md:mb-8 font-serif">
              Garanta o seu melhor benefício ou aposentadoria junto ao INSS.
            </h1>
            <p className="text-lg md:text-2xl text-gray-300 mb-8 md:mb-12 leading-relaxed max-w-2xl mx-auto">
              Fale com nossos especialistas em aposentadorias e benefícios do INSS.
            </p>
            <div className="flex flex-col items-center gap-6">
              <Button onClick={handleCta} variant="whatsapp" className="h-14 md:h-16 px-10 md:px-16 text-base md:text-lg bg-[#25D366] hover:bg-[#20bd5a]">
                <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-6 md:h-6 mr-2 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Falar com um advogado
              </Button>
              <span className="text-white font-bold text-base md:text-lg">
                Atendimento online em todo o Brasil
              </span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Serviços Especializados */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1a3241] mb-4 md:mb-6 font-serif">
              Serviços Especializados
            </h2>
            <div className="w-20 md:w-24 h-1 md:h-1.5 bg-[#F2CA61] mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <ServiceCard 
                  title={service.title}
                  ctaText="Saiba mais"
                  onCtaClick={() => setSelectedService(service)}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Saiba Mais */}
      <AnimatePresence>
        {selectedService && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden relative"
            >
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-black transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              
              <div className="p-6 md:p-12">
                <h3 className="text-2xl md:text-3xl font-bold text-[#1a3241] mb-6 font-serif border-b-4 border-[#F2CA61] pb-4 inline-block">
                  {selectedService.title}
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-10 whitespace-pre-line">
                  {selectedService.description}
                </p>
                <div className="flex justify-center">
                  <Button onClick={handleCta} variant="whatsapp" className="h-14 px-10 text-lg bg-[#25D366] hover:bg-[#20bd5a]">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 mr-2 fill-current">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Falar com um advogado
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Quem somos? */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1a3241] mb-4 md:mb-6 font-serif">Quem somos?</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
              O escritório PINHO BARROSO ADVOGADOS é destaque empresarial e profissional e oferece serviços especializados na concessão de benefícios previdenciários junto ao INSS. Com mais de 15 anos de sólida experiência, atua com estratégia, agilidade e atendimento humanizado, com a expertise que você precisa para garantir o seu benefício.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 md:space-y-8"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] border-4 border-[#1a3241]">
                <img 
                  src="https://manoeljuniorpro.com.br/wp-content/uploads/2026/02/IMG_2945.jpg-scaled.jpeg" 
                  alt="Dr. Daniel de Souza Barroso" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-bold text-[#1a3241] font-serif">Dr. Daniel de Souza Barroso – OAB/MG 146.805</h3>
                <p className="text-gray-700 mt-3 md:mt-4 leading-relaxed text-base">
                  Advogado graduado pela Universidade de Itaúna (2007) e pós-graduado pelas Universidades Cândido Mendes e Estácio de Sá. Atua nas áreas Previdenciária, Cível e Criminal, com sólida experiência em Direito Privado. No Direito Público, exerceu os cargos de Procurador e Assessor Jurídico nos Poderes Executivo e Legislativo, com atuação em consultoria e assessoria jurídica.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 md:space-y-8"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] border-4 border-[#1a3241]">
                <img 
                  src="https://manoeljuniorpro.com.br/wp-content/uploads/2026/02/IMG_2940.jpg-scaled.jpeg" 
                  alt="Dra. Elisa de Pinho Carvalho" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-bold text-[#1a3241] font-serif">Dra. Elisa de Pinho Carvalho — OAB/MG 228.603</h3>
                <p className="text-gray-700 mt-3 md:mt-4 leading-relaxed text-base">
                  Advogada graduada pela Pontifícia Universidade Católica de Minas Gerais em 2021, recebeu destaque acadêmico e medalha de ouro por obter a maior média do curso. Pós-graduada em Direito Previdenciário e Prática Previdenciária, possui sólida experiência em Direito Privado, com atuação nas áreas Previdenciária, Cível e Trabalhista, com foco na defesa dos direitos dos segurados do INSS.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16 md:py-24 bg-[#1a3241] text-white">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 font-serif">Nossos Diferenciais</h2>
            <div className="w-20 md:w-24 h-1 md:h-1.5 bg-[#F2CA61] mx-auto"></div>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { 
                icon: <Globe className="w-10 h-10 text-[#F2CA61]" />, 
                title: "Atendimento Nacional", 
                desc: "Estrutura 100% digital para atender você em qualquer lugar do Brasil." 
              },
              { 
                icon: <Clock className="w-10 h-10 text-[#F2CA61]" />, 
                title: "Agilidade", 
                desc: "Equipe eficiente e capacitada para garantir seu benefício no menor tempo possível." 
              },
              { 
                icon: <ShieldCheck className="w-10 h-10 text-[#F2CA61]" />, 
                title: "Transparência", 
                desc: "Acompanhamento em tempo real e clareza total em cada etapa do seu processo." 
              },
              { 
                icon: <Award className="w-10 h-10 text-[#F2CA61]" />, 
                title: "Especialização", 
                desc: "Escritório composto por profissionais especializados em Direito Previdenciário, com atuação focada na defesa dos direitos dos segurados do INSS." 
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors text-center"
              >
                <div className="flex justify-center mb-6">{item.icon}</div>
                <h3 className="text-lg md:text-xl font-bold mb-4 font-serif">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-white text-center">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp}>
            <div className="flex justify-center">
              <Button onClick={handleCta} variant="whatsapp" className="h-14 md:h-16 px-10 md:px-16 text-base md:text-lg bg-[#25D366] hover:bg-[#20bd5a]">
                <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-6 md:h-6 mr-2 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Falar com um advogado
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a3241] text-white py-12 md:py-20 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 md:gap-16 mb-12 md:mb-16">
            {/* Left Side: Social Media */}
            <div className="flex flex-col items-center gap-6 md:gap-8">
              <div className="flex gap-4 md:gap-6">
                <a href="#" className="w-12 h-12 md:w-16 md:h-16 bg-[#F2CA61] rounded-full flex items-center justify-center text-[#1a3241] hover:scale-110 transition-transform shadow-lg">
                  <Facebook className="w-6 h-6 md:w-8 md:h-8 fill-current" />
                </a>
                <a href="https://www.instagram.com/advogadodanielbarroso" target="_blank" rel="noreferrer" className="w-12 h-12 md:w-16 md:h-16 bg-[#F2CA61] rounded-full flex items-center justify-center text-[#1a3241] hover:scale-110 transition-transform shadow-lg">
                  <Instagram className="w-6 h-6 md:w-8 md:h-8" />
                </a>
                <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="w-12 h-12 md:w-16 md:h-16 bg-[#F2CA61] rounded-full flex items-center justify-center text-[#1a3241] hover:scale-110 transition-transform shadow-lg">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-8 md:h-8 fill-current">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>
              </div>
              <p className="text-lg md:text-xl font-bold font-serif tracking-wide text-white text-center">
                Nossas Mídias Pinho Barroso Advogados
              </p>
            </div>

            {/* Right Side: Contact Info */}
            <div className="space-y-6 md:space-y-8 max-w-xl">
              <div className="flex items-start gap-4 md:gap-6">
                <MapPin className="w-6 h-6 md:w-10 md:h-10 text-[#F2CA61] flex-shrink-0" />
                <span className="text-base md:text-lg leading-relaxed text-white">
                  Rua Valdomiro Valadares, 11, sala 307, Centro, Guanhães/MG.
                </span>
              </div>
              <div className="flex items-center gap-4 md:gap-6">
                <Phone className="w-6 h-6 md:w-10 md:h-10 text-[#F2CA61] flex-shrink-0" />
                <span className="text-base md:text-lg font-bold text-white">(33) 984022885</span>
              </div>
              <div className="flex items-center gap-4 md:gap-6">
                <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-10 md:h-10 fill-[#F2CA61] flex-shrink-0">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span className="text-base md:text-lg font-bold text-white">+55 33 98402-2885</span>
              </div>
              <div className="flex items-center gap-4 md:gap-6">
                <Mail className="w-6 h-6 md:w-10 md:h-10 text-[#F2CA61] flex-shrink-0" />
                <span className="text-base md:text-lg text-white">pinhobarrosoadvogados@gmail.com</span>
              </div>
            </div>
          </div>

          <div className="pt-8 md:pt-12 border-t border-white/10 text-center">
            <p className="text-gray-400 text-xs md:text-sm">
              © 2026 Pinho Barroso Advogados – Políticas de Privacidade.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
