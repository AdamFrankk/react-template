import React from "react";
import type { IconProps } from "@/shared/api/common/icons";
import type { SpritesMap } from "./sprite.h";

interface IconPropsWithType extends IconProps<keyof SpritesMap> { }

/**
 * Icon Component
 * @param props w - width, h - height, type - type of sprite, name - name of sprite
 * @returns 
 */

export const Icon: React.FC<IconPropsWithType> = (props) => {
  return (
    <>
      <svg className="icon" width={props.w} height={props.h}>
        <use xlinkHref={`/sprite/${props.type}.svg#${props.name}`} />
      </svg>
    </>
  );
};

