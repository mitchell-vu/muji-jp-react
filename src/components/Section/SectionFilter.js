import React from "react";
import { Dropdown } from "../Dropdown";

const IconSort = () => (
  <svg className="icon_sort" viewBox="0 0 25 25" style={{ width: 25, marginRight: 5, height: 25 }}>
    <path
      fill="currentColor"
      d="M17.71,10.12H11.46a.74.74,0,0,1-.75-.74.75.75,0,0,1,.75-.76h6.25a.76.76,0,0,1,.75.76A.75.75,0,0,1,17.71,10.12Z"
    ></path>
    <path fill="currentColor" d="M19.79,6H11.46a.75.75,0,0,1,0-1.5h8.33a.75.75,0,0,1,0,1.5Z"></path>
    <path fill="currentColor" d="M15.62,14.29H11.46a.75.75,0,0,1,0-1.5h4.16a.75.75,0,1,1,0,1.5Z"></path>
    <path
      fill="currentColor"
      d="M11,17.18a.74.74,0,0,0-1.06,0L8,19V5.21a.75.75,0,0,0-1.5,0V19L4.7,17.18a.75.75,0,0,0-1.06,1.06l3.12,3.12a.74.74,0,0,0,.53.22.73.73,0,0,0,.53-.22L11,18.24A.75.75,0,0,0,11,17.18Z"
    ></path>
    <rect fill="none" width="25" height="25"></rect>
  </svg>
);

const IconFilter = () => (
  <svg className="icon_filter" viewBox="0 0 25 25" style={{ width: 25, marginRight: 5, height: 25 }}>
    <path
      fill="currentColor"
      d="M20.83,5.5H12.09a2.81,2.81,0,0,0-5.43,0H4.17a.75.75,0,0,0,0,1.5H6.66a2.81,2.81,0,0,0,5.43,0h8.74a.75.75,0,0,0,0-1.5ZM9.38,7.58a1.33,1.33,0,1,1,1.33-1.33A1.33,1.33,0,0,1,9.38,7.58Z"
    ></path>
    <path
      fill="currentColor"
      d="M20.83,18H12.09a2.81,2.81,0,0,0-5.43,0H4.17a.75.75,0,0,0,0,1.5H6.66a2.81,2.81,0,0,0,5.43,0h8.74a.75.75,0,0,0,0-1.5ZM9.38,20.08a1.33,1.33,0,1,1,1.33-1.33A1.33,1.33,0,0,1,9.38,20.08Z"
    ></path>
    <path
      fill="currentColor"
      d="M20.83,11.75H18.34a2.81,2.81,0,0,0-5.43,0H4.17a.75.75,0,0,0,0,1.5h8.74a2.81,2.81,0,0,0,5.43,0h2.49a.75.75,0,0,0,0-1.5Zm-5.21,2.08A1.33,1.33,0,1,1,17,12.5,1.33,1.33,0,0,1,15.62,13.83Z"
    ></path>
    <rect fill="none" width="25" height="25" transform="translate(0 25) rotate(-90)"></rect>
  </svg>
);

export const SectionFilter = () => {
  return (
    <div>
      <div className="sc-pczax hJdRYq">
        <div></div>
        <div className="sc-pspzH eyABor">
          <div tabIndex="0" className="sc-qXRQq beKVXK">
            <Dropdown options={["商品カテゴリ順", "人気順（1000件まで）", "新着順", "価格が安い順", "価格が高い順"]}>
              <IconSort />
              <span className="sc-pIjat kkXdPA">
                <span>商品カテゴリ順</span>
              </span>
            </Dropdown>
          </div>
          <div tabIndex="0">
            <div>
              <span id="result-refined-Ssec" className="sc-oUoif iwwQVw FilterWrapper222">
                <div className="co-filter__btn">
                  <IconFilter />
                  <span className="sc-pcJja jjDvpo">
                    <span>絞り込む</span>
                  </span>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
