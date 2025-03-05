"use client";

import React, { ChangeEvent } from "react";

interface ColorWheelProps {
  color: string;
  onColorChange: (color: string) => void;
}

export default function ColorWheel({ color, onColorChange }: ColorWheelProps) {
  const handleColorChange = (e: ChangeEvent<HTMLInputElement>): void => {
    onColorChange(e.target.value);
  };

  return (
    <input
      type="color"
      value={color}
      onChange={handleColorChange}
      className="rounded-full w-[30px] h-[30px] p-[3px] border border-gray-500 bg-white
                [&::-webkit-color-swatch-wrapper]:p-[1px] 
                [&::-webkit-color-swatch]:rounded-full 
                [&::-moz-color-swatch]:rounded-full"
    />
  );
}
