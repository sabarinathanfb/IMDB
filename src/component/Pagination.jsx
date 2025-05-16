import { useEffect, useState } from "react"

export const Pagination = ({onPageChange, totalPages}) => {
    const [pages, setpages] = useState([])
    const [activePage, setActivePage] = useState(1)
    const THRESHOLD = 20

    const setNewPagesList = (pageNo) => {
        const itemLength = Math.min(totalPages, THRESHOLD)
        let itemsOnLeft = Math.ceil(THRESHOLD / 2) - 1
        let startingPage = Math.max(pageNo - itemsOnLeft, 1)

        if(startingPage + itemLength > totalPages){
            startingPage = totalPages - itemLength + 1
        }
        
        const list = Array.from({length: Math.min(totalPages, THRESHOLD)}, (_, i) => startingPage + i)
        setpages(list)
    }

    const handlePageChange = (pageNo) => {
        onPageChange(pageNo)
        setActivePage(pageNo)
        setNewPagesList(pageNo)

    }

    useEffect(() => {
        const list = Array.from({length: Math.min(totalPages, THRESHOLD)}, (_, i) => i + 1);
        setpages(list)
    },[totalPages])
    

    return (
        <div className="pagination">
            <button onClick={()=>handlePageChange(activePage -1)} disabled={activePage == pages[0]} className="prev">Prev</button>
            {
                pages.map(page => (
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