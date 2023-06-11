interface OptionFieldProps {
  children: string;
  label: string;
  type: string;
  defaultValue: any;
  onChange: () => void;
}
const OptionField = ({
  children,
  label,
  type,
  defaultValue,
  onChange,
}: OptionFieldProps) => {
  return (
    <>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          Poop
        </span>
        <input
          id={label}
          type={type}
          className="form-control"
          placeholder={children}
          value={defaultValue}
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default OptionField;
