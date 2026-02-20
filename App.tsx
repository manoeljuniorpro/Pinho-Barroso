
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './components/Button';
import { ServiceCard } from './components/ServiceCard';
import { MessageSquare, ChevronRight, CheckCircle2, ShieldCheck, Clock, Globe, Award, MousePointerClick } from 'lucide-react';

const App: React.FC = () => {
  const WHATSAPP_LINK = "https://wa.me/5500000000000"; 

  const handleCta = () => {
    window.open(WHATSAPP_LINK, '_blank');
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

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
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
      >
        <MessageSquare className="w-6 h-6" />
      </motion.a>

      {/* Hero Section - Full Screen with Integrated Logo */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-12">
        {/* Background Image with Dark Overlay */}
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
          {/* Integrated Logo */}
          <img 
            src="https://manoeljuniorpro.com.br/wp-content/uploads/2026/02/WhatsApp-Image-2026-02-13-at-11.13.03.jpeg" 
            alt="Pinho Barroso Advogados Logo" 
            className="h-24 md:h-32 object-contain mb-12"
          />

          <div className="max-w-4xl">
            <span className="bg-[#F2CA61] text-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-8 inline-block">
              Especialista em Direito Previdenciário
            </span>
            <h1 className="text-4xl md:text-7xl font-bold text-white leading-tight mb-8 font-serif">
              Garanta o seu melhor benefício ou aposentadoria junto ao INSS.
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto">
              Não perca dinheiro. Fale com nossos especialistas em aposentadorias e benefícios do INSS.
              <br />
              <span className="font-bold text-[#F2CA61]">Atendimento online em todo o Brasil.</span>
            </p>
            <div className="flex justify-center">
              <Button onClick={handleCta} variant="whatsapp" className="h-16 px-16 text-lg">
                Falar com especialista
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Serviços Especializados - Light background, Dark cards */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a3241] mb-6 font-serif">
              Serviços Especializados
            </h2>
            <div className="w-24 h-1.5 bg-[#F2CA61] mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
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
              }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <ServiceCard 
                  title={service.title}
                  description={service.description}
                  onCtaClick={handleCta}
                />
              </motion.div>
            ))}
            <motion.div 
              {...fadeInUp}
              className="bg-[#1a3241] p-8 rounded-xl border-t-4 border-[#F2CA61] shadow-2xl flex flex-col justify-center text-white text-center"
            >
              <h3 className="text-2xl font-bold mb-6 text-[#F2CA61] font-serif">Outros Benefícios</h3>
              <p className="text-sm opacity-90 leading-relaxed mb-8">
                Nossa equipe é especialista em todo o universo previdenciário. Se tem dúvidas sobre seu caso específico, fale conosco agora.
              </p>
              <div className="flex justify-center">
                <Button onClick={handleCta} variant="whatsapp" fullWidth>
                  Falar com Advogado
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Como Funciona o Procedimento */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a3241] mb-6 font-serif">
              Como funciona o procedimento?
            </h2>
            <div className="w-24 h-1.5 bg-[#F2CA61] mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            {/* Imagem Estática */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-2xl overflow-hidden shadow-2xl h-full min-h-[450px] border-b-8 border-[#F2CA61]"
            >
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" 
                alt="Escritório de Advocacia Pinho Barroso" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Passos */}
            <div className="space-y-10">
              {[
                {
                  num: 1,
                  title: "Entre em Contato",
                  desc: "Você vai clicar no botão fale conosco e escolher a forma, dia e o horário que prefere ser atendido ou atendida."
                },
                {
                  num: 2,
                  title: "Analisaremos sua Demanda",
                  desc: "Conversaremos sobre seu problema para analisar a melhor estratégia a seguir."
                },
                {
                  num: 3,
                  title: "Proposta",
                  desc: "Em seguida lhe encaminharemos uma proposta e, após aceita, será a hora de assinar os documentos e nos enviar os documentos solicitados - tudo de forma digital."
                },
                {
                  num: 4,
                  title: "Vamos Solucionar seu Caso",
                  desc: "Depois disso é só deixar com a gente. Temos uma equipe especialista e juntos vamos trabalhar para que você tenha a solução ideal e mais rápida para seu problema."
                }
              ].map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#1a3241] text-[#F2CA61] flex items-center justify-center font-bold text-2xl shadow-xl border-2 border-[#F2CA61]/20">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1a3241] mb-2 font-serif">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            {...fadeInUp}
            className="mt-20 flex flex-col items-center text-center"
          >
            <Button onClick={handleCta} variant="whatsapp" className="h-16 px-16 text-lg shadow-xl">
              Falar com especialista
              <ChevronRight className="w-5 h-5" />
            </Button>
            <p className="text-gray-500 mt-6 text-sm font-medium tracking-wide uppercase">
              Atendimento imediato e 100% Online em todo Brasil.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sobre o Escritório - Team side-by-side */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-[#1a3241] mb-4 font-serif">Sobre o Escritório</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Uma trajetória de mais de 15 anos de dedicação exclusiva à defesa dos segurados do INSS.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6 text-center"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] border-4 border-white">
                <img 
                  src="https://manoeljuniorpro.com.br/wp-content/uploads/2026/02/IMG-20260209-WA0008.jpg.jpeg" 
                  alt="Daniel Barroso" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#1a3241] font-serif">Daniel Barroso</h3>
                <p className="text-[#F2CA61] font-bold uppercase tracking-widest text-xs mt-1">Sócio Fundador</p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 text-center"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] border-4 border-white">
                <img 
                  src="https://manoeljuniorpro.com.br/wp-content/uploads/2026/02/IMG_2940-scaled.jpg" 
                  alt="Advogada Pinho" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#1a3241] font-serif">Advogada Pinho</h3>
                <p className="text-[#F2CA61] font-bold uppercase tracking-widest text-xs mt-1">Sócia Fundadora</p>
              </div>
            </motion.div>
          </div>

          <motion.div 
            {...fadeInUp}
            className="max-w-4xl mx-auto mt-20 text-center"
          >
            <p className="text-xl text-gray-700 leading-relaxed italic font-serif">
              "Nosso compromisso é transformar vidas através do direito, garantindo que cada cidadão receba o benefício justo que conquistou com anos de esforço."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Diferenciais do Escritório */}
      <section className="py-24 bg-[#1a3241] text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 font-serif">Nossos Diferenciais</h2>
            <div className="w-24 h-1.5 bg-[#F2CA61] mx-auto"></div>
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
                desc: "Processos internos otimizados para garantir o benefício no menor tempo possível." 
              },
              { 
                icon: <ShieldCheck className="w-10 h-10 text-[#F2CA61]" />, 
                title: "Transparência", 
                desc: "Acompanhamento em tempo real e clareza total em cada etapa do seu processo." 
              },
              { 
                icon: <Award className="w-10 h-10 text-[#F2CA61]" />, 
                title: "Especialização", 
                desc: "Foco exclusivo em Direito Previdenciário com mais de 15 anos de expertise." 
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors text-center"
              >
                <div className="flex justify-center mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold mb-4 font-serif">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1a3241] mb-8 font-serif">
              Ainda tem dúvidas sobre seu direito?
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Clique no botão abaixo e fale agora mesmo com um de nossos advogados especialistas.
            </p>
            <div className="flex justify-center">
              <Button onClick={handleCta} variant="whatsapp" className="h-16 px-16 text-lg">
                Falar com Especialista Agora
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Simplified Footer */}
      <footer className="bg-[#0f1d26] text-white py-12 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-8">
            <img 
              src="https://manoeljuniorpro.com.br/wp-content/uploads/2026/02/WhatsApp-Image-2026-02-13-at-11.13.03.jpeg" 
              alt="Logo Footer" 
              className="h-20" 
            />
            
            <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Políticas de Privacidade</a>
              <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
              <span className="text-gray-600">|</span>
              <span>© 2026 Pinho Barroso Advogados</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
