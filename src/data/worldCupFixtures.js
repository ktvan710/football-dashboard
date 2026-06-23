function fixture(id, group, home, away, date, location, score = null) {
  return {
    id,
    competition: "FIFA World Cup 2026",
    group,
    home: {
      name: home[0],
      code: home[1]
    },
    away: {
      name: away[0],
      code: away[1]
    },
    kickoff: {
      date,
      location
    },
    ...(score ? { score } : {})
  };
}

const fixtureList = [
  // Group A
  fixture("mexico-south-africa", "Group A", ["Mexico", "mx"], ["South Africa", "za"], "2026-06-11T13:00:00-06:00", "Mexico City", { home: 2, away: 0 }),
  fixture("south-korea-czechia", "Group A", ["South Korea", "kr"], ["Czechia", "cz"], "2026-06-11T20:00:00-06:00", "Guadalajara", { home: 2, away: 1 }),
  fixture("czechia-south-africa", "Group A", ["Czechia", "cz"], ["South Africa", "za"], "2026-06-18T12:00:00-04:00", "Atlanta", { home: 1, away: 1 }),
  fixture("mexico-south-korea", "Group A", ["Mexico", "mx"], ["South Korea", "kr"], "2026-06-18T19:00:00-06:00", "Guadalajara", { home: 1, away: 0 }),
  fixture("czechia-mexico", "Group A", ["Czechia", "cz"], ["Mexico", "mx"], "2026-06-24T19:00:00-06:00", "Mexico City"),
  fixture("south-africa-south-korea", "Group A", ["South Africa", "za"], ["South Korea", "kr"], "2026-06-24T19:00:00-06:00", "Monterrey"),

  // Group B
  fixture("canada-bosnia", "Group B", ["Canada", "ca"], ["Bosnia and Herzegovina", "ba"], "2026-06-12T15:00:00-04:00", "Toronto", { home: 1, away: 1 }),
  fixture("qatar-switzerland", "Group B", ["Qatar", "qa"], ["Switzerland", "ch"], "2026-06-13T12:00:00-07:00", "San Francisco Bay Area", { home: 1, away: 1 }),
  fixture("switzerland-bosnia", "Group B", ["Switzerland", "ch"], ["Bosnia and Herzegovina", "ba"], "2026-06-18T12:00:00-07:00", "Los Angeles", { home: 4, away: 1 }),
  fixture("canada-qatar", "Group B", ["Canada", "ca"], ["Qatar", "qa"], "2026-06-18T15:00:00-07:00", "Vancouver", { home: 6, away: 0 }),
  fixture("switzerland-canada", "Group B", ["Switzerland", "ch"], ["Canada", "ca"], "2026-06-24T12:00:00-07:00", "Vancouver"),
  fixture("bosnia-qatar", "Group B", ["Bosnia and Herzegovina", "ba"], ["Qatar", "qa"], "2026-06-24T12:00:00-07:00", "Seattle"),

  // Group C
  fixture("brazil-morocco", "Group C", ["Brazil", "br"], ["Morocco", "ma"], "2026-06-13T18:00:00-04:00", "New York/New Jersey", { home: 1, away: 1 }),
  fixture("haiti-scotland", "Group C", ["Haiti", "ht"], ["Scotland", "gb-sct"], "2026-06-13T21:00:00-04:00", "Boston", { home: 0, away: 1 }),
  fixture("scotland-morocco", "Group C", ["Scotland", "gb-sct"], ["Morocco", "ma"], "2026-06-19T18:00:00-04:00", "Boston", { home: 0, away: 1 }),
  fixture("brazil-haiti", "Group C", ["Brazil", "br"], ["Haiti", "ht"], "2026-06-19T20:30:00-04:00", "Philadelphia", { home: 3, away: 0 }),
  fixture("scotland-brazil", "Group C", ["Scotland", "gb-sct"], ["Brazil", "br"], "2026-06-24T18:00:00-04:00", "Miami"),
  fixture("morocco-haiti", "Group C", ["Morocco", "ma"], ["Haiti", "ht"], "2026-06-24T18:00:00-04:00", "Atlanta"),

  // Group D
  fixture("usa-paraguay", "Group D", ["USA", "us"], ["Paraguay", "py"], "2026-06-12T18:00:00-07:00", "Los Angeles", { home: 4, away: 1 }),
  fixture("australia-turkey", "Group D", ["Australia", "au"], ["Turkey", "tr"], "2026-06-13T21:00:00-07:00", "Vancouver", { home: 2, away: 0 }),
  fixture("usa-australia", "Group D", ["USA", "us"], ["Australia", "au"], "2026-06-19T12:00:00-07:00", "Seattle", { home: 2, away: 0 }),
  fixture("turkey-paraguay", "Group D", ["Turkey", "tr"], ["Paraguay", "py"], "2026-06-19T20:00:00-07:00", "San Francisco Bay Area", { home: 0, away: 1 }),
  fixture("turkey-usa", "Group D", ["Turkey", "tr"], ["USA", "us"], "2026-06-25T19:00:00-07:00", "Los Angeles"),
  fixture("paraguay-australia", "Group D", ["Paraguay", "py"], ["Australia", "au"], "2026-06-25T19:00:00-07:00", "San Francisco Bay Area"),

  // Group E
  fixture("germany-curacao", "Group E", ["Germany", "de"], ["Curacao", "cw"], "2026-06-14T12:00:00-05:00", "Houston", { home: 7, away: 1 }),
  fixture("ivory-coast-ecuador", "Group E", ["Ivory Coast", "ci"], ["Ecuador", "ec"], "2026-06-14T19:00:00-04:00", "Philadelphia", { home: 1, away: 0 }),
  fixture("germany-ivory-coast", "Group E", ["Germany", "de"], ["Ivory Coast", "ci"], "2026-06-20T16:00:00-04:00", "Toronto", { home: 2, away: 1 }),
  fixture("ecuador-curacao", "Group E", ["Ecuador", "ec"], ["Curacao", "cw"], "2026-06-20T19:00:00-05:00", "Kansas City", { home: 0, away: 0 }),
  fixture("curacao-ivory-coast", "Group E", ["Curacao", "cw"], ["Ivory Coast", "ci"], "2026-06-25T16:00:00-04:00", "Philadelphia"),
  fixture("ecuador-germany", "Group E", ["Ecuador", "ec"], ["Germany", "de"], "2026-06-25T16:00:00-04:00", "New York/New Jersey"),

  // Group F
  fixture("netherlands-japan", "Group F", ["Netherlands", "nl"], ["Japan", "jp"], "2026-06-14T15:00:00-05:00", "Dallas", { home: 2, away: 2 }),
  fixture("sweden-tunisia", "Group F", ["Sweden", "se"], ["Tunisia", "tn"], "2026-06-14T20:00:00-06:00", "Monterrey", { home: 5, away: 1 }),
  fixture("netherlands-sweden", "Group F", ["Netherlands", "nl"], ["Sweden", "se"], "2026-06-20T12:00:00-05:00", "Houston", { home: 5, away: 1 }),
  fixture("tunisia-japan", "Group F", ["Tunisia", "tn"], ["Japan", "jp"], "2026-06-20T22:00:00-06:00", "Monterrey", { home: 0, away: 4 }),
  fixture("japan-sweden", "Group F", ["Japan", "jp"], ["Sweden", "se"], "2026-06-25T18:00:00-05:00", "Dallas"),
  fixture("tunisia-netherlands", "Group F", ["Tunisia", "tn"], ["Netherlands", "nl"], "2026-06-25T18:00:00-05:00", "Kansas City"),

  // Group G
  fixture("belgium-egypt", "Group G", ["Belgium", "be"], ["Egypt", "eg"], "2026-06-15T12:00:00-07:00", "Seattle", { home: 1, away: 1 }),
  fixture("iran-new-zealand", "Group G", ["Iran", "ir"], ["New Zealand", "nz"], "2026-06-15T18:00:00-07:00", "Los Angeles", { home: 2, away: 2 }),
  fixture("belgium-iran", "Group G", ["Belgium", "be"], ["Iran", "ir"], "2026-06-21T12:00:00-07:00", "Los Angeles", { home: 0, away: 0 }),
  fixture("new-zealand-egypt", "Group G", ["New Zealand", "nz"], ["Egypt", "eg"], "2026-06-21T18:00:00-07:00", "Vancouver", { home: 1, away: 3 }),
  fixture("egypt-iran", "Group G", ["Egypt", "eg"], ["Iran", "ir"], "2026-06-26T20:00:00-07:00", "Seattle"),
  fixture("new-zealand-belgium", "Group G", ["New Zealand", "nz"], ["Belgium", "be"], "2026-06-26T20:00:00-07:00", "Vancouver"),

  // Group H
  fixture("spain-cape-verde", "Group H", ["Spain", "es"], ["Cape Verde", "cv"], "2026-06-15T12:00:00-04:00", "Atlanta", { home: 0, away: 0 }),
  fixture("saudi-arabia-uruguay", "Group H", ["Saudi Arabia", "sa"], ["Uruguay", "uy"], "2026-06-15T18:00:00-04:00", "Miami", { home: 1, away: 1 }),
  fixture("spain-saudi-arabia", "Group H", ["Spain", "es"], ["Saudi Arabia", "sa"], "2026-06-21T12:00:00-04:00", "Atlanta", { home: 4, away: 0 }),
  fixture("uruguay-cape-verde", "Group H", ["Uruguay", "uy"], ["Cape Verde", "cv"], "2026-06-21T18:00:00-04:00", "Miami", { home: 2, away: 2 }),
  fixture("cape-verde-saudi-arabia", "Group H", ["Cape Verde", "cv"], ["Saudi Arabia", "sa"], "2026-06-26T19:00:00-05:00", "Houston"),
  fixture("uruguay-spain", "Group H", ["Uruguay", "uy"], ["Spain", "es"], "2026-06-26T18:00:00-06:00", "Guadalajara"),

  // Group I
  fixture("france-senegal", "Group I", ["France", "fr"], ["Senegal", "sn"], "2026-06-16T15:00:00-04:00", "New York/New Jersey", { home: 3, away: 1 }),
  fixture("iraq-norway", "Group I", ["Iraq", "iq"], ["Norway", "no"], "2026-06-16T18:00:00-04:00", "Boston", { home: 1, away: 4 }),
  fixture("france-iraq", "Group I", ["France", "fr"], ["Iraq", "iq"], "2026-06-22T17:00:00-04:00", "Philadelphia", { home: 3, away: 0 }),
  fixture("norway-senegal", "Group I", ["Norway", "no"], ["Senegal", "sn"], "2026-06-22T20:00:00-04:00", "New York/New Jersey", { home: 3, away: 2 }),
  fixture("norway-france", "Group I", ["Norway", "no"], ["France", "fr"], "2026-06-26T15:00:00-04:00", "Boston"),
  fixture("senegal-iraq", "Group I", ["Senegal", "sn"], ["Iraq", "iq"], "2026-06-26T15:00:00-04:00", "Toronto"),

  // Group J
  fixture("argentina-algeria", "Group J", ["Argentina", "ar"], ["Algeria", "dz"], "2026-06-16T20:00:00-05:00", "Kansas City", { home: 3, away: 0 }),
  fixture("austria-jordan", "Group J", ["Austria", "at"], ["Jordan", "jo"], "2026-06-16T21:00:00-07:00", "San Francisco Bay Area", { home: 3, away: 1 }),
  fixture("argentina-austria", "Group J", ["Argentina", "ar"], ["Austria", "at"], "2026-06-22T12:00:00-05:00", "Dallas", { home: 2, away: 0 }),
  fixture("jordan-algeria", "Group J", ["Jordan", "jo"], ["Algeria", "dz"], "2026-06-22T20:00:00-07:00", "San Francisco Bay Area"),
  fixture("algeria-austria", "Group J", ["Algeria", "dz"], ["Austria", "at"], "2026-06-27T21:00:00-05:00", "Kansas City"),
  fixture("jordan-argentina", "Group J", ["Jordan", "jo"], ["Argentina", "ar"], "2026-06-27T21:00:00-05:00", "Dallas"),

  // Group K
  fixture("portugal-dr-congo", "Group K", ["Portugal", "pt"], ["DR Congo", "cd"], "2026-06-17T12:00:00-05:00", "Houston", { home: 1, away: 1 }),
  fixture("uzbekistan-colombia", "Group K", ["Uzbekistan", "uz"], ["Colombia", "co"], "2026-06-17T20:00:00-06:00", "Mexico City", { home: 1, away: 3 }),
  fixture("portugal-uzbekistan", "Group K", ["Portugal", "pt"], ["Uzbekistan", "uz"], "2026-06-23T12:00:00-05:00", "Houston"),
  fixture("colombia-dr-congo", "Group K", ["Colombia", "co"], ["DR Congo", "cd"], "2026-06-23T20:00:00-06:00", "Guadalajara"),
  fixture("colombia-portugal", "Group K", ["Colombia", "co"], ["Portugal", "pt"], "2026-06-27T19:30:00-04:00", "Miami"),
  fixture("dr-congo-uzbekistan", "Group K", ["DR Congo", "cd"], ["Uzbekistan", "uz"], "2026-06-27T19:30:00-04:00", "Atlanta"),

  // Group L
  fixture("england-croatia", "Group L", ["England", "gb-eng"], ["Croatia", "hr"], "2026-06-17T15:00:00-05:00", "Dallas", { home: 4, away: 2 }),
  fixture("ghana-panama", "Group L", ["Ghana", "gh"], ["Panama", "pa"], "2026-06-17T19:00:00-04:00", "Toronto", { home: 1, away: 0 }),
  fixture("england-ghana", "Group L", ["England", "gb-eng"], ["Ghana", "gh"], "2026-06-23T16:00:00-04:00", "Boston"),
  fixture("panama-croatia", "Group L", ["Panama", "pa"], ["Croatia", "hr"], "2026-06-23T19:00:00-04:00", "Toronto"),
  fixture("panama-england", "Group L", ["Panama", "pa"], ["England", "gb-eng"], "2026-06-27T17:00:00-04:00", "New York/New Jersey"),
  fixture("croatia-ghana", "Group L", ["Croatia", "hr"], ["Ghana", "gh"], "2026-06-27T17:00:00-04:00", "Philadelphia")
];

export const worldCupFixtures = Object.fromEntries(
  fixtureList.map((match) => [match.id, match])
);