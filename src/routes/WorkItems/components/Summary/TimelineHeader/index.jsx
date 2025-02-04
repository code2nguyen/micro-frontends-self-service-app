import React from "react";
import PT from "prop-types";
import { WORK_STATUSES } from "constants";
import _ from "lodash";
import { padStart } from "utils";

import "./styles.module.scss";

const TimelineHeader = ({ status, nextAction, daysToBegin }) => {
  const item = _.find(WORK_STATUSES, { name: status });
  const color = item ? item.color : undefined;

  let str = status;
  if (status === WORK_STATUSES.DirectedToSales.name) {
    str = "SENT TO SOLUTIONS EXPERT";
  }

  let daysStr;
  if (daysToBegin === 0) daysStr = "DUE NOW";
  else if (daysToBegin === 1) daysStr = `${padStart(daysToBegin)} DAY`;
  else if (daysToBegin > 1) daysStr = `${padStart(daysToBegin)} DAYS`;
  else if (daysToBegin === -1)
    daysStr = `LATE BY ${padStart(-daysToBegin)} DAY`;
  else if (daysToBegin < -1) daysStr = `LATE BY ${padStart(-daysToBegin)} DAYS`;

  return (
    <div styleName="timeline-header">
      <span styleName="work-status" style={{ backgroundColor: color }}>
        {str}
      </span>
      {nextAction && (
        <span styleName="next-action">
          NEXT ACTION - {nextAction}
          {daysToBegin != null && ": "}
          {daysToBegin != null && <strong>{daysStr}</strong>}
        </span>
      )}
    </div>
  );
};

TimelineHeader.defaultProps = {};

TimelineHeader.propTypes = {
  status: PT.string,
  nextAction: PT.string,
  daysToBegin: PT.number,
};

export default TimelineHeader;
