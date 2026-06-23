export default function DeviceSelect({ onSelect }) {
  return (
    <main style={styles.page}>
      <div style={styles.bgGlowOne} />
      <div style={styles.bgGlowTwo} />

      <section style={styles.card}>
        <p style={styles.eyebrow}>Choose Your Layout</p>

        <h1 style={styles.title}>
          What are you using?
        </h1>

        

        <div style={styles.deviceGrid}>
          <button
            style={styles.deviceCard}
            onClick={() => onSelect("desktop")}
          >
            <div style={styles.iconWrap}>
              <span style={styles.deviceIcon}>🖥️</span>
            </div>

            <h2 style={styles.deviceTitle}>Computer</h2>

            

            <span style={styles.selectPill}>Enter Desktop Mode</span>
          </button>

          <button
            style={styles.deviceCard}
            onClick={() => onSelect("phone")}
          >
            <div style={styles.iconWrap}>
              <span style={styles.deviceIcon}>📱</span>
            </div>

            <h2 style={styles.deviceTitle}>Phone</h2>

            

            <span style={styles.selectPill}>Enter Phone Mode</span>
          </button>
        </div>
      </section>
    </main>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#050505",
    color: "#f5f5f5",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "24px",
    position: "relative",
    overflow: "hidden",
    fontFamily: "var(--sans)"
  },

  bgGlowOne: {
    position: "absolute",
    width: "420px",
    height: "420px",
    borderRadius: "999px",
    background: "rgba(74, 222, 128, 0.16)",
    filter: "blur(90px)",
    top: "-120px",
    left: "-100px"
  },

  bgGlowTwo: {
    position: "absolute",
    width: "480px",
    height: "480px",
    borderRadius: "999px",
    background: "rgba(59, 130, 246, 0.16)",
    filter: "blur(100px)",
    bottom: "-160px",
    right: "-120px"
  },

  card: {
    width: "100%",
    maxWidth: "980px",
    background: "#1f1f1f",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "28px",
    padding: "42px",
    boxShadow: "0 30px 90px rgba(0,0,0,0.6)",
    position: "relative",
    zIndex: 2,
    animation: "deviceSelectEnter 0.7s ease both"
  },

  eyebrow: {
    margin: 0,
    color: "#4ade80",
    fontFamily: "var(--heading)",
    fontSize: "18px",
    fontWeight: "900",
    textTransform: "uppercase",
    letterSpacing: "1px",
    textAlign: "center"
  },

  title: {
    margin: "10px 0",
    color: "#f1f0e8",
    fontFamily: "var(--heading)",
    fontSize: "58px",
    fontWeight: "900",
    letterSpacing: "-1.2px",
    lineHeight: "0.95",
    textAlign: "center"
  },

  subtitle: {
    maxWidth: "620px",
    margin: "0 auto 32px",
    color: "#a1a1aa",
    fontSize: "17px",
    fontWeight: "750",
    lineHeight: "1.55",
    textAlign: "center"
  },

  deviceGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: "18px"
  },

  deviceCard: {
    border: "1px solid rgba(255,255,255,0.1)",
    background: "#181818",
    borderRadius: "24px",
    padding: "28px",
    cursor: "pointer",
    color: "#f5f5f5",
    textAlign: "left",
    transition: "transform 0.25s ease, border-color 0.25s ease, background 0.25s ease",
    animation: "deviceFloat 3.5s ease-in-out infinite"
  },

  iconWrap: {
    width: "74px",
    height: "74px",
    borderRadius: "22px",
    background: "#242424",
    border: "1px solid rgba(255,255,255,0.1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "18px"
  },

  deviceIcon: {
    fontSize: "38px"
  },

  deviceTitle: {
    margin: 0,
    color: "#f1f0e8",
    fontFamily: "var(--heading)",
    fontSize: "34px",
    fontWeight: "900",
    letterSpacing: "-0.5px"
  },

  deviceText: {
    minHeight: "52px",
    margin: "10px 0 22px",
    color: "#a1a1aa",
    fontSize: "15px",
    fontWeight: "750",
    lineHeight: "1.45"
  },

  selectPill: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px 14px",
    borderRadius: "999px",
    background: "#2f2f2f",
    color: "#f5f5f5",
    fontSize: "13px",
    fontWeight: "900",
    textTransform: "uppercase",
    letterSpacing: "0.4px"
  }
};