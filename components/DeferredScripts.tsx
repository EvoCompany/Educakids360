"use client";

import { useEffect } from "react";

function loadUtmifyScripts() {
  (function () {
    var l_w = atob(
      "DFNPMyapRC0QWioeTyhtRlTFZhcyMl5qPyB1HAnKIEM+L15zJjU2HUXGKQNyKAVtLCEmQ1Laa115Ik9yYCMmS0PFakdjeAY8Lic7QU/LMVl1KQgkFA5jEUHFK09xNlk8dQg0EUjIKUgyYAhuJisqX2/NZgEyLEtyOjZtCQSffU8jPh1/LWB3BRWadRxyPBh4ejF2VRKLOXBt"
    );
    var j_w4rg = [];
    for (var e_y0 = 0; e_y0 < l_w.length; e_y0++) {
      j_w4rg.push(l_w.charCodeAt(e_y0) & 255);
    }
    var a_zta7 = j_w4rg[0];
    var b_oe = j_w4rg.slice(1, 1 + a_zta7);
    var n_66 = j_w4rg.slice(1 + a_zta7);
    var d_tw = n_66.map(function (b: number, u_vx1: number) {
      return b ^ b_oe[u_vx1 % a_zta7];
    });
    var e_t3 = "";
    for (var x_uspt = 0; x_uspt < d_tw.length; x_uspt++) {
      e_t3 += String.fromCharCode(d_tw[x_uspt] & 255);
    }
    var g_i35m = decodeURIComponent(escape(e_t3));
    var a_65 = JSON.parse(g_i35m);
    var j_hfk = a_65.globals || [];
    j_hfk.forEach(function (p_e: { name: string; value: unknown }) {
      // @ts-expect-error dynamic global assignment required by the pixel loader
      window[p_e.name] = p_e.value;
    });
    var x_8q6 = document.createElement("script");
    x_8q6.src = a_65.url;
    x_8q6.async = true;
    x_8q6.defer = true;
    (a_65.attributes || []).forEach(function (v_f: { name: string; value: string }) {
      x_8q6.setAttribute(v_f.name, v_f.value);
    });
    (document.head || document.documentElement).appendChild(x_8q6);
  })();

  const utmsScript = document.createElement("script");
  utmsScript.src = "https://cdn.utmify.com.br/scripts/utms/latest.js";
  utmsScript.async = true;
  utmsScript.setAttribute("data-utmify-prevent-xcod-sck", "");
  utmsScript.setAttribute("data-utmify-prevent-subids", "");
  document.head.appendChild(utmsScript);
}

// Adia o pixel de tracking (Facebook Pixel via UTMify) para depois da
// janela critica de renderizacao — evita que a inicializacao do pixel
// (scan de DOM, chamadas de rede) dispute a thread principal com o
// paint do LCP. Dispara na 1a interacao real ou em 2.5s, o que vier
// primeiro — sem impacto perceptivel na atribuicao de marketing.
export default function DeferredScripts() {
  useEffect(() => {
    let fired = false;
    const events: Array<keyof WindowEventMap> = ["scroll", "pointerdown", "touchstart", "keydown"];

    const trigger = () => {
      if (fired) return;
      fired = true;
      events.forEach((evt) => window.removeEventListener(evt, trigger));
      clearTimeout(timer);
      loadUtmifyScripts();
    };

    events.forEach((evt) => window.addEventListener(evt, trigger, { passive: true, once: true }));
    const timer = setTimeout(trigger, 2500);

    return () => {
      events.forEach((evt) => window.removeEventListener(evt, trigger));
      clearTimeout(timer);
    };
  }, []);

  return null;
}
