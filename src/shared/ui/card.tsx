import * as React from "react";

import { cn } from "./utils";
import { motion } from "motion/react";

type MotionDivProps = React.ComponentProps<typeof motion.div>;

const Card = React.forwardRef<HTMLDivElement, MotionDivProps>(
	({ className, ...props }, ref) => (
		<motion.div
			ref={ref}
			className={cn(
				"bg-card text-card-foreground rounded-xl border shadow",
				className,
			)}
			{...props}
		/>
	),
);
Card.displayName = "Card";

const CardHeader = React.forwardRef<HTMLDivElement, MotionDivProps>(
	({ className, ...props }, ref) => (
		<motion.div
			ref={ref}
			className={cn("flex flex-col space-y-1.5 p-6", className)}
			{...props}
		/>
	),
);
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<HTMLDivElement, MotionDivProps>(
	({ className, ...props }, ref) => (
		<motion.div
			ref={ref}
			className={cn("leading-none font-semibold tracking-tight", className)}
			{...props}
		/>
	),
);
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<HTMLDivElement, MotionDivProps>(
	({ className, ...props }, ref) => (
		<motion.div
			ref={ref}
			className={cn("text-muted-foreground text-sm", className)}
			{...props}
		/>
	),
);
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<HTMLDivElement, MotionDivProps>(
	({ className, ...props }, ref) => (
		<motion.div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
	),
);
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<HTMLDivElement, MotionDivProps>(
	({ className, ...props }, ref) => (
		<motion.div
			ref={ref}
			className={cn("flex items-center p-6 pt-0", className)}
			{...props}
		/>
	),
);
CardFooter.displayName = "CardFooter";

export {
	Card,
	CardHeader,
	CardFooter,
	CardTitle,
	CardDescription,
	CardContent,
};
