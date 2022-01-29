export class SlideStory{
  id ?: number;
  img ?: string;
  name ?: string;
  newChapter ?: string;
  updateTime ?: string;
}

export class NewChapters{
  chapter ?: number;
  updateTime ?: string;
}

export class StoriesList{
  id ?: number;
  img ?: string;
  name ?: string;
  newChapters ?: NewChapters[];
}

