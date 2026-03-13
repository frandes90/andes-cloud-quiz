import { useState } from "react";

const F = "'Montserrat', sans-serif";
const C = {
  dark:   "#0D3D4F",
  teal:   "#1A6875",
  orange: "#E05830",
  bg:     "#EEF4F7",
  white:  "#FFFFFF",
  gray:   "#6B8C99",
  ghost:  "#DDE9EE",
  green:  "#1A7A46",
  red:    "#B83232",
};

const Logo = ({ h = 44, light = false }) => (
  <div style={{ display:"flex", alignItems:"center", gap:10 }}>
    <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width={h} height={h} viewBox="0 0 120 120" preserveAspectRatio="xMidYMid meet">
      <g transform="translate(0,120) scale(0.1,-0.1)" stroke="none">
        <path fill={C.orange} d="M515 1090 c-190 -39 -343 -181 -399 -369 -26 -90 -25 -92 37 -67 29 12 64 31 77 44 29 27 84 45 125 40 26 -3 33 2 55 42 91 162 335 164 414 3 19 -39 23 -42 53 -37 45 8 97 -12 131 -51 16 -18 40 -36 53 -40 13 -4 38 -15 56 -25 l32 -19 -5 32 c-23 131 -70 225 -155 308 -119 117 -308 173 -474 139z"/>
        <path fill={light ? C.white : C.dark} d="M535 821 c-48 -28 -82 -75 -96 -131 -14 -53 -19 -59 -39 -35 -31 38 -125 23 -150 -24 -5 -11 -24 -22 -42 -26 -88 -18 -148 -97 -148 -193 0 -65 17 -108 61 -151 71 -71 175 -90 269 -50 l49 21 28 -32 c77 -92 234 -91 306 1 l26 33 38 -18 c94 -45 210 -26 282 45 48 48 65 95 59 161 -11 106 -110 173 -205 137 -26 -9 -30 -7 -69 38 -26 29 -50 48 -63 48 -17 0 -27 13 -46 59 -40 99 -89 136 -177 136 -34 0 -64 -7 -83 -19z m89 -96 c5 -19 -4 -37 -40 -85 -26 -33 -45 -63 -42 -66 4 -3 20 2 37 10 16 9 32 16 35 16 3 0 -15 -42 -41 -94 -26 -52 -50 -93 -54 -91 -3 3 -12 25 -18 50 -13 53 -7 55 -114 -33 -72 -60 -79 -63 -91 -47 -14 20 -11 21 -131 -30 l-39 -17 39 44 c123 138 167 180 178 169 8 -8 5 -23 -11 -57 -13 -26 -21 -48 -19 -51 8 -7 68 50 92 86 33 53 195 232 205 226 4 -3 11 -16 14 -30z m166 -190 c0 -25 -91 -115 -151 -149 -34 -20 -34 -20 -19 0 62 80 154 182 161 178 5 -3 9 -16 9 -29z m220 -95 c0 -7 -139 -77 -170 -85 -23 -6 -24 -6 -10 9 8 8 44 40 80 70 l65 54 17 -21 c10 -12 18 -24 18 -27z"/>
      </g>
    </svg>
    <div style={{ fontFamily:F, lineHeight:1.05 }}>
      <div style={{ fontSize: h * 0.42, fontWeight:900, color: light ? C.white : C.dark, letterSpacing:-0.5 }}>Andes</div>
      <div style={{ fontSize: h * 0.42, fontWeight:900, color: C.orange, letterSpacing:-0.5 }}>Cloud</div>
    </div>
  </div>
);

const OPTIONS = [
  { label:"Agentforce Sales",         icon:"💼" },
  { label:"Agentforce Service",       icon:"🎧" },
  { label:"Tableau",                  icon:"📊" },
  { label:"Slack",                    icon:"💬" },
  { label:"Salesforce Industries",    icon:"🏭" },
  { label:"Agentforce Field Service", icon:"🔧" },
];

const Qs = [
  {
    tag:"🎯 Escenario · Ventas", funny:false,
    q:"Una empresa B2B tiene 5.000 leads en Salesforce pero sus reps dicen que 'no saben por dónde empezar'. El VP de Ventas quiere que la IA priorice oportunidades, detecte riesgos de pipeline y guíe a cada vendedor con la siguiente mejor acción. ¿Qué producto es la respuesta?",
    a:"Agentforce Sales",
    why:"Agentforce Sales usa IA generativa para priorizar oportunidades, identificar riesgos de cierre y recomendar la siguiente mejor acción en tiempo real — sin que el rep tenga que adivinar.",
  },
  {
    tag:"🎧 Escenario · Atención al Cliente", funny:false,
    q:"Una empresa de telecomunicaciones recibe 50.000 tickets al mes. Su objetivo es resolver automáticamente el 40% de los casos sin intervención humana, reduciendo costos sin sacrificar la experiencia del cliente. ¿Qué implementan?",
    a:"Agentforce Service",
    why:"Agentforce Service despliega agentes de IA que resuelven consultas, cierran casos y escalan a humanos solo cuando es necesario — 24/7, sin días libres ni turnos nocturnos.",
  },
  {
    tag:"📊 Escenario · Revenue Operations", funny:false,
    q:"Un equipo de RevOps necesita cruzar datos de Salesforce CRM, el ERP, plataformas de marketing y redes sociales para construir un forecast preciso con visualizaciones ejecutivas en tiempo real. ¿Cuál es su herramienta estratégica?",
    a:"Tableau",
    why:"Tableau conecta con cientos de fuentes de datos y permite construir dashboards de pipeline, forecast y KPIs con información de toda la organización unificada en una sola vista.",
  },
  {
    tag:"💬 Escenario · Colaboración (con humor 😄)", funny:true,
    q:"El equipo de ventas le pasa el caso a servicio, que se lo manda a implementación, que le escribe a soporte técnico... nadie sabe qué pasa con el cliente. El hilo de email tiene 47 personas en copia y tres adjuntos llamados 'final_FINAL_v3_revisado'. ¿Cuál es la solución?",
    a:"Slack",
    why:"Slack centraliza la comunicación del equipo, conecta datos de Salesforce directamente en los canales y permite resolver problemas reales sin el caos del email interminable.",
  },
  {
    tag:"🏭 Escenario · Industrias Verticales", funny:false,
    q:"Una aseguradora necesita gestionar pólizas, siniestros y canales de distribución con flujos regulatorios específicos de su industria, sin construir todo desde cero. ¿Qué plataforma tiene procesos y modelos de datos sectoriales listos para usar?",
    a:"Salesforce Industries",
    why:"Salesforce Industries (antes Vlocity) ofrece soluciones pre-construidas para seguros, banca, salud, telecomunicaciones y energía — con modelos de datos y flujos específicos out-of-the-box.",
  },
  {
    tag:"🔧 Escenario · Operaciones en Campo", funny:false,
    q:"Una empresa de mantenimiento industrial necesita que sus técnicos reciban órdenes en tiempo real, sepan qué repuestos llevar, optimicen rutas y cierren el trabajo desde el celular aunque no haya señal. ¿Qué producto es?",
    a:"Agentforce Field Service",
    why:"Agentforce Field Service optimiza el scheduling inteligente, gestiona inventario, ofrece app mobile con modo offline y da visibilidad en tiempo real a los supervisores.",
  },
  {
    tag:"🤖 Escenario · IA Comercial (con humor 😄)", funny:true,
    q:"Un CEO le pregunta a su consultor Salesforce: '¿Existe algún vendedor que trabaje 24/7, nunca tenga un mal día, sepa cuándo contactar a un prospecto y nunca olvide hacer el seguimiento?' ¿Qué le presentás?",
    a:"Agentforce Sales",
    why:"Los agentes de Agentforce Sales operan de forma autónoma: analizan señales de compra, actúan en el momento óptimo y nunca faltan a una reunión.",
  },
  {
    tag:"📈 Escenario · Analytics Ejecutivo (con humor 😄)", funny:true,
    q:"El CEO entra a la reunión de directorio y dice: 'Quiero ver TODOS los KPIs de la empresa, de TODAS las fuentes, en UN SOLO LUGAR — y que se vea impresionante. Para el lunes.' Después de respirar profundo tres veces... ¿qué abrís?",
    a:"Tableau",
    why:"Tableau integra múltiples fuentes de datos y crea dashboards ejecutivos interactivos con el nivel de impacto visual que los directorios esperan — y sí, puede estar listo para el lunes.",
  },
];

const getResult = (n, t) => {
  const p = n / t;
  if (p === 1)   return { title:"🏆 Salesforce Architect",    sub:"Dominás el ecosistema como pocos. Los clientes te consultan antes de consultar a Google.", badge:"EXPERTO TOTAL" };
  if (p >= 0.75) return { title:"🥇 Consultant Senior",       sub:"Sólido conocimiento del ecosistema. Claramente no es tu primer Trailhead.", badge:"MUY BIEN" };
  if (p >= 0.5)  return { title:"📈 Salesforce Practitioner", sub:"Buen punto de partida. El ecosistema Salesforce tiene mucho por explorar.", badge:"EN CAMINO" };
  return               { title:"🌱 Salesforce Explorer",      sub:"Todo experto empezó desde cero. Andes Cloud puede ayudarte a acelerar ese camino.", badge:"SEGUÍ APRENDIENDO" };
};

export default function SFQuiz() {
  const [screen,   setScreen]   = useState("welcome");
  const [idx,      setIdx]      = useState(0);
  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [log,      setLog]      = useState([]);

  const q     = Qs[idx];
  const total = Qs.length;
  const correct = log.filter(Boolean).length;
  const res   = getResult(correct, total);

  const pick = (label) => {
    if (answered) return;
    setSelected(label);
    setAnswered(true);
    setLog(prev => [...prev, label === q.a]);
  };

  const next = () => {
    if (idx < total - 1) { setIdx(i => i+1); setSelected(null); setAnswered(false); }
    else setScreen("result");
  };

  const restart = () => { setScreen("welcome"); setIdx(0); setSelected(null); setAnswered(false); setLog([]); };

  return (
    <div style={{ fontFamily:F, minHeight:"100vh", background:C.bg, display:"flex", flexDirection:"column", alignItems:"center" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap'); * { box-sizing:border-box; margin:0; padding:0; }`}</style>

      {/* ══ WELCOME ══ */}
      {screen === "welcome" && (
        <div style={{ width:"100%", maxWidth:620 }}>
          <div style={{ background:C.dark, padding:"44px 28px 52px", borderRadius:"0 0 36px 36px", textAlign:"center", color:C.white }}>
            <div style={{ display:"flex", justifyContent:"center", marginBottom:28 }}>
              <Logo h={54} light />
            </div>
            <div style={{ fontSize:10, fontWeight:700, letterSpacing:3.5, color:C.orange, textTransform:"uppercase", marginBottom:14 }}>
              Salesforce Ecosystem Quiz
            </div>
            <h1 style={{ fontSize:28, fontWeight:900, lineHeight:1.25, marginBottom:16 }}>
              ¿Cuánto sabés del<br/>
              <span style={{ color:C.orange }}>ecosistema Salesforce?</span>
            </h1>
            <p style={{ fontSize:13, fontWeight:400, color:"rgba(255,255,255,0.65)", lineHeight:1.7, maxWidth:400, margin:"0 auto 36px" }}>
              8 escenarios reales del mundo Salesforce.<br/>Identificá el producto correcto en cada caso.
            </p>
            <div style={{ display:"flex", gap:36, justifyContent:"center", marginBottom:40 }}>
              {[["8","Preguntas"],["6","Productos"],["~4","Minutos"]].map(([n,l]) => (
                <div key={l} style={{ textAlign:"center" }}>
                  <div style={{ fontSize:32, fontWeight:900, color:C.orange, lineHeight:1 }}>{n}</div>
                  <div style={{ fontSize:9, fontWeight:700, color:"rgba(255,255,255,0.4)", textTransform:"uppercase", letterSpacing:2, marginTop:4 }}>{l}</div>
                </div>
              ))}
            </div>
            <button onClick={() => setScreen("quiz")}
              style={{ fontFamily:F, background:C.orange, color:C.white, border:"none", borderRadius:50, padding:"15px 52px", fontSize:14, fontWeight:800, letterSpacing:0.5, boxShadow:"0 8px 28px rgba(224,88,48,0.45)", cursor:"pointer" }}>
              Comenzar el Quiz →
            </button>
          </div>
          <div style={{ padding:"28px 20px 40px" }}>
            <p style={{ fontSize:10, fontWeight:700, color:C.gray, textTransform:"uppercase", letterSpacing:2, textAlign:"center", marginBottom:16 }}>Productos en juego</p>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:10 }}>
              {OPTIONS.map(o => (
                <div key={o.label} style={{ background:C.white, borderRadius:14, padding:"16px 8px", textAlign:"center", boxShadow:"0 2px 10px rgba(13,61,79,0.07)" }}>
                  <div style={{ fontSize:22, marginBottom:7 }}>{o.icon}</div>
                  <div style={{ fontSize:10, fontWeight:700, color:C.dark, lineHeight:1.4 }}>{o.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ══ QUIZ ══ */}
      {screen === "quiz" && (
        <div style={{ width:"100%", maxWidth:620 }}>
          <div style={{ background:C.dark, padding:"14px 22px", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
            <Logo h={36} light />
            <div style={{ fontFamily:F, fontSize:12, fontWeight:700, color:"rgba(255,255,255,0.5)" }}>
              Pregunta <span style={{ color:C.orange, fontWeight:900 }}>{idx+1}</span>
              <span style={{ color:"rgba(255,255,255,0.25)" }}> / {total}</span>
            </div>
          </div>
          <div style={{ height:4, background:`${C.dark}18` }}>
            <div style={{ height:"100%", width:`${(idx/total)*100}%`, background:C.orange, transition:"width 0.5s ease" }}/>
          </div>
          <div style={{ padding:"20px 16px 32px" }}>
            <div style={{ background:C.white, borderRadius:20, overflow:"hidden", boxShadow:"0 6px 28px rgba(13,61,79,0.11)" }}>
              <div style={{ background:`${C.dark}0C`, padding:"13px 20px", borderBottom:`1px solid ${C.dark}10` }}>
                <span style={{ fontSize:11, fontWeight:700, color:C.teal, textTransform:"uppercase", letterSpacing:0.8 }}>{q.tag}</span>
              </div>
              <div style={{ padding:"22px 20px 24px" }}>
                <p style={{ fontSize:14, fontWeight:600, color:C.dark, lineHeight:1.7, marginBottom:22 }}>{q.q}</p>
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:9 }}>
                  {OPTIONS.map(o => {
                    const isCorrect  = o.label === q.a;
                    const isSelected = o.label === selected;
                    let bg = C.white, border = `2px solid ${C.ghost}`, col = C.dark, fw = 600;
                    if (answered) {
                      if (isCorrect)                  { bg=`${C.green}12`; border=`2px solid ${C.green}`; col=C.green; fw=700; }
                      else if (isSelected)            { bg=`${C.red}0C`;   border=`2px solid ${C.red}`;   col=C.red;   fw=700; }
                      else                            { col=`${C.gray}99`; }
                    }
                    return (
                      <button key={o.label} onClick={() => pick(o.label)}
                        style={{ display:"flex", alignItems:"center", gap:8, padding:"11px 12px", borderRadius:12, border, background:bg, cursor:answered?"default":"pointer", textAlign:"left", transition:"all 0.18s", fontFamily:F }}
                        onMouseEnter={e => { if(!answered){ e.currentTarget.style.borderColor=C.teal; e.currentTarget.style.background=`${C.teal}0D`; } }}
                        onMouseLeave={e => { if(!answered){ e.currentTarget.style.borderColor=C.ghost; e.currentTarget.style.background=C.white; } }}
                      >
                        <span style={{ fontSize:18, flexShrink:0 }}>{o.icon}</span>
                        <span style={{ fontSize:11, fontWeight:fw, color:col, lineHeight:1.35, flex:1 }}>{o.label}</span>
                        {answered && isCorrect               && <span style={{ fontSize:13, color:C.green }}>✓</span>}
                        {answered && isSelected && !isCorrect && <span style={{ fontSize:13, color:C.red }}>✗</span>}
                      </button>
                    );
                  })}
                </div>
                {answered && (
                  <div style={{ marginTop:16, padding:"14px 16px", borderRadius:13, background: selected===q.a ? `${C.green}0E` : `${C.red}09`, border:`1px solid ${selected===q.a ? C.green : C.red}40` }}>
                    <div style={{ fontSize:13, fontWeight:800, color: selected===q.a ? C.green : C.red, marginBottom:6 }}>
                      {selected===q.a ? "✅ ¡Correcto!" : `❌ La respuesta era: ${q.a}`}
                    </div>
                    <div style={{ fontSize:12, fontWeight:500, color:C.gray, lineHeight:1.6 }}>{q.why}</div>
                  </div>
                )}
                {answered && (
                  <button onClick={next}
                    style={{ fontFamily:F, marginTop:14, width:"100%", background:C.dark, color:C.white, border:"none", borderRadius:12, padding:"14px", fontSize:13, fontWeight:800, letterSpacing:0.3, cursor:"pointer" }}>
                    {idx < total-1 ? "Siguiente pregunta →" : "Ver mis resultados →"}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ══ RESULT ══ */}
      {screen === "result" && (
        <div style={{ width:"100%", maxWidth:620 }}>
          <div style={{ background:C.dark, padding:"44px 28px 52px", borderRadius:"0 0 36px 36px", textAlign:"center", color:C.white }}>
            <div style={{ display:"flex", justifyContent:"center", marginBottom:26 }}>
              <Logo h={50} light />
            </div>
            <div style={{ fontSize:10, fontWeight:700, letterSpacing:3.5, color:C.orange, textTransform:"uppercase", marginBottom:12 }}>{res.badge}</div>
            <div style={{ fontSize:64, fontWeight:900, color:C.orange, lineHeight:1 }}>
              {correct}<span style={{ fontSize:30, color:"rgba(255,255,255,0.3)", fontWeight:600 }}>/{total}</span>
            </div>
            <div style={{ fontSize:10, fontWeight:700, color:"rgba(255,255,255,0.4)", letterSpacing:2, textTransform:"uppercase", marginBottom:18, marginTop:4 }}>Respuestas correctas</div>
            <h2 style={{ fontSize:21, fontWeight:900, marginBottom:12, lineHeight:1.3 }}>{res.title}</h2>
            <p style={{ fontSize:13, fontWeight:400, color:"rgba(255,255,255,0.6)", lineHeight:1.7, maxWidth:400, margin:"0 auto" }}>{res.sub}</p>
          </div>
          <div style={{ padding:"26px 16px 44px" }}>
            <p style={{ fontSize:10, fontWeight:700, color:C.gray, textTransform:"uppercase", letterSpacing:2, marginBottom:13 }}>Resumen por pregunta</p>
            <div style={{ display:"flex", flexDirection:"column", gap:8, marginBottom:28 }}>
              {Qs.map((q, i) => (
                <div key={i} style={{ background:C.white, borderRadius:13, padding:"13px 16px", display:"flex", alignItems:"center", gap:12, boxShadow:"0 2px 8px rgba(13,61,79,0.06)" }}>
                  <span style={{ fontSize:16, flexShrink:0 }}>{log[i] ? "✅" : "❌"}</span>
                  <div style={{ flex:1 }}>
                    <div style={{ fontSize:9, fontWeight:700, color:C.gray, marginBottom:2, textTransform:"uppercase", letterSpacing:0.8 }}>{q.tag}</div>
                    <div style={{ fontSize:12, fontWeight:700, color:C.dark }}>{q.a}</div>
                  </div>
                  {!log[i] && <span style={{ fontSize:10, fontWeight:700, color:C.red, textTransform:"uppercase", letterSpacing:0.5 }}>Incorrecto</span>}
                </div>
              ))}
            </div>
            <div style={{ background:C.dark, borderRadius:22, padding:"26px 22px", textAlign:"center", marginBottom:16 }}>
              <div style={{ display:"flex", justifyContent:"center", marginBottom:14 }}>
                <Logo h={40} light />
              </div>
              <p style={{ fontSize:13, fontWeight:500, color:"rgba(255,255,255,0.65)", lineHeight:1.7, maxWidth:380, margin:"0 auto" }}>
                Somos especialistas en el ecosistema Salesforce.<br/>
                Ayudamos a empresas a <strong style={{ color:C.white, fontWeight:700 }}>implementar, escalar y maximizar</strong> sus soluciones.
              </p>
            </div>
            <button onClick={restart}
              style={{ fontFamily:F, width:"100%", background:C.orange, color:C.white, border:"none", borderRadius:50, padding:"15px", fontSize:14, fontWeight:800, letterSpacing:0.3, boxShadow:"0 6px 20px rgba(224,88,48,0.38)", cursor:"pointer" }}>
              🔄 Intentarlo de nuevo
            </button>
          </div>
        </div>
      )}
    </div>
  );
}