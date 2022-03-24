import React, { useEffect, useState } from "react";
import { LoadingStyled } from './Loading.styled'

const Loading = (props) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function yep() {
            setLoading(!loading ? false : true)
        }

        yep().then(response => console.log(loading));

    }, [props.loading])

    return (

        <LoadingStyled>
            { loading ?
                <div className="col-3">
                    <div className="snippet" data-title=".dot-revolution">
                        <div className="stage">
                            <div className="dot-revolution"></div>
                        </div>
                    </div>
                </div>
                : null }
        </LoadingStyled>

    );
}

export default Loading;