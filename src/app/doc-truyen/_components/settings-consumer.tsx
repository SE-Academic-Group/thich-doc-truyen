"use client";

import { useCookies } from "@/hooks";
import { BG_COLOR_MAP, FONT_FAMILY_MAP, FONT_SIZE_MAP } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { ZBgColor, ZFontFamily, ZFontSize } from "@/types/reading-pad-settings";

type BackgroundChangeProps = React.PropsWithChildren;

export default function SettingsConsumer({ children }: BackgroundChangeProps) {
  const [cookies] = useCookies(["bg-color", "font-size", "font-family"]);
  const bgColor = ZBgColor.parse(cookies["bg-color"]);
  const fontSize = ZFontSize.parse(cookies["font-size"]);
  const fontFamily = ZFontFamily.parse(cookies["font-family"]);

  return (
    <div
      className={cn(
        BG_COLOR_MAP[bgColor],
        FONT_SIZE_MAP[fontSize],
        FONT_FAMILY_MAP[fontFamily],
        "transition-colors duration-300 ease-in-out",
        "leading-relaxed",
      )}
    >
      {children}
    </div>
  );
}
