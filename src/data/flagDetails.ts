export interface FlagInfo {
  blurb: string;
  description: string;
}

const flagDetails: Record<string, FlagInfo> = {
  Rainbow: {
    blurb: "Symbol of LGBTQ+ unity and pride.",
    description:
      "The rainbow flag symbolizes LGBTQ+ pride and diversity. Each color originally represented concepts like life, healing, sunlight, nature, serenity, and spirit.",
  },
  Transgender: {
    blurb: "Represents the transgender community.",
    description:
      "The transgender flag features blue for traditional masculinity, pink for femininity, and white for those who are transitioning or consider themselves without gender.",
  },
  Bisexual: {
    blurb: "Celebrates attraction to more than one gender.",
    description:
      "The bisexual flag shows attraction to both same and different genders: pink for same gender, blue for different genders, with purple representing their overlap.",
  },
  Asexual: {
    blurb: "Highlights the asexual spectrum.",
    description:
      "The asexual flag includes black for asexuality, gray for the gray area between sexual and asexual, white for non-asexual partners and allies, and purple for community.",
  },
  Pansexual: {
    blurb: "Stands for attraction regardless of gender.",
    description:
      "The pansexual flag uses pink, yellow, and blue to represent attraction regardless of gender: pink for women, blue for men, and yellow for non-binary identities.",
  },
  "Non-binary": {
    blurb: "For those outside the gender binary.",
    description:
      "The non-binary flag consists of yellow for genders outside the binary, white for many or all genders, purple for a mix of male and female, and black for those without gender.",
  },
};

export default flagDetails;
