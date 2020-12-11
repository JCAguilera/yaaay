export interface ChangelogItem {
  title: string;
  date: string;
  content: { [key: string]: string[] };
}
