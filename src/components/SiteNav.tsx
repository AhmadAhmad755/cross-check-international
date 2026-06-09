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

export default function SiteNav() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <nav className="site-nav">
      <a href="#" className="nav-logo">
        <img src="/cci-logo.svg" alt="CrossCheck International" className="cci-logo" />
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
