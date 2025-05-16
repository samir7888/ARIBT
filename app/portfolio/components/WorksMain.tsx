import React from 'react'
import LatestWorks from './LatestWorks'

import WorkPagination from './WorkPagination'
import { serverFetch } from '../../../libs/server-fetch'
import { PortfolioList } from '../Types/portfolio-types'

const WorksMain = async () => {
  const portfolios = await serverFetch<PortfolioList>('portfolio');
  return (
    <div className='container mx-auto py-15 flex flex-col w-4/5 '>
        <LatestWorks portfolioData={portfolios || []} />
        <WorkPagination />
    </div>
  )
}

export default WorksMain