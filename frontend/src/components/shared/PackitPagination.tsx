// Copyright Contributors to the Packit project.
// SPDX-License-Identifier: MIT

import { Pagination } from "@patternfly/react-core";
import React, { useState } from "react";

export const PaginationIndeterminate: React.FC = () => {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(20);

  const onSetPage = (
    _event: React.MouseEvent | React.KeyboardEvent | MouseEvent,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const onPerPageSelect = (
    _event: React.MouseEvent | React.KeyboardEvent | MouseEvent,
    newPerPage: number,
    newPage: number,
  ) => {
    setPerPage(newPerPage);
    setPage(newPage);
  };

  return (
    <Pagination
      toggleTemplate={({ firstIndex, lastIndex }) => (
        <>
          <b>
            {firstIndex} - {lastIndex}
          </b>
          of
          <b>many</b>
        </>
      )}
      widgetId="indeterminate-loading"
      perPage={perPage}
      page={page}
      onSetPage={onSetPage}
      onPerPageSelect={onPerPageSelect}
    />
  );
};
