export async function mount(root, context) {
  const init = async () => {
    try {
      await context.assets.script(context.extension.config.asset);
      if (typeof window.flyingPages !== 'function') return;

      const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
      const isSlowOrDataSaver = conn && (conn.saveData || conn.effectiveType === '2g' || conn.effectiveType === '3g');

      window.flyingPages({
        delay: isSlowOrDataSaver ? 4 : 2,
        ignoreKeywords: ['/atom.xml', '/sitemap.xml', '.xml', '.json', 'mailto:', 'javascript:', '/images/'],
        maxRPS: isSlowOrDataSaver ? 1 : 2,
        hoverDelay: 50
      });
    } catch (e) {
      console.warn('[link-prefetch] failed to load flying-pages:', e);
    }
  };

  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => init(), { timeout: 3000 });
  } else {
    setTimeout(init, 2000);
  }

  return () => {};
}
