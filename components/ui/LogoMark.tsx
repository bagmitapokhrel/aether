export default function LogoMark({ size = 40 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="32"
        cy="32"
        r="30"
        stroke="var(--accent)"
        strokeWidth="1.2"
      />
      <circle
        cx="32"
        cy="32"
        r="25"
        stroke="var(--accent)"
        strokeWidth="0.6"
        strokeDasharray="1.5 3"
      />
      <text
        x="32"
        y="41"
        textAnchor="middle"
        fontFamily="var(--font-serif)"
        fontStyle="italic"
        fontSize="26"
        fill="var(--accent)"
      >
        B
      </text>
      <path
        d="M20 47 Q32 52 44 47"
        stroke="var(--accent)"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />
    </svg>
  );
}