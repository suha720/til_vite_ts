import type React from 'react';

type SampleProps = {
  children?: React.ReactDOM;
  age: number;
  nickName: string;
};
const Sample = ({ age, nickName }: SampleProps) => {
  return (
    <div>
      {age} 살이고요, 별명이 {nickName} 임
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1>Hi</h1>
      <Sample age={20} nickName="홍킬동"></Sample>
    </div>
  );
};

export default App;
