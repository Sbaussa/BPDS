"use client";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import type { TodoPaginationProps } from "@/modules/todos/types/todo";

export function TodoPagination({ page, totalPages, onPageChange }: TodoPaginationProps) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <Pagination className="border-t border-zinc-100 pt-1.5">
      <PaginationContent className="gap-0.5">
        <PaginationItem>
          <PaginationPrevious
            href="#"
            text=""
            size="icon-xs"
            aria-disabled={page === 1}
            className={page === 1 ? "pointer-events-none opacity-40" : ""}
            onClick={(event) => {
              event.preventDefault();
              onPageChange(page - 1);
            }}
          />
        </PaginationItem>
        {pages.map((pageNumber) => (
          <PaginationItem key={pageNumber}>
            <PaginationLink
              href="#"
              size="icon-xs"
              isActive={pageNumber === page}
              className="text-[11px]"
              onClick={(event) => {
                event.preventDefault();
                onPageChange(pageNumber);
              }}
            >
              {pageNumber}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext
            href="#"
            text=""
            size="icon-xs"
            aria-disabled={page === totalPages}
            className={page === totalPages ? "pointer-events-none opacity-40" : ""}
            onClick={(event) => {
              event.preventDefault();
              onPageChange(page + 1);
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
