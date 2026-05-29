const WPP = "https://wa.me/5511983700891?text=Ol%C3%A1%20Maria!%20Vim%20pelo%20site%20e%20quero%20saber%20mais%20sobre%20os%20planos.";

const Navbar = () => (
  <nav style={{ background: '#fff', borderBottom: '1px solid rgba(154,110,46,0.12)' }}
    className="flex justify-between items-center px-8 py-5 sticky top-0 z-50">
    <div className="flex items-center gap-3">
      <div style={{
        width: 38, height: 38, borderRadius: '50%',
        background: 'linear-gradient(135deg,#B8894A,#E8C98A)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: "'Cormorant Garamond',serif", fontSize: 18, fontWeight: 600, color: '#fff'
      }}>M</div>
      <div>
        <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 18, fontWeight: 600, color: '#1C1410' }}>Maria Oliveira</div>
        <div style={{ fontSize: 10, letterSpacing: '2.5px', textTransform: 'uppercase', color: '#7A6558' }}>Personal Trainer</div>
      </div>
    </div>
    <div className="hidden md:flex gap-6">
      {['Sobre','Planos','Resultados','Contato'].map(l => (
        <a key={l} href={`#${l.toLowerCase()}`}
          style={{ fontSize: 12, letterSpacing: '1px', textTransform: 'uppercase', color: '#7A6558', textDecoration: 'none' }}
          className="hover:text-amber-700 transition-colors">{l}</a>
      ))}
    </div>
    <a href={WPP} target="_blank" rel="noopener noreferrer" className="btn-glass-gold">
      Quero uma vaga
    </a>
  </nav>
);

export default Navbar;
