
interface ContentField {
  cnType: string;
  enType: string;
  innerText: string;
}
interface ContentItem {
  [key: string]: ContentField;
}
interface InfoItem {
  key: string;
  cnType: string;
  init: boolean;
  canDelete: boolean;
  canCustom: boolean;
  content: Array<{
    tips: ContentItem;
    rechContext: string;
  }>;
}
interface ResumeState {
  resume: InfoItem[];
  currentModule: string;
}