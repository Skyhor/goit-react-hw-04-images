import s from './LoadMoreBtn.module.css';
export function LoadMoreBtn({ clickHandler }) {
  return (
    <div className={s.Div}>
      <button type="button" className={s.button} onClick={clickHandler}>
        <span className={s.buttonSpun}> More...</span>
      </button>
    </div>
  );
}
