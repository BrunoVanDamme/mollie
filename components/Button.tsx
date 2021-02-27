import Link from "next/link";
import React from "react";

interface ButtonProps {
  color?: string;
  title: string;
  url: string;
  type?: string;
  disabledButton?: boolean;
  spinner?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ color, title, url, type, disabledButton, spinner }) => {
  let colorStr = "";
  let colorRgba = "";
  let spinnerColor = "";
  let button;
  switch (color) {
    case "bruin":
      colorStr = "bg-bruin text-white";
      colorRgba = "100, 90, 74";
      spinnerColor = "spinner-bruin";
      break;
    case "oker":
      colorStr = "bg-oker text-blue-50";
      colorRgba = "137, 105, 40";
      spinnerColor = "spinner-oker";
      break;
    case "blauw":
      colorStr = "bg-blauw text-gray-800";
      colorRgba = "147, 197, 253";
      spinnerColor = "spinner-blauw";
      break;
    case "groen":
      colorStr = "bg-groen text-blue-50";
      colorRgba = "100, 116, 84";
      spinnerColor = "spinner-groen";
      break;
    default:
      colorStr = "bg-blauw text-gray-800";
      colorRgba = "147, 197, 253";
      spinnerColor = "spinner-blauw";
  }

  switch (type) {
    case "external":
      button = (
        <a
          href={url}
          target="_blank"
          rel="noreferrer noopener"
          className={`transition-all duration-200 ease-in-out font-title text-3xl inline-block w-48 px-4 py-3 ${colorStr} hover:w-56`}
        >
          <div className="w-40">{title}</div>
        </a>
      );
      break;
    case "submit":
      button = (
        <button
          type="submit"
          disabled={disabledButton}
          className={`transition-all duration-200 ease-in-out font-title text-3xl inline-block w-48 px-4 py-3 outline-none focus:outline-none ${colorStr} hover:w-56`}
        >
          <div className="w-40 outline-none focus:outline-none">
            {spinner ? (
              <div
                className={`animate-spin mx-auto ease-linear rounded-full border-2 border-t-2 border-gray-200 h-7 w-7 ${spinnerColor}`}
              ></div>
            ) : (
              title
            )}
          </div>
        </button>
      );
      break;
    default:
      button = (
        <Link href={url}>
          <a
            className={`transition-all duration-200 ease-in-out font-title text-3xl inline-block w-52 px-4 py-3 ${colorStr} hover:w-60`}
          >
            <div className="w-44">{title}</div>
          </a>
        </Link>
      );
      break;
  }

  let hoogte = "h-16";
  if (title?.length > 18) {
    hoogte = "h-24";
  }

  return (
    <>
      <div className="font-title flex justify-center my-10 text-center">
        {button}
        <svg
          className={`inline-block ${hoogte}`}
          preserveAspectRatio="xMinYMid"
          x="0px"
          y="0px"
          viewBox="0 222 263 347"
        >
          <path id="path-1" fill={`rgba(${colorRgba}, 1)`} d="M0,570V222h263l-0,0L0,570z"></path>
        </svg>
      </div>
    </>
  );
};
