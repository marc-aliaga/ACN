import { Suspense, useEffect, useRef, useState } from "react";

// Monta a sus hijos solo cuando el hueco está a punto de entrar en pantalla. Pensado
// para componentes pesados cargados con React.lazy (su código y sus librerías no se
// descargan hasta entonces). Mientras tanto reserva su altura para que la página no salte.
//
//   const PropertiesMap = lazy(() => import("./PropertiesMap"));
//   <LazyOnView minHeight={760}><PropertiesMap /></LazyOnView>
export default function LazyOnView({ children, minHeight = 600, rootMargin = "600px 0px" }) {
  const ref = useRef(null);
  // Sin IntersectionObserver (navegadores muy antiguos) se monta directamente.
  const [visible, setVisible] = useState(() => typeof IntersectionObserver === "undefined");

  useEffect(() => {
    const node = ref.current;
    if (visible || !node) return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [visible, rootMargin]);

  return (
    <div ref={ref} style={visible ? undefined : { minHeight }}>
      {visible && <Suspense fallback={<div style={{ minHeight }} />}>{children}</Suspense>}
    </div>
  );
}
