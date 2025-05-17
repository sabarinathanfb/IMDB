export const WatchList = ({watchlist}) => {
    return(
        <div>
            <h1>Watch List</h1>
            <table border={"1px"}>
                <tr>
                    <td>Id</td>
                    <td>Title</td>
                </tr>
                {Object.keys(watchlist).map((key) => (
                    <tr key={key}>
                        <td>{key}</td>
                        <td>{watchlist[key].title}</td>
                    </tr>
                ))}

            </table>
        </div>
    )
}