export interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  color?: string;
  align?: 'left' | 'center' | 'right';
  weight?: 'light' | 'normal' | 'bold';
}
