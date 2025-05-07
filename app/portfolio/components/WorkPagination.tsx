import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/components/ui/pagination";
  
  const WorkPagination = () => {
    return (
      <Pagination>
        <PaginationContent className="w-full flex justify-between">
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <div className="flex">
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          </div>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    );
  };
  
  export default WorkPagination;
  