
type NodeType = 'element' | 'dynamicText' | 'logical' | 'conditional' | 'loop' | 'component' | 'fragment' | 'text';

export interface Props {
  className?: string;
  style?: string;
  role?: string;
  ariaLabel?: string;
  action?: string;
  placeholder?: string;
  type?: string;
  key?: string;
  variant?: string;
  size?: string;
}

export interface Node {
  type: NodeType | string;
  tag?: string;
  props?: Props;
  text?: string;
  condition?: string;
  operator?: string;
  children?: Node[];
  component?: string;
  loop?: {
    array: string;
    iterator: string;
  };
  preReturnCode?: string;
  else?: Node[];
}

// src/types/converter.ts

export interface Node {
  type: string;
  name?: string;
  preReturnCode?: string;
  component?: string;
  tag?: string;
  package?: string;
  props?: Props;
  children?: Node[];
  loop?: {
    array: string;
    iterator: string;
  };
  condition?: string;
  else?: Node[];
  operator?: string;
  text?: string;
}

export interface Props {
  [key: string]: any;
}

export interface ImportSpecifierEntry {
  type: "named" | "default" | "namespace";
  imported?: string; // Only for named imports
  local: string;
}

export interface ImportEntry {
  source: string;
  specifiers: ImportSpecifierEntry[];
}

export interface ComponentNode {
  name: string;
  preReturnCode: string;
  jsx: Node;
}

export interface ConvertedFile {
  imports: ImportEntry[];
  components: ComponentNode[];
}
