import { memo } from "react";

function Button({ title, styleBtn, iconLeft, iconRight, onClick }) {
  return (
    <button
      className={`flex items-center justify-center shadow rounded-full ${
        styleBtn ? styleBtn : "gap-2 py-2 px-4"
      }`}
      onClick={onClick}
    >
      {iconLeft && (
        <span className="flex items-center justify-center">
          <span className="material-symbols-outlined">{iconLeft}</span>
        </span>
      )}
      {title && <span>{title}</span>}
      {iconRight && (
        <span className="flex items-center justify-center">
          <span className="material-symbols-outlined">{iconRight}</span>
        </span>
      )}
    </button>
  );
}

export default memo(Button);
