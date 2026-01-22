import { memo } from 'react';

import Child from '../../../../11_hooks_p1/src/030_useContext/start/components/Child';

function areEqual(prevProps, nextProps) {
  if (prevProps.countB !== nextProps.countB) {
    return false; // 再レンダリング
  } else {
    return true; // 再レンダリング発生なし
  }
  /*
  nextProps を render に渡した結果が
  prevProps を render に渡した結果となるときに true を返し
  それ以外のときに false を返す
  */
}

const Child = ({ countB }) => {
  console.log('%cChild render', 'color: red;');

  return (
    <div className="child">
      <h2>子コンポーネント領域</h2>
      <span>ボタンBクリック回数：{countB}</span>
    </div>
  );
};

const ChildMemo = React.memo(Child);

export default ChildMemo;
