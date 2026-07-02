import type { SVGProps } from "react";

// lucide-react no longer ships trademarked brand/social logos, so these are
// small inline SVGs kept consistent with the lucide stroke style.
export function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M14.5 8.5H16V5.6c-.28-.04-1.23-.12-2.34-.12-2.32 0-3.9 1.42-3.9 4.02V12H7.4v3.2h2.36V21h3.3v-5.8h2.5l.4-3.2h-2.9V9.86c0-.93.26-1.36 1.44-1.36Z" />
    </svg>
  );
}

export function YoutubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21.6 8.2s-.2-1.5-.85-2.15c-.8-.85-1.7-.85-2.12-.9C15.7 5 12 5 12 5s-3.7 0-6.63.15c-.4.05-1.3.05-2.12.9C2.6 6.7 2.4 8.2 2.4 8.2S2.25 10 2.25 11.8v.4c0 1.8.15 3.6.15 3.6s.2 1.5.85 2.15c.8.85 1.86.82 2.33.92C7.3 19 12 19 12 19s3.7 0 6.63-.15c.4-.05 1.3-.05 2.12-.9.65-.65.85-2.15.85-2.15s.15-1.8.15-3.6v-.4c0-1.8-.15-3.6-.15-3.6Z" />
      <path fill="currentColor" stroke="none" d="M10.2 14.6V9.4l4.6 2.6-4.6 2.6Z" />
    </svg>
  );
}
