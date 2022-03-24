import React, { useEffect, useState } from "react";
import { LoadingStyled } from './Loading.styled'

const Loading = (props) => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function yep() {
            setLoading(props.loading)
        }

        yep().then(response => console.log(loading));

    }, [props.loading])

    return (

        <LoadingStyled>
                <div className="col-3">
                    <div className="snippet" data-title=".dot-revolution">
                        <div className="stage">
                            <div className="dot-revolution"></div>
                        </div>
                    </div>
                </div>
        </LoadingStyled>

    );
}

export default Loading;