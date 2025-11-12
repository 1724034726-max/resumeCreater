interface ResumeState {
  menuSections: Array<{
    id: string;
    title: string;
    icon: React.ReactNode;
    order: number;
    enabled: boolean;
  }>;
}
