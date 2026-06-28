import { useEffect, useRef, useState } from 'react';
import { useBriefingModal } from '../../context/BriefingModalContext';

const EMAIL = 'ahmad@crosscheckinternational.co.uk';

const MAILTO = (() => {
  const subject = encodeURIComponent('CCI Briefing Request');
  const body = encodeURIComponent(
    'Hello CCI team,\r\n\r\n' +
      'I would like to arrange a briefing.\r\n\r\n' +
      'Organisation:\r\n' +
      'Country:\r\n' +
      'Role:\r\n' +
      'What I would like to discuss:\r\n\r\n' +
      'Thank you.',
  );
  return `mailto:${EMAIL}?subject=${subject}&body=${body}`;
})();

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

export default function BriefingModal() {
  const { isOpen, close } = useBriefingModal();
  const panelRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<Element | null>(null);
  const [copied, setCopied] = useState(false);

  // Lock body scroll, trap focus, restore focus on close.
  useEffect(() => {
    if (!isOpen) return;

    triggerRef.current = document.activeElement;
    document.body.classList.add('overflow-hidden');

    // First focusable on open is the X (close) button.
    const focusTimer = window.setTimeout(() => closeBtnRef.current?.focus(), 0);

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        close();
        return;
      }
      if (e.key === 'Tab') {
        const panel = panelRef.current;
        if (!panel) return;
        const focusables = Array.from(
          panel.querySelectorAll<HTMLElement>(FOCUSABLE),
        ).filter((el) => el.offsetParent !== null || el === document.activeElement);
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        const active = document.activeElement as HTMLElement | null;
        if (e.shiftKey && active === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && active === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', onKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener('keydown', onKeyDown);
      document.body.classList.remove('overflow-hidden');
      if (triggerRef.current instanceof HTMLElement) {
        triggerRef.current.focus();
      }
    };
  }, [isOpen, close]);

  // Reset the copied state whenever the modal closes.
  useEffect(() => {
    if (!isOpen) setCopied(false);
  }, [isOpen]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable (e.g. non-secure context) — ignore silently.
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay"
      role="presentation"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div
        className="modal-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="briefing-modal-title"
        ref={panelRef}
      >
        <button
          type="button"
          className="modal-close"
          aria-label="Close briefing dialog"
          onClick={close}
          ref={closeBtnRef}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="modal-eyebrow">REQUEST A BRIEFING</div>
        <h2 className="modal-title" id="briefing-modal-title">
          Connect with the CCI <em>team.</em>
        </h2>
        <p className="modal-body">
          Briefings are arranged with national governments, border and immigration
          agencies, financial institutions, humanitarian bodies, and integration
          partners. A member of the CCI team will respond to coordinate scope,
          jurisdiction, and agreement framework.
        </p>

        <div className="modal-email-box">{EMAIL}</div>

        <div className="modal-actions">
          <a href={MAILTO} className="btn-primary">
            Open in mail app
            <span className="arr">
              <svg viewBox="0 0 13 13">
                <path d="M2 6.5h9M7 2l4.5 4.5L7 11" />
              </svg>
            </span>
          </a>
          <button
            type="button"
            className={`btn-secondary${copied ? ' copied' : ''}`}
            onClick={handleCopy}
          >
            {copied ? 'Copied ✓' : 'Copy email'}
          </button>
        </div>
      </div>
    </div>
  );
}
