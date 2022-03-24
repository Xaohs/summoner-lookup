import React from "react";
import { LoadingStyled } from './Loading.styled'

const Loading = () => {
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