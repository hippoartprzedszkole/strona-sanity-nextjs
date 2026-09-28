import Switch from "react-switch";

export default function Switcher({
  checked,
  handleChange,
}: {
  checked: boolean;
  handleChange: () => void;
}) {
  return (
    <Switch
      checked={checked}
      onChange={handleChange}
      onColor="#86d3ff"
      onHandleColor="#2693e6"
      handleDiameter={30}
      uncheckedIcon={false}
      checkedIcon={false}
      boxShadow="rem 1px 5px rgba(0, 0, 0, 0.6)"
      activeBoxShadow="rem rem 1px 1rem rgba(0, 0, 0, 0.2)"
      height={20}
      width={48}
      className="react-switch my-4"
      id="material-switch"
    />
  );
}
