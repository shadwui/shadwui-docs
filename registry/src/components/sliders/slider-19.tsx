"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export default function SliderDemo() {
  const minValue = 0;
  const maxValue = 200;
  const initialValue = [50, 150];

  const {
    sliderValue,
    inputValues,
    validateAndUpdateValue,
    handleInputChange,
    handleSliderChange,
  } = useSliderWithInput({ minValue, maxValue, initialValue });

  return (
    <div className="space-y-3">
      <Label>Dual range slider with input</Label>
      <div className="flex items-center gap-4">
        <Input
          className="h-8 w-12 px-2 py-1"
          type="text"
          inputMode="decimal"
          value={inputValues[0]}
          onChange={(e) => handleInputChange(e, 0)}
          onBlur={() => validateAndUpdateValue(inputValues[0], 0)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              validateAndUpdateValue(inputValues[0], 0);
            }
          }}
          aria-label="Enter minimum value"
        />
        <Slider
          className="flex-grow"
          value={sliderValue}
          onValueChange={handleSliderChange}
          min={minValue}
          max={maxValue}
          aria-label="Dual range slider with input"
        />
        <Input
          className="h-8 w-12 px-2 py-1"
          type="text"
          inputMode="decimal"
          value={inputValues[1]}
          onChange={(e) => handleInputChange(e, 1)}
          onBlur={() => validateAndUpdateValue(inputValues[1], 1)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              validateAndUpdateValue(inputValues[1], 1);
            }
          }}
          aria-label="Enter maximum value"
        />
      </div>
    </div>
  );
}


// // Its a hook that can be used to create a slider with an input field that is synced with the slider value.


import { useCallback, useState } from "react";

type UseSliderWithInputProps = {
  minValue?: number;
  maxValue?: number;
  initialValue?: number[];
  defaultValue?: number[];
};

export function useSliderWithInput({
  minValue = 0,
  maxValue = 100,
  initialValue = [minValue],
  defaultValue = [minValue],
}: UseSliderWithInputProps) {
  const [sliderValue, setSliderValue] = useState(initialValue);
  const [inputValues, setInputValues] = useState(initialValue.map((v) => v.toString()));

  const validateAndUpdateValue = useCallback(
    (rawValue: string, index: number) => {
      if (rawValue === "" || rawValue === "-") {
        const newInputValues = [...inputValues];
        newInputValues[index] = "0";
        setInputValues(newInputValues);

        const newSliderValues = [...sliderValue];
        newSliderValues[index] = 0;
        setSliderValue(newSliderValues);
        return;
      }

      const numValue = parseFloat(rawValue);

      if (isNaN(numValue)) {
        const newInputValues = [...inputValues];
        newInputValues[index] = sliderValue[index].toString();
        setInputValues(newInputValues);
        return;
      }

      let clampedValue = Math.min(maxValue, Math.max(minValue, numValue));

      if (sliderValue.length > 1) {
        if (index === 0) {
          clampedValue = Math.min(clampedValue, sliderValue[1]);
        } else {
          clampedValue = Math.max(clampedValue, sliderValue[0]);
        }
      }

      const newSliderValues = [...sliderValue];
      newSliderValues[index] = clampedValue;
      setSliderValue(newSliderValues);

      const newInputValues = [...inputValues];
      newInputValues[index] = clampedValue.toString();
      setInputValues(newInputValues);
    },
    [sliderValue, inputValues, minValue, maxValue],
  );

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
      const newValue = e.target.value;
      if (newValue === "" || /^-?\d*\.?\d*$/.test(newValue)) {
        const newInputValues = [...inputValues];
        newInputValues[index] = newValue;
        setInputValues(newInputValues);
      }
    },
    [inputValues],
  );

  const handleSliderChange = useCallback((newValue: number[]) => {
    setSliderValue(newValue);
    setInputValues(newValue.map((v) => v.toString()));
  }, []);

  const resetToDefault = useCallback(() => {
    setSliderValue(defaultValue);
    setInputValues(defaultValue.map((v) => v.toString()));
  }, [defaultValue]);

  return {
    sliderValue,
    inputValues,
    validateAndUpdateValue,
    handleInputChange,
    handleSliderChange,
    resetToDefault,
  };
}