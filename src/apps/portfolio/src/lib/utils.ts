import { defineConfig } from "cva";
import { twMerge } from "tailwind-merge";

export const { cva, cx } = defineConfig({
  hooks: { onComplete: (classNames) => twMerge(classNames) },
});

const hashColorCache: Map<string, string> = new Map();
export function getUniqueHashColor(text: string): string {
  const cachedColor = hashColorCache.get(text);
  if (cachedColor) return cachedColor;

  while (text.length < 60) {
    text += text + text.length;
  }

  let red = 0;
  let green = 0;
  let blue = 0;

  for (let index = 0; index < text.length; index++) {
    const letter = text[index];

    if (index % 2 === 0) red += (letter.charCodeAt(0) * index) % 256;
    if (index % 5 === 0)
      green += (letter.charCodeAt(0) * index * text.length) % 256;
    if (index % 3 === 0) blue += (letter.charCodeAt(0) * text.length) % 256;
  }

  red = red % 256;
  green = green % 256;
  blue = blue % 256;

  const color =
    "#" +
    (
      red.toString(16).padEnd(2, "0") +
      green.toString(16).padEnd(2, "0") +
      blue.toString(16).padEnd(2, "0")
    ).slice(0, 6);
  hashColorCache.set(text, color);

  return color;
}
