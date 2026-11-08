import { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const base = (size = 16) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
});

export function LinkedInIcon({ size, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <line x1="7.5" y1="10.5" x2="7.5" y2="16.5" />
      <circle cx="7.5" cy="7" r="0.9" fill="currentColor" stroke="none" />
      <path d="M11.5 16.5v-3.5c0-1.4 1-2.5 2.4-2.5s2.1 1 2.1 2.5v3.5" />
      <line x1="11.5" y1="10.5" x2="11.5" y2="16.5" />
    </svg>
  );
}

export function XIcon({ size, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <line x1="4" y1="4" x2="20" y2="20" />
      <line x1="20" y1="4" x2="4" y2="20" />
    </svg>
  );
}

export function InstagramIcon({ size, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function GitHubIcon({ size, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2-.2 4-1 4-4.5a3.5 3.5 0 0 0-1-2.5 3.2 3.2 0 0 0-.1-2.5s-.9-.3-3 1a10.4 10.4 0 0 0-5.4 0c-2.1-1.3-3-1-3-1a3.2 3.2 0 0 0-.1 2.5 3.5 3.5 0 0 0-1 2.5c0 3.5 2 4.3 4 4.5-.4.4-.4.9-.5 1.5v4" />
    </svg>
  );
}
