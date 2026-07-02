import { useEffect, useState } from 'react';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';

type NavLink = { label: string; href: string; target: string };

const NAV_LINKS: NavLink[] = [
  { label: 'Solutions', href: '#solutions', target: 'solutions' },
  { label: 'For Governments', href: '#who-we-serve', target: 'who-we-serve' },
  { label: 'Partners', href: '#who-we-serve', target: 'who-we-serve' },
  { label: 'API', href: '#intelligence-layer', target: 'intelligence-layer' },
  { label: 'About', href: '#why-cci', target: 'why-cci' },
];

// All section ids the observer should watch (drives active-link highlighting).
const OBSERVED_IDS = [
  'top',
  'solutions',
  'intelligence-layer',
  'how-it-works',
  'for-institutions',
  'global',
  'who-we-serve',
  'why-cci',
  'get-started',
];

export default function Navbar() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>('top');

  useEffect(() => {
    const sections = OBSERVED_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="site-nav">
      <a href="#top" className="nav-logo">
        <img src="/cci-logo.svg" alt="CrossCheck International" className="cci-logo" />
      </a>

      {isDesktop && (
        <ul className="nav-center">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={activeId === link.target ? 'active' : undefined}
                aria-current={activeId === link.target ? 'true' : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}

      <div className="nav-right">
        {!isDesktop && (
          <IconButton
            className="nav-menu-btn"
            aria-label="Open navigation menu"
            onClick={() => setDrawerOpen(true)}
            size="small"
          >
            <MenuIcon fontSize="small" />
          </IconButton>
        )}
      </div>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: 280,
            fontFamily: '"DM Sans", sans-serif',
          },
        }}
      >
        <List sx={{ pt: 2 }}>
          {NAV_LINKS.map((link) => (
            <ListItemButton
              key={link.label}
              component="a"
              href={link.href}
              onClick={() => setDrawerOpen(false)}
              sx={{ color: 'var(--slate)', fontSize: 14 }}
            >
              <ListItemText primary={link.label} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </nav>
  );
}
