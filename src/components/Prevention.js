import React from 'react'
import PreventionCard from './PreventionCard'
import './Prevention.css'

const Prevention = () => {
  return (
    <div className="prevention">
      <PreventionCard
        img="https://image.flaticon.com/icons/svg/3079/3079188.svg"
        title="최대한 집에서!"
        text="모두가 안전해질수 있습니다."
      />
      <PreventionCard
        img="https://image.flaticon.com/icons/svg/2932/2932309.svg"
        title="사회적 거리두기"
        text="최소 2m이상의 거리르 두세요"
      />{' '}
      <PreventionCard
        img="https://image.flaticon.com/icons/svg/2913/2913409.svg"
        title="손 씻기!"
        text="비누와 물을 사용해서 꼼꼼히 씻으세요"
      />{' '}
      <PreventionCard
        img="https://image.flaticon.com/icons/svg/3022/3022870.svg"
        title="마스크착용"
        text="마스크를 착용하는 것만으로도 모두가 안전합니다"
      />{' '}
      <PreventionCard
        img="https://image.flaticon.com/icons/svg/3159/3159875.svg"
        title="재채기할때는 옷 소매에"
        text="재채기는 최대 8m까지 나갈 수 있답니다"
      />{' '}
      <PreventionCard
        img="https://image.flaticon.com/icons/svg/2932/2932519.svg"
        title="열이 있다면 바로 병원으로"
        text="주저하지말고 병원으로오세요"
      />
    </div>
  )
}

export default Prevention
