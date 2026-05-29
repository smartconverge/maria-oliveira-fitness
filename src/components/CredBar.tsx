import { ShieldCheck, GraduationCap, MapPin, Instagram } from "lucide-react";

const items = [
  { icon: ShieldCheck, text: "CREF 175891-G/SP" },
  { icon: GraduationCap, text: "Pós-grad. Fisiologia do Exercício" },
  { icon: MapPin, text: "Bragança Paulista — SP" },
  { icon: Instagram, text: "@maria_personall · 16 mil seguidores" },
];

const CredBar = () => (
  <div style={{ background: '#F0E8DC', borderBottom: '1px solid rgba(154,110,46,0.1)' }}
    className="flex flex-wrap gap-4 px-8 py-3">
    {items.map(({ icon: Icon, text }, i) => (
      <div key={i} className="flex items-center gap-1.5" style={{ fontSize: 11, color: '#7A6558' }}>
        <Icon size={13} style={{ color: '#B8894A' }} />
        {text}
        {i < items.length - 1 && <span style={{ color: 'rgba(154,110,46,0.3)', marginLeft: 8 }}>·</span>}
      </div>
    ))}
  </div>
);

export default CredBar;
