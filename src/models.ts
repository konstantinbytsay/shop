import type { SvgIconTypeMap } from "@mui/material";
import type { OverridableComponent } from "@mui/material/OverridableComponent";

export interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

export interface ICard {
    name: string,
    description: string,
    price: string,
    icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>

}