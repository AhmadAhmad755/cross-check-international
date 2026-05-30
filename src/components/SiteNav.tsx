import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';

const NAV_LINKS = [
  { label: 'Solutions', href: '#' },
  { label: 'For Governments', href: '#' },
  { label: 'Partners', href: '#' },
  { label: 'API', href: '#' },
  { label: 'About', href: '#' },
];

function LogoMark() {
  return (
    <svg className="logomark" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect width="38" height="38" rx="10" fill="#08152B" />
      <circle cx="19" cy="19" r="11.5" stroke="#1A6BD4" strokeWidth="1.2" fill="none" />
      <ellipse cx="19" cy="19" rx="5.5" ry="11.5" stroke="#1A6BD4" strokeWidth="0.9" fill="none" />
      <line x1="7.5" y1="19" x2="30.5" y2="19" stroke="#1A6BD4" strokeWidth="0.9" />
      <line x1="9" y1="14" x2="29" y2="14" stroke="#1A6BD4" strokeWidth="0.9" />
      <line x1="9" y1="24" x2="29" y2="24" stroke="#1A6BD4" strokeWidth="0.9" />
      <path
        d="M19 8L25.5 11.5V19.5C25.5 23 22.5 26 19 27.5C15.5 26 12.5 23 12.5 19.5V11.5Z"
        fill="rgba(26,107,212,0.14)"
        stroke="#3B8EF0"
        strokeWidth="1.1"
        strokeLinejoin="round"
      />
      <path
        d="M16 19.5L18.2 21.5L22 17"
        stroke="white"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function SiteNav() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <nav className="site-nav">
      <a href="#" className="nav-logo">
        <LogoMark />
        <div className="logo-wordmark">
          <span className="lw-cci">CCI</span>
          <span className="lw-full">CrossCheck International</span>
        </div>
      </a>

      {isDesktop && (
        <ul className="nav-center">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a href={link.href}>{link.label}</a>
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
        <a href="#" className="btn-nav-ghost">
          Sign in
        </a>
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
