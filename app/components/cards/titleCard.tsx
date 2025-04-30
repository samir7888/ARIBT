import React from 'react'
interface ITitle{
    title:string,
    sectionTitle:string,
    sectionSubtitle:string
}
const TitleCard = ({sectionTitle,sectionSubtitle,title}:ITitle) => {
  return (
    <div style={{ fontFamily: "Aeonik" }} className="flex flex-col items-center text-center mb-12">
    <span className=" w-fit text-black tracking-wider rounded-4xl font-normal text-xl border border-gray-300  px-6 py-2 mb-2">
      {title} 
    </span>
    <h2 className="text-4xl font-bold text-brand-primary tracking-wide mb-4 pt-4">{sectionTitle}</h2>
    <p className="text-gray-500 tracking-wide text-xl max-w-2xl">{sectionSubtitle}</p>
  </div>
  )
}

export default TitleCard;