const SIDEBAR_IDS = ['destacadas', 'highlights', 'skills', 'blandas', 'soft-skills', 'educacion', 'education'];
const MAIN_IDS = ['resumen', 'summary', 'logros', 'achievements', 'experiencia', 'experience', 'proyectos', 'projects'];
const CANONICAL_ORDER = [
  'resumen', 'summary',
  'destacadas', 'highlights',
  'logros', 'achievements',
  'experiencia', 'experience',
  'proyectos', 'projects',
  'skills',
  'blandas', 'soft-skills',
  'educacion', 'education',
];

/**
 * root must be the element that directly contains <header class="sheet">,
 * <main>, and <footer> as children (document.body for the static CV pages,
 * #preview for the builder).
 */
export function applyTechLayout(root: HTMLElement | null, enable: boolean) {
  if (!root) return;
  const existingLeft = root.querySelector(':scope > .tech-sidebar');
  const existingRight = root.querySelector(':scope > .tech-main');

  if (enable) {
    if (existingLeft && existingRight) return;
    const header = root.querySelector(':scope > header.sheet');
    const mainEl = root.querySelector(':scope > main');

    const left = document.createElement('div');
    left.className = 'tech-sidebar';
    const right = document.createElement('div');
    right.className = 'tech-main';

    if (header) left.appendChild(header);
    if (mainEl) {
      SIDEBAR_IDS.forEach((id) => {
        const el = mainEl.querySelector(`#${id}`);
        if (el) left.appendChild(el);
      });
      MAIN_IDS.forEach((id) => {
        const el = mainEl.querySelector(`#${id}`);
        if (el) right.appendChild(el);
      });
    }

    const anchor = mainEl || root.querySelector(':scope > footer');
    root.insertBefore(left, anchor);
    root.insertBefore(right, anchor);
    if (mainEl) mainEl.remove();
  } else {
    if (!existingLeft && !existingRight) return;
    const header = existingLeft ? existingLeft.querySelector('header.sheet') : null;
    const mainEl = document.createElement('main');
    CANONICAL_ORDER.forEach((id) => {
      const el = root.querySelector(`#${id}`);
      if (el) mainEl.appendChild(el);
    });

    const anchor = existingLeft || existingRight;
    if (header) root.insertBefore(header, anchor);
    root.insertBefore(mainEl, anchor);
    if (existingLeft) existingLeft.remove();
    if (existingRight) existingRight.remove();
  }
}
