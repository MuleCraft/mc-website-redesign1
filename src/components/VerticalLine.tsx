interface VerticalLineProps {
  width?: string;
  height?: string;
  color?: string;
  className?: string;
}

const VerticalLine = ({
  width = '3px',
  height = '96px',
  color = '#e7e7e7',
  className = '',
}: VerticalLineProps) => {
  return (
    <div className={`flex justify-center mb-6 md:mb-8 ${className}`}>
      <div
        style={{
          width,
          height,
          backgroundColor: color,
        }}
      ></div>
    </div>
  );
};

export default VerticalLine;

