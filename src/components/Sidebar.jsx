import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div style={styles.sidebar}>
      {/* HOME BUTTON */}
      <Link to="/" style={styles.title}>
        Home
      </Link>

      <Link style={styles.link} to="/match/usa-australia">
        USA vs Australia
      </Link>

      <Link style={styles.link} to="/match/scotland-morocco">
        Scotland vs Morocco
      </Link>

      <Link style={styles.link} to="/match/brazil-haiti">
        Brazil vs Haiti
      </Link>

      <Link style={styles.link} to="/match/turkey-paraguay">
        Turkey vs Paraguay
      </Link>
    </div>
  );
}

const styles = {
  sidebar: {
    width: "220px",
    height: "100vh",
    background: "#111827",
    color: "white",
    padding: "20px",
    position: "fixed"
  },

  title: {
    display: "block",
    marginBottom: "20px",
    color: "white",
    textDecoration: "none",
    fontSize: "20px",
    fontWeight: "bold"
  },

  link: {
    display: "block",
    color: "white",
    textDecoration: "none",
    marginBottom: "12px",
    padding: "6px 0"
  }
};

export default Sidebar;