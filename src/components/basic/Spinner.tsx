
function Spinner() {
  return (
    <div className="p-10">
      <div
        style={{ borderTopColor: "transparent" }}
        className="w-32 h-32 border-8 mx-auto border-theme border-solid rounded-full animate-spin"
      ></div>
    </div>
  );
}

export default Spinner;
