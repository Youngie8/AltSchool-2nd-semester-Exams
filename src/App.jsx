import Pagination from "./components/Pagination";
import Repos from "./components/repos";
import useFetch from "./components/useFetch";
import { useState } from "react";

function App (){
    const {data:repos, isPending, error} = useFetch("https://api.github.com/users/Youngie8/repos");
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(5);
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    // const currentRecords  = repos.slice(indexOfFirstRecord, indexOfLastRecord)
    // const nPages = Math.ceil(repos.length / recordsPerPage)
    
    return (
        <div className="">
            <Repos repos={repos} isPending={isPending} error={error} />
            {/* <Pagination nPages={nPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage} /> */}
        </div>
    )

}

export default App