import { useState } from "react";
import { Check, X, HeartPulse, Video, Smartphone, Dumbbell } from "lucide-react";

const WPP = (msg: string) =>
  `https://wa.me/5511983700891?text=${encodeURIComponent(msg)}`;

const PlansSection = () => {
  const [tri, setTri] = useState(false);
  const [assistidoFreq, setAssistidoFreq] = useState<2|3>(2);
  const [presencialFreq, setPresencialFreq] = useState<1|2|3>(1);

  const presencialBase: Record<1|2|3, number> = { 1: 360, 2: 640, 3: 840 };
  const assistidoBase: Record<2|3, number> = { 2: 480, 3: 620 };

  const fmt = (n: number) => n.toLocaleString('pt-BR');

  const calcPrice = (monthly: number) => tri ? Math.round(monthly * 3 * 0.9 / 3) : monthly;
  const calcTri = (monthly: number) => Math.round(monthly * 3 * 0.9);
  const calcSave = (monthly: number) => Math.round(monthly * 3 * 0.1);

  const onlineMonthly = 179.90;
  const onlineTri = 485.73;

  return (
    <section id="planos" style={{ background: '#F0E8DC' }} className="py-14 px-8">
      <div className="max-w-5xl mx-auto">
        <div className="eyebrow mb-4">✦ Planos</div>
        <h2 style={{ fontSize: 36, fontWeight: 600, color: '#1C1410', marginBottom: 6 }}>
          Escolha como treinar com a Maria
        </h2>
        <p style={{ fontSize: 13, color: '#7A6558', marginBottom: 32, lineHeight: 1.7 }}>
          Todos os planos incluem dieta. O nível de acompanhamento é o que diferencia cada um.
        </p>

        {/* Toggle */}
        <div className="flex items-center flex-wrap gap-3 mb-8">
          <div style={{
            display: 'inline-flex', background: 'rgba(184,137,74,0.07)',
            border: '1.5px solid rgba(184,137,74,0.2)', borderRadius: 40, padding: 4, gap: 4
          }}>
            {(['Mensal','Trimestral'] as const).map((l, i) => (
              <button key={l} onClick={() => setTri(i === 1)}
                style={{
                  padding: '9px 22px', borderRadius: 36, fontSize: 11, letterSpacing: '1px',
                  textTransform: 'uppercase', cursor: 'pointer', fontFamily: "'DM Sans',sans-serif",
                  border: 'none', fontWeight: tri === (i===1) ? 700 : 500,
                  color: tri === (i===1) ? '#fff' : '#7A6558',
                  background: tri === (i===1)
                    ? 'linear-gradient(135deg,rgba(184,137,74,0.8),rgba(232,201,138,0.6))'
                    : 'transparent',
                  transition: 'all 0.2s'
                }}>{l}</button>
            ))}
          </div>
          {tri && (
            <span style={{
              background: '#F2D4DC', color: '#B05570', fontSize: 10,
              letterSpacing: '1px', textTransform: 'uppercase', padding: '6px 14px',
              borderRadius: 40, fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 6
            }}>🏷 10% de desconto</span>
          )}
        </div>

        {/* Plans grid */}
        <div className="grid md:grid-cols-3 gap-5">

          {/* ONLINE */}
          <div style={{ background: '#fff', border: '1.5px solid rgba(154,110,46,0.12)', borderRadius: 20, padding: '26px 20px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ background: '#F0E8DC', color: '#7A6558', fontSize: 9, letterSpacing: '2px', textTransform: 'uppercase', padding: '5px 12px', borderRadius: 40, display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 16, fontWeight: 600, width: 'fit-content' }}>
              <Smartphone size={11} /> Online
            </div>
            <div style={{ width: 46, height: 46, borderRadius: 14, background: '#F0E8DC', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
              <Smartphone size={22} color="#7A6558" />
            </div>
            <h3 style={{ fontSize: 22, fontWeight: 600, color: '#1C1410', marginBottom: 6 }}>Consultoria Online</h3>
            <p style={{ fontSize: 12, color: '#7A6558', lineHeight: 1.7, marginBottom: 16 }}>
              Treino personalizado + dieta padrão + suporte via WhatsApp. Para todo o Brasil.
            </p>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 36, fontWeight: 600, color: '#B8894A', lineHeight: 1 }}>
              R${tri ? '161' : '179'}<span style={{ fontSize: 13, color: '#7A6558', fontFamily: "'DM Sans',sans-serif" }}>{tri ? ',91/mês' : ',90/mês'}</span>
            </div>
            {tri && <div style={{ fontSize: 11, color: '#7A6558', marginTop: 4 }}>3 meses por R$485,73</div>}
            {tri && <div style={{ fontSize: 11, color: '#B05570', marginBottom: 12, fontWeight: 600 }}>economia de R$54,57</div>}
            <ul style={{ listStyle: 'none', flex: 1, margin: '14px 0 22px', padding: 0 }}>
              {[
                [true, 'Planilha de treino personalizada'],
                [true, 'Dieta padrão inclusa'],
                [true, 'Suporte via WhatsApp'],
                [true, 'Atualização mensal'],
                [false, 'Acompanhamento em tempo real'],
                [false, 'Dieta personalizada'],
              ].map(([ok, text], i) => (
                <li key={i} style={{ fontSize: 12, color: '#7A6558', padding: '6px 0', borderBottom: '1px solid rgba(154,110,46,0.07)', display: 'flex', alignItems: 'flex-start', gap: 8, lineHeight: 1.5 }}>
                  {ok ? <Check size={14} color="#B8894A" style={{ flexShrink: 0, marginTop: 1 }} /> : <X size={14} color="#D0C0B8" style={{ flexShrink: 0, marginTop: 1 }} />}
                  {text as string}
                </li>
              ))}
            </ul>
            <a href={WPP('Olá Maria! Tenho interesse no plano Consultoria Online!')} target="_blank" rel="noopener noreferrer"
              className="btn-glass-outline-gold w-full text-center block">
              Começar agora
            </a>
          </div>

          {/* ASSISTIDO */}
          <div style={{ background: 'linear-gradient(160deg,#FBF5EC,#FFF9F0)', border: '2px solid rgba(184,137,74,0.4)', borderRadius: 20, padding: '26px 20px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ background: 'rgba(184,137,74,0.15)', color: '#9A6E2E', fontSize: 9, letterSpacing: '2px', textTransform: 'uppercase', padding: '5px 12px', borderRadius: 40, display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 16, fontWeight: 600, width: 'fit-content' }}>
              <Video size={11} /> Mais popular
            </div>
            <div style={{ width: 46, height: 46, borderRadius: 14, background: 'rgba(184,137,74,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
              <Video size={22} color="#B8894A" />
            </div>
            <h3 style={{ fontSize: 22, fontWeight: 600, color: '#1C1410', marginBottom: 6 }}>Personal Assistido</h3>
            <p style={{ fontSize: 12, color: '#7A6558', lineHeight: 1.7, marginBottom: 16 }}>
              A Maria acompanha seu treino ao vivo por videochamada. Dieta personalizada.
            </p>
            <div className="flex gap-2 flex-wrap mb-4">
              {([2,3] as const).map(f => (
                <button key={f} className={`freq-btn ${assistidoFreq === f ? 'active' : ''}`}
                  onClick={() => setAssistidoFreq(f)}>{f}x/semana</button>
              ))}
            </div>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 36, fontWeight: 600, color: '#B8894A', lineHeight: 1 }}>
              R${fmt(calcPrice(assistidoBase[assistidoFreq]))}<span style={{ fontSize: 13, color: '#7A6558', fontFamily: "'DM Sans',sans-serif" }}>/mês</span>
            </div>
            {tri && <div style={{ fontSize: 11, color: '#7A6558', marginTop: 4 }}>3 meses por R${fmt(calcTri(assistidoBase[assistidoFreq]))}</div>}
            {tri && <div style={{ fontSize: 11, color: '#B05570', marginBottom: 12, fontWeight: 600 }}>economia de R${fmt(calcSave(assistidoBase[assistidoFreq]))}</div>}
            <ul style={{ listStyle: 'none', flex: 1, margin: '14px 0 22px', padding: 0 }}>
              {[
                [true, 'Planilha de treino personalizada'],
                [true, 'Dieta personalizada ao objetivo'],
                [true, 'Acompanhamento por videochamada'],
                [true, 'Correção de execução em tempo real'],
                [true, 'Suporte prioritário WhatsApp'],
                [false, 'Consulta com nutricionista'],
              ].map(([ok, text], i) => (
                <li key={i} style={{ fontSize: 12, color: '#7A6558', padding: '6px 0', borderBottom: '1px solid rgba(154,110,46,0.07)', display: 'flex', alignItems: 'flex-start', gap: 8, lineHeight: 1.5 }}>
                  {ok ? <Check size={14} color="#B8894A" style={{ flexShrink: 0, marginTop: 1 }} /> : <X size={14} color="#D0C0B8" style={{ flexShrink: 0, marginTop: 1 }} />}
                  {text as string}
                </li>
              ))}
            </ul>
            <a href={WPP('Olá Maria! Tenho interesse no plano Personal Assistido por vídeo!')} target="_blank" rel="noopener noreferrer"
              className="btn-glass-gold w-full text-center block">
              Quero esse plano
            </a>
          </div>

          {/* PRESENCIAL */}
          <div style={{ background: 'linear-gradient(160deg,#FBF0F3,#FFF6F8)', border: '1.5px solid rgba(196,118,138,0.25)', borderRadius: 20, padding: '26px 20px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ background: 'rgba(176,85,112,0.1)', color: '#B05570', fontSize: 9, letterSpacing: '2px', textTransform: 'uppercase', padding: '5px 12px', borderRadius: 40, display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 16, fontWeight: 600, width: 'fit-content' }}>
              <Dumbbell size={11} /> Premium
            </div>
            <div style={{ width: 46, height: 46, borderRadius: 14, background: 'rgba(176,85,112,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
              <Dumbbell size={22} color="#B05570" />
            </div>
            <h3 style={{ fontSize: 22, fontWeight: 600, color: '#1C1410', marginBottom: 6 }}>Personal Presencial</h3>
            <p style={{ fontSize: 12, color: '#7A6558', lineHeight: 1.7, marginBottom: 16 }}>
              Treino em Bragança Paulista + dieta personalizada + nutricionista inclusa.
            </p>
            <div className="flex gap-2 flex-wrap mb-3">
              {([1,2,3] as const).map(f => (
                <button key={f} className={`freq-btn ${presencialFreq === f ? 'active' : ''}`}
                  onClick={() => setPresencialFreq(f)}>{f}x/semana</button>
              ))}
            </div>
            {/* Nutri pill */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'linear-gradient(135deg,rgba(196,118,138,0.15),rgba(242,180,200,0.08))', border: '1px solid rgba(196,118,138,0.3)', borderRadius: 40, padding: '8px 14px', marginBottom: 14, backdropFilter: 'blur(4px)' }}>
              <HeartPulse size={14} color="#B05570" />
              <span style={{ fontSize: 10, color: '#B05570', letterSpacing: '0.5px', fontWeight: 600 }}>Nutricionista inclusa no plano</span>
            </div>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 36, fontWeight: 600, color: '#B8894A', lineHeight: 1 }}>
              R${fmt(calcPrice(presencialBase[presencialFreq]))}<span style={{ fontSize: 13, color: '#7A6558', fontFamily: "'DM Sans',sans-serif" }}>/mês</span>
            </div>
            {tri && <div style={{ fontSize: 11, color: '#7A6558', marginTop: 4 }}>3 meses por R${fmt(calcTri(presencialBase[presencialFreq]))}</div>}
            {tri && <div style={{ fontSize: 11, color: '#B05570', marginBottom: 12, fontWeight: 600 }}>economia de R${fmt(calcSave(presencialBase[presencialFreq]))}</div>}
            <ul style={{ listStyle: 'none', flex: 1, margin: '14px 0 22px', padding: 0 }}>
              {[
                [true, 'Treino presencial com a Maria'],
                [true, 'Dieta personalizada ao objetivo'],
                [true, 'Consulta com nutricionista inclusa'],
                [true, 'Correção de execução ao vivo'],
                [true, 'Suporte prioritário WhatsApp'],
                [true, 'Avaliação física mensal'],
              ].map(([ok, text], i) => (
                <li key={i} style={{ fontSize: 12, color: '#7A6558', padding: '6px 0', borderBottom: '1px solid rgba(154,110,46,0.07)', display: 'flex', alignItems: 'flex-start', gap: 8, lineHeight: 1.5 }}>
                  {ok ? <Check size={14} color="#B8894A" style={{ flexShrink: 0, marginTop: 1 }} /> : <X size={14} color="#D0C0B8" style={{ flexShrink: 0, marginTop: 1 }} />}
                  {text as string}
                </li>
              ))}
            </ul>
            <a href={WPP('Olá Maria! Tenho interesse no plano Personal Presencial em Bragança Paulista!')} target="_blank" rel="noopener noreferrer"
              className="btn-glass-rose w-full text-center block">
              Quero esse plano
            </a>
          </div>
        </div>

        {/* Diferenciais */}
        <div className="grid md:grid-cols-3 gap-4 mt-10">
          {[
            { bg: 'rgba(184,137,74,0.1)', ico: '🥗', color: '#B8894A', title: 'Dieta em todos os planos', desc: 'Padrão no Online, totalmente personalizada no Assistido e Presencial.' },
            { bg: '#F2D4DC', ico: '🩺', color: '#B05570', title: 'Nutricionista no Presencial', desc: 'Consulta com nutri parceira já inclusa — sem custo extra.' },
            { bg: '#F0E8DC', ico: '🌎', color: '#7A6558', title: 'Online para todo o Brasil', desc: 'Presencial em Bragança Paulista. Online e Assistido em qualquer lugar.' },
          ].map(({ bg, ico, title, desc }) => (
            <div key={title} style={{ background: '#fff', border: '1.5px solid rgba(154,110,46,0.08)', borderRadius: 16, padding: '22px 16px', textAlign: 'center' }}>
              <div style={{ width: 48, height: 48, borderRadius: '50%', background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px', fontSize: 20 }}>{ico}</div>
              <h4 style={{ fontSize: 13, fontWeight: 600, color: '#1C1410', marginBottom: 6, fontFamily: "'DM Sans',sans-serif" }}>{title}</h4>
              <p style={{ fontSize: 11, color: '#7A6558', lineHeight: 1.6 }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
