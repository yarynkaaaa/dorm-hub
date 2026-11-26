// props: id (збігається з id елемента керування), label (підпис, обов'язково),
//        hint (необов'язкова підказка), children (сам елемент керування)
function FormField({ id, label, hint, children }) {
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      {children}
      {hint && <small className="hint">{hint}</small>}
    </div>
  );
}

export default FormField;
