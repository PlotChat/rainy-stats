import React from "react";
import styles from "./WidgetSelector.module.css";
import { clsx } from "../../utils/clsx";
import { Button } from "@base-ui/react";

interface WidgetSelectorProps extends Omit<
	React.ComponentProps<"div">,
	"className"
> {
	className?: string;
	children?: React.ReactNode;
}

const WidgetSelector = ({
	className = "",
	children,
	...rest
}: WidgetSelectorProps) => {
    const addWidget = () => {
        
    }

	return (
        <div className={clsx(styles.WidgetSelector, className)} {...rest}>
            <Button onClick={addWidget}>
                Add new widget
            </Button>
            <div className="others">{children}</div>
        </div>
	);
};

export default WidgetSelector;
