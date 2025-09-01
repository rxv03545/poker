/* Utilクラス */
export default class Util {
/**指定した時間だけ待つ　未指定なら1秒 */
    static sleep=(wait = 1000) => {
  return new Promise((resolve,reject) => {
    setTimeout(() => {resolve(),wait);
  });
}

/*イベントハンドラを追加する */
    static addEventHandler=(selector,event,handler) => {
    document.querySelectorAll(selector).forEach((e) => e.addEventListener(event,handler));
  }

/**数値を合計する    */
    static sum=(...numbers) => {
    let sum = 0;
    numbers.forEach((e) => {
        sum += e;
    });
    return sum;
};

}


