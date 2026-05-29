import { MapPin, ShieldCheck } from "lucide-react";

const WPP_VAGA = "https://wa.me/5511983700891?text=Ol%C3%A1%20Maria!%20Vim%20pelo%20site%20e%20quero%20garantir%20minha%20vaga!";

const HeroSection = () => (
  <section id="sobre" style={{ background: 'var(--cream)' }}
    className="grid md:grid-cols-[1.1fr_0.9fr]">
    {/* Left */}
    <div className="flex flex-col justify-center px-8 py-16">
      <div className="eyebrow mb-6 w-fit">
        ✦ Personal Trainer · Bragança Paulista
      </div>
      <h1 style={{ fontSize: 'clamp(36px,5vw,52px)', lineHeight: 1.05, color: '#1C1410', marginBottom: 16 }}>
        Treino com <em style={{ color: '#B8894A' }}>estratégia.</em><br />
        Resultado com <em style={{ color: '#B8894A' }}>liberdade.</em>
      </h1>
      <p style={{ fontSize: 14, color: '#7A6558', lineHeight: 1.8, marginBottom: 32, maxWidth: 400 }}>
        Metodologia personalizada para mulheres que querem resultado real — presencial em Bragança Paulista,
        por vídeo ou online para todo o Brasil.
      </p>
      <div className="flex flex-wrap gap-3">
        <a href={WPP_VAGA} target="_blank" rel="noopener noreferrer" className="btn-glass-gold">
          Garantir minha vaga
        </a>
        <a href="#planos" className="btn-glass-outline-gold">
          Ver planos
        </a>
      </div>
    </div>

    {/* Right */}
    <div style={{ background: '#F0E8DC', borderLeft: '1px solid rgba(154,110,46,0.1)' }}
      className="flex flex-col justify-center px-7 py-10 gap-4">
      {/* Stats */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { n: '128', l: 'Alunas ativas' },
          { n: '233', l: 'Já atendidas' },
          { n: '16k', l: 'Seguidores' },
        ].map(({ n, l }) => (
          <div key={l} style={{ background: '#fff', borderRadius: 14, padding: '16px 12px', textAlign: 'center', border: '1px solid rgba(154,110,46,0.1)' }}>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 28, fontWeight: 600, color: '#B8894A' }}>{n}</div>
            <div style={{ fontSize: 9, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#7A6558', marginTop: 3 }}>{l}</div>
          </div>
        ))}
      </div>

      {/* Dieta card */}
      <div style={{
        background: 'linear-gradient(135deg,rgba(184,137,74,0.8),rgba(232,201,138,0.65))',
        borderRadius: 16, padding: '16px 18px',
        border: '1px solid rgba(255,220,150,0.4)',
        backdropFilter: 'blur(8px)',
        display: 'flex', alignItems: 'center', gap: 12
      }}>
        <ShieldCheck size={22} color="#fff" />
        <div>
          <div style={{ fontSize: 12, fontWeight: 600, color: '#fff' }}>Todos os planos com dieta inclusa</div>
          <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.8)', marginTop: 2 }}>Nutricionista parceira no Presencial</div>
        </div>
      </div>

      {/* Location card */}
      <div style={{ background: '#fff', borderRadius: 14, padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 12, border: '1px solid rgba(154,110,46,0.1)' }}>
        <div style={{ width: 38, height: 38, borderRadius: '50%', background: 'var(--rose-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <MapPin size={18} color="#B05570" />
        </div>
        <div>
          <div style={{ fontSize: 12, fontWeight: 600, color: '#1C1410' }}>Presencial em Bragança Paulista</div>
          <div style={{ fontSize: 11, color: '#7A6558', marginTop: 2 }}>Online e Assistido para todo o Brasil</div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
