const Badge = ({ text, color, tooltip }) => {
  return (
    <div
      data-tooltip-id="tooltip"
      data-tooltip-content={tooltip}
      className="py-1 px-2 mt-1 text-[10px] text-white rounded-md mr-1"
      style={{ backgroundColor: color }}
    >
      {text}
    </div>
  );
};

export default Badge;
