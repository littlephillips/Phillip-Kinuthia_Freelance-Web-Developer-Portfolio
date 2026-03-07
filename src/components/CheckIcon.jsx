export default function CheckIcon({ color }) {
  return (
    <span
      style={{
        flexShrink: 0,
        width: 18,
        height: 18,
        borderRadius: "50%",
        background: `${color}22`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 2,
      }}
    >
      <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
        <path
          d="M2 6l3 3 5-5"
          stroke={color}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
