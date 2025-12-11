interface MuleCraftNameProps {
  className?: string;
  style?: React.CSSProperties;
}

const MuleCraftName = ({ className = "", style }: MuleCraftNameProps) => {
  return (
    <span className={className} style={style}>
      Mulழ்craft
    </span>
  );
};

export default MuleCraftName;

