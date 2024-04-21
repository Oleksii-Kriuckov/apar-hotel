import "./style.css";

type Props = {};

const SuccessBooking = (props: Props) => {
    return (
        <div className="success_booking">
            <p className="m-0">
                You have successfully booked this room
            </p>
        </div>
    );
};

export default SuccessBooking;