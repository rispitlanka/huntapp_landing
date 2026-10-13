const words = ['EXPLORE', 'CAPTURE', 'EARN', 'EXPLORE', 'CAPTURE', 'EARN', 'EXPLORE', 'CAPTURE', 'EARN'];

function Group() {
  return (
    <div className="band__group">
      {words.map((w, i) => (
        <span key={i} style={{ display: 'contents' }}>
          <span>{w}</span>
          <i>●</i>
        </span>
      ))}
    </div>
  );
}

/** Endless "Explore · Capture · Earn" strip. Two copies make the loop seamless. */
export default function Band() {
  return (
    <div className="band" aria-hidden="true">
      <div className="band__track">
        <Group />
        <Group />
      </div>
    </div>
  );
}
