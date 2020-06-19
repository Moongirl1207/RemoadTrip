import React from "react";
import style from "./Road.module.css";

const Road = ({ step }) => {
  return (
    <>
      <div
        className={`${style.Point} ${style.firstPoint} ${
          step === 1 ? style.bumpedUp : ""
        }`}
      >
        <p className={style.redCircle}>1</p>
        <p className={style.pointTitle}>Get ready</p>
        <img
          className={style.pointImg}
          src="./assets/location_yellow.png"
          alt="yellow location marker"
          width="12px"
          height="16.72px"
        ></img>
      </div>

      <div
        className={`${style.Point} ${style.secondPoint} ${
          step === 2 ? style.bumpedUp : ""
        }`}
      >
        <p className={style.redCircle}>2</p>
        <p className={style.pointTitle}>Set</p>
        <img
          className={style.pointImg}
          src="./assets/money.png"
          alt="yellow location marker"
          width="12px"
          height="16.72px"
        ></img>
      </div>
      <div
        className={`${style.Point} ${style.thirdPoint} ${
          step === 3 ? style.bumpedUp : ""
        }`}
      >
        <p className={style.redCircle}>3</p>
        <p className={style.pointTitle}>go!</p>
        <img
          className={style.pointImg}
          src="./assets/flag.png"
          alt="yellow location marker"
          width="19px"
          height="14px"
        ></img>
      </div>
      <img
        className={` ${step === 1 ? style.carRoad1 : ""} ${
          step === 2 ? style.carRoad2 : ""
        }${step === 3 ? style.carRoad3 : ""} ${style.roadandcar}`}
        src="./assets/driving_car.gif"
        alt="animation of car that is riding"
      ></img>
      <img
        className={`${style.road} ${style.roadandcar}`}
        src="./assets/road.png"
        alt="road to follow"
      ></img>
    </>
  );
};

export default Road;
