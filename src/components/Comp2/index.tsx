import { UpCircleOutlined } from '@ant-design/icons';
import { Button } from 'antd';

const Comp2 = () => {
  return (
    <>
      <div className="box">这是Comp2里面的内容</div>
      <Button>Primary Button</Button>
      <UpCircleOutlined style={{ color: 'red' }} />
    </>
  );
};

export default Comp2;
