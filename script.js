/**
 * unTRAPPED Campaign Website - Minimal Enhancement Script
 * Native HTML accordions (<details>) work 100% without JavaScript.
 * This script only adds small utility enhancements for printing and page-load link offsets.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Auto-expand accordions before printing so the whole directory is printed
  window.addEventListener('beforeprint', () => {
    const accordions = document.querySelectorAll('.category-accordion');
    accordions.forEach(acc => {
      acc.setAttribute('data-was-open', acc.open);
      acc.open = true;
    });
  });

  window.addEventListener('afterprint', () => {
    const accordions = document.querySelectorAll('.category-accordion');
    accordions.forEach(acc => {
      const wasOpen = acc.getAttribute('data-was-open') === 'true';
      acc.open = wasOpen;
      acc.removeAttribute('data-was-open');
    });
  });

  // 2. Open accordion if hash links to a specific location inside it
  const handleHash = () => {
    const hash = window.location.hash;
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        // Find parent details element and open it
        const parentAccordion = target.closest('.category-accordion');
        if (parentAccordion) {
          parentAccordion.open = true;
        }
      }
    }
  };

  window.addEventListener('hashchange', handleHash);
  handleHash(); // Run on initial load
});
