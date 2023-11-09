const DEV = {
  STATIC: {
    UPCOMING: {
      START: new Date("10/01/2024"),
      END: new Date("10/10/2024"),
    },
    PRELIVE: {
      START: new Date("10/01/2023"),
      END: new Date("10/10/2024"),
    },
    LIVE: {
      START: new Date("10/01/2024"),
      END: new Date("10/10/2024"),
    },
    POSTLIVE: {
      START: new Date("10/01/2024"),
      END: new Date("10/10/2024"),
    },
  },
  DYNAMIC: {
    "/admin/participants": new Date("10/01/2024"),
    "/admin/teams": new Date("10/01/2024"),
    "/admin/judges": new Date("10/01/2024"),
    "/admin/volunteers": new Date("10/01/2024"),
    "/admin/mentors": new Date("10/01/2024"),
    "/admin/admins": new Date("10/01/2024"),
    "/admin/committees": new Date("10/01/2024"),
    "/admin/feedback": new Date("10/01/2024"),
    "/admin/calendar": new Date("10/01/2024"),
    "/admin/messenger": new Date("10/01/2024"),
    "/admin/checkin": new Date("10/01/2024"),
    "/admin/judging": new Date("10/01/2024"),
    "/admin/prizes": new Date("10/01/2024"),
    "/admin/statistics": new Date("10/01/2024"),

    "/form/particpant": new Date("10/01/2024"),
    "/form/judge": new Date("10/01/2024"),
    "/form/volunteer": new Date("10/01/2024"),
    "/form/mentor": new Date("10/01/2024"),
    "/form/admin": new Date("10/01/2024"),
    "/form/committee": new Date("10/01/2024"),

    "/user/checkin": new Date("10/01/2024"),
    "/user/dashboard": new Date("10/01/2024"),
    "/user/join": new Date("10/01/2024"),
  },
};

const PRODUCTION = {
  STATIC: {
    UPCOMING: {
      START: new Date("10/01/2024"),
      END: new Date("10/10/2024"),
    },
    PRELIVE: {
      START: new Date("10/01/2024"),
      END: new Date("10/10/2024"),
    },
    LIVE: {
      START: new Date("10/01/2024"),
      END: new Date("10/10/2024"),
    },
    POSTLIVE: {
      START: new Date("10/01/2024"),
      END: new Date("10/10/2024"),
    },
  },
  DYNAMIC: {
    "/admin/participants": new Date("10/01/2024"),
    "/admin/teams": new Date("10/01/2024"),
    "/admin/judges": new Date("10/01/2024"),
    "/admin/volunteers": new Date("10/01/2024"),
    "/admin/mentors": new Date("10/01/2024"),
    "/admin/admins": new Date("10/01/2024"),
    "/admin/committees": new Date("10/01/2024"),
    "/admin/feedback": new Date("10/01/2024"),
    "/admin/calendar": new Date("10/01/2024"),
    "/admin/messenger": new Date("10/01/2024"),
    "/admin/checkin": new Date("10/01/2024"),
    "/admin/judging": new Date("10/01/2024"),
    "/admin/prizes": new Date("10/01/2024"),
    "/admin/statistics": new Date("10/01/2024"),

    "/form/particpant": new Date("10/01/2024"),
    "/form/judge": new Date("10/01/2024"),
    "/form/volunteer": new Date("10/01/2024"),
    "/form/mentor": new Date("10/01/2024"),
    "/form/admin": new Date("10/01/2024"),
    "/form/committee": new Date("10/01/2024"),

    "/user/checkin": new Date("10/01/2024"),
    "/user/dashboard": new Date("10/01/2024"),
    "/user/join": new Date("10/01/2024"),
  },
};

export default process.env.NODE_ENV === "production" ? PRODUCTION : DEV;
