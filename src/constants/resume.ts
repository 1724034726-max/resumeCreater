import { Input, DatePicker } from "antd";
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  BoldOutlined,
  ItalicOutlined,
  OrderedListOutlined,
  UnderlineOutlined,
  UnorderedListOutlined,
  AlignLeftOutlined,
  AlignRightOutlined,
  AlignCenterOutlined,
} from "@ant-design/icons";
export const EN_TYPE = {
  INPUT: "input",
  DATE: "date",
  DATE_RANGE: "dateRange",
} as const;
export const FORM_COMPONENTS_MAP: Record<string, React.ComponentType<any>> = {
  [EN_TYPE.INPUT]: Input,
  [EN_TYPE.DATE]: DatePicker,
  [EN_TYPE.DATE_RANGE]: DatePicker.RangePicker,
};
export const EDIT_TOOL_LIST = [
  {
    icon: BoldOutlined,
    title: "加粗",
    command: "bold",
  },
  {
    icon: ItalicOutlined,
    title: "斜体",
    command: "italic",
  },
  {
    icon: UnderlineOutlined,
    title: "下划线",
    command: "underline",
  },
  {
    title: "有序列表",
    icon: OrderedListOutlined,
    command: "insertOrderedList",
  },
  {
    title: "无序列表",
    icon: UnorderedListOutlined,
    command: "insertUnorderedList",
  },
  {
    title: "回退",
    icon: ArrowLeftOutlined,
    command: "undo",
  },
  {
    title: "前进",
    icon: ArrowRightOutlined,
    command: "redo",
  },
  {
    title:'左对齐',
    icon: AlignLeftOutlined,
    command: "justifyLeft",
  },
  {
    title: "右对齐",
    icon: AlignRightOutlined,
    command: "justifyRight",
  },
  {
    title: "居中对齐",
    icon: AlignCenterOutlined,
    command: "justifyCenter",
  },
];
