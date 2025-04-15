import blogPosts from '../meta/blog.json';
import projects from '../meta/projects.json';

export default function Home() {
  return (
    <main style={{ padding: '3rem', maxWidth: '1400px', margin: '0 auto' }}>
      <h1>👋 Hi, I'm Lazar</h1>
      <p style={{ fontSize: '1.25rem', lineHeight: '1.7' }}>
        I'm a software engineer and math nerd who loves solving hard problems across machine learning,
        software automation, and theoretical computer science. I like to think of myself as a generalist 
        problem solver — someone who finds joy in connecting deep technical understanding with practical implementation.
      </p>

      <p style={{ fontSize: '1.25rem', lineHeight: '1.7' }}>
        This site is my digital lab notebook. Here, I write about concepts that pique my interest — from
        Shannon entropy to compiler design — and try to explain them as clearly and usefully as I can.
      </p>

      <hr style={{ margin: '2rem 0' }} />

      <h2>📘 Featured Posts</h2>
      <ul>
        {blogPosts.map((post) => (
          <li key={post.slug} style={{ marginBottom: '1.5rem' }}>
            <strong>🧠 <a href={`/blog/${post.slug}`}>{post.title}</a></strong>
            <br />
            <span>{post.description}</span>
          </li>
        ))}
      </ul>

      <h2 style={{ marginTop: '2rem' }}>🛠 Featured Projects</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.name} style={{ marginBottom: '1.5rem' }}>
            <strong><a href={project.link}>{project.name}</a></strong>
            <br />
            <span>{project.description}</span>
          </li>
        ))}
      </ul>

      <h2 style={{ marginTop: '2rem' }}>👤 About Me</h2>
      <p>
        I'm currently finishing my Master’s thesis on Gröbner bases and graph algorithms at the Faculty of Mathematics, 
        University of Belgrade. I also recently worked as a Data Engineer intern at Levi9, where I built 
        event-driven AWS pipelines with Terraform and Lambda, and as a Business Technology Consultant at FIS, focusing on 
        backend engineering with C#, SQL, and Python.
      </p>

      <h2 style={{ marginTop: '2rem' }}>📫 Connect</h2>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <li>
          <a
            href="https://github.com/kracunovic92"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: '#0366d6', fontWeight: '500' }}
          >
            🐙 GitHub — <span style={{ fontWeight: 'normal' }}>@kracunovic92</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/kracunovic"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: '#0a66c2', fontWeight: '500' }}
          >
            💼 LinkedIn — <span style={{ fontWeight: 'normal' }}>/kracunovic</span>
          </a>
        </li>
        <li>
          <a
            href="mailto:lazar.kracunovic92@gmail.com"
            style={{ textDecoration: 'none', color: '#bb2222', fontWeight: '500' }}
          >
            ✉️ Email — <span style={{ fontWeight: 'normal' }}>lazar.kracunovic92@gmail.com</span>
          </a>
        </li>
      </ul>


      <footer style={{ marginTop: '4rem', fontSize: '0.9rem', opacity: 0.7 }}>

        
      </footer>
    </main>
  );
}