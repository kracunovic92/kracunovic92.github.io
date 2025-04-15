import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
        backgroundColor: 'var(--card-bg)',
        color: 'var(--fg)',
        boxShadow: '0 2px 8px var(--card-shadow)',
        fontFamily: 'var(--font-main)'
      }}
    >
      <Link to="/" style={{ color: 'var(--accent)', fontWeight: 'bold', fontSize: '1.25rem' }}>
        Lazar Kracunovic
      </Link>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Link to="/about" style={{ color: 'var(--fg)', textDecoration: 'none' }}>About</Link>
        <Link to="/posts" style={{ color: 'var(--fg)', textDecoration: 'none' }}>Blog</Link>
        <Link to="/projects" style={{ color: 'var(--fg)', textDecoration: 'none' }}>Projects</Link>
      </div>
    </nav>
  );
};

export default Navbar;