import { FaCopy, FaLink } from "react-icons/fa6";

const default_icon_size = 15;
export const ICON_SIZES = {
  EXTRA_SMALL: default_icon_size * 0.5,
  SMALL: default_icon_size,
  MEDIUM: default_icon_size * 1.25,
  LARGE: default_icon_size * 1.5,
  EXTRA_LARGE: default_icon_size * 2,
};

export const ICONS = {
  LINK: FaLink,
  COPY: FaCopy,
};
