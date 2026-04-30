import { useState, useEffect, useRef, useCallback } from "react";

// ─── Data ────────────────────────────────────────────────────────────────────
const CELEBRITIES = [
  { name: "Alia Bhatt",       cat: "actor",      imgsrc: "/celebrities/karina.jpg", ini: "AB" },
  { name: "Salman Khan",      cat: "actor",      imgsrc: "/celebrities/salman.jpg", ini: "SK" },
  { name: "Deepika Padukone", cat: "actor",      imgsrc: "/celebrities/akshay.jpg", ini: "DP" },
  { name: "Narendra Modi",    cat: "politician", imgsrc: "/celebrities/modi.jpg", ini: "NM" },
  { name: "Akshay Kumar",     cat: "actor",      imgsrc: "/celebrities/akshay.jpg", ini: "AK" },
  { name: "Rahul Gandhi",     cat: "politician", imgsrc: "/celebrities/salman.jpg", ini: "RG" },
  { name: "Narendra Modi",  cat: "actor",      imgsrc: "/celebrities/modi.jpg", ini: "PC" },
  { name: "Kejriwal",         cat: "politician", imgsrc: "/celebrities/akshay.jpg", ini: "KJ" },
  { name: "Shah Rukh Khan",   cat: "actor",      imgsrc: "/celebrities/salman.jpg", ini: "SR" },
  { name: "Smriti Irani",     cat: "politician", imgsrc: "/celebrities/akshay.jpg", ini: "SI" },
];

// ─── Slot config: -3(half) -2 -1  0  1  2  3(half) ──────────────────────────
const SLOT_CFG = {
  "-3": { wpct: 0.12, hpct: 0.90, op: 1, half: "right" },
  "-2": { wpct: 0.12, hpct: 0.90, op: 1 },
  "-1": { wpct: 0.12, hpct: 0.90, op: 1 },
   "0": { wpct: 0.340, hpct: 1.00, op: 1.00 },
   "1": { wpct: 0.12, hpct: 0.90, op: 1 },
   "2": { wpct: 0.12, hpct: 0.90, op: 1 },
   "3": { wpct: 0.17, hpct: 0.90, op: 1, half: "left"  },
};
const SLOT_KEYS = [-3, -2, -1, 0, 1, 2, 3];
const CENTER_H  = 534;
const GAP       = 10;
const EASING    = "550ms cubic-bezier(0.25, 0.46, 0.45, 0.94)";

// ─── Helpers ─────────────────────────────────────────────────────────────────
const mod = (n, m) => ((n % m) + m) % m;

function slotLeft(slot, sw) {
  const cfg = SLOT_CFG[String(slot)] ?? SLOT_CFG["3"];
  const w   = Math.round(sw * cfg.wpct);
  const cx  = sw / 2;
  if (slot === 0) return cx - w / 2;
  const sign = slot < 0 ? -1 : 1;
  let pos = cx;
  for (let s = 1; s <= Math.abs(slot); s++) {
    const pw = Math.round(sw * SLOT_CFG[String(sign * (s - 1))].wpct);
    const tw = Math.round(sw * SLOT_CFG[String(sign * s)].wpct);
    pos += sign * (pw / 2 + GAP + tw / 2);
  }
  return pos - w / 2;
}

function getSlotStyles(slot, sw) {
  const key = String(slot);
  const cfg = SLOT_CFG[key];

  if (!cfg) {
    const sign  = slot < 0 ? -1 : 1;
    const edge  = SLOT_CFG[String(sign * 3)];
    const ew    = Math.round(sw * edge.wpct);
    const el    = slotLeft(sign * 3, sw);
    return {
      left: el + sign * (ew + GAP * 4),
      top: (CENTER_H - Math.round(CENTER_H * edge.hpct)) / 2,
      width: ew,
      height: Math.round(CENTER_H * edge.hpct),
      opacity: 0, zIndex: 0, clipPath: "none",
    };
  }

  const w        = Math.round(sw * cfg.wpct);
  const h        = Math.round(CENTER_H * cfg.hpct);
  const clipPath = cfg.half === "right"
    ? "inset(0 0 0 50%)"
    : cfg.half === "left"
    ? "inset(0 50% 0 0)"
    : "none";

  return {
    left: slotLeft(slot, sw),
    top:  0,
    width: w, height: h,
    opacity: cfg.op,
    zIndex:  4 - Math.abs(slot),
    clipPath,
  };
}

function applyStyles(el, slot, sw, instant = false) {
  if (!el) return;
  const s = getSlotStyles(slot, sw);
  el.style.transition = instant
    ? "none"
    : `left ${EASING}, top ${EASING}, width ${EASING}, height ${EASING}, opacity ${EASING}, clip-path ${EASING}`;
  el.style.left     = `${s.left}px`;
  el.style.top      = `${s.top}px`;
  el.style.width    = `${s.width}px`;
  el.style.height   = `${s.height}px`;
  el.style.opacity  = s.opacity;
  el.style.zIndex   = s.zIndex;
  el.style.clipPath = s.clipPath;
}

// ─── Component ───────────────────────────────────────────────────────────────
export default function TrendingCelebrities2() {
  const [filter,   setFilter]   = useState("all");
  const [dotState, setDotState] = useState({ total: CELEBRITIES.length, active: 0 });

  const stageRef  = useRef(null);
  const autoRef   = useRef(null);
  const busyRef   = useRef(false);
  const centerRef = useRef(0);
  const listRef   = useRef(CELEBRITIES);

  // Touch / scroll tracking
  const touchStartX  = useRef(0);
  const touchStartY  = useRef(0);
  const wheelAccum   = useRef(0);
  const wheelTimer   = useRef(null);
  const isDragging   = useRef(false);

  // 7 persistent card objects
  const pool = useRef(SLOT_KEYS.map((slot) => ({ el: null, slot, celeb: null })));

  const sw = () => stageRef.current?.offsetWidth || 600;

  // ── DOM helpers ─────────────────────────────────────────────────────────────
  const assignCeleb = (p, celeb) => {
    p.celeb = celeb;
    if (!p.el) return;
    const bg   = p.el.querySelector(".c-bg");
    const ini  = p.el.querySelector(".c-ini");
    const name = p.el.querySelector(".c-name-text");
   
    const img = p.el.querySelector(".c-img");

if (img) {
  img.src = celeb.imgsrc;
  img.alt = celeb.name;
}

    if (ini)  ini.textContent     = celeb.ini;
    if (name) name.textContent    = celeb.name;
  };
const setActiveClass = (p, isActive) => {
  if (!p.el) return;

  if (isActive) {
    p.el.classList.add("active");
  } else {
    p.el.classList.remove("active");
  }
};
  const setNameVisible = (p, visible) => {
    const ov = p.el?.querySelector(".c-name-ov");
    if (ov) ov.style.opacity = visible ? "1" : "0";
  };

  // ── Init ────────────────────────────────────────────────────────────────────
  const init = useCallback(() => {
    const l = listRef.current;
    if (!l.length) return;
    centerRef.current = mod(centerRef.current, l.length);
    const c = centerRef.current;
    pool.current.forEach((p, i) => {
      const slot = SLOT_KEYS[i];
      p.slot = slot;
      assignCeleb(p, l[mod(c + slot, l.length)]);
      applyStyles(p.el, slot, sw(), true);
      setNameVisible(p, slot === 0);
setActiveClass(p, slot === 0);
    });
    setDotState({ total: l.length, active: c });
  }, []); // eslint-disable-line

  // ── Move ────────────────────────────────────────────────────────────────────
  const move = useCallback((dir) => {
    if (busyRef.current) return;
    const l = listRef.current;
    if (l.length < 2) return;
    busyRef.current = true;

    const newCenter   = mod(centerRef.current + dir, l.length);
    centerRef.current = newCenter;

    const exitSlot  = dir > 0 ? -3 :  3;
    const enterSlot = dir > 0 ?  3 : -3;

    const recycled = pool.current.find((p) => p.slot === exitSlot);
    if (recycled) {
      applyStyles(recycled.el, enterSlot + dir, sw(), true);
      assignCeleb(recycled, l[mod(newCenter + enterSlot, l.length)]);
      setNameVisible(recycled, enterSlot === 0);
setActiveClass(recycled, enterSlot === 0);
      recycled.slot = enterSlot;
      recycled.el?.getBoundingClientRect();
    }

    pool.current.forEach((p) => {
      if (p === recycled) {
        applyStyles(p.el, enterSlot, sw(), false);
      } else {
        const ns = p.slot - dir;
        p.slot   = ns;
        applyStyles(p.el, ns, sw(), false);
        setNameVisible(p, ns === 0);
        setActiveClass(p, ns === 0);
      }
    });

    setDotState({ total: l.length, active: newCenter });
    setTimeout(() => { busyRef.current = false; }, 560);
  }, []);

  // ── Auto-play ───────────────────────────────────────────────────────────────
  const startAuto = useCallback(() => {
    clearInterval(autoRef.current);
    autoRef.current = setInterval(() => move(1), 3000);
  }, [move]);

  const stopAuto = useCallback(() => {
    clearInterval(autoRef.current);
  }, []);

  // ── Wheel scroll ────────────────────────────────────────────────────────────
//   const handleWheel = useCallback((e) => {
//     e.preventDefault();
//     stopAuto();

//     wheelAccum.current += e.deltaX || e.deltaY;

//     clearTimeout(wheelTimer.current);
//     wheelTimer.current = setTimeout(() => { 
//       wheelAccum.current = 0;
//     }, 300);

//     const threshold = 60;
//     if (wheelAccum.current > threshold) {
//       wheelAccum.current = 0;
//       move(1);
//     } else if (wheelAccum.current < -threshold) {
//       wheelAccum.current = 0;
//       move(-1);
//     }
//   }, [move, stopAuto]);

  // ── Touch swipe ─────────────────────────────────────────────────────────────
  const handleTouchStart = useCallback((e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    isDragging.current  = false;
    stopAuto();
  }, [stopAuto]);

  const handleTouchMove = useCallback((e) => {
    const dx = e.touches[0].clientX - touchStartX.current;
    const dy = e.touches[0].clientY - touchStartY.current;
    // If clearly scrolling vertically, don't hijack
    if (!isDragging.current && Math.abs(dy) > Math.abs(dx) + 10) return;
    isDragging.current = true;
    e.preventDefault(); // prevent page scroll while swiping horizontally
  }, []);

  const handleTouchEnd = useCallback((e) => {
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
      move(dx < 0 ? 1 : -1);
    }
    startAuto();
  }, [move, startAuto]);

  // ── Resize observer ─────────────────────────────────────────────────────────
  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => {
      const w = el.offsetWidth || 600;
      pool.current.forEach((p) => applyStyles(p.el, p.slot, w, true));
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Attach wheel with { passive: false } so we can preventDefault
  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    el.addEventListener("touchstart",  handleTouchStart, { passive: true });
    el.addEventListener("touchmove",   handleTouchMove,  { passive: false });
    el.addEventListener("touchend",    handleTouchEnd,   { passive: true });
    return () => {
      el.removeEventListener("touchstart", handleTouchStart);
      el.removeEventListener("touchmove",  handleTouchMove);
      el.removeEventListener("touchend",   handleTouchEnd);
    };
  }, [ handleTouchStart, handleTouchMove, handleTouchEnd]);

  // ── Filter change ────────────────────────────────────────────────────────────
  useEffect(() => {
    listRef.current   = CELEBRITIES.filter((c) => filter === "all" || c.cat === filter);
    centerRef.current = 0;
    busyRef.current   = false;
    init();
  }, [filter, init]);

  // ── Mount ─────────────────────────────────────────────────────────────────────
  useEffect(() => {
    init();
    startAuto();
    return () => clearInterval(autoRef.current);
  }, [init, startAuto]);

  // ── Dot jump ──────────────────────────────────────────────────────────────────
  const jumpTo = (i) => {
    if (busyRef.current) return;
    const l     = listRef.current;
    const diff  = mod(i - centerRef.current, l.length);
    const steps = diff <= l.length / 2 ? diff : diff - l.length;
    const dir   = steps >= 0 ? 1 : -1;
    let t = 0;
    for (let s = 0; s < Math.abs(steps); s++) {
      setTimeout(() => move(dir), t);
      t += 380;
    }
  };

  // ─────────────────────────────────────────────────────────────────────────────
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=DM+Serif+Display&display=swap"
        rel="stylesheet"
      />

      <div style={{ width: "100%", fontFamily: "'DM Sans', sans-serif", userSelect: "none", padding: "1.5rem 0" }}>

        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 39, padding: "0 20px" }}>
          <h1 className="berlin text-[40px] text-[#4285F4]">
            Trending Celebrities
          </h1>
          <div style={{ display: "flex", gap: 8 }}>
            {[{ key: "all", label: "All" }, { key: "actor", label: "Actors" }, { key: "politician", label: "Politicians" }].map(({ key, label }) => (
              <FilterBtn key={key} active={filter === key} onClick={() => setFilter(key)}>{label}</FilterBtn>
            ))}
          </div>
        </div>

        {/* Slider row */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "0 4px" }}>
          {/* <NavBtn onClick={() => move(-1)} label="←" /> */}

          {/* Stage */}
          <div
            ref={stageRef}
            style={{
              flex: 1,
              position: "relative",
              height: CENTER_H,
              overflow: "hidden",
              cursor: "grab",
              touchAction: "pan-y",
            }}
            // onMouseEnter={stopAuto}
            // onMouseLeave={startAuto}
          >
            {SLOT_KEYS.map((slot, i) => (
              <div
                key={slot}
                ref={(el) => { if (el) pool.current[i].el = el; }}
                onClick={() => { if (!busyRef.current && slot !== 0) move(slot > 0 ? 1 : -1); }}
                style={{
                  position:     "absolute",
                  borderRadius: 18,
                  overflow:     "hidden",
                  cursor:       slot === 0 ? "grab" : "pointer",
                //   filter: slot === 0 ? "": "blur(4px)"  ,
                  willChange:   "left, top, width, height, opacity, clip-path",
                }}
              >
                {/* <div className="c-bg" style={{ position: "absolute", inset: 0 }} /> */}

                <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1 }}>
                 
                  <img
                        className={`c-img `}
                        src=""
                        alt=""
                        
                        style={{
                            position: "absolute",
                            inset: 0,
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            borderRadius:"16px"

                        }}
                        />
                </div>

                <div
                  className="c-name-ov"
                  style={{
                    position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 2,
                    padding: "32px 14px 14px",
                    transition: "opacity 0.35s 0.18s",
                    pointerEvents: "none",
                  }}
                >
                <div
                  
                  style={{
                    position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 1,
                    height:"100%",
                    width:"100%",
                    background: "rgba(255, 255, 255, 0.40)",
                    filter:"blur(4px)",
                  }}
                ></div>
                
                  <p
                    className="c-name-text relative z-100 text-[#000] berlin text-[64px]"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* <NavBtn className="cbcbbc" onClick={() => move(1)} label="→" /> */}
        </div>

     

        {/* Dots */}
        <div className="mt-[45px] items-center" style={{ display: "flex", justifyContent: "center", gap: 6 }}>
          {Array.from({ length: dotState.total }).map((_, i) => (
            <button
              key={i}
              onClick={() => jumpTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              style={{
                width: i === dotState.active ? 20 : 14, 
                height: i === dotState.active ? 20 : 14,
                borderRadius: "50%", border: "none",
                background: i === dotState.active ? "#4285F4" : "#D9D9D9",
                cursor: "pointer", padding: 0,
                transition: "background 0.35s",
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
}

// ─── Sub-components ───────────────────────────────────────────────────────────
function FilterBtn({ active, onClick, children }) {
  const [hov, setHov] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="primary-font"
      style={{
        padding: "10px 32px", borderRadius: 999, fontSize: 16, fontWeight: 600,
        cursor: "pointer", 
        border: `1.5px solid ${active ? "#4285F4" : hov ? "#6E6E6E" : "#d1d5db"}`,
        background: active ? "#4285F4" : "#fff",
        color: active ? "#fff" : "#6E6E6E",
        transition: "all 0.22s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      {children}
    </button>
  );
}

function NavBtn({ onClick, label }) {
  const [hov, setHov] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      aria-label={label}
      style={{
        width: 40, height: 40, borderRadius: "50%",
        border: "1.5px solid #d1d5db",
        background: hov ? "#f3f4f6" : "white",
        color: "#374151", fontSize: 18, cursor: "pointer",
        display: "flex", alignItems: "center", justifyContent: "center",
        flexShrink: 0, transition: "background 0.2s",
      }}
    >
      {label}
    </button>
  );
}
