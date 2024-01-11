
type Props = {

};

export const SLider = (props: Props) => {
    return (
        <div id="slider_container">
            <div className="slideShow_container">
                <div className="prev">&#10094</div>
                <div className="next">&#10095</div>

                <div className="slidesShow">
                    <img className="image" src="./img/3.jpg" alt="">
                        <img className="image" src="./img/Untitled-1.jpg" alt="">
                            <img class="image" src="./img/слайдер-фотошоп2-938x340.jpg" alt="">
                            </div>
                        </div>

                        <div className="dots">
                            <div className="dot"></div>
                            <div className="dot"></div>
                            <div className="dot"></div>
                        </div>
                </div>
    );
};
