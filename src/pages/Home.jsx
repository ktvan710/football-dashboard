import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { worldCupFixtures } from "../data/worldCupFixtures";

const MALAYSIA_TIME_ZONE = "Asia/Kuala_Lumpur";

function getFlagEmoji(code, teamName) {
  const flags = {
    us: "🇺🇸",
    au: "🇦🇺",
    br: "🇧🇷",
    ht: "🇭🇹",
    tr: "🇹🇷",
    py: "🇵🇾",
    ma: "🇲🇦",
    "gb-sct": "🏴",
    nl: "🇳🇱",
    se: "🇸🇪",
    de: "🇩🇪",
    ci: "🇨🇮",
    ec: "🇪🇨",
    cw: "🇨🇼",
    tn: "🇹🇳",
    jp: "🇯🇵",
    es: "🇪🇸",
    sa: "🇸🇦",
    be: "🇧🇪",
    ir: "🇮🇷",
    uy: "🇺🇾",
    cv: "🇨🇻",
    nz: "🇳🇿",
    eg: "🇪🇬",
    ar: "🇦🇷",
    at: "🇦🇹",
    fr: "🇫🇷",
    iq: "🇮🇶",
    no: "🇳🇴",
    sn: "🇸🇳",
    jo: "🇯🇴",
    dz: "🇩🇿",
    pt: "🇵🇹",
    uz: "🇺🇿",
    co: "🇨🇴",
    cd: "🇨🇩",
    en: "🏴",
    gh: "🇬🇭",
    pa: "🇵🇦",
    hr: "🇭🇷",
    mx: "🇲🇽",
    kr: "🇰🇷",
    cz: "🇨🇿",
    za: "🇿🇦",
    ca: "🇨🇦",
    ch: "🇨🇭",
    ba: "🇧🇦",
    qa: "🇶🇦"
  };
function getFlagCode(code) {
  const aliases = {
    en: "gb-eng",
    scotland: "gb-sct"
  };

  return aliases[code] || code;
}

function getFlagUrl(code) {
  const flagCode = getFlagCode(code);

  if (!flagCode) return "";

  return `https://flagcdn.com/w80/${flagCode.toLowerCase()}.png`;
}
  const fallbacks = {
    Scotland: "🏴",
    England: "🏴",
    "Ivory Coast": "🇨🇮",
    Curacao: "🇨🇼",
    "Cape Verde": "🇨🇻",
    "New Zealand": "🇳🇿",
    "South Korea": "🇰🇷",
    Czechia: "🇨🇿",
    "South Africa": "🇿🇦",
    "Bosnia and Herzegovina": "🇧🇦",
    "DR Congo": "🇨🇩"
  };

  return flags[code] || fallbacks[teamName] || "🏳️";
}

function getMalaysiaDateParts(date) {
  const formatter = new Intl.DateTimeFormat("en-CA", {
    timeZone: MALAYSIA_TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  });

  return formatter.format(date);
}

function getTodayKey() {
  return getMalaysiaDateParts(new Date());
}

function shiftDateKey(dateKey, amount) {
  const [year, month, day] = dateKey.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  date.setUTCDate(date.getUTCDate() + amount);

  const shiftedYear = date.getUTCFullYear();
  const shiftedMonth = String(date.getUTCMonth() + 1).padStart(2, "0");
  const shiftedDay = String(date.getUTCDate()).padStart(2, "0");

  return `${shiftedYear}-${shiftedMonth}-${shiftedDay}`;
}

function getMatchDateKey(match) {
  return getMalaysiaDateParts(new Date(match.kickoff.date));
}

function getDateLabel(dateKey) {
  const today = getTodayKey();
  const yesterday = shiftDateKey(today, -1);
  const tomorrow = shiftDateKey(today, 1);

  if (dateKey === today) return "Today, press match for info";
  if (dateKey === yesterday) return "Yesterday";
  if (dateKey === tomorrow) return "Tomorrow";

  const [year, month, day] = dateKey.split("-").map(Number);

  return new Date(Date.UTC(year, month - 1, day)).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric"
  });
}

function formatKickoffTime(dateString) {
  return new Date(dateString).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: MALAYSIA_TIME_ZONE
  });
}

function getCountdown(dateString, now) {
  const kickoff = new Date(dateString).getTime();
  const current = now.getTime();
  const diff = kickoff - current;

  if (diff <= 0) return "";

  const totalMinutes = Math.floor(diff / 1000 / 60);
  const days = Math.floor(totalMinutes / 1440);
  const hours = Math.floor((totalMinutes % 1440) / 60);
  const minutes = totalMinutes % 60;

  if (days > 0) return `${days}d ${hours}h`;
  if (hours > 0) return `${hours}h ${minutes}m`;

  return `${minutes}m`;
}

function groupMatchesByGroup(matchList) {
  return matchList.reduce((groups, match) => {
    const groupName = match.group || "Other";

    if (!groups[groupName]) {
      groups[groupName] = [];
    }

    groups[groupName].push(match);

    return groups;
  }, {});
}

function isCompleted(match) {
  return Boolean(match.score);
}
function getFlagCode(code) {
  const aliases = {
    en: "gb-eng",
    "gb-sct": "gb-sct"
  };

  return aliases[code] || code;
}

function getFlagUrl(code) {
  const flagCode = getFlagCode(code);

  if (!flagCode) return "";

  return `https://flagcdn.com/w80/${flagCode.toLowerCase()}.png`;
}
function FixtureRow({ match, now }) {
  const completed = isCompleted(match);

  return (
    <Link to={`/match/${match.id}`} style={styles.fixtureRow}>
      <div style={styles.statusColumn}>
        {completed ? <span style={styles.statusBadge}>FT</span> : null}
      </div>

      <div style={styles.homeTeamName}>{match.home.name}</div>

      <div style={styles.flagColumn}>
        <div style={styles.flagCircle}>
          <img
            src={getFlagUrl(match.home.code)}
            alt={match.home.name}
            style={styles.flagImage}
          />
        </div>
      </div>

      <div style={styles.middleColumn}>
        {completed ? (
          <span style={styles.scoreText}>
            {match.score.home} - {match.score.away}
          </span>
        ) : (
          <span style={styles.kickoffText}>
            {formatKickoffTime(match.kickoff.date)}
          </span>
        )}
      </div>

      <div style={styles.flagColumn}>
        <div style={styles.flagCircle}>
          <img
            src={getFlagUrl(match.away.code)}
            alt={match.away.name}
            style={styles.flagImage}
          />
        </div>
      </div>

      <div style={styles.awayTeamName}>{match.away.name}</div>

      <div style={styles.rightColumn}>
        {!completed && (
          <span style={styles.countdownText}>
            {getCountdown(match.kickoff.date, now)}
          </span>
        )}
      </div>
    </Link>
  );
}

function FixtureGroup({ groupName, groupMatches, now }) {
  return (
    <div style={styles.groupBlock}>
      <div style={styles.groupHeader}>
        <span style={styles.groupPill}>{groupName}</span>
      </div>

      {groupMatches.map((match) => (
        <FixtureRow key={match.id} match={match} now={now} />
      ))}
    </div>
  );
}

function CalendarModal({
  selectedDate,
  setSelectedDate,
  setCalendarOpen,
  calendarMonth,
  setCalendarMonth
}) {
  const [year, month] = calendarMonth.split("-").map(Number);

  const firstDay = new Date(Date.UTC(year, month - 1, 1));
  const startDay = firstDay.getUTCDay();
  const daysInMonth = new Date(Date.UTC(year, month, 0)).getUTCDate();
  const previousMonthDays = new Date(Date.UTC(year, month - 1, 0)).getUTCDate();

  const calendarCells = [];

  for (let i = startDay - 1; i >= 0; i--) {
    calendarCells.push({
      day: previousMonthDays - i,
      outside: true,
      dateKey: null
    });
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const dateKey = `${year}-${String(month).padStart(2, "0")}-${String(
      day
    ).padStart(2, "0")}`;

    calendarCells.push({
      day,
      outside: false,
      dateKey
    });
  }

  while (calendarCells.length < 42) {
    const nextDay = calendarCells.length - startDay - daysInMonth + 1;

    calendarCells.push({
      day: nextDay,
      outside: true,
      dateKey: null
    });
  }

  function shiftMonth(amount) {
    const nextMonth = new Date(Date.UTC(year, month - 1 + amount, 1));
    const nextYear = nextMonth.getUTCFullYear();
    const nextMonthNumber = String(nextMonth.getUTCMonth() + 1).padStart(
      2,
      "0"
    );

    setCalendarMonth(`${nextYear}-${nextMonthNumber}`);
  }

  const monthTitle = new Date(Date.UTC(year, month - 1, 1)).toLocaleDateString(
    "en-US",
    {
      month: "long",
      year: "numeric"
    }
  );

  return (
    <div style={styles.modalOverlay} onClick={() => setCalendarOpen(false)}>
      <div style={styles.calendarModal} onClick={(event) => event.stopPropagation()}>
        <div style={styles.calendarHeader}>
          <button style={styles.calendarArrow} onClick={() => shiftMonth(-1)}>
            ‹
          </button>

          <h3 style={styles.calendarTitle}>{monthTitle}</h3>

          <button style={styles.calendarArrow} onClick={() => shiftMonth(1)}>
            ›
          </button>
        </div>

        <div style={styles.weekdayRow}>
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <span key={day} style={styles.weekday}>
              {day}
            </span>
          ))}
        </div>

        <div style={styles.calendarGrid}>
          {calendarCells.map((cell, index) => {
            const isSelected = cell.dateKey === selectedDate;

            return (
              <button
                key={`${cell.day}-${index}`}
                style={{
                  ...styles.calendarDay,
                  ...(cell.outside ? styles.outsideDay : {}),
                  ...(isSelected ? styles.selectedDay : {})
                }}
                disabled={cell.outside}
                onClick={() => {
                  setSelectedDate(cell.dateKey);
                  setCalendarOpen(false);
                }}
              >
                {cell.day}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [selectedDate, setSelectedDate] = useState(getTodayKey());
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [calendarMonth, setCalendarMonth] = useState(() => {
    return selectedDate.slice(0, 7);
  });
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 30000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setCalendarMonth(selectedDate.slice(0, 7));
  }, [selectedDate]);

  const allMatches = useMemo(() => {
    return Object.entries(worldCupFixtures)
      .map(([id, match]) => ({
        id,
        ...match
      }))
      .sort((a, b) => new Date(a.kickoff.date) - new Date(b.kickoff.date));
  }, []);

  const selectedMatches = allMatches.filter((match) => {
    return getMatchDateKey(match) === selectedDate;
  });

  const groupedMatches = groupMatchesByGroup(selectedMatches);

  return (
    <div style={styles.page}>
      <div style={styles.dateBar}>
        <button
          style={styles.dateArrow}
          onClick={() => setSelectedDate(shiftDateKey(selectedDate, -1))}
        >
          ‹
        </button>

        <button
          style={styles.dateCenter}
          onClick={() => setCalendarOpen(true)}
        >
          {getDateLabel(selectedDate)}
          <span style={styles.dateCaret}>⌄</span>
        </button>

        <button
          style={styles.dateArrow}
          onClick={() => setSelectedDate(shiftDateKey(selectedDate, 1))}
        >
          ›
        </button>
      </div>

      <div style={styles.fixtureBoard} className="fixture-board-scroll">
        {selectedMatches.length > 0 ? (
          Object.entries(groupedMatches).map(([groupName, groupMatches]) => (
            <FixtureGroup
              key={groupName}
              groupName={groupName}
              groupMatches={groupMatches}
              now={now}
            />
          ))
        ) : (
          <div style={styles.emptyState}>No World Cup matches on this date</div>
        )}
      </div>

      {calendarOpen && (
        <CalendarModal
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          setCalendarOpen={setCalendarOpen}
          calendarMonth={calendarMonth}
          setCalendarMonth={setCalendarMonth}
        />
      )}
    </div>
  );
}

const styles = {
  page: {
    color: "#f5f5f5",
    maxWidth: "880px",
    margin: "0 auto",
    fontFamily: "var(--sans)"
  },

  dateBar: {
    background: "#1f1f1f",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "18px",
    height: "82px",
    display: "grid",
    gridTemplateColumns: "64px 1fr 64px",
    alignItems: "center",
    marginBottom: "18px",
    overflow: "hidden"
  },

  dateArrow: {
    width: "42px",
    height: "42px",
    borderRadius: "999px",
    border: 0,
    background: "#3a3a3a",
    color: "#f5f5f5",
    fontSize: "36px",
    lineHeight: "38px",
    fontWeight: "900",
    cursor: "pointer",
    justifySelf: "center"
  },

  dateCenter: {
  border: 0,
  background: "transparent",
  color: "#ffffff",
  fontFamily: "var(--heading)",
  fontSize: "28px",
  fontWeight: "900",
  cursor: "pointer",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  letterSpacing: "-0.4px"
},

  dateCaret: {
    fontSize: "18px",
    transform: "translateY(1px)"
  },

  fixtureBoard: {
  background: "#1f1f1f",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "18px",
  overflowX: "auto",
  overflowY: "hidden",
  boxShadow: "none",
  WebkitOverflowScrolling: "touch",
  overscrollBehaviorX: "contain",
  touchAction: "pan-x pan-y",
  scrollbarWidth: "none"
},

  groupBlock: {
  minWidth: "720px",
  borderBottom: "1px solid rgba(255,255,255,0.08)"
},

  groupHeader: {
    padding: "14px 22px 8px"
  },

  groupPill: {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  border: "1px solid rgba(255,255,255,0.12)",
  borderRadius: "12px",
  padding: "8px 13px",
  color: "#a1a1aa",
  fontFamily: "var(--heading)",
  fontSize: "17px",
  fontWeight: "900",
  letterSpacing: "-0.2px"
},

  fixtureRow: {
  minHeight: "78px",
  minWidth: "720px",
  display: "grid",
  gridTemplateColumns:
    "64px minmax(120px, 1fr) 46px 110px 46px minmax(120px, 1fr) 90px",
  alignItems: "center",
  color: "#f5f5f5",
  textDecoration: "none",
  borderTop: "1px solid rgba(255,255,255,0.06)",
  padding: "6px 22px",
  columnGap: "10px"
},

statusColumn: {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start"
},

statusBadge: {
  width: "38px",
  height: "30px",
  borderRadius: "999px",
  background: "#343434",
  color: "#a1a1aa",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "13px",
  fontWeight: "900"
},

homeTeamName: {
  color: "#f1f0e8",
  fontFamily: "var(--heading)",
  fontSize: "24px",
  fontWeight: "900",
  letterSpacing: "-0.30px",
  lineHeight: "1",
  textAlign: "right",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis"
},

awayTeamName: {
  color: "#f1f0e8",
  fontFamily: "var(--heading)",
  fontSize: "24px",
  fontWeight: "900",
  letterSpacing: "-0.30px",
  lineHeight: "1",
  textAlign: "left",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis"
},

flagColumn: {
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
},

flagCircle: {
  width: "36px",
  height: "36px",
  borderRadius: "999px",
  background: "#2a2a2a",
  overflow: "hidden",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  flex: "0 0 auto"
},

flagImage: {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block"
},

middleColumn: {
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
},

scoreText: {
  color: "#f1f0e8",
  fontFamily: "var(--score)",
  fontSize: "18px",
  fontWeight: "900",
  whiteSpace: "nowrap",
  minWidth: "74px",
  textAlign: "center",
  letterSpacing: "0.2px"
},

kickoffText: {
  color: "#a1a1aa",
  fontFamily: "var(--score)",
  fontSize: "19px",
  fontWeight: "900",
  whiteSpace: "nowrap",
  minWidth: "96px",
  textAlign: "center",
  letterSpacing: "0.1px"
},

rightColumn: {
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center"
},

countdownText: {
  color: "#4ade80",
  fontFamily: "var(--score)",
  fontSize: "15px",
  fontWeight: "900",
  whiteSpace: "nowrap"
},

  emptyState: {
    padding: "42px 20px",
    textAlign: "center",
    color: "#a1a1aa",
    fontSize: "18px",
    fontWeight: "800"
  },

  modalOverlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.72)",
    zIndex: 2000,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },

  calendarModal: {
    width: "430px",
    maxWidth: "calc(100vw - 36px)",
    background: "#2b2b2b",
    borderRadius: "22px",
    border: "1px solid rgba(255,255,255,0.08)",
    boxShadow: "0 28px 70px rgba(0,0,0,0.55)",
    overflow: "hidden",
    paddingBottom: "22px"
  },

  calendarHeader: {
    height: "84px",
    display: "grid",
    gridTemplateColumns: "72px 1fr 72px",
    alignItems: "center",
    borderBottom: "1px solid rgba(255,255,255,0.06)"
  },

  calendarArrow: {
    width: "42px",
    height: "42px",
    borderRadius: "999px",
    border: 0,
    background: "#4a4a4a",
    color: "#f5f5f5",
    fontSize: "34px",
    lineHeight: "38px",
    fontWeight: "900",
    cursor: "pointer",
    justifySelf: "center"
  },

  calendarTitle: {
    margin: 0,
    color: "#f5f5f5",
    fontSize: "24px",
    fontWeight: "900",
    textAlign: "center"
  },

  weekdayRow: {
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)",
    padding: "20px 24px 8px"
  },

  weekday: {
    color: "#a1a1aa",
    textAlign: "center",
    fontSize: "15px",
    fontWeight: "800"
  },

  calendarGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)",
    gap: "8px",
    padding: "10px 24px 0"
  },

  calendarDay: {
    height: "38px",
    borderRadius: "999px",
    border: 0,
    background: "transparent",
    color: "#f5f5f5",
    fontSize: "19px",
    fontWeight: "800",
    cursor: "pointer"
  },
  flagColumn: {
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
},

middleColumn: {
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
},

  outsideDay: {
    color: "#6b7280",
    cursor: "not-allowed"
  },

  selectedDay: {
    background: "#3a3a3a"
  }
};