
export default function Button(props){
    return(
        <>
        <button className="bg-gradient-to-r from-fuchsia-400 to-sky-700 border z-40 w-max
        px-4 py-2 rounded transition hover:bg-gradient-to-l from-fuchsia-400 to-sky-700
        ">
            {
                props.title
            }
        </button>
        </>
    )
}