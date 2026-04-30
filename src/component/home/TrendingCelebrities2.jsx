import { useState, useEffect, useRef, useCallback } from "react";

// ─── Data ─────────────────────────────────────────────────────────────────────
const CELEBRITIES = [
  { name: "Alia Bhatt",       cat: "actor",      imgsrc: "/celebrities/karina.jpg",  ini: "AB" },
  { name: "Salman Khan",      cat: "actor",      imgsrc: "/celebrities/salman.jpg",  ini: "SK" },
  { name: "Deepika Padukone", cat: "actor",      imgsrc: "/celebrities/akshay.jpg",  ini: "DP" },
  { name: "Narendra Modi",    cat: "politician", imgsrc: "/celebrities/modi.jpg",    ini: "NM" },
  { name: "Akshay Kumar",     cat: "actor",      imgsrc: "/celebrities/akshay.jpg",  ini: "AK" },
  { name: "Rahul Gandhi",     cat: "politician", imgsrc: "/celebrities/salman.jpg",  ini: "RG" },
  { name: "Priyanka Chopra",  cat: "actor",      imgsrc: "/celebrities/modi.jpg",    ini: "PC" },
  { name: "Kejriwal",         cat: "politician", imgsrc: "/celebrities/akshay.jpg",  ini: "KJ" },
  { name: "Shah Rukh Khan",   cat: "actor",      imgsrc: "/celebrities/salman.jpg",  ini: "SR" },
  { name: "Smriti Irani",     cat: "politician", imgsrc: "/celebrities/akshay.jpg",  ini: "SI" },
];

// ─── Responsive slot configs ──────────────────────────────────────────────────
//
// TABLET (≥768px): 7 slots  →  [half] [-2] [-1] [0] [1] [2] [half]
//                               5 full cards + 2 half-peek
//
// MOBILE (<768px): 5 slots  →  [half] [-1] [0] [1] [half]
//                               3 full cards + 2 half-peek

const SLOT_CFG_TABLET = {
  "-3": { wpct: 0.12,  hpct: 0.90, op: 1.00, half: "right" },
  "-2": { wpct: 0.12,  hpct: 0.90, op: 1.00 },
  "-1": { wpct: 0.12,  hpct: 0.90, op: 1.00 },
   "0": { wpct: 0.340, hpct: 1.00, op: 1.00 },
   "1": { wpct: 0.12,  hpct: 0.90, op: 1.00 },
   "2": { wpct: 0.12,  hpct: 0.90, op: 1.00 },
   "3": { wpct: 0.17,  hpct: 0.90, op: 1.00, half: "left"  },
};

const SLOT_CFG_MOBILE = {
  "-2": { wpct: 0,  hpct: 0.88, op: 1.00, half: "right" },
  "-1": { wpct: 0.12,  hpct: 0.88, op: 1.00 },
   "0": { wpct: 0.58,  hpct: 1.00, op: 1.00 },
   "1": { wpct: 0.12,  hpct: 0.88, op: 1.00 },
   "2": { wpct: 0,  hpct: 0.88, op: 1.00, half: "left"  },
};

const SLOT_KEYS_TABLET = [-3, -2, -1, 0, 1, 2, 3];
const SLOT_KEYS_MOBILE = [-2, -1, 0, 1, 2];

const getCenterHeight = () => {
  if (window.innerWidth <= 768) return 320;   // 📱 mobile
  if (window.innerWidth <= 1024) return 420;  // 📲 tablet
  return 534; // 💻 desktop
};

let CENTER_H = getCenterHeight();
const GAP      = 16;
const EASING   = "550ms cubic-bezier(0.25, 0.46, 0.45, 0.94)";
const MOBILE_BP = 768;

// ─── Helpers ──────────────────────────────────────────────────────────────────
const mod = (n, m) => ((n % m) + m) % m;

function getConfig(isMobile) {
  return isMobile
    ? { cfg: SLOT_CFG_MOBILE, keys: SLOT_KEYS_MOBILE, edgeAbs: 2 }
    : { cfg: SLOT_CFG_TABLET, keys: SLOT_KEYS_TABLET, edgeAbs: 3 };
}

function slotLeft(slot, sw, cfg) {
  const slotCfg = cfg[String(slot)] ?? cfg[String(Math.sign(slot) * Object.keys(cfg).length)];
  const w   = Math.round(sw * slotCfg.wpct);
  const cx  = sw / 2;
  if (slot === 0) return cx - w / 2;
  const sign = slot < 0 ? -1 : 1;
  let pos = cx;
  for (let s = 1; s <= Math.abs(slot); s++) {
    const pw = Math.round(sw * cfg[String(sign * (s - 1))].wpct);
    const tw = Math.round(sw * cfg[String(sign * s)].wpct);
    pos += sign * (pw / 2 + GAP + tw / 2);
  }
  return pos - w / 2;
}

function getSlotStyles(slot, sw, isMobile) {
  const { cfg, edgeAbs } = getConfig(isMobile);
  const key    = String(slot);
  const slotCf = cfg[key];

  // Off-screen ghost
  if (!slotCf) {
    const sign   = slot < 0 ? -1 : 1;
    const edge   = cfg[String(sign * edgeAbs)];
    const ew     = Math.round(sw * edge.wpct);
    const eleft  = slotLeft(sign * edgeAbs, sw, cfg);
    return {
      left: eleft + sign * (ew + GAP * 4),
      top:  0,
      width: ew,
      height: Math.round(CENTER_H * edge.hpct),
      opacity: 0, zIndex: 0, clipPath: "none",
    };
  }

  const w        = Math.round(sw * slotCf.wpct);
  const h        = Math.round(CENTER_H * slotCf.hpct);
  const clipPath = slotCf.half === "right"
    ? "inset(0 0 0 50%)"
    : slotCf.half === "left"
    ? "inset(0 50% 0 0)"
    : "none";

  return {
    left:     slotLeft(slot, sw, cfg),
    top:      (CENTER_H - h) / 2,
    width:    w,
    height:   h,
    opacity:  slotCf.op,
    zIndex:   4 - Math.abs(slot),
    clipPath,
  };
}

function applyStyles(el, slot, sw, isMobile, instant = false) {
  if (!el) return;
  const s = getSlotStyles(slot, sw, isMobile);
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
  // Show/hide card entirely if slot is out of range for current breakpoint
  el.style.visibility = s.opacity === 0 && Math.abs(slot) > 4 ? "hidden" : "visible";
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function TrendingCelebrities() {
  const [filter,   setFilter]   = useState("all");
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < MOBILE_BP : false
  );
  const [dotState, setDotState] = useState({ total: CELEBRITIES.length, active: 0 });

  const stageRef     = useRef(null);
  const autoRef      = useRef(null);
  const busyRef      = useRef(false);
  const centerRef    = useRef(0);
  const listRef      = useRef(CELEBRITIES);
  const isMobileRef  = useRef(isMobile);

  // Touch / scroll
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const wheelAccum  = useRef(0);
  const wheelTimer  = useRef(null);
  const isDragging  = useRef(false);

  // Always 7 persistent card divs — we just reposition them differently per breakpoint
  // On mobile, slots ±3 get pushed fully off-screen (opacity 0, hidden)
  const pool = useRef(
    SLOT_KEYS_TABLET.map((slot) => ({ el: null, slot, celeb: null }))
  );

  const sw = () => stageRef.current?.offsetWidth || 600;

  // ── DOM helpers ─────────────────────────────────────────────────────────────
  const assignCeleb = (p, celeb) => {
    p.celeb = celeb;
    if (!p.el) return;
    const img  = p.el.querySelector(".c-img");
    const name = p.el.querySelector(".c-name-text");
    if (img)  { img.src = celeb.imgsrc; img.alt = celeb.name; }
    if (name) name.textContent = celeb.name;
  };

  const setNameVisible = (p, visible) => {
    const ov = p.el?.querySelector(".c-name-ov");
    if (ov) ov.style.opacity = visible ? "1" : "0";
  };
  const setActiveClass = (p, isActive) => {
  if (!p.el) return;

  if (isActive) {
    p.el.classList.add("active");
  } else {
    p.el.classList.remove("active");
  }
};

  // ── Init ────────────────────────────────────────────────────────────────────
  const init = useCallback((mobile = isMobileRef.current) => {
    const l = listRef.current;
    if (!l.length) return;
    centerRef.current = mod(centerRef.current, l.length);
    const c = centerRef.current;
    const { keys } = getConfig(mobile);

    // On mobile we only use 5 slots (-2..2); on tablet 7 slots (-3..3)
    // pool always has 7 entries for slots -3..3
    pool.current.forEach((p, i) => {
      const slot = SLOT_KEYS_TABLET[i]; // -3 to 3
      p.slot = slot;
      // Assign celeb for visible slots; for hidden ones just assign nearest
      assignCeleb(p, l[mod(c + slot, l.length)]);
      applyStyles(p.el, slot, sw(), mobile, true);
      setNameVisible(p, slot === 0);
      setActiveClass(p, slot === 0);
    });

    setDotState({ total: l.length, active: c });
  }, []); // eslint-disable-line

  // ── Move ────────────────────────────────────────────────────────────────────
  const move = useCallback((dir) => {
    if (busyRef.current) return;
    const l      = listRef.current;
    const mobile = isMobileRef.current;
    if (l.length < 2) return;
    busyRef.current = true;

    const newCenter   = mod(centerRef.current + dir, l.length);
    centerRef.current = newCenter;

    // Exit/enter are always the outermost tablet slots (±3)
    // On mobile they're off-screen, so recycling still works correctly
    const exitSlot  = dir > 0 ? -3 :  3;
    const enterSlot = dir > 0 ?  3 : -3;

    const recycled = pool.current.find((p) => p.slot === exitSlot);
    if (recycled) {
      applyStyles(recycled.el, enterSlot + dir, sw(), mobile, true);
      assignCeleb(recycled, l[mod(newCenter + enterSlot, l.length)]);
      setNameVisible(recycled, enterSlot === 0);
      setActiveClass(recycled, enterSlot === 0);
      recycled.slot = enterSlot;
      recycled.el?.getBoundingClientRect();
    }

    pool.current.forEach((p) => {
      if (p === recycled) {
        applyStyles(p.el, enterSlot, sw(), mobile, false);
      } else {
        const ns = p.slot - dir;
        p.slot   = ns;
        applyStyles(p.el, ns, sw(), mobile, false);
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

  const stopAuto = useCallback(() => clearInterval(autoRef.current), []);

  // ── Wheel ───────────────────────────────────────────────────────────────────
  // const handleWheel = useCallback((e) => {
  //   e.preventDefault();
  //   stopAuto();
  //   wheelAccum.current += e.deltaX || e.deltaY;
  //   clearTimeout(wheelTimer.current);
  //   wheelTimer.current = setTimeout(() => { wheelAccum.current = 0; }, 300);
  //   if (wheelAccum.current > 60)       { wheelAccum.current = 0; move(1);  }
  //   else if (wheelAccum.current < -60) { wheelAccum.current = 0; move(-1); }
  // }, [move, stopAuto]);

  // ── Touch ───────────────────────────────────────────────────────────────────
  const handleTouchStart = useCallback((e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    isDragging.current  = false;
    stopAuto();
  }, [stopAuto]);

  const handleTouchMove = useCallback((e) => {
    const dx = e.touches[0].clientX - touchStartX.current;
    const dy = e.touches[0].clientY - touchStartY.current;
    if (!isDragging.current && Math.abs(dy) > Math.abs(dx) + 10) return;
    isDragging.current = true;
    e.preventDefault();
  }, []);

  const handleTouchEnd = useCallback((e) => {
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) move(dx < 0 ? 1 : -1);
    startAuto();
  }, [move, startAuto]);

  // ── Resize: detect mobile breakpoint ────────────────────────────────────────
  useEffect(() => {
    const onResize = () => {
      const mobile = window.innerWidth < MOBILE_BP;
      if (mobile !== isMobileRef.current) {
        isMobileRef.current = mobile;
        setIsMobile(mobile);
        busyRef.current = false;
        // Re-apply positions for new breakpoint
        pool.current.forEach((p) => applyStyles(p.el, p.slot, sw(), mobile, true));
      } else {
        // Same breakpoint, just re-apply sizes
        pool.current.forEach((p) => applyStyles(p.el, p.slot, sw(), mobile, true));
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // ── Resize observer (stage width) ───────────────────────────────────────────
  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => {
      pool.current.forEach((p) => applyStyles(p.el, p.slot, el.offsetWidth || 600, isMobileRef.current, true));
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // ── Event listeners ─────────────────────────────────────────────────────────
  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    // el.addEventListener("wheel",      handleWheel,      { passive: false });
    el.addEventListener("touchstart", handleTouchStart, { passive: true  });
    el.addEventListener("touchmove",  handleTouchMove,  { passive: false });
    el.addEventListener("touchend",   handleTouchEnd,   { passive: true  });
    return () => {
      // el.removeEventListener("wheel",      handleWheel);
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
    init(isMobileRef.current);
  }, [filter, init]);

  // ── Mount ─────────────────────────────────────────────────────────────────────
  useEffect(() => {
    isMobileRef.current = window.innerWidth < MOBILE_BP;
    init(isMobileRef.current);
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

      <div className="berlin" style={{ width: "100%"}}>

        {/* ── Header ── */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 39, padding: "0 20px", flexWrap: "wrap", gap: 12 }}>
          <h1 className="berlin text-[40px] text-[#4285F4]" style={{ margin: 0 }}>
            Trending Celebrities
          </h1>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {[{ key: "all", label: "All" }, { key: "actor", label: "Actors" }, { key: "politician", label: "Politicians" }].map(({ key, label }) => (
              <FilterBtn key={key} active={filter === key} onClick={() => setFilter(key)}>{label}</FilterBtn>
            ))}
          </div>
        </div>

        {/* ── Slider ── */}
        <div style={{ position: "relative" }}>

          {/* Stage — always 7 persistent divs, mobile hides outer two */}
          <div
            ref={stageRef}
            style={{
              width: "100%",
              position: "relative",
              height: CENTER_H,
              overflow: "hidden",
              cursor: "grab",
              touchAction: "pan-y",
            }}
          >
            {SLOT_KEYS_TABLET.map((slot, i) => (
              <div
                key={slot}
                ref={(el) => { if (el) pool.current[i].el = el; }}
                onClick={() => { if (!busyRef.current && slot !== 0) move(slot > 0 ? 1 : -1); }}
                style={{
                  position:     "absolute",
                  borderRadius: 18,
                  overflow:     "hidden",
                  cursor:       slot === 0 ? "grab" : "pointer",
                  willChange:   "left, top, width, height, opacity, clip-path",
                }}
              >
                {/* Image */}
                <img
                  className="c-img"
                  src=""
                  alt=""
                  style={{
                    position:    "absolute",
                    inset:       0,
                    width:       "100%",
                    height:      "100%",
                    objectFit:   "cover",
                    borderRadius: 16,
                    display:     "block",
                  }}
                />

                {/* Name overlay */}
               
                <div
                  className="c-name-ov berlin"
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
                
                  <h3
                    className="c-name-text relative z-100 text-[#000] berlin text-[64px]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

     

        {/* ── Dots ── */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 6, marginTop: 16 }}>
          {Array.from({ length: dotState.total }).map((_, i) => (
            <button
              key={i}
              onClick={() => jumpTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              style={{
                width:        i === dotState.active ? 20 : 14,
                height:       i === dotState.active ? 20 : 14,
                borderRadius: "50%",
                border:       "none",
                background:   i === dotState.active ? "#4285F4" : "#D9D9D9",
                cursor:       "pointer",
                padding:      0,
                transition:   "all 0.35s",
                flexShrink:   0,
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
        padding:      "10px 32px",
        borderRadius: 999,
        fontSize:     16,
        fontWeight:   600,
        cursor:       "pointer",
        border:       `1.5px solid ${active ? "#4285F4" : hov ? "#6E6E6E" : "#d1d5db"}`,
        background:   active ? "#4285F4" : "#fff",
        color:        active ? "#fff" : "#6E6E6E",
        transition:   "all 0.22s cubic-bezier(0.4, 0, 0.2, 1)",
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
        width:        40,
        height:       40,
        borderRadius: "50%",
        border:       "1.5px solid #d1d5db",
        background:   hov ? "#f3f4f6" : "white",
        color:        "#374151",
        fontSize:     18,
        cursor:       "pointer",
        display:      "flex",
        alignItems:   "center",
        justifyContent: "center",
        flexShrink:   0,
        transition:   "background 0.2s",
      }}
    >
      {label}
    </button>
  );
}