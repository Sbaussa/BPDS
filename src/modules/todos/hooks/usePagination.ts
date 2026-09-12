"use client";

import { useState } from "react";

const PAGE_SIZE = 3;

export function usePagination<T>(items: T[]) {
  const [requestedPage, setPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(items.length / PAGE_SIZE));
  const page = Math.min(requestedPage, totalPages);

  const start = (page - 1) * PAGE_SIZE;
  const pageItems = items.slice(start, start + PAGE_SIZE);

  return { page, totalPages, pageItems, setPage };
}
