import { useEffect, useState } from 'react';
import { BorderRadiusType } from '../../../types/schemas/components';
import { Button, ButtonColor, ButtonSize } from '../../button/button';
import { IconSVG } from '../../icon/icon';
import { Input } from '../input/input';
export interface BorderRadiusProps {
  className?: string;
  onChange?: (settings: BorderRadiusType) => void;
  settings?: BorderRadiusType;
}

export const BorderRadius = (props: BorderRadiusProps) => {
  const { className = '', onChange, settings } = props;
  const [allBordersRadius, setAllBordersRadius] = useState<boolean>(true);
  const [selectBorder, setSelectBorder] = useState<
    'top_left' | 'top_right' | 'bottom_right' | 'bottom_left'
  >('top_right');
  const [currentSettings, setCurrentSettings] = useState<BorderRadiusType>({
    top_left: 0,
    top_right: 0,
    bottom_right: 0,
    bottom_left: 0,
  });
  const borderRadiusPositions = ['top_left', 'top_right', 'bottom_right', 'bottom_left'];

  const handleAllChanges = (value: number) => {
    const newSettings = {
      top_left: value,
      top_right: value,
      bottom_right: value,
      bottom_left: value,
    };
    setCurrentSettings(newSettings);
    onChange && onChange(newSettings);
  };

  const handleChanges = (value: number) => {
    const newSettings = {
      ...currentSettings,
      [selectBorder]: value,
    };
    setCurrentSettings(newSettings);
    onChange && onChange(newSettings);
  };

  useEffect(() => {
    if (settings) {
      settings.top_left === settings.top_right &&
      settings.top_right === settings.bottom_right &&
      settings.bottom_right === settings.bottom_left
        ? setAllBordersRadius(true)
        : setAllBordersRadius(false);
      setCurrentSettings(settings);
    }
  }, []);

  if (allBordersRadius) {
    return (
      <div className={`flex w-full gap-2 ${className}`}>
        <div className="flex-1">
          <Input
            type="number"
            suffix="px"
            value={currentSettings.top_left}
            className="w-full"
            onChange={(e) => {
              const target = e.target as HTMLInputElement;
              handleAllChanges(target.valueAsNumber);
            }}
          />
        </div>
        <Button
          buttonIconSVG={{ svg: IconSVG.BorderRadius, width: 20, height: 20 }}
          size={ButtonSize.Small}
          className="!w-10 !p-0 justify-center"
          onClick={() => setAllBordersRadius(false)}
        />
      </div>
    );
  } else {
    return (
      <div>
        <div className="mb-2 flex">
          <div className="flex gap-2">
            <Button
              buttonIconSVG={{ svg: IconSVG.BorderRadiusTopLeft, width: 20, height: 20 }}
              size={ButtonSize.Small}
              className="!w-10 !p-0 justify-center"
              color={selectBorder === 'top_left' ? ButtonColor.Primary : ButtonColor.Dark}
              onClick={() => setSelectBorder('top_left')}
            />
            <Button
              buttonIconSVG={{ svg: IconSVG.BorderRadiusTopRight, width: 20, height: 20 }}
              size={ButtonSize.Small}
              className="!w-10 !p-0 justify-center"
              color={selectBorder === 'top_right' ? ButtonColor.Primary : ButtonColor.Dark}
              onClick={() => setSelectBorder('top_right')}
            />
            <Button
              buttonIconSVG={{ svg: IconSVG.BorderRadiusBottomRight, width: 20, height: 20 }}
              size={ButtonSize.Small}
              className="!w-10 !p-0 justify-center"
              color={selectBorder === 'bottom_right' ? ButtonColor.Primary : ButtonColor.Dark}
              onClick={() => setSelectBorder('bottom_right')}
            />
            <Button
              buttonIconSVG={{ svg: IconSVG.BorderRadiusBottomLeft, width: 20, height: 20 }}
              size={ButtonSize.Small}
              className="!w-10 !p-0 justify-center"
              color={selectBorder === 'bottom_left' ? ButtonColor.Primary : ButtonColor.Dark}
              onClick={() => setSelectBorder('bottom_left')}
            />
          </div>
          <div className="flex-1 flex justify-end">
            <Button
              buttonIconSVG={{ svg: IconSVG.BorderRadius, width: 20, height: 20 }}
              size={ButtonSize.Small}
              className="!w-10 !p-0 justify-center"
              color={ButtonColor.Dark}
              onClick={() => setAllBordersRadius(true)}
            />
          </div>
        </div>
        {borderRadiusPositions.map((position) => (
          <div key={position}>
            {position === selectBorder && (
              <div className="flex w-full gap-2">
                <div className="flex-1">
                  <Input
                    type="number"
                    suffix="px"
                    defaultValue={currentSettings[position]}
                    className="w-full"
                    onChange={(e) => {
                      const target = e.target as HTMLInputElement;
                      handleChanges(target.valueAsNumber);
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }
};
