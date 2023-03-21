import styles from './comp1.module.scss';

const Comp1 = () => {
  return (
    <div className={styles.root}>
      <p className="title">这是Comp1里面的内容,采用style module 模块化引入</p>
    </div>
  );
};

export default Comp1;
