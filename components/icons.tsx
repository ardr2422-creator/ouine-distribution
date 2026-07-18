import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function base(props: IconProps): IconProps {
  return {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
    ...props,
  };
}

export function ArrowUpRight(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

export function ArrowRight(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 12h16" />
      <path d="m14 6 6 6-6 6" />
    </svg>
  );
}

export function Phone(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M5.5 4h3l1.5 4-2 1.5a12 12 0 0 0 6.5 6.5L16 14l4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 3.5 6.2 2 2 0 0 1 5.5 4Z" />
    </svg>
  );
}

export function WhatsApp(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 3.5a8.5 8.5 0 0 0-7.3 12.8L3.5 20.5l4.3-1.1A8.5 8.5 0 1 0 12 3.5Z" />
      <path d="M9 8.8c-.3 1.8 2.6 5.6 5.4 6.2.9.2 1.8-.4 2-1.2l.1-.5-2.1-1-.9.9a6.7 6.7 0 0 1-2.9-2.8l.9-.9-1-2.1h-.5c-.5.1-1 .7-1 1.4Z" />
    </svg>
  );
}

export function Mail(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" />
      <path d="m4.5 7.5 7.5 5.5 7.5-5.5" />
    </svg>
  );
}

export function MapPin(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 21s-6.5-5.4-6.5-10.2a6.5 6.5 0 0 1 13 0C18.5 15.6 12 21 12 21Z" />
      <circle cx="12" cy="10.5" r="2.2" />
    </svg>
  );
}

export function LinkedIn(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="3" />
      <path d="M8 10.5V17" />
      <path d="M8 7.6v.1" />
      <path d="M12 17v-3.8a2.4 2.4 0 0 1 4.8 0V17" />
      <path d="M12 13.2v-2.7" />
    </svg>
  );
}

export function Check(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </svg>
  );
}

export function Sparkle(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 4c.6 3.8 2.2 5.4 6 6-3.8.6-5.4 2.2-6 6-.6-3.8-2.2-5.4-6-6 3.8-.6 5.4-2.2 6-6Z" />
    </svg>
  );
}

export function Store(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4.5 9.5 6 4.5h12l1.5 5" />
      <path d="M4.5 9.5a2.4 2.4 0 0 0 4.8 0 2.4 2.4 0 0 0 4.8 0 2.4 2.4 0 0 0 4.8 0" />
      <path d="M5.5 12v7.5h13V12" />
      <path d="M10 19.5v-5h4v5" />
    </svg>
  );
}

export function Leaf(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M6 18C6 10 11 5.5 19 5c.5 8-4 13-13 13Z" />
      <path d="M6 18c2.5-5 6-8.5 10-10.5" />
    </svg>
  );
}

export function Building(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="5" y="4.5" width="10" height="15" rx="1" />
      <path d="M15 9.5h3a1 1 0 0 1 1 1v9" />
      <path d="M4 19.5h16" />
      <path d="M8 8h1.5M8 11.5h1.5M8 15h1.5M11.5 8H13M11.5 11.5H13M11.5 15H13" />
    </svg>
  );
}

export function Cart(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 5h2l2.2 10.5a1.5 1.5 0 0 0 1.5 1.2h7.6a1.5 1.5 0 0 0 1.5-1.2L20.5 8H7" />
      <circle cx="10.5" cy="19.8" r="1" />
      <circle cx="17.5" cy="19.8" r="1" />
    </svg>
  );
}

export function CoffeeCup(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M5 9.5h11v6a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4v-6Z" />
      <path d="M16 11h1.5a2.25 2.25 0 0 1 0 4.5H16" />
      <path d="M8.5 4.5v2M12.5 4.5v2" />
    </svg>
  );
}
