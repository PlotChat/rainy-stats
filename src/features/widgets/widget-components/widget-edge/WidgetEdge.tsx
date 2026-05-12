import React, { forwardRef } from "react";
import * as Base from "@base-ui/react/button";
import styles from "./widget-edge.module.css";
import { clsx } from "../../../../utils/clsx";

interface WidgetEdgeProps extends Omit<
	React.ComponentPropsWithRef<typeof Base.Button>,
	"className"
> {
	className?: string;
}

const WidgetEdge = forwardRef<HTMLButtonElement, WidgetEdgeProps>(
	({ className = "", children, ...rest }, ref) => {
		return (
			<Base.Button {...rest} ref={ref} className={clsx(styles.edge, className)}>
				{children}
			</Base.Button>
		);
	},
);

WidgetEdge.displayName = "WidgetEdge";
export default WidgetEdge;
