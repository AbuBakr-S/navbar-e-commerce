import React from "react";

type CartButtonProps = {
  count: number;
  isDisabled?: boolean;
  iconSrc: string;
  onClick?: () => void;
};

const CartButton: React.FC<CartButtonProps> = ({
  count,
  isDisabled = false,
  iconSrc,
  onClick,
}) => (
  <button
    type="button"
    disabled={isDisabled}
    aria-label="Shopping cart"
    onClick={onClick}
    className={`relative rounded focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-indigo-600/12
      ${isDisabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
  >
    <img
      src={iconSrc}
      alt="Shopping cart"
      className="w-6 h-6"
      aria-hidden="true"
    />
    {count > 0 && (
      <span
        className={`absolute -top-1 -right-1 flex items-center justify-center w-4 h-4 text-[10px] font-semibold rounded-full
          ${isDisabled ? "bg-neutral-100" : "bg-indigo-700 text-white"}`}
      >
        {count}
      </span>
    )}
    <span className="sr-only">{`You have ${count} items in your cart`}</span>
  </button>
);

export default CartButton;
