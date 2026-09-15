interface LogoMarkProps {
  size?: number;
  className?: string;
}

/** "RG" monogram badge — inline SVG so it renders crisp at any size and picks up the page's loaded Fraunces font. */
const LogoMark = ({ size = 32, className }: LogoMarkProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Robert Godwin logo mark"
    className={className}
  >
    <rect width="100" height="100" rx="22" fill="hsl(var(--primary))" />
    <text
      x="50"
      y="53"
      textAnchor="middle"
      dominantBaseline="central"
      fontFamily="Fraunces, Georgia, 'Times New Roman', serif"
      fontWeight={600}
      fontSize={46}
      letterSpacing="-2.7"
      fill="hsl(var(--primary-foreground))"
    >
      RG
    </text>
  </svg>
);

export default LogoMark;
