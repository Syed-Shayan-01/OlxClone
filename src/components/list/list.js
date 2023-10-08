import Items from "../items/items"

const List = ({ itemtxt }) => {
    return (
        <ol className="flex justify-between items-center flex-row my-4"> {/* Added flex-wrap for responsiveness */}
            <Items itemtxt={itemtxt} />
        </ol>
    )
}

export default List
