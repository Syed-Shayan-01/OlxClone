import Link from "next/link"


const Items = ({ itemtxt }) => {
    return (
        <Link href={''}>
            <li>{itemtxt}</li>
        </Link>
    )
}

export default Items