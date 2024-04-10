"use client";
import React from 'react'
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(() => { return import("react-animated-numbers") },
  { ssr: false })

const achievementList = [
  {
    metric: "Projects",
    value: "10",
    postfix: "+"
  },
  {
    prefix: "~",
    metric: "Clients",
    value: "3"
  },
  {
    prefix: "~",
    metric: "Certificates",
    value: "2"
  },
  {
    metric: "Years",
    value: "3",
    posfix: "+"
  },


]

const AchievementSection = () => {


  return (
    <div className='px-4 py-8 xl:gap-16 sm:py-16 xl:px-16'>
      <div className='sm:border sm:border-primary-500 rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between'>
        {
          achievementList.map((achievement, index) => {
            return (
              <div key={index} className='flex flex-col items-center justify-center mx-4'>
                <h2 className='text-white text-4xl font-bold flex flex-row'>
                  {achievement.prefix}
                  <AnimatedNumbers 
                    includeComma
                    animateToNumber={parseInt(achievement.value)}
                    locale='en-US'
                    className='text-white text-4xl font-bold'
                    coonfigs = {(_, index) =>{
                      return {
                        mass: 1,
                        friction: 100,
                        tensions: 140 * (index + 1),
                      }
                    }}
                  />
                  {achievement.posfix}
                </h2>
                <p className='text-[#ADB7BE] text-base'>
                  {achievement.metric}
                </p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default AchievementSection