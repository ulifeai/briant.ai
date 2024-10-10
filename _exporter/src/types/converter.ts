
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
  type: NodeType;
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
  else?: Node[];
}
