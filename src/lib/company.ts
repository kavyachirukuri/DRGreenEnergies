/** Normalize any display number to a valid tel: href (digits and leading +). */
export function toTelHref(display: string): string {
  const digits = display.replace(/\D/g, "");
  if (display.trim().startsWith("+")) return `+${digits}`;
  if (digits.length === 10) return `+91${digits}`;
  if (digits.length === 11 && digits.startsWith("0"))
    return `+91${digits.slice(1)}`;
  return digits.startsWith("91") ? `+${digits}` : `+91${digits}`;
}

export const COMPANY = {
  name: "DR Green Energies",
  email: "drgreenenergies.hyd@gmail.com",
  phone: "+91 81259 91922",
  /** Extra lines shown in footer; each opens the dialer when tapped. */
  contactPhones: [
    { display: "+91 81259 91922" },
    // Add landline or second mobile, e.g. { display: "040-23405670" },
  ] as const,
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
