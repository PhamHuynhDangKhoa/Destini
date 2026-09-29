import Story from "./Story";

export default class StoryBrain {
  storyNumber = 0;

  readonly storyData = [
    new Story({
      storyTitle:
        'Xe của bạn bị xẹp lốp trên một con đường vắng. Bạn quyết định đi nhờ xe. Một chiếc xe tải màu gỉ sét dừng lại bên cạnh bạn. Một người đàn ông với đôi mắt vô hồn mở cửa xe và hỏi: "Cần đi nhờ không?"',
      choice1: "Đồng ý đi nhờ. Cảm ơn vì sự giúp đỡ!",
      choice2:
        "Khoan đã, tốt hơn là tôi nên hỏi anh ta trước xem anh ta có phải là kẻ giết người không.",
      nextStory1: 2,
      nextStory2: 1,
    }),
    new Story({
      storyTitle:
        'Anh ta khẽ mỉm cười và nói: "Tôi không hại người đâu, lên xe đi". Bạn lên xe và thấy một con dao dính vết ố trên bảng điều khiển.',
      choice1: "Tôi thích con dao này! Anh mua ở đâu thế?",
      choice2: "Hoặc là ông dừng xe lại ngay, hoặc là tôi nhảy xuống!",
      nextStory1: 5,
      nextStory2: 4,
    }),
    new Story({
      storyTitle:
        "Khi xe bắt đầu tăng tốc, người lái xe mở một bản nhạc cổ điển kỳ lạ rồi bắt đầu kể về những sở thích rùng rợn của mình.",
      choice1: "Nghe có vẻ thú vị, hãy kể thêm đi.",
      choice2: "Xin hãy dừng xe lại, tôi muốn xuống đi bộ!",
      nextStory1: 5,
      nextStory2: 3,
    }),
    new Story({
      storyTitle:
        "Bạn mở chốt cửa nhảy ra khỏi xe khi xe vừa giảm tốc độ ở khúc cua. Bạn sống sót và gọi cảnh sát đến giải cứu. Bạn đã an toàn!",
      choice1: "Chơi lại từ đầu",
      choice2: "",
      nextStory1: 0,
      nextStory2: 0,
    }),
    new Story({
      storyTitle:
        "Bạn liều mạng nhảy xuống đường khi xe đang chạy nhanh. Bạn bị thương nhẹ nhưng may mắn trốn thoát được vào bìa rừng.",
      choice1: "Chơi lại từ đầu",
      choice2: "",
      nextStory1: 0,
      nextStory2: 0,
    }),
    new Story({
      storyTitle:
        "Hóa ra người lái xe là một đầu bếp nổi tiếng đang trên đường về trang trại. Hai người đã có một cuộc trò chuyện thú vị và ông ấy chở bạn về tận nhà an toàn!",
      choice1: "Chơi lại từ đầu",
      choice2: "",
      nextStory1: 0,
      nextStory2: 0,
    }),
  ];

  getStory(storyNumber = this.storyNumber) {
    return this.storyData[storyNumber].storyTitle;
  }

  getChoice1(storyNumber = this.storyNumber) {
    return this.storyData[storyNumber].choice1;
  }

  getChoice2(storyNumber = this.storyNumber) {
    return this.storyData[storyNumber].choice2;
  }

  nextStory(choiceNumber: 1 | 2, storyNumber = this.storyNumber) {
    const currentStory = this.storyData[storyNumber];
    const nextStoryNumber =
      choiceNumber === 1 ? currentStory.nextStory1 : currentStory.nextStory2;
    this.storyNumber = nextStoryNumber;
    return nextStoryNumber;
  }

  buttonShouldBeVisible(storyNumber = this.storyNumber) {
    return this.getChoice2(storyNumber) !== "";
  }

  restart() {
    this.storyNumber = 0;
  }
}
