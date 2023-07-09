export type ToolbarProps = {
  filters: string[],
  selected: string,
  onSelectFilter: (filter: string) => void,
}