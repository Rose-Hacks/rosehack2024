const mappings = {
  red: {
    background: "bg-rosehack-pink-200/10 border-[1px] border-rosehack-pink-200",
    text: "text-rosehack-pink-200",
    hover: "hover:bg-rosehack-pink-200 hover:text-black duration-200",
  },
  yellow: {
    background:
      "bg-hackathon-tags-yellow-text/10 border-[1px] border-hackathon-tags-yellow-text",
    text: "text-hackathon-tags-yellow-text",
    hover: "hover:bg-hackathon-tags-yellow-text hover:text-black duration-200",
  },
  green: {
    background: "bg-rosehack-teal/10 border-[1px] border-rosehack-teal",
    text: "text-rosehack-teal",
    hover: "hover:bg-rosehack-teal hover:text-black duration-200",
  },
  gray: {
    background: "bg-white/10 border-[1px] border-white",
    text: "text-white",
    hover: "hover:bg-white hover:text-black duration-200",
  },
  purple: {
    background:
      "bg-rosehack-purple-100/10 border-[1px] border-rosehack-purple-100",
    text: "text-rosehack-purple-100",
    hover: "hover:bg-rosehack-purple-100 hover:text-black duration-200",
  },
  grayblue: {
    background:
      "bg-hackathon-tags-grayblue-bg/10 border-[1px] border-hackathon-tags-grayblue-bg",
    text: "text-hackathon-tags-grayblue-bg",
    hover: "hover:bg-hackathon-tags-grayblue-bg hover:text-black duration-200",
  },
  teal: {
    background:
      "bg-hackathon-tags-teal-text/10 border-[1px] border-hackathon-tags-teal-text",
    text: "text-hackathon-tags-teal-text",
    hover: "hover:bg-hackathon-tags-teal-text hover:text-black duration-200",
  },
  lightgreen: {
    background:
      "bg-hackathon-tags-lightgreen-text/10 border-[1px] border-hackathon-tags-lightgreen-text",
    text: "text-hackathon-tags-lightgreen-text",
    hover:
      "hover:bg-hackathon-tags-lightgreen-text hover:text-black duration-200",
  },
  pink: {
    background: "bg-rosehack-pink-100/10 border-[1px] border-rosehack-pink-100",
    text: "text-rosehack-pink-100",
    hover: "hover:bg-rosehack-pink-100 hover:text-black duration-200",
  },
};

export const COLORS = {
  qualify: mappings["green"],
  winner: mappings["purple"],
  disqualify: mappings["red"],
  pending: mappings["yellow"],
  accept: mappings["green"],
  reject: mappings["red"],
  confirm: mappings["green"],
  "not attending": mappings["red"],
  professor: mappings["grayblue"],
  student: mappings["teal"],
  industry: mappings["lightgreen"],
  director: mappings["purple"],
  marketing: mappings["teal"],
  operations: mappings["grayblue"],
  sponsorship: mappings["yellow"],
  recruitment: mappings["pink"],
  software: mappings["lightgreen"],
  uiux: mappings["red"],
  tier1: mappings["grayblue"],
  tier2: mappings["lightgreen"],
  tier3: mappings["purple"],
  other: mappings["teal"],
  view: mappings["gray"],
  green: mappings["green"],
  gray: mappings["gray"],
  yellow: mappings["yellow"],
  red: mappings["red"],
  lightgreen: mappings["lightgreen"],
  purple: mappings["purple"],
  teal: mappings["teal"],
  grayblue: mappings["grayblue"],
  pink: mappings["pink"],
  2: mappings["purple"],
  1: mappings["green"],
  0: mappings["yellow"],
  "-1": mappings["red"],
};
