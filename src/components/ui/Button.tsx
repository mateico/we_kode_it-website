import React from "react";

type ButtonProps = {
	variant?: "primary" | "secondary";
	size?: "md" | "sm";
	children: React.ReactNode;
	disabled?: boolean;
	type?: "button" | "submit";
	onClick?: () => void;
	/** extra utility classes from the call site, e.g. "w-full" */
	className?: string;
};

const base =
	"inline-flex items-center justify-center rounded-full border-2 border-transparent font-bold cursor-pointer transition-colors disabled:opacity-50 disabled:cursor-not-allowed";

const sizes = {
	md: "px-7 py-3 text-base leading-6",
	sm: "px-4 py-1.5 text-[13px] leading-[18px]",
};

const variants = {
	primary:
		"bg-primary text-on-primary hover:bg-primary-hover active:bg-primary-pressed",
	secondary:
		"bg-secondary text-body border-secondary-line hover:bg-secondary-hover active:bg-secondary-pressed",
};

export function Button({
	variant = "primary",
	size = "md",
	children,
	disabled,
	type = "button",
	onClick,
	className = "",
}: ButtonProps) {
	return (
		<button
			type={type}
			onClick={onClick}
			disabled={disabled}
			className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
		>
			{children}
		</button>
	);
}
