export type StoryOptions = {
  storyTitle: string;
  choice1: string;
  choice2: string;
  nextStory1: number;
  nextStory2: number;
};

export default class Story {
  storyTitle: string;
  choice1: string;
  choice2: string;
  nextStory1: number;
  nextStory2: number;

  constructor({
    storyTitle,
    choice1,
    choice2,
    nextStory1,
    nextStory2,
  }: StoryOptions) {
    this.storyTitle = storyTitle;
    this.choice1 = choice1;
    this.choice2 = choice2;
    this.nextStory1 = nextStory1;
    this.nextStory2 = nextStory2;
  }
}
