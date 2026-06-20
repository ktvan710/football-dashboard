import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import MatchPage from "./pages/MatchPage";

const OLISE_IMAGE =
  "https://preview.redd.it/official-michael-olise-has-been-called-to-play-with-france-v0-ue5ymyksglld1.jpeg?width=1080&crop=smart&auto=webp&s=715c0316bc50e9315d710a83512e79c1a3ba6d1c";

const TNG_QR_IMAGE = "/images/tng-qr.jpg";

const SITE_PASSWORD = "worldcup2026";

function PasswordScreen({ onUnlock }) {
  const [password, setPassword] = useState("");
const [error, setError] = useState("");
const [isUnlocking, setIsUnlocking] = useState(false);

const [discountCode, setDiscountCode] = useState("");
const [discountApplied, setDiscountApplied] = useState(false);
const [discountError, setDiscountError] = useState("");

const accessPrice = discountApplied ? "RM2.50" : "RM5";

  function handleSubmit(e) {
    e.preventDefault();

    if (password === SITE_PASSWORD) {
      setError("");
      setIsUnlocking(true);

      setTimeout(() => {
        localStorage.setItem("worldCupDashboardUnlocked", "true");
        onUnlock();
      }, 1250);
    } else {
      setError("Incorrect password.");
      setPassword("");
    }
  }
function handleApplyDiscount(e) {
  e.preventDefault();

  if (discountCode.trim().toUpperCase() === "OLISE50") {
    setDiscountApplied(true);
    setDiscountError("");
  } else {
    setDiscountApplied(false);
    setDiscountError("Invalid discount code.");
  }
}
  return (
    <div
      style={styles.lockPage}
      className={isUnlocking ? "lock-page unlock-exit" : "lock-page"}
    >
      {isUnlocking && <div className="unlock-flash" />}

      <div
        style={styles.lockLayout}
        className={isUnlocking ? "lock-layout unlocking" : "lock-layout"}
      >
        {/* LEFT IMAGE */}
        <div style={styles.olisePanel} className="olise-panel">
          <img
            src={OLISE_IMAGE}
            alt="Michael Olise"
            style={styles.oliseImage}
          />

          <div style={styles.imageOverlay}>
            <p style={styles.imageTag}>Premium Access</p>
            <h2 style={styles.imageTitle}>World Cup Dashboard</h2>
          </div>
        </div>

        {/* PASSWORD CARD */}
        <div style={styles.lockCard} className="lock-card">
          <div style={styles.trophy} className={isUnlocking ? "unlock-trophy" : ""}>
            {isUnlocking ? "✅" : "🏆"}
          </div>

          <h1 style={styles.lockTitle}>
            {isUnlocking ? "Access Granted" : "World Cup Dashboard"}
          </h1>

          <p style={styles.lockSubtitle}>
            {isUnlocking
              ? "Loading premium dashboard..."
              : "Pay RM5 for access, then enter the password."}
          </p>

          {!isUnlocking && (
            <>
              <div style={styles.paymentBox}>
                <p style={styles.paymentTitle}>TNG Payment</p>

                <img
                  src={TNG_QR_IMAGE}
                  alt="Touch 'n Go QR Code"
                  style={styles.qrImage}
                />

                <div style={styles.priceBox}>
  {discountApplied && <p style={styles.oldPrice}>RM5</p>}

  <p style={styles.priceText}>{accessPrice} Access Fee</p>

  {discountApplied && (
    <p style={styles.discountSuccess}>Discount applied: 50% off</p>
  )}
</div>

<form onSubmit={handleApplyDiscount} style={styles.discountForm}>
  <input
    type="text"
    placeholder="Discount code"
    value={discountCode}
    onChange={(e) => setDiscountCode(e.target.value)}
    style={styles.discountInput}
  />

  <button type="submit" style={styles.discountButton}>
    Apply
  </button>
</form>

{discountError && <p style={styles.discountError}>{discountError}</p>}
              </div>

              <form onSubmit={handleSubmit} style={styles.form}>
                <input
                  type="password"
                  placeholder="Enter access password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={styles.input}
                />

                <button type="submit" style={styles.unlockButton}>
                  Unlock Dashboard
                </button>
              </form>

              {error && <p style={styles.error}>{error}</p>}
            </>
          )}

          {isUnlocking && (
            <div className="unlock-loader">
              <span />
              <span />
              <span />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function App() {
  const location = useLocation();

  const [unlocked, setUnlocked] = useState(() => {
    return localStorage.getItem("worldCupDashboardUnlocked") === "true";
  });

  function handleLogout() {
    localStorage.removeItem("worldCupDashboardUnlocked");
    setUnlocked(false);
  }

  if (!unlocked) {
    return <PasswordScreen onUnlock={() => setUnlocked(true)} />;
  }

  return (
  <div className="dashboard-enter">
    <Sidebar />

      <button onClick={handleLogout} style={styles.logoutButton}>
        Lock
      </button>

      <main style={styles.mainContent}>
  <div key={location.pathname} className="page-route-transition">
    <Routes location={location}>
      <Route path="/" element={<Home />} />
      <Route path="/match/:id" element={<MatchPage />} />
    </Routes>
  </div>
</main>
    </div>
  );
}

const styles = {
  mainContent: {
    marginLeft: "310px",
    padding: "20px",
    width: "calc(100% - 310px)",
    boxSizing: "border-box"
  },
  lockLayout: {
  width: "100%",
  maxWidth: "1150px",
  display: "grid",
  gridTemplateColumns: "1.15fr 0.85fr",
  gap: "28px",
  alignItems: "stretch"
},
priceBox: {
  marginTop: "12px",
  marginBottom: "12px"
},

oldPrice: {
  margin: 0,
  color: "#64748b",
  fontFamily: "var(--score)",
  fontSize: "18px",
  fontWeight: "900",
  textDecoration: "line-through"
},

discountSuccess: {
  marginTop: "4px",
  color: "#22c55e",
  fontSize: "13px",
  fontWeight: "900",
  textTransform: "uppercase",
  letterSpacing: "0.6px"
},

discountForm: {
  display: "flex",
  gap: "8px",
  marginTop: "12px"
},

discountInput: {
  flex: 1,
  padding: "10px 12px",
  borderRadius: "12px",
  border: "1px solid #334155",
  background: "#0f172a",
  color: "#f8fafc",
  fontSize: "14px",
  outline: "none",
  fontFamily: "var(--sans)"
},

discountButton: {
  padding: "10px 14px",
  borderRadius: "12px",
  border: "1px solid #facc15",
  background: "#facc15",
  color: "#020617",
  fontSize: "14px",
  fontWeight: "900",
  cursor: "pointer",
  fontFamily: "var(--sans)"
},

discountError: {
  color: "#f87171",
  marginTop: "8px",
  marginBottom: 0,
  fontSize: "13px",
  fontWeight: "800"
},
olisePanel: {
  position: "relative",
  minHeight: "620px",
  borderRadius: "28px",
  overflow: "hidden",
  border: "1px solid rgba(212,175,55,0.55)",
  boxShadow: "0 25px 70px rgba(0,0,0,0.55)",
  background: "#020617"
},

oliseImage: {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
  filter: "contrast(1.05) saturate(1.08)"
},

imageOverlay: {
  position: "absolute",
  left: 0,
  right: 0,
  bottom: 0,
  padding: "28px",
  background:
    "linear-gradient(to top, rgba(2,6,23,0.95), rgba(2,6,23,0.45), transparent)",
  textAlign: "left"
},

imageTag: {
  display: "inline-block",
  color: "#020617",
  background: "linear-gradient(90deg, #d4af37, #facc15)",
  padding: "6px 12px",
  borderRadius: "999px",
  fontWeight: "900",
  textTransform: "uppercase",
  letterSpacing: "0.8px",
  marginBottom: "12px"
},

imageTitle: {
  color: "#f8fafc",
  fontFamily: "var(--heading)",
  fontSize: "54px",
  lineHeight: "0.95",
  margin: 0,
  textTransform: "uppercase",
  letterSpacing: "1px"
},

paymentBox: {
  background: "#020617",
  border: "1px solid #334155",
  borderRadius: "18px",
  padding: "16px",
  marginBottom: "18px"
},

paymentTitle: {
  color: "#f8fafc",
  fontWeight: "900",
  marginBottom: "10px",
  textTransform: "uppercase",
  letterSpacing: "0.8px"
},

qrImage: {
  width: "220px",
  maxWidth: "100%",
  borderRadius: "14px",
  background: "#ffffff",
  padding: "10px",
  display: "block",
  margin: "0 auto"
},

priceText: {
  marginTop: "12px",
  color: "#facc15",
  fontFamily: "var(--score)",
  fontSize: "24px",
  fontWeight: "900",
  letterSpacing: "0.6px"
},

  lockPage: {
    minHeight: "100vh",
    background:
      "radial-gradient(circle at top, rgba(56,189,248,0.18), transparent 35%), linear-gradient(135deg, #020617, #0f172a)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    boxSizing: "border-box"
  },

  lockCard: {
    width: "100%",
    maxWidth: "none",
    background: "rgba(30, 41, 59, 0.85)",
    border: "1px solid rgba(212,175,55,0.55)",
    borderRadius: "24px",
    padding: "34px",
    textAlign: "center",
    boxShadow: "0 20px 60px rgba(0,0,0,0.45)",
    backdropFilter: "blur(14px)"
  },

  trophy: {
    fontSize: "48px",
    marginBottom: "5px"
  },

  lockTitle: {
    fontFamily: "var(--heading)",
    fontSize: "44px",
    fontWeight: "900",
    letterSpacing: "1px",
    textTransform: "uppercase",
    margin: "0 0 10px",
    color: "#f8fafc"
  },

  lockSubtitle: {
    color: "#94a3b8",
    marginBottom: "22px",
    fontWeight: "700"
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px"
  },

  input: {
    padding: "14px 16px",
    borderRadius: "14px",
    border: "1px solid #334155",
    background: "#020617",
    color: "#f8fafc",
    fontSize: "16px",
    outline: "none",
    fontFamily: "var(--sans)"
  },

  unlockButton: {
    padding: "14px 16px",
    borderRadius: "14px",
    border: "1px solid #d4af37",
    background: "linear-gradient(90deg, #d4af37, #facc15)",
    color: "#020617",
    fontSize: "18px",
    fontWeight: "900",
    cursor: "pointer",
    fontFamily: "var(--heading)",
    textTransform: "uppercase",
    letterSpacing: "1px"
  },

  error: {
    color: "#f87171",
    marginTop: "14px",
    fontWeight: "800"
  },

  logoutButton: {
    position: "fixed",
    top: "15px",
    right: "15px",
    zIndex: 1000,
    background: "#0f172a",
    color: "#f8fafc",
    border: "1px solid #334155",
    borderRadius: "10px",
    padding: "8px 12px",
    cursor: "pointer",
    fontFamily: "var(--sans)",
    fontWeight: "800"
  }
};

export default App;