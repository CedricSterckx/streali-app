import Saturation from '@uiw/react-color-saturation';
import Hue from '@uiw/react-color-hue';
import { HsvaColor } from '@uiw/color-convert';
import { Tabs } from './tabs';
import { Pointer } from './pointer';
import { rgbaStringToHsva, color as colorResult } from '@uiw/color-convert';
import './color-picker.scss';
import { useEffect, useState } from 'react';

export interface ColorPickerProps {
  color?: HsvaColor;
  onChange: (value: string) => void;
  className?: string;
}

export const ColorPicker = (props: ColorPickerProps) => {
  const { color = rgbaStringToHsva('rgba(255,0,0,1)'), onChange, className } = props;
  const [hsva, setHsva] = useState<HsvaColor>(color);

  useEffect(() => {
    onChange(colorResult(hsva).hexa);
  }, [hsva]);

  return (
    <div
      className={`color-picker flex w-56 rounded-md bg-dark-500 border-dark-300 border-2 box-border  ${className}`}>
      <Hue
        hue={hsva.h}
        onChange={(newHue) => {
          setHsva({ ...hsva, ...newHue });
        }}
        pointer={Pointer}
        radius="4px 0 0 4px"
        direction="vertical"
        width="6px"
        height="320px"
      />
      <div className="flex flex-col gap-4" style={{ width: '214px' }}>
        <Saturation
          hsva={hsva}
          onChange={(newColor) => setHsva({ ...hsva, ...newColor, a: hsva.a })}
          radius="0 4px 0 0"
          style={{ height: '240px', width: '100%' }}
          pointer={Pointer}
        />
        <Tabs color={hsva} onChange={(newColor) => setHsva(newColor)} />
      </div>
    </div>
  );
};
