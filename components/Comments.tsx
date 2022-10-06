import * as React from 'react'

type Props = {
    slug: string;
}

const Comments: React.FC<Props> = ({ slug }) => {
    return (
        <div>
            <h1>Comments</h1>
        </div>
    )
}

export default Comments