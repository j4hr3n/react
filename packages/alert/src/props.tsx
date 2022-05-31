export type AlertProps = {
  /**
   * Type of alert
   */
  type: 'negative' | 'positive' | 'warning' | 'info' | 'neutral';
  /**
   * Additional classes to include
   */
  className?: string;
  /** Additional CSS styles for the container. */
  style?: React.CSSProperties;
};