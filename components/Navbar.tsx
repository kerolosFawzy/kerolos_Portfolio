interface NavbarProps { darkMode: boolean; setDarkMode(isDark: boolean): void; }
export default function Navbar({darkMode,setDarkMode}: NavbarProps) {
 return <nav className="navbar" aria-label="Main navigation"><a className="brand" href="#main">kerolos<span>.dev</span></a><div className="nav-links"><a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact</a></div><div className="nav-actions"><button className="theme-toggle" onClick={()=>setDarkMode(!darkMode)} aria-label={darkMode ? 'Switch to light theme' : 'Switch to dark theme'}>{darkMode ? '☀' : '☾'}</button><a className="resume-link" href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/Kerolos_Fawzy_cv.pdf`} download>Resume ↓</a></div></nav>;
}
