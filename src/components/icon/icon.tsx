import { IconBorder } from './icons/border';
import { IconBorderBottom } from './icons/border-bottom';
import { IconBorderLeft } from './icons/border-left';
import { IconBorderRadius } from './icons/border-radius';
import { IconBorderRadiusBottomRight } from './icons/border-radius-bottom-right';
import { IconBorderRadiusTopLeft } from './icons/border-radius-top-left';
import { IconBorderRadiusTopRight } from './icons/border-radius-top-right';
import { IconBorderRadiusBottomLeft } from './icons/border-radius_bottom-left';
import { IconBorderRight } from './icons/border-right';
import { IconBorderTop } from './icons/border-top';

export enum IconSVG {
  Border = 'border',
  BorderTop = 'border-top',
  BorderRight = 'border-right',
  BorderBottom = 'border-bottom',
  BorderLeft = 'border-left',
  BorderRadius = 'border-radius',
  BorderRadiusTopLeft = 'border-radius-top-left',
  BorderRadiusTopRight = 'border-radius-top-right',
  BorderRadiusBottomRight = 'border-radius-bottom-right',
  BorderRadiusBottomLeft = 'border-radius-bottom-left',
}

export interface IconSVGProps {
  width?: number;
  height?: number;
  className?: string;
  fill?: string;
}

export interface IconProps {
  name?: string;
  className?: string;
  svg?: IconSVG;
  width?: number;
  height?: number;
  fill?: string;
}

export const Icon = (props: IconProps) => {
  const { name, className = '', svg, width, height, fill } = props;

  const svgIcon = {
    [IconSVG.Border]: (
      <IconBorder className={className} width={width} height={height} fill={fill} />
    ),
    [IconSVG.BorderTop]: (
      <IconBorderTop className={className} width={width} height={height} fill={fill} />
    ),
    [IconSVG.BorderRight]: (
      <IconBorderRight className={className} width={width} height={height} fill={fill} />
    ),
    [IconSVG.BorderBottom]: (
      <IconBorderBottom className={className} width={width} height={height} fill={fill} />
    ),
    [IconSVG.BorderLeft]: (
      <IconBorderLeft className={className} width={width} height={height} fill={fill} />
    ),
    [IconSVG.BorderRadius]: (
      <IconBorderRadius className={className} width={width} height={height} fill={fill} />
    ),
    [IconSVG.BorderRadiusTopLeft]: (
      <IconBorderRadiusTopLeft className={className} width={width} height={height} fill={fill} />
    ),
    [IconSVG.BorderRadiusTopRight]: (
      <IconBorderRadiusTopRight className={className} width={width} height={height} fill={fill} />
    ),
    [IconSVG.BorderRadiusBottomRight]: (
      <IconBorderRadiusBottomRight
        className={className}
        width={width}
        height={height}
        fill={fill}
      />
    ),
    [IconSVG.BorderRadiusBottomLeft]: (
      <IconBorderRadiusBottomLeft className={className} width={width} height={height} fill={fill} />
    ),
  };

  if (svg) {
    return svgIcon[svg];
  }

  return <i className={`ri-${name} ${className}`} role="img"></i>;
};
