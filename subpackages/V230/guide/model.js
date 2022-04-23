
import { guideImage } from "../static/image-loader.js";
const {
  guide_img_1,
  guide_img_2,
  guide_img_3,
  guide_img_4,
  guide_img_5,
  guide_til_1,
  guide_til_2,
  guide_til_3,
  guide_til_4,
  guide_til_5,
  gotoIcon,
} = guideImage;


const list = Object.freeze([
  {
    id: 1,
    img: guide_img_1,
    til: guide_til_1,
    content: "远离迷茫，帮你找到合适的职业方向 朝着目标前进",
  },
  {
    id: 2,
    img: guide_img_2,
    til: guide_til_2,
    content: "提供贴合企业招聘需求的课程规划学成即可应聘",
  },
  {
    id: 3,
    img: guide_img_3,
    til: guide_til_3,
    content: "不定期举办线上线下活动与企业近距离接触",
  },
  {
    id: 4,
    img: guide_img_4,
    til: guide_til_4,
    content: "学以致用，提前进行项目实训赢在起跑线上",
  },
  {
    id: 5,
    img: guide_img_5,
    til: guide_til_5,
    content: "人岗匹配算法，为你提供精准指引找到心仪的工作",
  },
])


export const model = {
  list,
  guideImage
}
