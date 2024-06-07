"use client";

import ChangeChapterSource from "./change-chapter-source";
import ChapterNavigation from "./chapter-navigation";
import CurrentSource from "./current-source";
import LoadingScreen from "./loading-screen";
import ReadingPadSettings from "./reading-pad-settings";
import SetReadingHistory from "./set-reading-history";
import SettingsConsumer from "./settings-consumer";
import StoryContent from "./story-content";
import { CookiesProvider } from "@/lib/providers";
import { TChapterDetail } from "@/types/chapter-detail";
import ClientOnlyComponent from "@/ui/common/client-only-component";
import Link from "next/link";

type ContentProps = {
  chapterDetail: TChapterDetail;
  prevChapterURL: string | null;
  nextChapterURL: string | null;
  novelURL: string;
};

export default function Content({
  nextChapterURL,
  prevChapterURL,
  chapterDetail,
  novelURL,
}: ContentProps) {
  return (
    <CookiesProvider>
      <ClientOnlyComponent fallback={<LoadingScreen />}>
        <SetReadingHistory storyTitle={chapterDetail.title} />
        <SettingsConsumer>
          <article className="container">
            <section className="container py-3">
              <div className="flex justify-between mb-2">
                <CurrentSource />
                <ReadingPadSettings />
              </div>
              <h3 className="mb-2 text-center font-medium uppercase text-fg-500 sm:text-lg">
                <Link
                  href={`/chi-tiet?url=${novelURL}`}
                  className="hover:underline"
                >
                  {chapterDetail.novelTitle}
                </Link>
              </h3>
              <h2 className="mb-3.5 text-center sm:text-xl font-medium uppercase text-primary">
                {chapterDetail.title}
              </h2>
              <ChangeChapterSource />
              <ChapterNavigation
                nextChapterURL={nextChapterURL}
                prevChapterURL={prevChapterURL}
              />
              <StoryContent storyContent={chapterDetail.content} />
              <ChapterNavigation
                nextChapterURL={nextChapterURL}
                prevChapterURL={prevChapterURL}
              />
            </section>
          </article>
        </SettingsConsumer>
      </ClientOnlyComponent>
    </CookiesProvider>
  );
}
