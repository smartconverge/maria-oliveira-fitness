const WPP = "https://wa.me/5511983700891?text=Ol%C3%A1%20Maria!%20Vim%20pelo%20site%20e%20quero%20saber%20mais%20sobre%20os%20planos!";
const IG = "https://instagram.com/maria_personall";

const CTASection = () => (
  <section id="contato" style={{ background: 'linear-gradient(160deg,#F2D4DC,#FAF6F1)', padding: '64px 32px', textAlign: 'center' }}>
    <div className="max-w-xl mx-auto">
      <div className="eyebrow mb-5 mx-auto w-fit">✦ Próximo passo</div>
      <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 42, fontWeight: 600, color: '#1C1410', marginBottom: 8 }}>
        Vamos construir isso <em style={{ color: '#B05570' }}>juntas?</em>
      </h2>
      <div style={{ width: 36, height: 1, background: '#B8894A', margin: '12px auto 16px' }} />
      <p style={{ fontSize: 14, color: '#7A6558', maxWidth: 380, margin: '0 auto 32px', lineHeight: 1.8 }}>
        Escolha seu plano e fale direto com a Maria. Vagas limitadas — não deixa pra depois.
      </p>
      <div className="flex gap-3 justify-center flex-wrap">
        <a href={WPP} target="_blank" rel="noopener noreferrer" className="btn-glass-wpp">
          💬 Falar com a Maria agora
        </a>
        <a href={IG} target="_blank" rel="noopener noreferrer" className="btn-glass-outline-rose">
          📸 @maria_personall
        </a>
      </div>
    </div>
  </section>
);

export default CTASection;
