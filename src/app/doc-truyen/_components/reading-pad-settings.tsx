"use client";

import { BG_COLOR_MAP, FONT_FAMILY_MAP, FONT_SIZE_MAP } from "@/lib/constants";
import { SettingsIcon } from "@/lib/icons";
import { cn } from "@/lib/utils";
import { ZBgColor, ZFontFamily, ZFontSize } from "@/types/reading-pad-settings";
import { Popover } from "@/ui/common/popover";
import { RadioGroup } from "@/ui/common/radio-group";
import { useCookies } from "react-cookie";

export default function ReadingPadSettings() {
  const [cookies, setCookies] = useCookies([
    "bg-color",
    "font-size",
    "font-family",
  ]);
  const bgColor = ZBgColor.parse(cookies["bg-color"]);
  const fontSize = ZFontSize.parse(cookies["font-size"]);
  const fontFamily = ZFontFamily.parse(cookies["font-family"]);

  return (
    <Popover.Root>
      <Popover.Trigger>
        <div className="flex items-center gap-1">
          <span className="hidden md:inline text-sm">Tùy chỉnh</span>
          <SettingsIcon className="text-fg-500 size-5" />
        </div>
      </Popover.Trigger>
      <Popover.Content>
        <ul className="space-y-2 text-sm">
          <li className="space-y-1">
            <span>Màu nền</span>
            <RadioGroup.Root
              className="space-x-2"
              defaultValue={bgColor}
              onValueChange={(value) => setCookies("bg-color", value)}
            >
              {Object.entries(BG_COLOR_MAP).map(([key, value]) => (
                <RadioGroup.Item
                  key={key}
                  value={key}
                  className={cn(
                    "rounded px-2 py-1 ring-primary data-[state=checked]:ring-2",
                    value,
                  )}
                >
                  <div className="size-5" />
                </RadioGroup.Item>
              ))}
            </RadioGroup.Root>
          </li>
          <hr />
          <li className="space-y-1">
            <span>Cở chữ</span>
            <RadioGroup.Root
              className="flex gap-2"
              defaultValue={fontSize}
              onValueChange={(value) => setCookies("font-size", value)}
            >
              {Object.entries(FONT_SIZE_MAP).map(([key, value]) => (
                <RadioGroup.Item
                  key={key}
                  value={key}
                  className={cn(
                    "rounded px-2 py-1 bg-bg-100 h-8",
                    "data-[state=checked]:bg-primary/80 data-[state=checked]:text-fg-900 data-[state=checked]:ring-2 data-[state=checked]:ring-primary",
                    "text-base",
                  )}
                >
                  <span className={value}>Aa</span>
                </RadioGroup.Item>
              ))}
            </RadioGroup.Root>
          </li>
          <hr />
          <li className="space-y-1">
            <span>Font chữ</span>
            <RadioGroup.Root
              className="flex gap-2"
              defaultValue={fontFamily}
              onValueChange={(value) => setCookies("font-family", value)}
            >
              {Object.entries(FONT_FAMILY_MAP).map(([key, value]) => (
                <RadioGroup.Item
                  key={key}
                  value={key}
                  className={cn(
                    "rounded px-2 py-1 bg-bg-100 h-8",
                    "data-[state=checked]:bg-primary/50 data-[state=checked]:text-fg-900 data-[state=checked]:ring-2 data-[state=checked]:ring-primary",
                  )}
                >
                  <span className={value}>{key}</span>
                </RadioGroup.Item>
              ))}
            </RadioGroup.Root>
          </li>
        </ul>
      </Popover.Content>
    </Popover.Root>
  );
}
