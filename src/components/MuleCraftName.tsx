interface MuleCraftNameProps {
  className?: string;
  style?: React.CSSProperties;
}

const MuleCraftName = ({ className = "", style }: MuleCraftNameProps) => {
  return (
    <span className={className} style={style}>
      Mul
      <span
        style={{
          fontFamily: '"Noto Sans Tamil", sans-serif',
        }}
      >
        ழ்
      </span>
      craft
    </span>
  );
};

export default MuleCraftName;

