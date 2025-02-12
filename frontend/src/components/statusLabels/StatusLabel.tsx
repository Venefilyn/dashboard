// Copyright Contributors to the Packit project.
// SPDX-License-Identifier: MIT

import {
  AngleDoubleRightIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  HourglassHalfIcon,
  InProgressIcon,
  InfoCircleIcon,
  QuestionCircleIcon,
} from "@patternfly/react-icons";
import React, { useEffect, useState } from "react";
import { BaseStatusLabel, BaseStatusLabelProps } from "./BaseStatusLabel";

export interface StatusLabelProps {
  status: string;
  link?: string | null;
  target?: string;
}

/**
 * Status label component that is used from other components.
 */
export const StatusLabel: React.FC<StatusLabelProps> = (props) => {
  const [color, setColor] = useState<BaseStatusLabelProps["color"]>("grey");
  const [icon, setIcon] = useState(<QuestionCircleIcon />);

  useEffect(() => {
    switch (props.status) {
      case "succeeded":
      case "success":
      case "passed":
        setColor("green");
        setIcon(<CheckCircleIcon />);
        break;
      case "failure":
      case "failed":
        setColor("red");
        setIcon(<ExclamationCircleIcon />);
        break;
      case "error":
        setColor("orange");
        setIcon(<ExclamationTriangleIcon />);
        break;
      case "pending":
        setColor("teal");
        setIcon(<HourglassHalfIcon />);
        break;
      case "running":
        setColor("blue");
        setIcon(<InProgressIcon />);
        break;
      case "skipped":
        setColor("grey");
        setIcon(<AngleDoubleRightIcon />);
        break;
      case "unknown":
        setColor("grey");
        setIcon(<QuestionCircleIcon />);
        break;
    }
  }, [props.status]);

  return (
    <BaseStatusLabel
      link={props.link}
      icon={icon}
      color={color}
      label={props.target || props.status}
      tooltipText={props.status}
    />
  );
};
