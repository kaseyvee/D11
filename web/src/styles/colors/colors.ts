import colors from "./colors.module.scss";

interface ICSSColors {
	yellow: string;
	black: string;
	white: string;
	transparentBlack: string;

	blackFade: string;
}

export default colors as unknown as ICSSColors;