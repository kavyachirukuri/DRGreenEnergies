export const COMPANY = {
  name: "DR Green Energies",
  email: "drgreenenergies.hyd@gmail.com",
  phone: "+91 81259 91922",
  whatsapp: "918125991922",
  gst: "36AAFZD4600N1ZW",
  address: {
    line1: "Plot No. 53, Bhanu Estate, Pothaipalle (V)",
    line2: "Thumukunta, Shameerpet (M)",
    line3: "Medchal-Malkajgiri - 500078",
    state: "Telangana",
  },
  /** Exact map pin – Pothaipalle (V) / Thumukunta / Shameerpet area. Refine via Google Maps: right‑click location → "What's here?" */
  coordinates: { lat: 17.559428, lng: 78.55764 },
} as const;

export const addressSingleLine = [
  COMPANY.address.line1,
  COMPANY.address.line2,
  COMPANY.address.line3,
  COMPANY.address.state,
].join(", ");
