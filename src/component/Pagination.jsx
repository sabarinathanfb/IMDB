import { useState } from "react"

export const Pagination = ({onPageChange}) => {
    const [pages, setpages] = useState([1,2,3,4,5,6,7,8,9,10])
    const [activePage, setActivePage] = useState(1)

    const handlePageChange = (page) => {
        onPageChange(page)
        setActivePage(page)

    }
    

    return (
        <div className="pagination">
            <button onClick={()=>handlePageChange(activePage -1)} disabled={activePage == pages[0]} className="prev">Prev</button>
            {
                pages.map((page) => (
                    <button 
                        key={page} 
                        className={activePage === page ? 'active' : ''} 
                        onClick={() => handlePageChange(page)}
                    >
                        {page}
                        
                    </button>
                ))
            }
            <button className="next" onClick={()=>handlePageChange(activePage + 1)} disabled={activePage == pages[pages.length -1]}>Next</button>
        </div>
    )
}