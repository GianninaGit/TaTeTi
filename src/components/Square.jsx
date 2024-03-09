export const Square = ({ children, isSelected, updateBoard, index }) => {
  const classNameChecked = `square ${isSelected ? "is-selected" : ""}`;

  const handleClick = () => {
    updateBoard(index);
  };

  return (
    <div className={classNameChecked} onClick={handleClick}>
      {children}
    </div>
  );
};
