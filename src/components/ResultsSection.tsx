const stats = [
  { n: '128', l: 'Alunas ativas hoje' },
  { n: '233', l: 'Total já atendidas' },
  { n: '16k', l: 'Seguidores no Instagram' },
  { n: 'CREF', l: '175891-G/SP certificada' },
];

const ResultsSection = () => (
  <section id="resultados" style={{ background: 'linear-gradient(135deg,#1C1410,#2C1F18)' }} className="py-14 px-8">
    <div className="max-w-5xl mx-auto">
      <div className="eyebrow-gold mb-4">✦ Números reais</div>
      <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 32, fontWeight: 600, color: '#fff', marginBottom: 24 }}>
        Resultados que falam por si
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map(({ n, l }) => (
          <div key={l} style={{ textAlign: 'center', padding: '24px 16px', border: '1px solid rgba(184,137,74,0.22)', borderRadius: 16, background: 'rgba(184,137,74,0.04)' }}>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 40, fontWeight: 600, color: '#E8C98A' }}>{n}</div>
            <div style={{ fontSize: 10, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginTop: 6 }}>{l}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ResultsSection;
