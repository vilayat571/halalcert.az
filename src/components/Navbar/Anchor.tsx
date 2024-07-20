export interface IAnchor {
  href: string;
  style: string;
  label: string;
  text: string;
  target: boolean;
}
const Anchor: React.FC<IAnchor> = ({ href, style, label, text, target }) => {
  return (
    <a
      href={href}
      className={style}
      target={target ? "_blank" : "_self"}
      aria-label={label}
    >
      {text}
    </a>
  );
};

export default Anchor;
