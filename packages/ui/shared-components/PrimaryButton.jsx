import { Button } from 'antd';

export const PrimaryButton = ({ children, ...props }) => {
  return (
    <Button
      type="primary"
      style={{
        borderRadius: '8px',
        padding: '10px 20px',
        fontWeight: '600',
        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
      }}
      {...props}
    >
      {children}
    </Button>
  );
};
