import { SearchParams } from "@/lib/definitions";
import { getSearchParam } from "@/lib/utils";
import Section from "@/ui/common/section";
import StoryText from "@/ui/chi-tiet/story-text";
import { Suspense } from "react";

type Props = {
  searchParams: SearchParams;
};

export default function Page({ searchParams }: Props) {
  const url = getSearchParam({ searchParams, key: "url" });

  return (
    <Section title="Thông tin truyện">
      <Suspense fallback={<div>Đang tải...</div>}>
        <StoryText storyUrl={url.toString()} />
      </Suspense>
    </Section>
  );
}