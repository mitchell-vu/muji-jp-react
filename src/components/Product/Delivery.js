import React from "react";
import styled from "styled-components";
import { IconBox, IconCalendar, IconDelivery, IconModal } from "../../assets/icons";

const DeliveryFreeBannerWrapper = styled.div`
  background-color: rgb(255, 255, 255);
  align-items: center;
  color: rgb(139, 26, 39);
  margin-top: 40px;
`;

const DeliveryTitle = styled.div`
  min-width: 70px;
  line-height: 1.5;
  color: rgb(60, 60, 67);
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 11px;
  padding: 0px;
`;

const DeliveryFreeBanner = styled.div`
  margin: 0px;
  line-height: 1.5;
  font-size: 14px;
  display: block;
  color: rgb(127, 0, 25);
`;

const DeliveryFee = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  text-align: -webkit-center;
  color: rgb(60, 60, 67);
  & > div {
    width: 33.33%;
  }

  .deliveryData__icon {
    height: 50px;
    width: 50px;
    margin-bottom: 10px;
  }
  .deliveryData__item {
    font-weight: bold;
    margin-top: calc(11.5px - 0.25em);
    font-size: 14px;
    white-space: pre;
  }
`;

const AddressInputBtn = styled.button`
  display: block;
  border: none;
  cursor: pointer;
  background: rgb(245, 245, 245);
  border-radius: 1.5em;
  margin-top: calc(11.5px - 0.25em);
  margin-bottom: 0px;
  padding: 0.4642em 0.75em !important;
`;

const FreeShippingBanner = styled.div`
  background: rgb(244, 238, 222);
  margin: 30px 0px 25px;
  height: 60px;
  text-align: center;
  color: rgb(127, 0, 25);
  font-size: 14px;
`;

const BannerWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  img {
    width: 50px;
  }
`;

const BannerTextWrapper = styled.div`
  margin-left: 40px;
`;

const BannerText = styled.div`
  span {
    font-size: 14px;
    font-weight: bold;
    color: rgb(60, 60, 67);
  }
`;
const BannerHighlightText = styled.div`
  span {
    font-weight: bold;
    font-size: 18px;
    color: rgb(127, 0, 25);
  }
`;

const DeliveryFeeNotice = styled.div`
  font-size: 14px;
  margin-top: 20px;
  margin-left: 3px;
`;

const DetailNew = styled.div`
  display: inline-flex;
  margin-top: 20px;
  justify-content: flex-end;
  cursor: pointer;
  align-items: center;
  a {
    color: rgb(60, 60, 67);
    text-decoration: none;
    font-weight: normal;
    font-size: 14px;
    line-height: 1.5;
    margin-top: -0.25em;
    margin-bottom: -0.25em;
  }
  .iconModal {
    height: 20px;
    width: 20px;
    margin-left: 5px;
  }
`;

export const Delivery = ({ productData, freeDelivery }) => {
  return (
    <div id="area-delivery">
      {freeDelivery && (
        <DeliveryFreeBannerWrapper>
          <DeliveryTitle>
            <span>配送</span>
          </DeliveryTitle>
          <DeliveryFreeBanner>
            <span>
              この商品は【ネットストア限定、消費税込{freeDelivery}
              円以上で配送料無料、対象商品】です
            </span>
          </DeliveryFreeBanner>
        </DeliveryFreeBannerWrapper>
      )}

      <div>
        <DeliveryFee>
          <div>
            <div className="deliveryData__icon">
              <IconDelivery />
            </div>
            <span>配送料</span>
            <div className="deliveryData__item">
              いくつ買っても
              <br />
              500円
            </div>
          </div>
          <div>
            <div className="deliveryData__icon">
              <IconBox />
            </div>
            <span>配送区分</span>
            <div className="deliveryData__item">宅配品</div>
          </div>
          <div>
            <div className="deliveryData__icon">
              <IconCalendar />
            </div>
            <div>
              <span>最短お届け日</span>
              <AddressInputBtn>
                <span>住所を入力</span>
              </AddressInputBtn>
            </div>
          </div>
        </DeliveryFee>
        <a href="https://www.muji.com/jp/notice/pickup.html" target="_blank" rel="noreferrer">
          <FreeShippingBanner>
            <BannerWrapper>
              <img src="https://www.muji.com/jp/img/store/notice/pickup/shop.png" alt="" />
              <BannerTextWrapper>
                <BannerText>
                  <span>無印良品の店舗で受け取って </span>
                </BannerText>
                <BannerHighlightText>
                  <span>配送料無料</span>
                </BannerHighlightText>
              </BannerTextWrapper>
            </BannerWrapper>
          </FreeShippingBanner>
        </a>
        <DeliveryFeeNotice>
          <span>※店舗でのご注文と配送料が異なる場合がございます。</span>
        </DeliveryFeeNotice>
        <div style={{ textAlign: "right", marginRight: 25 }}>
          <DetailNew>
            <a
              href="https://www.muji.net/mt/contact/detail_list/014397.html"
              className="iframe fancyBox"
              target="_blank"
              rel="noreferrer"
            >
              <span>配送料区分と配送料について</span>
            </a>
            <div className="iconModal">
              <IconModal />
            </div>
          </DetailNew>
        </div>
      </div>
    </div>
  );
};
