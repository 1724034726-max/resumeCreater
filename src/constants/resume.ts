import { Input, DatePicker } from "antd";
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
