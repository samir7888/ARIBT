import React from 'react'
import LatestWorks from './LatestWorks'
import { Pagination } from '@/components/components/ui/pagination'
import WorkPagination from './WorkPagination'

const WorksMain = () => {
  return (
    <div className='container mx-auto py-15 flex flex-col w-4/5 '>
        <LatestWorks />
        <WorkPagination />
    </div>
  )
}

export default WorksMain